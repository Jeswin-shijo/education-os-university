import { useCallback, useEffect, useRef, useState } from 'react'

/* ═══════════════════════════════════════════════════════════
   LAYOUT CONSTANTS (unitless — CSS applies `cqw`)
   ═══════════════════════════════════════════════════════════ */

/** Fan geometry — d = signed distance from centre card */
const LAYOUT = {
  spacing: 16,        // horizontal spacing per card step
  angle: 14,          // degrees of rotation per step
  centerY: -4,        // centre card sits above stage midpoint
  dropBase: 5.2,      // outer cards drop: dropBase * |d|^dropPow
  dropPow: 0.87,

  hover: {
    scale: { 0: 1.18, 1: 1.12, 2: 1.1 } as Record<number, number>,
    lift: { 0: -5.6, 1: -4.6, 2: -4.2 } as Record<number, number>,
    push: { 0: 0, 1: 1.8, 2: 3.1 } as Record<number, number>,
    rotKeep: { 0: 1, 1: 1, 2: 1 } as Record<number, number>,
  },

  pile: { step: 0.22, scale: 0.965 },
}

/** Motion presets (CSS transition values) */
export const MOTION = {
  open: { dur: '0.36s', ease: 'cubic-bezier(0.25, 1, 0.5, 1)' },
  close: { dur: '0.26s', ease: 'cubic-bezier(0.4, 0, 0.3, 1)' },
  hover: { dur: '0.30s', ease: 'cubic-bezier(0.25, 1, 0.5, 1)' },
}

/** Autoplay timing (ms) */
const TIMING = { pileHold: 770, openHold: 200, hoverEach: 550, endHold: 250 }
const SWEEP = [0, 1, 2, 3, 4, 2]

/* ═══════════════════════════════════════════════════════════
   POSE TYPES
   ═══════════════════════════════════════════════════════════ */

export interface CardPose {
  x: number
  y: number
  r: number
  s: number
  z: number
}

export type FanMode = 'pile' | 'fan'

export interface FanState {
  mode: FanMode
  hover: number | null
  motion: typeof MOTION.open
}

/* ═══════════════════════════════════════════════════════════
   POSE MATH
   ═══════════════════════════════════════════════════════════ */

function fanPose(i: number, n: number): CardPose {
  const mid = (n - 1) / 2
  const d = i - mid
  const a = Math.abs(d)
  return {
    x: d * LAYOUT.spacing,
    y: LAYOUT.centerY + (a ? LAYOUT.dropBase * Math.pow(a, LAYOUT.dropPow) : 0),
    r: d * LAYOUT.angle,
    s: 1,
    z: 10 - Math.round(a) * 2,
  }
}

function pilePose(i: number, n: number, topIdx: number): CardPose {
  const mid = (n - 1) / 2
  const d = i - mid
  return {
    x: d * LAYOUT.pile.step,
    y: 0,
    r: 0,
    s: LAYOUT.pile.scale,
    z: i === topIdx ? 20 : 10 - Math.abs(i - topIdx),
  }
}

function hoverPose(i: number, n: number): CardPose {
  const p = fanPose(i, n)
  const mid = (n - 1) / 2
  const d = i - mid
  const a = Math.min(Math.round(Math.abs(d)), 2)
  const h = LAYOUT.hover
  return {
    x: p.x + Math.sign(d) * (h.push[a] ?? 0),
    y: p.y + (h.lift[a] ?? -4),
    r: p.r * (h.rotKeep[a] ?? 1),
    s: h.scale[a] ?? 1.1,
    z: 30,
  }
}

export function getPose(i: number, n: number, state: FanState, topIdx: number): CardPose {
  if (state.mode === 'pile') return pilePose(i, n, topIdx)
  if (state.hover === i) return hoverPose(i, n)
  return fanPose(i, n)
}

/* ═══════════════════════════════════════════════════════════
   HOOK
   ═══════════════════════════════════════════════════════════ */

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))
const motionMs = (m: typeof MOTION.open) => parseFloat(m.dur) * 1000

export function useCardFan(cardCount: number) {
  const [fanState, setFanState] = useState<FanState>({
    mode: 'pile',
    hover: null,
    motion: MOTION.close,
  })
  const topRef = useRef(Math.floor((cardCount - 1) / 2))
  const tokenRef = useRef(0)
  const resumeRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const isVisibleRef = useRef(false)

  /** Update state with the right motion preset */
  const setState = useCallback(
    (next: Partial<Pick<FanState, 'mode' | 'hover'>>) => {
      setFanState((prev) => {
        const modeChanged = next.mode !== undefined && next.mode !== prev.mode
        const motion = modeChanged
          ? next.mode === 'fan'
            ? MOTION.open
            : MOTION.close
          : MOTION.hover

        const merged: FanState = { ...prev, ...next, motion }
        if (merged.mode === 'fan' && merged.hover !== null) topRef.current = merged.hover
        return merged
      })
    },
    [],
  )

  /** Autoplay loop */
  const startAuto = useCallback(() => {
    const token = ++tokenRef.current
    const alive = () => token === tokenRef.current

      ; (async () => {
        // eslint-disable-next-line no-constant-condition
        while (alive()) {
          setState({ mode: 'pile', hover: null })
          await wait(TIMING.pileHold)
          if (!alive()) return

          setState({ mode: 'fan', hover: null })
          await wait(motionMs(MOTION.open) + TIMING.openHold)
          if (!alive()) return

          for (const i of SWEEP) {
            if (i >= cardCount) continue
            setState({ hover: i })
            await wait(TIMING.hoverEach)
            if (!alive()) return
          }

          setState({ hover: null })
          await wait(TIMING.endHold)
          if (!alive()) return
        }
      })()
  }, [cardCount, setState])

  const takeOver = useCallback(() => {
    tokenRef.current++
    clearTimeout(resumeRef.current)
  }, [])

  /** Pointer handlers for the stage */
  const onPointerEnter = useCallback(() => {
    takeOver()
    setState({ mode: 'fan', hover: null })
  }, [takeOver, setState])

  const onPointerMove = useCallback(
    (idx: number | null) => {
      setFanState((prev) => {
        if (prev.mode !== 'fan') {
          takeOver()
          // will set fan + hover below
        } else if (prev.hover === idx) {
          return prev // no change
        }
        takeOver()
        const motion = MOTION.hover
        const merged: FanState = { mode: 'fan', hover: idx, motion }
        if (idx !== null) topRef.current = idx
        return merged
      })
    },
    [takeOver],
  )

  const onPointerLeave = useCallback(() => {
    setState({ mode: 'pile', hover: null })
    clearTimeout(resumeRef.current)
    resumeRef.current = setTimeout(startAuto, 1200)
  }, [setState, startAuto])

  /** Start autoplay when section scrolls into view */
  const onVisible = useCallback(() => {
    if (isVisibleRef.current) return
    isVisibleRef.current = true
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setState({ mode: 'fan', hover: null })
    } else {
      startAuto()
    }
  }, [setState, startAuto])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      tokenRef.current++
      clearTimeout(resumeRef.current)
    }
  }, [])

  return {
    fanState,
    topIdx: topRef.current,
    onPointerEnter,
    onPointerMove,
    onPointerLeave,
    onVisible,
  }
}
