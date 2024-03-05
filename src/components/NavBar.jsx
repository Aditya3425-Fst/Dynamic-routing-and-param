import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <ul>
        {/* passing the value of path param user1=karan and id=123 */}
        <li><Link to="/karan/123">Home</Link></li>
        {/* passing query params  */}
        <li><Link to="/signin?age=18">signin</Link></li>
      </ul>
    </div>
  )
}
