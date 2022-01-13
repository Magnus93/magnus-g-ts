import React from "react";
import projects, { ProjectData } from "./project";
import "./ProjectPage.scss";
// get our fontawesome imports
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TagCounter {
    name: string
    keyword: string
    count: number
}

class ProjectsPage extends React.Component {

    state = {
        projectData: projects,
        selectedTag: "",
    }

    tags : TagCounter[] = this.getAllTags();

    getAllTags() : TagCounter[] {
        let reducer = (acc: TagCounter[], proj: ProjectData) => {
            proj.tags.forEach(tag => {
                let index : number = acc.map(a => a.keyword).indexOf(tag);
                if (index === -1) {
                    // tag not included => add tag
                    acc.push({name: tag, keyword: tag, count: 1});
                } else {
                    // tag already included => increament counter for tag
                    acc[index].count++;
                }
            });
            acc[0].count++;
            return acc;
        };
        let allTags : TagCounter[] = projects.reduce(reducer, [{name: "All Projects", keyword: "", count: 0}]);
        return allTags;
    }

    filterProjects(keyword: string) {
        let newProjs : ProjectData[] = projects;
        let newKeyword : string = "";
        if (keyword !== "" && keyword !== this.state.selectedTag) {
            newProjs = projects.filter(proj => proj.tags.includes(keyword));
            newKeyword = keyword;
        }
        this.setState({ projectData: newProjs, selectedTag: newKeyword });
    }

    renderProjects() {
        return (
          <div>
            {this.state.projectData.map((proj, index) => {
              return (
                <div key={index} className="container">
                  <div className="container__infodiv">
                    <h2>{proj.title}</h2>
                    <div className="container__infodiv__tagsdiv">
                      {proj.tags.map((tag, tag_index) => {
                        return (
                          <div
                            key={"tag" + tag_index}
                            onClick={this.filterProjects.bind(this, tag)}
                            className={`tag ${
                              this.state.selectedTag === tag ? "active" : ""
                            }`}
                          >
                            {tag}
                          </div>
                        );
                      })}
                    </div>
                    <p>{proj.desc}</p>
                    {proj.links?.map((link, link_index) => {
                      return (
                        <div key={link_index} className="project-link-div">
                          <a href={link.href} target="_blank" rel="noreferrer">
                            {link.name} <FontAwesomeIcon icon={faExternalLinkAlt} />
                          </a>
                        </div>
                      );
                    })}
                    <p className="container__infodiv__time">{proj.time}</p>
                  </div>
                  <div className="container__imgdiv">
                    <img
                      className="container__imgdiv__img"
                      src={proj.image}
                      alt={proj.title}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        );
      }

    render() {
        return (
          <div className="content-parent">
            <div className="content">
              <h1 className="mobilepadding">Magnus Gustafsson</h1>
              <p className="mobilepadding">
                Hi, here are some projects made the last few years.
              </p>
              <div className="clicktags mobilepadding">
                Filter:
                <br />
                {this.tags.map((tag, tag_index) => {
                  return (
                    <div
                      key={tag_index}
                      className={`clicktags__tag tag ${
                        this.state.selectedTag === tag.keyword ? "active" : ""
                      }`}
                      onClick={this.filterProjects.bind(this, tag.keyword)}
                    >
                      <span className="tagname">{tag.name}</span> &nbsp;
                      <span className="tagcount">{tag.count}</span>
                    </div>
                  );
                })}
              </div>
              {this.renderProjects()}
            </div>
          </div>
        );
      }
}

export default ProjectsPage;