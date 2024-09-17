import React from 'react'

const Socials = (prop) => {
    const { socialTitle, socialUsername } = prop;
    return (
        <>
            <div className="socials">
                <div className="socials-inner">
                    <div className="container-fluid" rel="noopener noreferrer">
                        <div className="left-titles">
                            <a href={`https://instagram.com/${socialUsername}`} target='_blank' className="social-title">{socialTitle}</a>
                            <a href={`https://instagram.com/${socialUsername}`} target='_blank' className="social-username">@{socialUsername}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Socials