import React from 'react'

export default function PhoneIcon({className = "", ...props}) {
  return (
    <div {...props} >
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.59 122.88"><path d="M12.74 0h46.11c3.51 0 6.69 1.43 9 3.74a12.69 12.69 0 013.74 9v97.4c0 3.51-1.43 6.69-3.74 9a12.69 12.69 0 01-9 3.74H12.74c-3.51 0-6.69-1.43-9-3.74a12.69 12.69 0 01-3.74-9v-97.4c0-3.51 1.43-6.69 3.74-9C6.05 1.43 9.24 0 12.74 0zm23.05 107.18c2.88 0 5.22 2.34 5.22 5.22s-2.34 5.22-5.22 5.22-5.22-2.34-5.22-5.22c.01-2.88 2.34-5.22 5.22-5.22zm-32.13-4h64.28V19.7H3.66v83.48z" fillRule="evenodd" clipRule="evenodd"/></svg>
    </div>
  )
}
