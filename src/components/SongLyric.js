const SongLyric = ({title,lyrics}) => {
    return (
        <section className="letra">
            <h2 className="tit">{title}</h2>
            <div style={{whiteSpace:"pre-wrap"}}>{lyrics}</div>
        </section>
    )
}

export default SongLyric
