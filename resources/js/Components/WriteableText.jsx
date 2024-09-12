import { useEffect, useState } from "react";

export default function WriteableText({ message = '', speed = 100, className = '', children, ...props }) {

    const [messageIndex, setMessageIndex] = useState(1)

    useEffect(() => {
        setTimeout(writeMessage, speed)
    }, [messageIndex])

    function writeMessage() {
        
        if (messageIndex < message.length) {
            setMessageIndex((index) => {
                return index + 1
            })
        } else {
            setMessageIndex(1)
        }
    }

    return (
        <div className="relative">
            <div {...props} className={`block text-gray-700 text-nowrap ${className}`}>
                { message.slice(0, messageIndex) }
            </div>
        </div>
    );
}
