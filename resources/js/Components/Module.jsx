import { useState } from "react"

export default function Module({className = '', module }) {

    const [showDescription, setShowDescription] = useState(false)

    return (
        <div className={`cursor-pointer select-none ${className}`} onDoubleClick={() => setShowDescription(!showDescription)}>
            <div className="flex justify-start items-start space-x-2">
                <div className="w-5 h-5 rounded-full bg-slate-600 flex justify-center items-center">
                    <div className="w-3 h-3 rounded-full bg-green-600"></div>
                </div>
                <div className="flex justify-start items-start space-x-2 text-gray-600">
                    <div className="text-base">{module.name}</div>
                    <div className="text-xs my-4">{module.sessions} session{module.sessions == 1 ? '' : 's'}</div>
                </div>
            </div>
            {
                (module.description && showDescription) &&
                <div className="bg-slate-400 rounded p-2 text-sm text-white mb-2">{module.description}</div>
            }
        </div>
    )
}