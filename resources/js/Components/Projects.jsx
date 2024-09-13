import { useEffect, useState } from "react";
import Project from "./Project";
import useProjects from "@/Composables/useProjects";

export default function Projects({ className = '', children, ...props }) {

    const projects = useProjects()

    useEffect(() => {
        
    }, [])

    return (
        <div {...props} className={`block font-medium text-sm text-gray-700 ` + className}>
            <div className="w-full mx-auto lg:w-[90%]">
                <div className='z-[3] text-nowrap bg-white text-2xl mb-4 font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent'>Projects</div>
            </div>
            <div className="mt-2 mb-4 mx-auto w-[90%] text-gray-600 text-sm">This section shows the projects on which I am working, while indicating the various stages they have undergone.</div>

            <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-3 sm:px-8 md:px-4 pb-20 space-y-10 md:space-y-0 md:gap-10`}>
                {
                    projects.map((project) => (
                        <Project
                            project={project}
                            key={project.id}
                        />
                    ))
                }
            </div>
        </div>
    );
}
