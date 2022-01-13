import React from "react";
import "./AboutPage.scss";
import githubIcon from "./svg/github-icon.svg";
import linkedinIcon from "./svg/linkedin-icon.svg";
import mailIcon from "./svg/mail-icon.svg";

interface Link {
    icon: string
    name: string
    href: string
}

let links : Link[] = [
    {
        icon: linkedinIcon,
        name: "LinkedIn/in/magnus-g",
        href: "https://www.linkedin.com/in/magnus-g/"
    },
    {
        icon: githubIcon,
        name: "GitHub.com/Magnus93",
        href: "https://github.com/Magnus93"
    },
    {
        icon: mailIcon,
        name: "magnus.ja.gustafsson@gmail.com",
        href: "mailto:magnus.ja.gustafsson@gmail.com"
    }
];


const birth: any = new Date('May 11, 1993 16:10:00')
const age: number = Math.floor((Date.now() - birth)/ (1000 * 60 * 60 * 24 * 365))

class AboutPage extends React.Component {
    render() {
        return (
          <div className="content-parent magnus-face">
            <div className="glasses-hover"></div>
            <div className="content">
              <h1>Magnus Gustafsson</h1>
              <p>
                {age}-year old and graduated 2020 at MSc. in Computer and Information Engineering at Uppsala University, Sweden. Currently working as a Software Developer at Intergiro Intl AB in Uppsala.
              </p>
              {links.map((l) => {
                return (
                  <a
                    key={l.name}
                    href={l.href}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={l.icon} className="link__img" alt={l.name} />
                    <span className="link__name">{l.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        );
    }
}

export default AboutPage