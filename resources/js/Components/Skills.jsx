import { useEffect, useState } from "react"

export default function Skills() {

    const outlinedSkills = [
        'Progamming Languages',
        'Frameworks',
        'DevOps',
        'Software'
    ]
    const detailedSkills = {
        'Progamming Languages': ['C', 'PHP', 'Javascript', 'Python', 'Dart', ],
        'Frameworks': ['Laravel', 'Nestjs', 'Nextjs', 'Vuejs', 'Reactjs', 'Flask', 'Flutter'],
        'DevOps': ['Git', 'Database Management', 'Bash', 'Server Management'],
        'Software': ['Figma', 'MYSQL Workbench', 'Inkscape' ],
    }

    const [activeSkill, setActiveSkill] = useState('DevOps')

    useEffect(() => {
        
    }, [])

    return (
        <div className="sm:flex justify-start space-x-5 items-center select-none">
            <div className="w-[90%] sm:w-fit sm:space-x-0 mx-auto mb-4 sm:mb-0 flex sm:flex-col shrink-0 sm:overflow-visible sm:items-start sm:justify-cemter justify-start items-center overflow-hidden overflow-x-auto p-2 space-x-3">
                {
                    outlinedSkills.map((skill, idx) => {
                        return skill == activeSkill ?
                        (<div 
                            key={idx}
                            onClick={() => {
                                setActiveSkill(skill)
                            }}
                            className='relative w-fit pr-10 z-[1] pl-2 py-2 cursor-pointer mb-3'>
                            <div 
                                className="flex z-[3] text-nowrap justify-between bg-white text-lg font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                                { skill }
                            </div>
                            <div className='bg-white w-full h-full absolute top-0 left-0 z-[-1] rounded'>

                            </div>
                        </div>) :
                        <div
                            key={idx}
                            onClick={() => {
                                setActiveSkill(skill)
                            }}
                            className="flex z-[3] text-nowrap mb-3 cursor-pointer justify-between bg-white text-lg font-bold bg-gradient-to-r from-blue-700 to-violet-500 bg-clip-text w-fit text-transparent">
                            { skill }
                        </div>
                    })
                }
            </div>
            <div className="flex justify-start items-center flex-wrap min-w-[60%]">
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