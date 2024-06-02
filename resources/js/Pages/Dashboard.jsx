import Alert from '@/Components/Alert';
import Contact from '@/Components/Contact';
import useAlert from '@/Composables/useAlert';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Dashboard({ auth }) {
    const { alertData, showSuccessAlert, showFailureAlert, clearAlert } = useAlert()

    const [contacts, setContacts] = useState({data: [], page: 1})
    const [getting, setGetting] = useState({type: '', show: false})

    useEffect(() => {
        loadData()
    }, [])

    function loadData() {
        initiateContacts()
        getContacts()
    }

    async function getContacts() {
        showGetting('')
        await axios.get(route('api.contacts', {page: contacts.page}))
            .then((res) => {
                console.log(res);

                if (contacts.page == 1)
                    initiateContacts()

                updateContacts(res.data.data)

                updatePage(res)
            })
            .catch((err) => {
                console.log(err);

                if (err.response?.message) {
                    showFailureAlert({
                        message: err.response.message,
                        time:5000
                    })
                    return 
                }

                showFailureAlert({
                    message: "Something unfortunate happened, please try again shortly.",
                    time:5000
                })
            })

        clearGetting()
    }

    function updatePage(res) {
        if (res.data.next) return setContacts((oldData) => ({...oldData, page: oldData.page + 1}))
        setContacts((oldData) => ({...oldData, page: 0}))
    }

    function initiateContacts() {
        setContacts((oldData) => ({data: [], page: 1}))
    }

    function updateContacts(data) {
        setContacts((oldData) => ({...oldData, data: [...oldData.data, ...data,]}))
    }

    function showGetting(type) {
        setGetting(() => ({type, show: true}))
    }

    function clearGetting() {
        setGetting(() => ({type: '', show: false}))
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Contacts</div>
                        <div className='flex flex-col overflow-hidden overflow-y-auto justify-start items-center space-y-4 p-2'>
                            {(contacts.data?.length > 0) ?
                                <>
                                    {contacts.data.map((contact, idx) => (
                                        <Contact
                                            key={idx}
                                            contact={contact}
                                            className='w-full'
                                        />
                                    ))}
                                    {contacts.page ? <div 
                                        title='get more contacts'
                                        className='font-bold text-base p-2 cursor-pointer'
                                        onClick={() => getContacts()}
                                        >...</div>: <></>}
                                </> :

                                <></>
                            }

                            {!contacts.data?.length &&
                                <div className='text-gray-600 text-sm w-full text-center'>no contacts for now</div>
                            }
                        </div>
                    </div>
                </div>

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
        </AuthenticatedLayout>
    );
}
