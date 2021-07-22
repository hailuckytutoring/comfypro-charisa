function Article ({post}) {
    const {title,date,minutes,preview} = post;

    const emoji = minutes < 30 ? "☕️".repeat(Math.ceil(minutes/5)) : "🍱".repeat(Math.ceil(minutes/10))

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} - {emoji}
            {minutes} minute read</small>
            <p>{preview}</p>
        </article>
    )
}

Article.defaultProps = {
    date : "January 1, 1970"
}

export default Article;