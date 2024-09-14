import React, { useEffect, useState } from 'react'
import ApplicationLogo from './ApplicationLogo'
import Modal from './Modal'
import InputLabel from './InputLabel'
import TextInput from './TextInput'
import PrimaryButton from './PrimaryButton'
import Alert from './Alert'
import useModal from '@/Composables/useModal'
import useAlert from '@/Composables/useAlert'
import PhoneIcon from '@/Icons/PhoneIcon'
import EmailIcon from '@/Icons/EmailIcon'
import XIcon from '@/Icons/XIcon'
import GitHubIcon from '@/Icons/GitHubIcon'
import LinkedinIcon from '@/Icons/LinkedinIcon'
import FacebookBlackIcon from '@/Icons/FacebookBlackIcon'
import TextBox from './TextBox'

export default function Footer({ modalText = "", clearModalText = () => null }) {

    const { modalData, showModal, closeModal } = useModal()
    const { alertData, showSuccessAlert, showFailureAlert, clearAlert } = useAlert()

    const [contacting, setContacting] = useState(false)
    const [contactData, setContactData] = useState({
        'name': '',
        'email': '',
        'phone': '',
        'message': '',
        'type': 'GENERAL',
    })

    useEffect(() => {
        if (!modalText?.length) return

        showModal(modalText)
    }, [modalText])
    
    function clearContactData() {
        contactData.name = ''
        contactData.email = ''
        contactData.phone = ''
        contactData.message = ''
    }

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

                if (modalText) clearModalText()
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

  return (
    <div className="">
        <div className="bg-gradient-to-tl from-blue-600 to-purple-700 py-12 
            max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-1 gap-10 sm:grid-cols-2"
        >
            <div className='bg-white p-4 rounded shadow w-fit m-auto sm:row-span-2 sm:h-full relative'>
                <div
                    className="text-nowrap text-base mb-4 font-bold bg-gradient-to-r md:text-lg
                        from-blue-700 mx-auto to-violet-500 bg-clip-text w-fit text-transparent"
                    >Robert Amoah</div>

                <div className='flex justify-start items-center space-x-2 text-gray-600 mb-5 text-sm'>
                    <span>
                        <PhoneIcon className='w-5 h-5'/>
                    </span>
                    <span className='font-bold'>+233 24634617</span>
                </div>
                
                <div className='flex justify-start items-center space-x-2 text-gray-600 text-sm'>
                    <span>
                        <EmailIcon className='w-5 h-5'/>
                    </span>
                    <span className='font-bold'>mr_robertamoah@yahoo.com</span>
                </div>
                
                <div className='relative sm:absolute bottom-0 left-0 w-full'>
                    <div
                        className='flex justify-start mt-4 font-bold items-center space-x-2
                            text-white text-sm p-2 rounded bg-gradient-to-br
                            from-blue-700 to-teal-700 w-fit cursor-pointer mx-auto sm:mb-2'
                        >
                        <span className='cursor-pointer' onClick={() => showModal('contact')}>Contact me</span>
                    </div>
                </div>
            </div>

            <div>
                <div className='relative w-fit mx-auto'>
                    <div className='text-nowrap relative text-base mb-4 font-bold bg-gradient-to-r md:text-lg
                        from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent p-2 z-[1]'
                    >Socials</div>
                    <div className='bg-white absolute top-0 left-0 rounded w-[120%] h-full -rotate-6'></div>
                </div>
                <div className="mt-5 grid-cols-2 grid mx-auto w-fit gap-2">
                    <a href="https://x.com/Mr_robertamoah" className='flex items-center justify-center'>
                        <XIcon className="w-8 h-8"/>
                    </a>
                    <a href="https://github.com/mr-robertamoah" className='flex items-center justify-center'>
                        <GitHubIcon className="w-8 h-8"/>
                    </a>
                    <a href="https://www.linkedin.com/in/mr-robert-amoah" className='flex items-center justify-center'>
                        <LinkedinIcon className="w-8 h-8"/>
                    </a>
                    <a href="https://www.facebook.com/share/anKqntjci1PuQDD3/" className='flex items-center justify-center'>
                        <FacebookBlackIcon className="w-8 h-8"/>
                    </a>
                </div>
            </div>

            <div className='sm:col-start-2'>
                <div className='relative w-fit mx-auto'>
                    <div className='text-nowrap relative text-base mb-4 font-bold bg-gradient-to-r md:text-lg
                        from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent p-2 z-[1]'
                    >Services</div>
                    <div className='bg-white absolute top-0 left-0 rounded w-[120%] h-full -rotate-6'></div>
                </div>
                <div className="mt-5 grid-cols-1 grid mx-auto w-fit gap-2">
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 rounded-full bg-white'></div>
                        <div className='text-white text-sm md:text-base'>LetsProgram</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 rounded-full bg-white'></div>
                        <div className='text-white text-sm md:text-base'>Freelance</div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 rounded-full bg-white'></div>
                        <div className='text-white text-sm md:text-base'>Contribution</div>
                    </div>
                </div>
            </div>

            <div
                className='flex justify-center items-center w-24 h-24 pb-4 relative
                    mb-4 rounded bg-white m-auto sm:col-span-full sm:row-start-4'
                >  
                <ApplicationLogo className="w-12 h-12" />
            </div>
        </div>

        {
            (modalData.show && modalData.type == 'contact') &&
            <Modal
                show={modalData.show && modalData.type == 'contact'} 
                onClose={() =>{
                    clearContactData()

                    if (modalText) clearModalText()
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
  )
}
