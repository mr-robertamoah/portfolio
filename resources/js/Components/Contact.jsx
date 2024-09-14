import useModal from "@/Composables/useModal"
import Alert from "./Alert"
import InputLabel from "./InputLabel"
import Modal from "./Modal"
import PrimaryButton from "./PrimaryButton"
import TextBox from "./TextBox"
import TextInput from "./TextInput"
import useAlert from "@/Composables/useAlert"
import React, { useState } from "react"

export default function Contact({className = '', contact }) {

    const { modalData, showModal, closeModal } = useModal()
    const { alertData, showSuccessAlert, showFailureAlert, clearAlert } = useAlert()

    const [sending, setSending] = useState(false)

    const [data, setData] = useState({
        'title': '',
        'message': '',
    })
    
    async function submitResponse(e) {
        e.preventDefault()

        if (!data.title)
            return showFailureAlert({
                message: 'Please Title is required for this form.', time: 5000
            })

        if (!data.message)
            return showFailureAlert({
                message: 'Please write a message.', time: 5000
            })

        setSending(true)

        await axios.post(route('api.contacts.response', {contactId: contact.id}), {...data})
            .then((res) => {
                console.log(res)

                showSuccessAlert({
                    time: 5000,
                    message: "You have successfully sent a response."
                })

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

        setSending(false)
    }

    function clearData() {
        data.title = ''
        data.message = ''
    }

    return (
        <div className={`text-gray-600 rounded bg-gray-200 p-2 ${className}`}>
            <div className="w-full flex overflow-hidden overflow-x-auto p-2 space-x-4 text-sm">
                <div className="">{contact.name}</div>
                <div className="">{contact.email}</div>
                <div className="">{contact.phone}</div>
                <div className="">{contact.type}</div>
            </div>
            <div className="w-[90%] mx-auto p-2 text-xs">{contact.message}</div>
            <div className="mt-2 flex justify-end">
                <PrimaryButton onClick={() => showModal('respond')}>respond</PrimaryButton>
            </div>
        
            {(modalData.show && modalData.type == 'respond') && 
                <Modal
                    show={modalData.show && modalData.type == 'respond'} 
                    onClose={() =>{
                        clearData()
                        closeModal()
                    }}
                >
                    <div className="p-4">
                        <div className="bg-gradient-to-br font-bold text-lg from-gray-700 to-gray-500 via-slate-600 w-fit mx-auto text-transparent bg-clip-text"> Create Contact </div>
                        <hr className="my-4" />
                        <div className="">
                            {sending && <div className="w-[90%] text-center sm:w-[80%] mx-auto transition-all duration-75 text-green-600 bg-green-300 p-2 rounded">sending response...</div>}
                            <form className="mx-auto w-[80%]" onSubmit={submitResponse}>
                                <div className="h-[60vh] overflow-hidden overflow-y-auto p-4">
                                    <div className="mt-4">
                                        <InputLabel htmlFor="title" value="Title" />

                                        <TextInput
                                            id="title"
                                            type="text"
                                            name="title"
                                            placeholder="title"
                                            value={data.title}
                                            className="mt-1 block w-full"
                                            onChange={(e) => setData((oldData) => {
                                                let newData = {...oldData}
                                                newData.title = e.target.value
                                                return newData
                                            })}
                                        />
                                    </div>
                                    
                                    <div className="mt-4">
                                        <InputLabel htmlFor="message" value="Message" />

                                        <TextBox
                                            id="message"
                                            name="message"
                                            placeholder="your response"
                                            value={data.message}
                                            className="mt-1 block w-full"
                                            onChange={(e) => setData((oldData) => {
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