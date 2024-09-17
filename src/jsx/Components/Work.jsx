import React from 'react'

const Work = ({ Heading, projects, style }) => {

    return (
        <>
            <div className="sec-work">
                <div className="sec-work-inner">
                    <div className="container-fluid">
                        <h1>{Heading}</h1>
                        <div className="projects-group">
                            {projects.map((project, index) => (
                                <div className="project-item" key={index}>
                                    <div className="underlay"></div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <img src={project.img} alt="Images" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work