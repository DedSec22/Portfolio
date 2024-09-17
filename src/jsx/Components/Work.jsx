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
                                <div className={`project-item project-item-${index}`} key={index}>
                                    <div className="underlay"></div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <iframe
                                            src={project.link}
                                            frameBorder="0"
                                            style={{ width: '100%', height: '300px', border: 'none' }}
                                            allowFullScreen
                                        ></iframe>
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