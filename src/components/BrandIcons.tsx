import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function base(size: number, props: SVGProps<SVGSVGElement>) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  }
}

export function WhatsAppIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M3.5 20.5l1.2-4.3A8.5 8.5 0 1 1 8 19.4z" />
      <path d="M9 8.6c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.7l-.5.6c-.1.2-.1.4 0 .6.6 1 1.4 1.8 2.4 2.4.2.1.4.1.6 0l.6-.5c.2-.2.5-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.6-.6.8-.6.3-1.4.4-2.3.1-2.3-.8-4.2-2.7-5-5-.3-.9-.2-1.7.1-2.3z" />
    </svg>
  )
}

export function FacebookIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M14 8.5h2V5.2h-2.4C11.3 5.2 10 6.6 10 8.9v2H8v3.2h2v6.7h3.2v-6.7h2.4l.4-3.2h-2.8V9.3c0-.5.3-.8.8-.8z" />
    </svg>
  )
}

export function XIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M4.5 4.5l6.2 8.3L4.6 19.5h1.6l5.2-5.8 4.3 5.8h3.8l-6.5-8.8 5.7-6.2h-1.6l-4.8 5.3-3.9-5.3z" />
    </svg>
  )
}

export function InstagramIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" />
    </svg>
  )
}

export function YouTubeIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <rect x="3.5" y="6" width="17" height="12" rx="3.5" />
      <path d="M10.5 9.6v4.8l4-2.4z" />
    </svg>
  )
}

export function LinkedInIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg {...base(size, props)}>
      <path d="M4.5 9.5v10M4.5 4.8v.4" />
      <path d="M9 19.5v-10M9 14c0-2.7 1.8-4.5 4.3-4.5S17.5 11.3 17.5 14v5.5" />
    </svg>
  )
}

export function RunnerIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg {...base(size, { ...props, fill: 'currentColor', stroke: 'none' })}>
      <circle cx="14.6" cy="3.6" r="2.1" />
      <path d="M10.2 7.4l3.9-.4c.6-.1 1.2.2 1.5.7l1.6 2.7 2.6 1.1c.5.2.8.8.5 1.3-.2.5-.8.7-1.3.5l-3-1.2c-.2-.1-.4-.3-.5-.5l-.7-1.2-1.3 3.4 2.5 2.2c.3.3.4.6.4 1l-.5 4.5c-.1.6-.6 1-1.2.9-.6-.1-1-.6-.9-1.2l.4-3.9-2.9-2.4-1.4 3.2c-.2.4-.5.6-.9.6H5.3c-.6 0-1-.5-1-1.1 0-.6.5-1 1-1h3.4l2.5-6.2-1.7.2-1.6 2.3c-.3.5-1 .6-1.4.3-.5-.3-.6-1-.3-1.4l1.9-2.7c.4-.4.8-.7 1.1-.7z" />
    </svg>
  )
}
