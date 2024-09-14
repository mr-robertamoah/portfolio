import { useEffect, useState } from "react"

export default function Skills() {

    const outlinedSkills = [
        'Progamming Languages',
        'Backend Frameworks',
        'Frontend Frameworks',
        'DevOps',
        'Database Management',
        'Systems Administration',
        'Tools',
        'Cloud Infrastructure Management',
    ]
    const detailedSkills = {
        'Progamming Languages': ['C', 'PHP', 'Javascript', 'Python', 'Dart', ],
        'Backend Frameworks': ['Laravel', 'Nestjs', 'Nextjs', 'Node Express'],
        'Frontend Frameworks': ['Vuejs', 'Reactjs', 'React Native'],
        'DevOps': ['Git', 'GitHub', 'GitHub Actions'],
        'Database Management': ['Postgres', 'MYSQL', 'Microsoft Access', 'MongoDB' ],
        'Systems Administration': ['Bash scripting', 'Python scripting', 'Linux', ],
        'Tools': ['Figma', 'MYSQL Workbench', 'Inkscape', 'Microsoft Excel' ],
        'Cloud Infrastructure Management': ['Terraform', 'CloudFormation', 'Management Console', 'AWS CLI' ],
    }

    const [activeSkill, setActiveSkill] = useState('DevOps')

    useEffect(() => {
        setActiveSkill('DevOps')
    }, [])

    return (
        <div className="block select-none sm:gap-4 sm:grid sm:grid-cols-3 md:grid-cols-2 md:w-[80%] lg:w-[60%] mx-auto">
            <div className="w-[90%] sm:col-span-2 md:col-span-1 sm:mx-0 mx-auto mb-4 flex justify-start sm:items-start sm:flex-col items-center overflow-hidden overflow-x-auto md:overflow-x-hidden p-2 space-x-3 sm:space-x-0">
                {
                    outlinedSkills.map((skill, idx) => {
                        return skill == activeSkill ?
                        (<div key={idx}>
                            <div
                                onClick={() => {
                                    setActiveSkill(skill)
                                }}
                                className='relative w-fit pr-10 z-[1] pl-2 py-2 cursor-pointer sm:flex sm:flex-col'>
                                <div 
                                    className="flex z-[3] text-nowrap justify-between bg-white text-lg font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                                    { skill }
                                </div>
                                <div className='bg-white w-full h-full absolute top-0 left-0 z-[-1] rounded'>

                                </div>
                            </div>
                        </div>
                        ) :
                        <div className="flex items-center" key={idx}>
                            <div
                                onClick={() => {
                                    setActiveSkill(skill)
                                }}
                                className="flex z-[3] text-nowrap cursor-pointer justify-between bg-white text-lg font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                                { skill }
                            </div>
                            { (idx < outlinedSkills.length - 1) ? <div className="mx-2 sm:hidden font-bold text-lg">|</div> : <></>}
                        </div>
                    })
                }
            </div>
            <div className="flex justify-center items-center flex-row flex-wrap">
                {
                    (detailedSkills[activeSkill] && detailedSkills[activeSkill].length) ?
                    detailedSkills[activeSkill].map((skill, idx) => {
                        return <div key={idx} className="capitalize mb-2 mr-3 text-center min-w-[100px] p-2 rounded bg-slate-600 text-slate-100">{ skill }</div>
                    }) :
                    <div className="text-sm text-slate-600 w-full text-center">nothing here</div>
                }
            </div>
        </div>
    )
}