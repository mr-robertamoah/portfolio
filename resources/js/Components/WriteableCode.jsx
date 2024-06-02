import { useEffect, useState } from "react";

export default function WriteableCode({ codes = [], title = '', output = '', speed = 100, className = '', children, ...props }) {

    const [messageIndex, setMessageIndex] = useState(1)
    const [codeIndex, setCodeIndex] = useState(0)

    useEffect(() => {
        if (codes.length && codeIndex < codes.length)
            setTimeout(writeMessage, speed)
    }, [messageIndex])

    function writeMessage() {
        
        if (messageIndex < codes[codeIndex].length) {
            setMessageIndex((index) => {
                return index + 1
            })
        } else {
            setTimeout(() => {
                switchCode()
                setMessageIndex(1)
            }, 2000)
        }
    }

    function switchCode() {
        if (codeIndex + 1 < codes.length) {
            setCodeIndex((oldIndex) => oldIndex + 1)
            return
        }

        setCodeIndex(0)
    }

    return (
        <div
            {...props} 
            className={`block font-medium text-sm text-slate-200 w-full bg-slate-800 rounded-lg p-4 ` + className}
        >
            {title && <div className="mb-4 text-base tracking-wide font-bold text-center">{title}</div>}
            <pre 
                {...props} 
                className={`min-h-[200px] min-w-[200px] overflow-x-auto`}
            >
                { codes.length ? codes[codeIndex].slice(0, messageIndex) : '' }
            </pre>
            { (!!output || children) && (<>
                <div className="h-[2px] w-full my-2 bg-slate-300"></div>
                <div className="mt-2 w-[90%] mx-auto p-2 tracking-wide text-slate-700 bg-slate-100 rounded flex justify-between items-center">
            {!!output ? <div className="">{ output }</div> : <></>}
            {children && <div className="">{ children }</div>}

                    <div className="text-xs text-gray-500">output</div>
                </div>
            </>)}
        </div>
    );
}
