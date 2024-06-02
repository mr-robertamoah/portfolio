import Alert from "@/Components/Alert";
import ApplicationLogo from "@/Components/ApplicationLogo";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import Select from "@/Components/Select";
import TextBox from "@/Components/TextBox";
import TextInput from "@/Components/TextInput";
import useAlert from "@/Composables/useAlert";
import useModal from "@/Composables/useModal";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import GuestLayout from '@/Layouts/GuestLayout';
import WriteableText from "@/Components/WriteableText";
import Module from "@/Components/Module";
import Objective from "@/Components/Objective";
import PrimaryButton from "@/Components/PrimaryButton";

export default function LetsProgram({}) {
    const { modalData, showModal, closeModal } = useModal()
    const { alertData, showSuccessAlert, showFailureAlert, clearAlert } = useAlert()

    const [contacting, setContacting] = useState(false)

    const [contactData, setContactData] = useState({
        'name': '',
        'email': '',
        'phone': '',
        'message': '',
        'type': 'GENERAL',
        'forType': 'Service',
        'forId': 1,
    })
    
    async function submitContact(e) {
        e.preventDefault()

        if (!contactData.name)
            return showFailureAlert({
                message: 'Please Name is required for this form.', time: 5000
            })

        if (!contactData.email && !contactData.phone)
            return showFailureAlert({
                message: 'Please enter either your Email or Phone Number so that Robert Amoah can get back to you.', time: 5000
            })

        if (!contactData.message)
            return showFailureAlert({
                message: 'Please write a message.', time: 5000
            })

        setContacting(true)

        await axios.post(route('api.contacts.create'), {...contactData})
            .then((res) => {
                console.log(res)

                showSuccessAlert({
                    time: 5000,
                    message: "You have successfully contacted Robert Amoah. You will be hearing from him soon."
                })

                clearContactData()

                closeModal()
            })
            .catch((err) => {
                console.log(err)

                if (err.response?.message)
                    return showFailureAlert({
                        time: 5000,
                        message: err.response.message
                    })

                showFailureAlert({
                    time: 5000,
                    message: "Something unfortunate happened. Please try again shortly."
                })
            })

        setContacting(false)
    }

    function clearContactData() {
        contactData.name = ''
        contactData.email = ''
        contactData.phone = ''
        contactData.message = ''
        contactData.type = ''
    }

    function clickedLogo() {
        router.get('/')
    }

    return (
        <GuestLayout
            className="w-full"
        >
            <Head title="LetsProgram" />

            <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-300 h-[90vh] border-b border-gray-100 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                    <div className='space-y-10 md:space-x-10 md:flex md:justify-between md:items-center'>
                        <div>
                            <div className='relative w-fit pr-10 z-[1] pl-2 py-2'>
                                <div 
                                    className="flex z-[3] justify-between bg-white text-4xl font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                                    LetsProgram
                                </div>
                                <div className='bg-white w-full h-full absolute top-0 left-0 z-[-1] rounded'>

                                </div>
                            </div>

                            <div className='relative w-fit pr-10 z-[1] pl-2 py-2 mt-20'>
                                <WriteableText
                                    className="flex z-[3] justify-between bg-white text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent"
                                    message={'Let our learners be involved in tech'}
                                />
                                <div className='bg-white w-full h-full absolute top-0 left-0 z-[-1] rounded'>

                                </div>
                            </div>
                        </div>
                        
                        <div className='w-[90%] mx-auto flex justify-center md:block md:w-[40%] md:mr-8'>
                            <div>
                                <div className="text-white font-bold text-2xl w-fit">Lets get them from</div>
                                <div className="h-2 mb-4 w-[50%] bg-gradient-to-r from-purple-700 to-blue-700 rounded"></div>
                            </div>
                            <div className='flex relative mt-10 md:mt-0'>
                                <div className="relative">
                                    <div className="absolute -bottom-[40%] opacity-60 -right-[44%] w-44 h-44 lg:w-64 lg:h-64 bg-gradient-to-b from-indigo-800 border-t-green-600 z-[3]">
                                        <div className="text-2xl absolute top-5 uppercase text-white font-bold">to</div>
                                    </div>
                                    <div className="absolute bottom-[0%] opacity-60 -right-[44%] w-36 h-36 -translate-x-4 lg:-translate-x-5 lg:w-52 rotate-45 z-[2] lg:h-52 from-stone-800 to-cyan-800 bg-gradient-to-tr">
                                        
                                    </div>
                                    <div className="w-44 h-44 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-700 border-t-indigo-500 z-[1]">
                                        <div className="absolute bottom-[60%] -left-[20px] p-2 rounded bg-white uppercase text-purple-700 font-bold">novices</div>
                                    </div>
                                    <div className="absolute -bottom-[12%] md:-bottom-[40%] lg:-bottom-[35%] -right-[44%] w-44 h-44 lg:w-64 lg:h-64 bg-transparent z-[4]">
                                        <div className="absolute -bottom-[10px] -left-[20px] p-2 rounded bg-white uppercase text-blue-700 font-bold">tech explorers</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="">

                        <div className=''>
                            <div className='relative w-fit pr-10 z-[1] pl-2 py-2'>
                                <div 
                                    className="flex z-[3] justify-between bg-white text-2xl font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                                    Executive Summary
                                </div>
                                <div className='bg-white w-full h-full absolute top-0 left-0 z-[-1] rounded'>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div
                        className='w-[80%] text-pretty text-justify mx-auto mt-4 text-slate-600 bg-slate-200 p-4 rounded shadow-sm text-sm'
                    >
                        <p>In a fast pace world where growth of technology in various sectors can seem burdening for individuals with little to no understanding of the foundation of technology, I would like to introduce you to LetsProgram. This is an initiative that seeks to help introduce programming to the basic to senior high levels of our educational system.</p>
                        <p className="mt-2">Programming is the foundation on top of which most technologies are deployed. Why is it essential to students of these levels of education? Every industry or sector of our economy makes use of a few technologies. Understanding the building blocks of these technologies makes you better placed at using them more effectively as well as being involved in the actual development of the technologies.
                        LetsProgram will use an interactive, student-focused and hands-on approach to build knowledge and capacity in the Structure of Computer, Components of the Internet, Basics of Program and lead to building web-based applications. At the end of a year long program, each group of students will present a usable application.</p>
                    </div>
                </div>
            </div>

            <div className="my-8">
                <div className="w-full mx-auto sm:w-[80%] lg:w-[70%] sm:px-6 lg:px-8">
                    <div onClick={clickedLogo} className="text-center w-fit mx-auto relative flex justify-center bg-white rounded-lg p-6">
                        <div className='w-[50%] flex justify-center items-center'>
                            <ApplicationLogo className='w-52 h-fit'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 bg-slate-200 mt-20 relative">
                <div className="w-full mx-auto sm:w-[90%] lg:w-[70%] sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg p-2">
                        <div className="text-lg font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">Lets get them from novices to tech explorers</div>
                        <div className="text-sm mt-4 text-gray-600">The goal is to get learners with near ZERO knowledge of application development and equip them with the tools that will make them better explorers of what could be, in the tech space.</div>
                    </div>
                </div>
                <div className="w-full h-2 bg-gradient-to-r from-blue-700 to-pink-700 absolute bottom-0"></div>
            </div>

            <div className="py-12 bg-white my-20 relative">
                <div className="w-full mx-auto sm:w-[90%] lg:w-[70%] sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg p-2">
                        <div className='relative w-fit pr-10 z-[1] pl-2 py-2'>
                            <div 
                                className="flex z-[3] justify-between bg-white text-2xl font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                                Modules
                            </div>
                            <div className='bg-white w-full h-full absolute top-0 left-0 z-[-1] rounded'>

                            </div>
                        </div>
                        <div className="text-xs mt-2 mb-4 text-center text-gray-600">Double click/tap a module to reveal a bit of detail.</div>
                        <div>
                            {
                                [
                                    {name: 'How the computer works', sessions: '4 - 6', description: 'We will look at the components of the computer and how they work together to make the computer perform its tasks. Here, we break down the components of the computer hardware into much detail.'}, 
                                    {name: 'How the internet works', sessions: '4 - 6', description: 'Looking at he evolution and importance of the internet, what it means to have 5G and its impact of everyday work. This section will also involve the various activities that make sending a request and receiving a response via internet possible.'},
                                    {name: 'Building blocks of software', sessions: '4', description: 'Here we look at the various aspects of software thus introducing UI/UX, frontend development and backend development and what these various section of the software mean.'},
                                    {name: 'Designing', sessions: '8', description: 'It takes learners through that creative art of designer user interfaces to make the use of software/applications easier and intuitive.'},
                                    {name: 'Programming', sessions: '16 - 20', description: 'Introducing learners to programming in JavaScript. Looking at variables, functions, classes and objects and how these are used to create dynamic web applications.'},
                                    {name: 'Engage in web-based applications', sessions: '8', description: 'Here learners will be placed in groups and will be made to undertake small usable projects which they will present at the end of the entire program.'},
                                ].map((module, idx) => (
                                    <Module key={idx} module={module}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full h-2 bg-gradient-to-r from-blue-700 to-pink-700 absolute bottom-0"></div>
            </div>

            <div className="py-12 bg-slate-200 my-20 relative">
                <div className="w-full mx-auto sm:w-[90%] lg:w-[70%] sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg p-2">
                        <div className='relative w-fit pr-10 z-[1] pl-2 py-2'>
                            <div 
                                className="flex z-[3] justify-between bg-white text-2xl font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                                Objectives
                            </div>
                            <div className='bg-white w-full h-full absolute top-0 left-0 z-[-1] rounded'>

                            </div>
                        </div>
                        <div className="mt-4 space-y-4">
                            {
                                [
                                    'Improve understanding on the building blocks of applications', 
                                    'Enhance problem-solving skills',
                                    'Improve their critical thinking',
                                    'Foster creativity',
                                ].map((objective, idx) => (
                                    <Objective
                                        key={idx}
                                        objective={objective}
                                        className={` ${idx % 2 ? 'ml-8' : ''}`}
                                    />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full h-2 bg-gradient-to-r from-blue-700 to-pink-700 absolute bottom-0"></div>
            </div>

            <div className="py-12 bg-white my-20 relative">
                <div className="w-full mx-auto sm:w-[90%] lg:w-[70%] sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg p-2">
                        <div className='relative w-fit pr-10 z-[1] pl-2 py-2'>
                            <div 
                                className="flex z-[3] justify-between bg-white text-2xl font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                                Pricing
                            </div>
                            <div className='bg-white w-full h-full absolute top-0 left-0 z-[-1] rounded'>

                            </div>
                        </div>
                        <div className="mt-4 space-y-4 flex justify-start items-center space-x-2">
                            
                            <div className={`relative w-fit shrink-0`}>
                                <div className="p-2 text-gray-600">GH₵ 1,500</div>
                                <div className="w-[95%] h-1 bg-gradient-to-r ml-1 absolute top-0 from-slate-700 to-pink-500"></div>
                                <div className="w-[95%] h-1 bg-gradient-to-r absolute bottom-0 from-pink-700 to-slate-500"></div>
                                <div className="w-1 h-full bg-gradient-to-r absolute rotate-12 top-0 right-0 from-pink-700 to-slate-500"></div>
                                <div className="w-1 h-full bg-gradient-to-r absolute rotate-12 top-0 legt-0 from-pink-700 to-slate-500"></div>
                            </div>

                            <div className="text-xs text-gray-600">per month, averagely for a class size of 30</div>
                        </div>

                        <div className="mt-6 text-sm text-gray-600">Pricing is dependent on the following:</div>
                        <div className="mt-2">
                            <div className="flex justify-start items-center space-x-2 text-sm text-gray-600">
                                <div className="bg-blue-400 p-[3px] rounded">
                                    <div className="w-[10px] h-[10px] rounded bg-blue-700"></div>
                                </div>
                                <div>Location</div>
                            </div>
                            <div className="flex justify-start items-center space-x-2 text-sm text-gray-600">
                                <div className="bg-blue-400 p-[3px] rounded">
                                    <div className="w-[10px] h-[10px] rounded bg-blue-700"></div>
                                </div>
                                <div>Class Size</div>
                            </div>
                            <div className="flex justify-start items-center space-x-2 text-sm text-gray-600">
                                <div className="bg-blue-400 p-[3px] rounded">
                                    <div className="w-[10px] h-[10px] rounded bg-blue-700"></div>
                                </div>
                                <div>Number of sessions per week</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-2 bg-gradient-to-r from-blue-700 to-pink-700 absolute bottom-0"></div>
            </div>

            <div className="py-12 bg-slate-200 my-20 relative">
                <div className="w-full mx-auto sm:w-[90%] lg:w-[70%] sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg p-2">
                        <div className='relative w-fit pr-10 z-[1] pl-2 py-2 cursor-pointer' onClick={() => showModal('contact')}>
                            <div 
                                className="flex z-[3] justify-between bg-white text-2xl font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                                Get in touch
                            </div>
                            <div className='bg-white w-full h-full absolute top-0 left-0 z-[-1] rounded'>

                            </div>
                        </div>
                        <div className="mt-8 text-gray-600 text-sm">
                            <div>Interested in knowing more about this or bringing this initiative to your institution? Click/tap 'Get in touch' now.</div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-2 bg-gradient-to-r from-blue-700 to-pink-700 absolute bottom-0"></div>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white py-4 overflow-hidden shadow-sm sm:rounded-lg p-2 flex justify-between items-center">
                        <div>
                            <div className="text-nowrap text-base mb-4 font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">Robert Amoah</div>

                            <div className='flex justify-start items-center space-x-2 text-gray-600 text-sm'>
                                <span>Phone:</span>
                                <span className='font-bold'>+233 24 63 4617</span>
                            </div>
                            
                            <div className='flex justify-start items-center space-x-2 text-gray-600 text-sm'>
                                <span>Email:</span>
                                <span className='font-bold'>mr_robertamoah@yahoo.com</span>
                            </div>
                            
                            <div className='flex justify-start mt-4 font-bold items-center space-x-2 text-gray-600 text-sm'>
                                <span className='cursor-pointer' onClick={() => showModal('contact')}>Contact me</span>
                            </div>
                        </div>
                        <div className='flex relative mb-4'>  
                            <ApplicationLogo className="w-12 h-12" />
                        </div>
                    </div>
                </div>

                {
                    (modalData.show && modalData.type == 'contact') &&
                    <Modal
                        show={modalData.show && modalData.type == 'contact'} 
                        onClose={() =>{
                            clearContactData()
                            closeModal()
                        }}
                    >
                        <div className="p-0 py-4 sm:p-4">
                            <div className="bg-gradient-to-br font-bold text-lg from-gray-700 to-gray-500 via-slate-600 w-fit mx-auto text-transparent bg-clip-text"> Create Contact </div>
                            <hr className="my-4" />
                            <div className="">
                                {contacting && <div className="w-full text-center sm:w-[80%] mx-auto transition-all duration-75 text-green-600 bg-green-300 p-2 rounded">contacting Robert Amoah...</div>}
                                <form className="mx-auto w-[80%]" onSubmit={submitContact}>
                                    <div className="h-[60vh] overflow-hidden overflow-y-auto sm:p-4">
                                        <div className="mt-4">
                                            <InputLabel htmlFor="name" value="Name" />

                                            <TextInput
                                                id="name"
                                                type="text"
                                                name="name"
                                                placeholder="Robert Amoah"
                                                value={contactData.name}
                                                className="mt-1 block w-full"
                                                onChange={(e) => setContactData((oldData) => {
                                                    let newData = {...oldData}
                                                    newData.name = e.target.value
                                                    return newData
                                                })}
                                            />
                                        </div>
                                        
                                        <div className="mt-4">
                                            <InputLabel htmlFor="email" value="Email" />

                                            <TextInput
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="mr_robertamoah@yahoo.com"
                                                value={contactData.email}
                                                className="mt-1 block w-full"
                                                onChange={(e) => setContactData((oldData) => {
                                                    let newData = {...oldData}
                                                    newData.email = e.target.value
                                                    return newData
                                                })}
                                            />
                                        </div>
                                        
                                        <div className="mt-4">
                                            <InputLabel htmlFor="phone" value="Phone" />

                                            <TextInput
                                                id="phone"
                                                type="text"
                                                name="phone"
                                                placeholder="+233245634617"
                                                value={contactData.phone}
                                                className="mt-1 block w-full"
                                                onChange={(e) => setContactData((oldData) => {
                                                    let newData = {...oldData}
                                                    newData.phone = e.target.value
                                                    return newData
                                                })}
                                            />
                                        </div>
                                        
                                        <div className="mt-4">
                                            <InputLabel htmlFor="message" value="Message" />

                                            <TextBox
                                                id="message"
                                                name="message"
                                                placeholder="what do you have in mind?"
                                                value={contactData.message}
                                                className="mt-1 block w-full"
                                                onChange={(e) => setContactData((oldData) => {
                                                    let newData = {...oldData}
                                                    newData.message = e.target.value
                                                    return newData
                                                })}
                                            />
                                        </div>
                                        
                                        <div className="mt-4">
                                            <InputLabel htmlFor="type" value="Type" />

                                            <Select
                                                id="type"
                                                name="type"
                                                value={contactData.type}
                                                className="mt-1 block w-full"
                                                onChange={(e) => setContactData((oldData) => {
                                                    let newData = {...oldData}
                                                    newData.type = e.target.value
                                                    return newData
                                                })}
                                                options={[
                                                    {name: 'enquiring', value: 'SERVICE_EQUIRY'},
                                                    {name: 'requiring', value: 'SERVICE_REQUIRE'},
                                                ]}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="mt-4 flex justify-end">
                                        <PrimaryButton>send</PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal>
                }

                {(alertData.show) && 
                    <Alert
                        show={alertData.show}
                        message={alertData.message}
                        time={alertData.time}
                        type={alertData.type}
                        close={() => clearAlert()}
                    />
                }
            </div>
        </GuestLayout>
    )
}