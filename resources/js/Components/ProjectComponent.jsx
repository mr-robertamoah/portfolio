import { useState } from "react"
import PrimaryButton from "./PrimaryButton"

export default function ProjectComponent({ type = 'available', feature = null, children }) {

    const [showMore, setShowMore] = useState(false)
    
    return (
        <>
            <div
                className={`p-2 rounded 
                    ${type == 'available' 
                        ? 'bg-green-400' 
                        : (type == 'next' 
                            ? 'bg-blue-400'  
                            : (type == 'future'
                                ? 'bg-gray-400' : ''
                            )
                        )}
                `}
            >
                <div className="text-gray-600 p-2 pr-6 rounded bg-white w-fit">{ feature.name }</div>
                <div
                    className={`my-2 ml-10 rounded text-sm text-justify p-2 ${type == 'available' 
                            ? 'bg-green-200 text-green-600' 
                            : (type == 'next' 
                                ? 'bg-blue-200 text-blue-600'
                                : (type == 'future'
                                    ? 'bg-gray-200 text-gray-600' : ''
                                )
                            )}
                    `}
                >{ computedDescription }</div>
                {(feature.descriptions?.length || feature.description?.length > 100) && <div class="flex justify-start items-center my-3">
                    <PrimaryButton class="text-xs p-1" onClick={() => setShowMore(!showMore)}>show { showMore ? 'less' : 'more' }</PrimaryButton>
                </div>}
                {
                    (showMore && feature.descriptions?.length) &&
                    (
                        <div class="flex justify-start items-center overflow-hidden overflow-x-auto p-2 bg-white space-x-3 rounded">
                            {
                                feature.descriptions.map((description, idx) => (
                                    <div
                                        key={idx}
                                        class="w-[200px] sm:w-[300px] p-2 text-xs text-gray-600 bg-gray-200 rounded shrink-0"
                                    >
                                        <div class="font-bold text-center">{ description.title }</div>
                                        <div class="my-2">{ description.note }</div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}