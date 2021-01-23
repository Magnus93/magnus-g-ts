import React from 'react';
import projects, { ProjectData } from './project';
import './ProjectPage.scss';

interface TagCounter {
    tag: string,
    keyword: string,
    count: number 
}

class ProjectsPage extends React.Component {

    state = {
        projectData: projects,
        selectedTag: ""
    }

    filterProjects(keyword: string) {
        let newProjs : ProjectData[] = projects;
        let newKeyword : string = "";
        if (keyword != "" && keyword != this.state.selectedTag) {
            newProjs = projects.filter(proj => proj.tags.includes(keyword));
            newKeyword = keyword;
        }
        this.setState({ projectData: newProjs, selectedTag: newKeyword });
    }

    renderProjects() {
        return (<div>
            {this.state.projectData.map((proj, index) => {
                return (<div key={index} className="container">
                    <div className="container__infodiv">
                        <h2>{proj.title}</h2>
                        <div className="container__infodiv__tagsdiv">
                            {proj.tags.map((tag, tag_index) => {
                                return (<div key={"tag"+tag_index} onClick={this.filterProjects.bind(this, tag)} className={`tag ${this.state.selectedTag == tag ? "active" : ""}`}>
                                    {tag}
                                </div>);
                            })}
                        </div>
                        <p>{proj.desc}</p>
                        {proj.links?.map((link, link_index) => {
                            return (<div key={link_index}><a href={link.href} target="_blank">
                                {link.name}
                            </a></div>);
                        })}
                        <p className="container__infodiv__time">{proj.time}</p>
                    </div>
                    <div className="container__imgdiv">
                        <img className="container__imgdiv__img" src={proj.image}/>
                    </div>
                </div>);
            })}
        </div>);
    }

    render() {
        return (<div>
            <h1>Magnus Gustafsson</h1>
            <p>Hi, here are some projects made the last few years.</p>
            {this.renderProjects()}
        </div>);
    }
}

export default ProjectsPage;