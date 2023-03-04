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

let links: Link[] = [
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


class AboutPage extends React.Component {
	render() {
		return (
			<div className="content-parent magnus-face">
				<div className="glasses-hover"></div>
				<div className="content">
					<h1>Magnus Gustafsson - <span> Web Developer </span></h1>
					<p>
						I work as a fullstack web developer at Intergiro Intl AB, in Uppsala. I especially enjoy frontend work. I worked on StochSD, an Open-Source Simulation Software, written in native JavaScript, HTML, and CSS without any framework, which gave me a good understanding of how JavaScript, the DOM and CSS work. In addition, I've also tried React and Svelte in side-projects. I'm currently most familiar with StencilJS since that's what I use at my job.
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