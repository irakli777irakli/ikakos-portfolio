export const navItems = ["About","Projects","Contact"]
import {DiJsBadge,DiReact,DiPython, DiCss3,DiPostgresql} from 'react-icons/di'
import {TbBrandNextjs} from 'react-icons/tb'
import {
    SiFastapi,SiSolidity,SiRedux,SiGit,
    SiTypescript,SiCsharp,SiDotnet,SiMicrosoftsqlserver
} from 'react-icons/si'
import {FaAngular,FaSass} from 'react-icons/fa';


export const techStack = [
    
    {
        symbol: <SiTypescript color='#2F58CD'/>,
        name: "Typescript"
    },
    {
        symbol: <SiCsharp color='#77037B' />,
        name: "C#",
    },
    {
        symbol: <DiPython color='#25316D'/>,
        name: "Python",
    },
    {
        symbol: <DiReact color='#82C3EC' />,
        name: "Reactjs"
    },
    {
        symbol: <TbBrandNextjs color='black'/>,
        name: "Nextjs" 
    },
    {
        symbol: <FaAngular color='#E74646' />,
        name: "Angular" 
    },
    {
        symbol: <SiDotnet color='#97DEFF' />,
        name: "Asp net core",
    },
    {
        symbol: <SiFastapi color='#03C988'/>,
        name: "FastApi"
    },
    {
        symbol: <FaSass color='#B46060'/>,
        name: "Sass"
    },
    {
        symbol: <SiGit color='#EF9A53' />,
        name: "Git"
    },
    {
        symbol: <SiRedux color='#8D72E1'/>,
        name: "Redux-toolkit"
    },
    
    
    {
        symbol: <SiMicrosoftsqlserver color='#89375F'/>,
        name: "Microsoftsqlserver",
    },
    {
        symbol: <DiPostgresql color='#A555EC'/>,
        name: "Postgrasql",
    },
    {
        symbol: <SiSolidity color='#1A120B' />,
        name: "Solidity",
    },
    
    

]


export const projects = [
    {   
        name:"ikakos-eccomerce",
        webImg: "/ikakos-eccomerce.png",
        liveLink: "https://ikakos-eccomerce.vercel.app/",
        githubLink:"https://github.com/irakli777irakli/ikakos-eccomerce",
        technologies: [
            {
                symbol: <DiReact color='#82C3EC' />,
                name: "Reactjs"
            },
            {
                symbol: <DiCss3 color='#4B56D2'/>,
                name: "Css"
            },
            {
                symbol: <SiRedux color='#8D72E1'/>,
                name: "Redux-toolkit"
            },
            {
                symbol: <SiGit color='#EF9A53' />,
                name: "Git"
            },
        ],
        
        projectDetails: "I challenged myself to create ecommerce app, which would tested my overall state managment, complex conditional rendering and proper useEfect calling skills. App has most of the featutures which usual ecommerce app has,except checkout  and registration page",
        projectDifficulties: "In this project there were to many moving parts, nested objects, feature rich products, currencies, so I dicied to use reduxt-toolkit, it was first time for me using redux, I stucked several times because of problems like: one state was dependent on several ones, messy useEffect calls, dispatching multiple acition in one shot to name a few. ",
        mySolution: "I took feature slice approach, I created a slice with all of the states and action to dispatch them, in some action I was dispatching multiple states to manage state properly, I also used Useffect combination when, state was changing in slice, in order to reflect changes.",
        notableFeatures: [
            "add & remove item from cart",
            "increase & decrease count",
            "change currencies",
            "add & remove feature from Item ",

        ],
    },
    {
        name:"Food App",
        webImg: "/foodapp.png",
        liveLink: "https://foodapp-iota.vercel.app/",
        githubLink:"https://github.com/irakli777irakli/foodapp",
        technologies: [
            {
                symbol: <DiReact color='#82C3EC'/>,
                name: "Reactjs" 
            },
            {
                symbol: <SiTypescript color='#2F58CD'/>,
                name: "Typescript"
            },
            {
                symbol: <FaSass color='#B46060'/>,
                name: "Sass"
            },

            {
                symbol: <SiGit color='#EF9A53' />,
                name: "Git"
            },
        ],
        projectDetails: "Explore recipes by category and name",
        projectDifficulties: "First time using Typescript in react app.",
        mySolution: "I have understand core concepts of React typescript. Interfaces with props, ContextAPI types. working with null and undefined",
        notableFeatures: [
            "search favorite food within categories",
            "read recipe"
        ],
        
    },
    {
        name:"Cv Generator",
        webImg: "/cvGenerator.png",
        liveLink: "https://vercel.com/irakli777irakli/registration-form",
        githubLink:"https://github.com/irakli777irakli/registration-form",
        technologies:[
            {
                symbol: <TbBrandNextjs color='black'/>,
                name: "Nextjs"
            },
            {
                symbol: <DiCss3 color='#4B56D2'/>,
                name: "Css"
            },
            {
                symbol: <SiGit color='#EF9A53' />,
                name: "Git"
            },
        ],
        projectDetails: "Registration Form",
        projectDifficulties: "This was the Redberry agency's internship Task which had to be complated within 10days",
        mySolution: "I have used reactive forms with conditional rendering to generated different forms with single Component",
        notableFeatures: [
           "enter your details and generate cv",
           "see how your cv is generated"
        ],
        
    }
]
