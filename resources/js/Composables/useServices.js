export default function useProject() {
    return [
        {
            id: 2,
            name: "Freelance",
            description: "Having an idea that requires a website, web application or mobile application? Do you not know what you require in the first place? Do not worry, even if you are out of budget I can create a payment plan that makes your life easier and your ideas a reality.",
            allowContact: true,
            experience: 4,
            stagesName: "Stages I can help with",
            stages: [
                { name: "planning" },
                { name: "designing" },
                { name: "developing" },
                { name: "testing" },
                { name: "deploying" },
                { name: "maintaining" },
            ],
            tagline: "from planning your applications to deploying them, I am here to help",
            detailsPage: null
        },
        {
            id: 3,
            name: "Contributions",
            description: "Are you a working on a app, package, etc and you need help or extra set of hands to speed up development? Get in touch with me because I am always interested in broadening my scope by working of things that seek to help bring solutions to our ever-improving world.",
            allowContact: true,
            experience: 1,
            tagline: "need free or paid help on a project, let's contribute to it",
            detailsPage: null
        },
        {
            id: 1,
            name: "LetsProgram",
            description: "This is an initiative to bring coding to basic and junior high levels of our educational system. If your school is interested in having it's learners study programming and build interesting web applications while being introduced to the world of technology.",
            allowContact: true,
            detailsPage: '/letsprogram',
            tagline: "lets build the future tech generation together",
        },
    ]
}