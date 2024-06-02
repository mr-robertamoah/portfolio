export default function useProjects() {
    const ProjectTypes = {individual: 'Individual', group: 'Group', openSource: 'Open Source'}
    return [
        {
            id: 1,
            name: "TalkTherapy",
            description: "This is an web application that seeks to promote mental health by making it easy for users to connect with professional and verified counsellors.",
            site: "https://talktherapy.tech",
            github: {name: "TalkTherapy", link: "https://github.com/mr-robertamoah/TalkTherapy"},
            stage: 4,
            allowContribution: true,
            type: ProjectTypes.individual
        },
        {
            id: 2,
            name: "YourEdu",
            description: "This is an web application that seeks use socialization as a tool to bring equitable education to all. ",
            site: "",
            github: {name: "YourEdu", link: "https://github.com/mr-robertamoah/YourEdu"},
            stage: 2,
            allowContribution: true,
            type: ProjectTypes.individual
        },
        {
            id: 3,
            name: "dto",
            description: "This is a laravel package that makes transfer of data in between classes or functions easier by providing ways of mapping the object variables to data using arrays or requests.",
            site: "",
            github: {name: "dto", link: "https://github.com/mr-robertamoah/dto"},
            stage: 6,
            allowContribution: true,
            type: ProjectTypes.openSource
        },
        {
            id: 4,
            name: "crimesocial",
            description: "This is an application that seeks to socialize the action of reporting crime hence making it easier and user-friendly. The app then notifies agents and agencies of concern for prompt investigations. The app also provides a way for individuals to check the crime statistics regarding an area.",
            site: "",
            github: {name: "Crimesocial", link: "https://github.com/mr-robertamoah/crimesocial"},
            stage: 2,
            allowContribution: true,
            type: ProjectTypes.openSource
        },
    ]
}