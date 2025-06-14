import { useState } from 'react'

export default function XSSDemo() {
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(comment)  // ❌ Deliberately unsafe
  }

  return (
    <div>
      <h2>XSS Demo (Deliberately Vulnerable)</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div style={{ marginTop: '1rem' }}>
        <h3>Output:</h3>
        <div dangerouslySetInnerHTML={{ __html: submitted }} />
        {/* ❗ XSS Vector here */}
      </div>
    </div>
  )
}
