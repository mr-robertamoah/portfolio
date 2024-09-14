import React, { useState } from 'react'
import ApplicationLogo from './ApplicationLogo'
import Modal from './Modal'
import InputLabel from './InputLabel'
import TextInput from './TextInput'
import PrimaryButton from './PrimaryButton'
import Alert from './Alert'
import useModal from '@/Composables/useModal'
import useAlert from '@/Composables/useAlert'

export default function Footer() {

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
