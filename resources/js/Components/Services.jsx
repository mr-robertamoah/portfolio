import React, { useEffect, useState } from "react";
import useServices from "@/Composables/useServices";
import Service from "./Service";

export default function Services({ className = '', children, ...props }) {

    const services = useServices()

    useEffect(() => {
        
    }, [])

    return (
        <div {...props} className={`block font-medium text-sm text-gray-700 ` + className}>
            <div className="w-full mx-auto lg:w-[90%]">
                <div className='z-[3] text-nowrap bg-white text-2xl mb-4 font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent'>Services</div>
            </div>
            <div className="mt-2 mb-10 mx-auto w-[90%] text-gray-600 text-sm">This section shows the services I render as a Software Engineer. Let me know if you need any of these services. Get in touch now.</div>

            <div
                className="grid grid-cols-1 md:grid-cols-2 px-3 sm:px-8 md:px-4 pb-20 space-y-20 md:space-y-0 md:gap-20"
            >
                {
                    services.map((service, idx) => (
                        <Service
                            service={service}
                            key={idx}
                            className={`shrink-0 min-w-full sm:min-w-[70%] ${
                                idx % 2 == 0 ? 
                                "from-purple-600 to-blue-600" :
                                "to-purple-600 from-blue-600"
                            }`}
                        />
                    ))
                }
            </div>
        </div>
    );
}
