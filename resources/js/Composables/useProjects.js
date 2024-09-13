export default function useProjects() {
    const ProjectTypes = {individual: 'Individual', group: 'Group', openSource: 'Open Source'}
    return [
        {
            id: 1,
            name: "TalkTherapy",
            tagline: "talk your way to a better mental state",
            description: "This is a web application that seeks to promote mental health by making it easy for users to connect with professional and verified counsellors.",
            links: [
                {name: null, type: "site", href: "https://talktherapy.tech"},
                {type: "github", name: "TalkTherapy", href: "https://github.com/mr-robertamoah/TalkTherapy"},
            ],
            stage: 5,
            allowContribution: true,
            type: ProjectTypes.individual,
            skills: [
                {name: "Laravel", type: "Backend"},
                {name: "Vuejs", type: "Frontend"},
                {name: "TailwindCss", type: "Frontend"},
                {name: "Git/GitHub", type: "DevOps"},
                {name: "GitHub Actions", type: "DevOps"},
                {name: "MYSQL", type: "Database"},
            ]
        },
        {
            id: 2,
            name: "YourEdu",
            tagline: "learn through socialization",
            description: "This is an web application that seeks use socialization as a tool to bring equitable education to all. ",
            links: [
                {name: null, type: "site", href: ""},
                {type: "github", name: "YourEdu", href: "https://github.com/mr-robertamoah/YourEdu"},
            ],
            stage: 2,
            allowContribution: true,
            type: ProjectTypes.individual
        },
        {
            id: 3,
            name: "dto",
            tagline: "create objects from arrays and request for your services and actions",
            description: "This is a laravel package that makes transfer of data in between classes or functions easier by providing ways of mapping the object variables to data using arrays or requests.",
            links: [
                {name: null, type: "site", href: ""},
                {type: "github", name: "dto", href: "https://github.com/mr-robertamoah/dto"},
            ],
            stage: 6,
            allowContribution: true,
            contributionMessage: null,
            type: ProjectTypes.openSource
        },
        {
            id: 4,
            name: "crimesocial",
            description: "This is an application that seeks to socialize the action of reporting crime hence making it easier and user-friendly. The app then notifies agents and agencies of concern for prompt investigations. The app also provides a way for individuals to check the crime statistics regarding an area.",
            links: [
                {name: null, type: "site", href: ""},
                {type: "github", name: "Crimesocial", href: "https://github.com/mr-robertamoah/crimesocial"},
            ],
            stage: 2,
            allowContribution: true,
            type: ProjectTypes.openSource
        },
        {
            id: 5,
            name: "Portfolio",
            description: "This is a web application which speaks to my strenghts as well as showcasing the projects I have worked on.",
            links: [
                {type: "github", name: "portfolio", href: "https://github.com/mr-robertamoah/portfolio"},
            ],
            stage: 4,
            type: ProjectTypes.individual,
            skills: [
                {name: "Laravel", type: "Backend"},
                {name: "Reactjs", type: "Frontend"},
                {name: "TailwindCss", type: "Frontend"},
                {name: "Git/GitHub", type: "DevOps"},
                {name: "GitHub Actions", type: "DevOps"},
                {name: "MYSQL", type: "Database"},
            ]
        },
    ]
}