import React, { useEffect, useState } from "react"

export default function Avatar({ src = '', alt = '', avatarText = 'avatar', size = 120 }) {

const [classes, setClasses] = useState('')
const [padding, setPadding] = useState('')

useEffect(() => {
    setClassesAndPadding()
}, [size])

function setClassesAndPadding() {
    const mainSize =  size + (size / 4)

    setClasses(`w-[${size}px] h-[${size}px] rounded-full sm:w-[${mainSize}px] sm:h-[${mainSize}px] bg-white`)
    
    let defaultPadding = 'p-2'
    if (size < 50) defaultPadding = 'p-[2px]'

    setPadding(defaultPadding)
}


    return (<div className={`${classes} ${padding}`} >
        <div className={"w-full h-full bg-gray-300 rounded-full flex items-center justify-center " + padding}>
            {
                src.length ?
                <img
                    src={src} alt={alt}
                    className="object-cover rounded-full w-full h-full text-xs"
                /> :
                <div
                    className="w-full h-full flex justify-center items-center text-sm text-gray-600"
                >{ avatarText }</div>
            }
        </div>
    </div>)
}
