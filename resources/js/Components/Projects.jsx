import { useEffect, useState } from "react";
import Project from "./Project";
import useProjects from "@/Composables/useProjects";

export default function Projects({ className = '', children, ...props }) {

    const projects = useProjects()

    useEffect(() => {
        
    }, [])

    return (
        <div {...props} className={`block font-medium text-sm text-gray-700 ` + className}>
            <div className='z-[3] text-nowrap bg-white text-2xl mb-4 font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent'>Projects</div>
            <div className="mt-2 mb-4 mx-auto w-[90%] text-gray-600 text-sm">This section shows the projects on which I am working, while indicating the various stages they have undergone.</div>

            <div className={`flex items-center pl-16 p-10 pb-20 space-x-36 overflow-hidden overflow-x-auto ${projects.length > 1 ? 'justify-start' : 'justify-center'}`}>
                {
                    projects.map((project) => (
                        <Project
                            project={project}
                            key={project.id}
                            className="shrink-0 min-w-full sm:min-w-[70%]"
                        />
                    ))
                }
            </div>
        </div>
    );
}
