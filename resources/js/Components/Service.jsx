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
import { Link } from "@inertiajs/react";

export default function Service({ className = '', service = null, children, ...props }) {

    const DESCRIPTION_LENGTH = 200

    const { modalData, showModal, closeModal } = useModal()
    const { alertData, showSuccessAlert, showFailureAlert, clearAlert } = useAlert()

    const [ showFullDescription, setShowFullDescription ] = useState(true)
    const [contacting, setContacting] = useState(false)
    const [contactData, setContactData] = useState({
        'name': '',
        'email': '',
        'phone': '',
        'message': '',
        'type': '',
        'forType': 'Service',
        'forId': service?.id,
    })

    useEffect(() => {
        if (!service?.description) return

        if (service.description.length > DESCRIPTION_LENGTH + 10)
            return setShowFullDescription(false)
        
        setShowFullDescription(true)
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
        <div className="bg-gray-200 flex flex-col pb-5 relative">
            <div {...props} className={`flex items-center justify-center w-full relative font-medium text-sm text-gray-700 rounded-b-none rounded-md bg-gradient-to-br ${className} h-56`}>
                <div className="absolute mt-5 -top-10 -left-3 w-fit pr-10 z-[1] pl-2 py-2 cursor-pointer mb-3">
                    <div 
                        className="flex z-[3] text-nowrap justify-between bg-white text-lg font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                        { service.name }
                    </div>
                    <div className='bg-white w-full h-full absolute top-0 left-0 z-[-1] rounded'>

                    </div>
                </div>

                <div className="text-white text-base sm:text-lg w-full px-4 text-center font-bold">{ service.tagline }</div>

                {
                    service.detailsPage && 
                    <div className="right-3 w-fit px-2 py-1 absolute
                        bottom-3 rounded
                        text-purple-700 bg-white text-base sm:text-lg font-bold cursor-pointer
                        "
                    >
                        <Link href={service.detailsPage}>Visit Page</Link>
                    </div>
                }

            </div>

            <div className="mt-2 min-h-[200px] mb-4 relative text-gray-600 text-sm">
                <div className="font-bold text-base pl-2 mt-5">Description</div>
                <div className="bg-white p-2 mt-4 mx-auto w-[90%] rounded transition-all duration-100 shadow">
                    <div className="mt-4 px-4 mb-2 text-sm text-neutral-600 text-justify">
                    { 
                            showFullDescription ? 
                                service.description : 
                                service.description.slice(0, DESCRIPTION_LENGTH) + "..." 
                        } 
                        {
                            service?.description?.length > DESCRIPTION_LENGTH + 10 ?
                                <span
                                    onClick={() => setShowFullDescription(!showFullDescription)}
                                    className="text-sm ml-1 text-blue-500 cursor-pointer hover:underline"
                                >show { showFullDescription ? "less" : "more"}</span> :
                                <></>
                        }
                    </div>
                </div>
            </div>

            {
                service.experience && 
                <div className="w-full mb-5">
                    <div className="font-bold text-base pl-2 mt-5">Experience</div>
                    <div className="bg-blue-600 p-2 mt-4 shadow mx-auto w-[90%] rounded flex justify-start items-center space-x-2 text-xs">
                        <div className="my-2 text-center w-full text-xs sm:text-sm text-white">{ service.experience } year{ service.experience > 1 ? 's' : ''} of experience</div>
                    </div>
                </div>
            }

            {service.allowContact && <div className="-right-2 absolute -bottom-[20px] rounded">
                <PrimaryButton onClick={() => showModal('contact')}>get in touch</PrimaryButton>
            </div>}
        
            {(modalData.show && modalData.type == 'contact') && 
                <Modal 
                    show={modalData.show && modalData.type == 'contact'}
                    onClose={() => {
                        clearContactData()
                        closeModal()
                    }
                }>
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
    );
}
