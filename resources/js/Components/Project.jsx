import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import PrimaryButton from "./PrimaryButton";
import useModal from "@/Composables/useModal";
import useAlert from "@/Composables/useAlert";
import Alert from "./Alert";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import TextBox from "./TextBox";
import Select from "./Select";

export default function Project({ className = '', project = null, children, ...props }) {

    const DESCRIPTION_LENGTH = 200
    const stages = ['Planning', 'Designing', 'Development', 'Deployment', 'User Testing', 'Maintaining']

    const { modalData, showModal, closeModal } = useModal()
    const { alertData, showSuccessAlert, showFailureAlert, clearAlert } = useAlert()
    
    const [contacting, setContacting] = useState(false)
    const [ showFullDescription, setShowFullDescription ] = useState(true)
    const [ showStages, setShowStages ] = useState(false)
    const [contactData, setContactData] = useState({
        'name': '',
        'email': '',
        'phone': '',
        'message': '',
        'type': '',
        'forType': 'Project',
        'forId': project?.id,
    })

    useEffect(() => {
        if (!project?.description) return

        if (project.description.length > DESCRIPTION_LENGTH + 10)
            return setShowFullDescription(false)
        
        setShowFullDescription(true)
    }, [project?.description])
    
    async function submitContact(e) {
        e.preventDefault()

        if (!contactData.name)
            return showFailureAlert({
                message: 'Please Name is required for this form.', time: 5000
            })

        if (!contactData.type)
            return showFailureAlert({
                message: 'Please select a type of contact to help give Robert Amoah a fair idea as to why you are contacting him.', time: 5000
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
        contactData.type = ''
        contactData.message = ''
    }

    return (
        <div className="flex flex-col w-full shadow-sm">
            <div {...props} className={`font-medium text-sm text-gray-700 rounded-md bg-white w-full ` + className}>
                <div className="mx-auto mt-8 mb-10 flex items-center space-x-2 justify-between w-fit bg-gray-200 rounded-sm p-2">
                    <div className="rounded-full w-2 h-2 bg-slate-600"></div>
                    <div className="text-xs lowercase">{project.type} project</div>
                </div>

                <div className="mt-5 w-fit relative cursor-pointer mb-2 mx-auto">
                    <div 
                        className="flex text-nowrap justify-between bg-white text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                        { project.name }
                    </div>
                    <div className='bg-blue-700 bg-opacity-10 w-[90%] min-w-[35px] absolute -top-3 -bottom-3 -left-5 z-[1]'>

                    </div>
                </div>

                { project.tagline ? <div className="text-xs text-center w-full mt-5 text-gray-500">{project.tagline}</div> : <></> }

                <hr className={`mx-5 mb-4 ${project.tagline ? "mt-5" : "mt-10"}`} />

                <div className="bg-white p-2 px-4">
                    <div className="font-bold">Description</div>
                    <div className="mt-2 text-xs sm:text-sm text-justify text-gray-600">
                        { 
                            showFullDescription ? 
                                project.description : 
                                project.description.slice(0, DESCRIPTION_LENGTH) + "..." 
                        } 
                        {
                            project?.description?.length > DESCRIPTION_LENGTH + 10 ?
                                <span
                                    onClick={() => setShowFullDescription(!showFullDescription)}
                                    className="text-sm ml-1 text-blue-500 cursor-pointer hover:underline"
                                >show { showFullDescription ? "less" : "more"}</span> :
                                <></>
                        }
                    </div>
                </div>

                {
                    project.skills?.length > 0 ?
                    <div className="mt-6 px-3">
                        <div className="mb-4 pb-2 w-fit px-2 relative text-sm text-neutral-700 font-semibold">
                            <div>Skills used</div>
                            <div className="absolute rounded bottom-0 right-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                        </div>
                        <div className={`${project.skills?.length > 0 ? "grid grid-cols-2" : "flex"} gap-2 pb-2`}>
                            {
                                project.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className=""
                                    >
                                        <div 
                                            className="bg-blue-600 transition-colors hover:bg-gradient-to-br
                                            hover:from-blue-700 hover:bg-purple-700 text-white
                                            rounded-lg py-1 cursor-pointer px-4 mb-1 text-center"
                                        >{skill.name}</div>
                                        <div className="text-neutral-400 text-xs w-fit ml-auto">{skill.type}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div> : <></>
                }

                {
                    project.stage > 0 ?
                    <>
                        <hr className={`mx-5 mb-4 mt-5`} />

                        <div className="bg-neutral-200 p-2 mx-auto w-[90%] rounded overflow-hidden overflow-x-auto">
                            <div 
                                title="toggle stages" 
                                className="font-bold mb-2 cursor-pointer text-neutral-600 hover:text-neutral-900"
                            >Software development lifecycle stages</div>
                            {
                                showStages ?
                                <div className="pb-4 flex items-start justify-start space-x-4 overflow-hidden overflow-x-auto">
                                    {stages.map((stage, idx) => (
                                        <div key={idx} className="relative">
                                            <div className="flex relative justify-start items-center space-x-2">
                                                <div className={`w-2 h-2 rounded-full ${idx <= project.stage - 1 ? 'bg-green-900' : 'bg-red-900'}`}></div>
                                                <div
                                                    className={`text-xs sm:text-sm text-nowrap ${idx <= project.stage - 1 ? 'text-green-900' : 'text-red-900'}`}
                                                >{stage}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div> : <></>
                            }
                            
                            <div
                                onClick={() => setShowStages(!showStages)}
                                className="text-xs text-neutral-600 cursor-pointer text-center my-2">{showStages ? "hide" : "show"} stages</div>
                        </div>
                    </> : <></>
                }

                <hr className={`mx-5 mb-4 mt-5`} />

                <div className="mt-2 mx-auto w-[90%] text-gray-600 text-sm">
                    <div className="p-2 w-full flex flex-col md:flex-row md:items-start space-y-2 md:space-y-0 justify-start items-center overflow-hidden overflow-x-auto space-x-0 md:space-x-2">
                        {project.links.map((link, idx) => {
                            if (!link.href) return <div key={idx}></div>

                            return <a key={idx} title={link.href} href={link.href} className="text-blue-600 transition-colors hover:bg-gradient-to-br hover:from-blue-700 hover:bg-purple-700 hover:text-transparent bg-clip-text rounded-lg p-2 px-4 ">
                                {link.type}{link.name ? ` - ${link.name}` : ''}
                            </a>
                        })}
                    </div>
                </div>
            </div>

            {
                project.allowContribution ? 
                <div className="mt-4 pl-4">
                    { project.contributionMessage && <div className="mb-2 text-sm text-neutral-600">{ project.contributionMessage }</div> }

                    <PrimaryButton onClick={() => showModal('contact')}>get in touch</PrimaryButton>
                </div> : <></>
            }
        
            {(modalData.show && modalData.type == 'contact') && 
                <Modal 
                    show={modalData.show && modalData.type == 'contact'} 
                    onClose={() =>{
                        clearContactData()
                        closeModal()
                    }}
                >
                    <div className="p-4">
                        <div className="bg-gradient-to-br font-bold text-lg from-gray-700 to-gray-500 via-slate-600 w-fit mx-auto text-transparent bg-clip-text"> Create Contact </div>
                        <hr className="my-4" />
                        <div className="">
                            {contacting && <div className="w-[90%] text-center sm:w-[80%] mx-auto transition-all duration-75 text-green-600 bg-green-300 p-2 rounded">contacting Robert Amoah...</div>}
                            <form className="mx-auto w-[80%]" onSubmit={submitContact}>
                                <div className="h-[60vh] overflow-hidden overflow-y-auto p-4">
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
                                                {name: 'support', value: 'PROJECT_SUPPORT'},
                                                {name: 'sponsorship', value: 'PROJECT_SPONSORSHIP'},
                                                {name: 'suggestion', value: 'PROJECT_SUGGESTION'},
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
    );
}
