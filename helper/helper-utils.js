export const navItems = ["About","Projects","Contact"]
import {DiJsBadge,DiReact,DiPython,DiHtml5, DiCss3,DiPostgresql} from 'react-icons/di'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiFastapi,SiStyledcomponents,SiSolidity,SiRedux,SiGit,SiYarn} from 'react-icons/si'


export const techStack = [
    {
        symbol: <DiJsBadge color='yellow'/>,
        name: "Javascript"
    },
    {
        symbol: <DiReact color='#82C3EC' />,
        name: "Reactjs"
    },
    {
        symbol: <DiHtml5 color='orange'/>,
        name: "Html"
    },
    {
        symbol: <DiCss3 color='#4B56D2'/>,
        name: "Css"
    },
    {
        symbol: <TbBrandNextjs color='black'/>,
        name: "Nextjs" 
    },
    {
        symbol: <SiGit color='#EF9A53' />,
        name: "Git"
    },
    {
        symbol:<SiYarn color='#C0DEFF'/>,
        name: "Yarn"
    },
    {
        symbol: <SiStyledcomponents color='#C7BCA1'/>,
        name: "Syled components"
    },
    {
        symbol: <SiRedux color='#8D72E1'/>,
        name: "Redux-toolkit"
    },
    {
        symbol: <DiPython color='#25316D'/>,
        name: "Python",
    },
    {
        symbol: <SiFastapi color='#A6F0C6'/>,
        name: "FastApi"
    },
    {
        symbol: <DiPostgresql color='#A555EC'/>,
        name: "Postgrasql",
    },
    {
        symbol: <SiSolidity color='#1A120B' />,
        name: "Solidity",
    }

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
        name:"Genearl News_",
        webImg: "/ikakos-newsapp.png",
        liveLink: "https://general-news.vercel.app/",
        githubLink:"https://github.com/irakli777irakli/GeneralNews_",
        technologies: [
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
        projectDetails: "I get inspiration of this project from the intercept online magazine, I used conditional rendering heavily there, to achieve same output, I have used API, Which return 25 articles, about each Topic, So I had to clean and conditionaly display them, so Sometimes it takes some time to load single New on fly.",
        projectDifficulties: "It was first time, me building project with next js, I was used to client side data fetching and then storing it to state, But I have read that this is not the way how data fetching is done in Next js, Images are different than img, fonts are optimized, so I forced myself to learn about these.",
        mySolution: "I have understand core concept of nextJs, file based routing, increamental site generation, server side rendering, and when to use which. Images optimization, lazy loading and I continued building this project.",
        notableFeatures: [
           "incremental site generation",
           "server side rendering",
           "file based routing",
           "view single New",
           "Search based on Category",
        ],
        
    },
    {
        name:"Recipe App Yalama",
        webImg: "/ikakos-recipeapp.png",
        liveLink: "https://yalava.netlify.app/",
        githubLink:"https://github.com/irakli777irakli/Recipe-Yalama",
        technologies:[
            {
                symbol: <DiReact color='#82C3EC' />,
                name: "Reactjs"
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
        projectDetails: "Search meals by category, explore recipies, add to favorites,",
        projectDifficulties: "At first I was using state and then drilling them as a props, but then it became nearly impossible to manage it. plus useEffect which was turing into infinite loop",
        mySolution: "I used React context to manage app level state, used conditional useEffects, when fetching data. ",
        notableFeatures: [
           "search favorite food within categories",
           "add and remove from favorites",
           "read recipe"
        ],
        
    }
]
