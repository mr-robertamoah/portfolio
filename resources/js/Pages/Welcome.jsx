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
import XIcon from '@/Icons/XIcon';
import GitHubIcon from '@/Icons/GitHubIcon';
import LinkedinIcon from '@/Icons/LinkedinIcon';
import FacebookIcon from '@/Icons/FacebookIcon';
import Footer from '@/Components/Footer';

export default function Welcome() {
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

                            <div className='relative w-fit mx-auto pr-10 z-[1] pl-2 py-2 mt-20'>
                                <WriteableText 
                                    className="flex z-[3] justify-between bg-white text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent"
                                    message={'Your Full-Stack Developer'}
                                    speed={200}
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
                    <div className='mb-5 text-lg md:text-2xl w-[85%] sm:w-[90%] md:w-full text-center mx-auto'>let us build cool applications, one line of code at a time</div>
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
                        className='w-fit mx-auto px-5 md:px-10 mt-4 text-slate-600 bg-slate-200 p-4 rounded shadow-sm text-sm'
                    >
                        <div>Specialize in:</div>
                        <div className='mt-2 font-bold text-neutral-700'>
                            <div className='flex items-center space-x-2'>
                                <div className='w-2 h-2 rounded-full bg-gradient-to-br from-blue-700 to-purple-700'></div>
                                <div className=''>Full-stack application development</div>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <div className='w-2 h-2 rounded-full bg-gradient-to-br from-blue-700 to-purple-700'></div>
                                <div className=''>Database Adminstration</div>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <div className='w-2 h-2 rounded-full bg-gradient-to-br from-blue-700 to-purple-700'></div>
                                <div className=''>Systems Adminstration</div>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <div className='w-2 h-2 rounded-full bg-gradient-to-br from-blue-700 to-purple-700'></div>
                                <div className=''>DevOps</div>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <div className='w-2 h-2 rounded-full bg-gradient-to-br from-blue-700 to-purple-700'></div>
                                <div className=''>Cloud infrastructure management</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 mx-auto w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] flex items-center justify-center gap-2 sm:gap-4 md:gap-8">
                        <a href="https://x.com/Mr_robertamoah" title='@Mr_robertamoah'>
                            <XIcon className="w-10 h-10"/>
                        </a>
                        <a href="https://github.com/mr-robertamoah" title='@mr-robertamoah'>
                            <GitHubIcon className="w-10 h-10"/>
                        </a>
                        <a href="https://www.linkedin.com/in/mr-robert-amoah" title='@mr-robert-amoah'>
                            <LinkedinIcon className="w-10 h-10"/>
                        </a>
                        <a href="https://www.facebook.com/share/anKqntjci1PuQDD3/" title='Robert Paa Kwesi Amoah'>
                            <FacebookIcon className="w-10 h-10"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="py-2 bg-slate-200">
                <div
                    className='w-[80%] mx-auto mt-4 text-slate-600 bg-slate-200 p-4 text-sm text-center'
                >
                    These are few of the things with which I am familiar.
                </div>

                <div className="sm:px-6 lg:px-8 ">
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
            
            <div className="py-6 bg-white">
                <div className="w-full mx-auto lg:w-[90%] sm:px-6 lg:px-8 p-2">
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
                                    `export default function PrimaryButton({\n\tclassName = '', disabled, children, ...props\n}) {\n\treturn (\n\t\t<button\n\t\t\t{...props}\n\t\t\tclassName={\n\t\t\t\t'inline-flex items-center px-4 py-2 bg-gray-800\n\t\t\t\t\tborder border-transparent rounded-md font-semibold\n\t\t\t\t\ttext-xs text-white uppercase tracking-widest hover:bg-gray-700\n\t\t\t\t\tfocus:bg-gray-700 active:bg-gray-900 focus:outline-none\n\t\t\t\t\tfocus:ring-2 focus:ring-indigo-500 focus:ring-offset-2\n\t\t\t\t\ttransition ease-in-out duration-150 ' + \n\t\t\t\t\t(disabled ? 'opacity-25 ' : ' ')\n\t\t\t\t + className\n\t\t\t}\n\t\t\tdisabled={disabled}\n\t\t>\n\t\t\t{children}\n\t\t</button>\n\t);\n}`,
                                    `import PrimaryButton from '@/Components/PrimaryButton';\n\n<PrimaryButton>View</PrimaryButton>\n`
                                ]}
                                minHeight={450}
                            >
                                <PrimaryButton>View</PrimaryButton>
                            </WriteableCode>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 bg-slate-200">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg p-2">
                        <Projects/>
                    </div>
                </div>
            </div>

            <div className="py-12 bg-white">
                <div className="w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden sm:rounded-lg p-2">
                        <Services/>
                    </div>
                </div>
            </div>

            <Footer/>
            
        </GuestLayout>
    );
}
