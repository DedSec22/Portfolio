import React from 'react';
import Graph from '../../img/icons/Graph.svg';

const Socials = (prop) => {
    const { socialTitle, socialUsername, URL, posts } = prop;
    return (
        <>
            <div className="socials">
                <div className="socials-inner">
                    <div className="container-fluid">
                        <div className="left-titles">
                            <a href={`https://instagram.com/${socialUsername}`} target='_blank' className="social-title" rel="noopener noreferrer">{socialTitle}</a>
                            <a href={`https://instagram.com/${socialUsername}`} target='_blank' className="social-username" rel="noopener noreferrer">@{socialUsername}</a>
                        </div>
                        <div className="right-images">
                            {URL.map((url, index) => (
                                <a href={`https://instagram.com/${socialUsername}`} className='right-images-link' target='_blank' rel="noopener noreferrer">
                                    <img key={index} src={url} alt={`Instagram post ${index + 1}`} />
                                </a>
                            ))}
                        </div>
                        <div className="total-post">
                            <div className="total-post-inner">
                                <span className="numbers">{posts}</span>
                                <span className="text">posts</span>
                            </div>
                            <img src={Graph} alt='Graph' className='graph'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Socials