const SongArtist = ({ artist }) => {
    return (
        <section className="letra">
            <h2 className="artista">{artist.strArtist}</h2>
            <img src={artist.strArtistThumb} alt={artist.strArtist}/>
            <p>{artist.intBornYear} - {artist.intDiedYear || "Presente"}</p>
            <p>{artist.strCountry}</p>
            <p>{artist.strGenre} - {artist.strStyle}</p>
            <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">Sitio Web Oficial</a>
            <p>{artist.strBiographyES}</p>
        </section>
    )
}
export default SongArtist;