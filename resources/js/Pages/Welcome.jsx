import Avatar from '@/Components/Avatar';
import Skills from '@/Components/Skills';
import WriteableCode from '@/Components/WriteableCode';
import WriteableText from '@/Components/WriteableText';
import Projects from '@/Components/Projects';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Services from '@/Components/Services';
import Modal from '@/Components/Modal';
import { useState } from 'react';
import useModal from '@/Composables/useModal';
import useAlert from '@/Composables/useAlert';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import TextBox from '@/Components/TextBox';
import Alert from '@/Components/Alert';

export default function Welcome() {
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
    }

    return (
        <GuestLayout
            className="w-full"
        >
            <Head title="Welcome" />

            <div className="bg-gradient-to-br from-blue-800 to-purple-800 animate-gradient h-[95vh] border-b border-gray-100 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                    <div className='space-y-10 md:space-x-10 md:grid md:grid-cols-4 md:items-center'>
                        <div className='col-span-2'>
                            <div className='relative w-fit pr-10 z-[1] pl-2 py-2'>
                                <div 
                                    className="flex z-[3] justify-between bg-white text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                                    WELCOME
                                </div>
                                <div className='bg-white w-full h-full absolute top-0 left-0 z-[-1] rounded'>

                                </div>
                            </div>

                            <div className='relative w-fit pr-10 z-[1] pl-2 py-2 mt-20'>
                                <WriteableText 
                                    className="flex z-[3] justify-between bg-white text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent"
                                    message={'Your Full-Stack Developer'}
                                />
                                <div className='bg-white w-full h-full absolute top-0 left-0 z-[-1] rounded'>

                                </div>
                            </div>
                        </div>
                        
                        <div className='col-span-2'>
                            <div className='w-fit relative mx-auto'>
                                
                                <ApplicationLogo className="w-28 h-28 sm:w-32 sm:h-32 lg:w-44 lg:h-44 mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='absolute bottom-0 left-0 w-full flex justify-center text-white font-bold'>
                    <div className='mb-5 text-lg md:text-2xl'>let us build cool applications, one line of code at a time</div>
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden flex justify-center items-center space-x-5">
                        <div
                            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] shrink-0"
                        >
                            <Avatar
                                src='/storage/robertamoah.png'
                            />
                        </div>

                        <div className=''>
                            <div className='relative w-fit pr-10 z-[1] pl-2 py-2'>
                                <div 
                                    className="flex z-[3] justify-between bg-white text-2xl font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                                    Robert Amoah
                                </div>
                                <div className='bg-white w-full h-full absolute top-0 left-0 z-[-1] rounded'>

                                </div>
                            </div>
                            <div className='bg-gradient-to-r from-blue-700 to-violet-500 w-[205px] h-2 rounded-lg my-4'></div>
                            <div
                                className="flex z-[3] justify-between bg-white text-2xl font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent"
                            >Software Engineer</div>
                            <div className='bg-gradient-to-r from-blue-700 to-violet-500 w-[205px] h-2 rounded-lg my-4'></div>
                        </div>
                    </div>
                    
                    <div
                        className='w-[80%] mx-auto sm:w-[60%] mt-4 text-slate-600 bg-slate-200 p-4 rounded shadow-sm text-sm'
                    >Specialize in providing full stack solutions from database management through backend development to design of user-friendly interfaces.</div>
                </div>
            </div>

            <div className="py-2 bg-slate-200">
                <div
                    className='w-[80%] mx-auto mt-4 text-slate-600 bg-slate-200 p-4 text-sm text-center'
                >
                    These are few of the things with which I am familiar.
                </div>

                <div className="w-full mx-auto sm:w-[80%] lg:w-[70%] sm:px-6 lg:px-8 ">
                    <div className="overflow-hidden">
                        <Skills/>
                    </div>
                </div>
            </div>

            <div className="my-8">
                <div className="w-full mx-auto sm:w-[80%] lg:w-[70%] sm:px-6 lg:px-8">
                    <div className="text-center w-fit mx-auto relative flex justify-center bg-white rounded-lg p-6">
                        <div className='w-[50%] flex justify-center items-center'>
                            <ApplicationLogo className='w-52 h-fit'/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="py-6">
                <div className="w-full mx-auto sm:w-[80%] lg:w-[70%] sm:px-6 lg:px-8 p-2">
                    <div className='z-[3] text-nowrap text-2xl mb-4 font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent'>Code Snippets</div>
                    <div className="overflow-hidden">
                        <div className='w-[90%] mx-auto md:w-[80%] flex justify-start space-y-4 flex-col items-center px-4 pb-4'>
                            <WriteableCode
                                title='Backend PHP'
                                className='min-w-[90%] sm:min-w-[70%] md:min-w-[50%] shrink-0'
                                codes={[
                                    `<?php\n\nclass CleanCode\n{\n\tpublic function greetings()\n\t{\n\t\techo 'Hello there!';\n\t}\n}\n`,
                                    `<?php\n\nuse CleanCode;\n\n$code = new CleanCode();\n\n$code->greetings();`
                                ]}
                                output='Hello there!'
                            />
                            <WriteableCode
                                title='Frontend Reactjs'
                                className='min-w-[90%] sm:min-w-[70%] md:min-w-[50%] shrink-0'
                                codes={[
                                    `export default function PrimaryButton({\n\tclassName = '', disabled, children, ...props\n}) {\n\treturn (\n\t\t<button\n\t\t\t{...props}\n\t\t\tclassName={\n\t\t\t\t'inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ' + \n\t\t\t\t\t(disabled ? 'opacity-25 ' : ' ')\n\t\t\t\t + className\n\t\t\t}\n\t\t\tdisabled={disabled}\n\t\t>\n\t\t\t{children}\n\t\t</button>\n\t);\n}`,
                                    `import PrimaryButton from '@/Components/PrimaryButton';\n\n<PrimaryButton>View</PrimaryButton>\n`
                                ]}
                            >
                                <PrimaryButton>View</PrimaryButton>
                            </WriteableCode>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 bg-slate-200">
                <div className="w-full mx-auto lg:w-[90%] px-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg p-2">
                        <Projects/>
                    </div>
                </div>
            </div>

            <div className="py-12 bg-white">
                <div className="w-full mx-auto sm:w-[90%] lg:w-[70%] sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg p-2">
                        <Services/>
                    </div>
                </div>
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
    );
}
