import React from 'react';
import projects from './project';
import './ProjectPage.scss';

class ProjectsPage extends React.Component {

    state = {
        projectData: projects,
        selectedTag: ""
    }

    filterProjects() {
        
    }

    renderProjects() {
        return (<div>
            {this.state.projectData.map((proj, index) => {
                return (<div key={index} className="container">
                    <div className="container__infodiv">
                        <h2>{proj.title}</h2>
                        <div className="tagsdiv">
                            {proj.tags.map((tag, tag_index) => {
                                return (<div key={"tag"+tag_index} onClick={this.filterProjects.bind(this, tag)}>
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
                        <p className="timeparagraph">{proj.time}</p>
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