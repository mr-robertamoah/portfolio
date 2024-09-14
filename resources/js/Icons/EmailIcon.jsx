import React from 'react'

export default function EmailIcon({className = "", ...props}) {
  return (
    <div {...props} >
        <svg className={className} viewBox="0 -2.5 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12.474L0 3.649V15h20V3.649l-10 8.825zm.001-2.662L0 .981V0h20v.981l-9.999 8.831z" fill="#000" fillRule="evenodd"/></svg>
    </div>
  )
}
