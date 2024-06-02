import { useEffect, useState } from "react";
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

    const stages = ['Idea', 'Development', 'Deployment', 'User Testing', 'Maintaining']

    const { modalData, showModal, closeModal } = useModal()
    const { alertData, showSuccessAlert, showFailureAlert, clearAlert } = useAlert()

    const [contacting, setContacting] = useState(false)

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
        
    }, [])
    
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
        <>
            <div {...props} className={`block relative font-medium text-sm text-gray-700 rounded-md bg-gradient-to-br w-[90%] sm:w-[70%] from-blue-300 to-indigo-500 via-blue-600` + className}>
                <div className="absolute mt-5 -top-10 -left-8 w-fit pr-10 z-[1] pl-2 py-2 cursor-pointer mb-3">
                    <div 
                        className="flex z-[3] text-nowrap justify-between bg-white text-lg font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                        { project.name }
                    </div>
                    <div className="text-xs text-gray-600 capitalize w-full text-center">{project.type} project</div>
                    <div className='bg-white w-full h-full absolute top-0 left-0 z-[-1] rounded'>

                    </div>
                </div>
                <div className="mt-2 min-h-[200px] mb-4 relative mx-auto w-[90%] text-gray-600 text-sm">
                    <div className="bg-gray-400 left-[40%] p-2 absolute w-[60%] -top-[28px] rounded flex sm:block justify-start items-center overflow-hidden overflow-x-auto space-x-2 sm:space-x-0">
                        {project.site && <div className="flex justify-start items-center space-x-2 text-xs">
                            <div className="font-bold">Site:</div>
                            <a href={project.site} className="my-2 text-xs sm:text-sm text-blue-600">{ project.site }</a>
                        </div>}
                        {project.github?.link && <div className="flex justify-start items-center space-x-2 text-xs">
                            <div className="font-bold">GitHub:</div>
                            <a href={project.github.link} className="my-2 text-xs sm:text-sm text-blue-600">{ project.github.name }</a>
                        </div>}
                    </div>

                    <div className="bg-white left-[40%] p-2 absolute w-[80%] top-[30%] rounded">
                        <div className="font-bold">Description</div>
                        <div className="my-2 text-xs sm:text-sm ">{ project.description }</div>
                    </div>

                    {project.allowContribution && <div className="-left-[20%] absolute w-[60%] top-[20%] rounded">
                        <PrimaryButton onClick={() => showModal('contact')}>get in touch</PrimaryButton>
                    </div>}
                    
                    <div className="bg-white -left-[15%] p-2 absolute w-[50%] top-[50%] rounded overflow-hidden overflow-y-auto h-44">
                        <div className="font-bold mb-2">Stage</div>
                        <div className="pb-4">
                            {stages.map((stage, idx) => (
                                <div key={idx} className="relative">
                                    {idx < project.stage && <div className="absolute w-1 h-4 top-4 left-[6px] bg-green-600 z-10"></div>}
                                    <div className="flex relative justify-start items-center space-x-2 space-y-4">
                                        <div className="p-1 relative rounded-full w-fit h-fit bg-black">
                                            <div className={`w-2 h-2 rounded-full ${idx < project.stage ? 'bg-green-600' : 'bg-gray-400'}`}></div>
                                        </div>
                                        <div
                                            className="text-xs sm:text-sm text-nowrap"
                                        >{stage}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        
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
        </>
    );
}
