import React from 'react';

const DisplayLinks = ({ projectData }) => {

    const webTitle = 'Sitio Web'
    const gitHubIcon = 'https://cdn-icons-png.flaticon.com/32/25/25231.png'

    return (
        <>
        {projectData.website && projectData.website.map((web, i) => (
            <ul key={i}><li>
                <p><strong>{web.title ?? webTitle}: </strong>
                    { web.image ? (
                        <a href={web.link}>
                            <img src={web.image} width="9%" alt={"Icono del sitio web de "+projectData.name} loading="lazy"/>
                        </a>
                    ) : (
                        <a href={web.link}>{web.name}</a>
                    )}
                </p>
            </li></ul>
        ))}
        {projectData.github && projectData.github.map((git, i) => (
            <ul key={i}><li>
                <p><strong>GitHub: </strong>
                    <a href={git.link}><img src={git.image ?? gitHubIcon} loading="lazy" 
                    width="32px" height="32px" alt={"Enlace al repositorio en Github de "+projectData.name}/></a>
                </p>
            </li></ul>
        ))}
        </>
    )
}

export default DisplayLinks