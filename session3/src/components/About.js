function About ({image, about}) {
    return (
        <aside>
            <img src={image} defaultValue = "https://via.placeholder.com/215" alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

About.defaultProps = {
    image : "https://via.placeholder.com/215"
}

export default About;