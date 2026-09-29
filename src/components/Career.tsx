import type { FormEvent } from 'react'
import { courses } from '../data/siteData'
import './Career.css'

export default function Career() {
  const handleSubmit = (e: FormEvent) => e.preventDefault()

  return (
    <section className="career page">
      <div className="career__intro">
        <h2 className="career__title">Your Career Begins With Us</h2>
        <p className="career__subtitle">Explore Our Wide Range Of Course</p>
      </div>

      <form className="career__form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="course-select">
          Choose a course
        </label>
        <select id="course-select" defaultValue={courses[0]}>
          {courses.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <button type="submit" className="career__explore">
          EXPLORE
        </button>
      </form>
    </section>
  )
}
