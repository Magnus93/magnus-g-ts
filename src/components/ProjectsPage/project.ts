import stochsdimg from './img/stochsd.png';
import portfoliopage from './img/portfolio-page-2021.png';
import stochsdwebpage from "./img/stochsd-webpage.png";
import oldportfolioimg from "./img/old-portfolio.jpg";
import python3d2dimg from "./img/3d-to-2d-python.jpg";
import bumptonormal from "./img/BumpNormalMap.png";
import matrixscreen from "./img/matrixscreenshot.png";
import flyingtree from "./img/flying-tree.png";
import scottish from "./img/scottish.png";
import themechooser from "./img/theme-chooser.png";
import kronkgame from "./img/kronkgame.jpg";

interface Link {
    name : string, 
    href : string
}

export interface ProjectData {
    title : string,
    image : string,
    tags : string[],
    desc : string,
    time?: string,
    links?: Link[]
}

let projects : ProjectData[] = [
    {
        title: "Portfolio website",
        image: portfoliopage,
        tags: ["React", "TypeScript", "SCSS"],
        desc: "This portfolio webpage was made by me. It is a responsive website that changes for smaller screens. This can be tested in the browser by making the browser narrower. The webpage also includes a dark mode. you can try it by clicking in the top right corner.",
        time: "2021 Feb"
    },
    {
        title: "StochSD",
        image: stochsdimg,
        tags: ["JavaScript", "HTML", "CSS", "NW.js", "Node.js"],
        desc: "I continued development on a Open Source Visual Programming Language for Stochastic System Dynamics. I worked to remove bugs and make the program more pedagogical.",
        time: "2018 - 2020",
        links: [
            {
                name: "StochSD Homepage",
                href: "https://stochsd.sourceforge.io/homepage/#/",
            },
            {
                name: "StochSD Source Code",
                href: "https://github.com/stochsd/stochsd/",
            },
            {
                name: "Try StochSD Online",
                href: "https://stochsd.sourceforge.io/software",
            }
        ]
    },
    {
        title: "StochSD Homepage",
        image: stochsdwebpage,
        tags: ["React", "JavaScript", "CSS"],
        desc: "Made StochSD's official webpage in React.",
        time: "2019",
        links: [{
            "name": "Test it in Codepen",
            "href": "https://codepen.io/MrArne/pen/OJPOzea"
        }]
    },
    {
        title: "Theme Chooser",
        image: themechooser,
        tags: ["JavaScript", "HTML", "CSS"],
        desc: "Experimented in Codepen with CSS variables to select theme.",
        time: "2019",
        links: [{
            "name": "Test it in Codepen",
            "href": "https://codepen.io/MrArne/pen/WNbXGmB"
        }]
    },
    {
        title: "Old Portfolio website",
        image: oldportfolioimg,
        tags: ["PHP", "CSS", "JSON"],
        desc: "The website is hosted for free on herokuapp and therefore takes a few seconds to load.",
        time: "2017",
        links: [
            {
                "name": "Link", 
                "href": "http://magnusg.herokuapp.com/index.php"
            }
        ]
    },
    {
        title: "English to Scottish Translator",
        image: scottish,
        tags: ["JavaScript", "HTML", "CSS"],
        desc: "This website translates english to scottish. It's based on and inspired by how Hagrid speaks in the Harry Potter Book Series.",
        time: "2017 Mar",
        links: [{
            name: "Try it yerself!",
            href: "https://english-to-scottish.herokuapp.com/"
        }]
    },
    {
        title: "Matrix Screen",
        image: matrixscreen,
        tags: ["JavaScript", "HTML", "CSS"],
        desc: "Matrix screen made with HTML5 Canvas. Does not work well in Firefox, since canvas effects are performance heavy in Firefox.",
        time: "2017 Jan",
        links: [
            {
                name: "Try it in Chrome - NOT FIREFOX", 
                href: "https://matrixscreen.herokuapp.com/"
            }
        ]
    },
    {
        title: "Flying Christmas Tree Simulator",
        image: flyingtree,
        tags: ["JavaScript", "HTML", "CSS"],
        desc: "Made with HTML5 Canvas. The simulator perserves both directional momentum and angular momentum.",
        time: "2016 Dec",
        links: [
            {
                name: "Fly like a tree!", 
                href: "https://flying-christmas-tree.herokuapp.com/"
            }
        ]
    },
    {
        title: "3D to 2D projection.",
        image: python3d2dimg,
        tags: ["Python", "PyGame"],
        desc: `
            During Linjear Algebra at University I wanted to apply the Math I was learning so I made a simple 3D to 2D projection in PyGame.
            The program had some simple geometric primitives (sphere, cylinder, torus) that could be rotated with the mouse.
        `,
        time: "2016"
    },
    {
        title: "Bump map to Normal map converter",
        image: bumptonormal,
        tags: ["Python", "PyGame", "wxPython"],
        desc: `Program that can take a bump map and convert it to a normal map. A Bump/Normal map is used in on 3D graphics to emulate uneven surfaces. A bump map does this by at each pixel specifying the height with a darker or lighter pixel. A normal map achives this by using the 3 color channels (Red, Green and Blue) to represent surface vectors in  all three dimentions (X, Y and Z).`,
        time: "2016"
    },
    {
        title: "Kronk Game",
        image: kronkgame,
        tags: ["C#", "Unity3D"],
        desc: "The game was created at my Computer Graphics Programme (at YRGO). Before this game, I had only done a little python. But when we had a lesson in programming in Unity3D, I discovered that I could easily program in C# as well. So when we had a group project to make a game, I took it upon myself to program the game. The camera followed the character smoothly when it moved. The character also had an HP-bar and a point-bar. Sadly the code is lost to history since I didn't properly back it up.",
        time: "2015"
    }
]

export default projects;