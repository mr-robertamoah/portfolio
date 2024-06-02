import { useEffect, useState } from "react";
import Service from "./Service";
import useServices from "@/Composables/useServices";

export default function Services({ className = '', children, ...props }) {

    const services = useServices()

    useEffect(() => {
        
    }, [])

    return (
        <div {...props} className={`block font-medium text-sm text-gray-700 ` + className}>
            <div className='z-[3] text-nowrap bg-white text-2xl mb-4 font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent'>Services</div>
            <div className="mt-2 mb-4 mx-auto w-[90%] text-gray-600 text-sm">This section shows the services I render as a Software Engineer. Let me know if you need any of these services. Get in touch now.</div>

            <div className={`flex items-center pl-16 p-10 pb-20 space-x-36 overflow-hidden overflow-x-auto ${services.length > 1 ? 'justify-start' : 'justify-center'}`}>
                {
                    services.map((service) => (
                        <Service
                            service={service}
                            key={service.id}
                            className="shrink-0 min-w-full sm:min-w-[70%]"
                        />
                    ))
                }
            </div>
        </div>
    );
}
