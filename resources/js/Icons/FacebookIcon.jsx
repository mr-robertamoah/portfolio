import React from 'react'

export default function FacebookIcon({className = "", ...props}) {
  return (
    <div {...props} >
        <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M25.638 48H2.65A2.65 2.65 0 010 45.35V2.65A2.649 2.649 0 012.65 0H45.35A2.649 2.649 0 0148 2.65v42.7A2.65 2.65 0 0145.351 48H33.119V29.412h6.24l.934-7.244h-7.174v-4.625c0-2.098.583-3.527 3.59-3.527l3.836-.002V7.535c-.663-.088-2.94-.285-5.59-.285-5.53 0-9.317 3.376-9.317 9.575v5.343h-6.255v7.244h6.255V48z" fill="#4460A0" fillRule="evenodd"/></svg>
    </div>
  )
}