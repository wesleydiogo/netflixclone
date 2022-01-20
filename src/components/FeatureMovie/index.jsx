import './FeaturedMovie.css'

export default ({ item }) => {

    const genres = (item) => {
        let allGenres = item.map((item) => item.name)
        return allGenres.join(", ")
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average * 10}% relevante</div>
                        <div className="featured--year">{item.first_air_date.split("-")[0]}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{item.overview.length > 155 ? `${item.overview.slice(0, 154)}...` : item.overview}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className='featured--watchbutton'>► Assistir</a>
                        <a href={`/list/add/${item.id}`} className='featured--mylistbutton'>+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros: </strong>{genres(item.genres)}</div>
                </div>
            </div>

            <div>
            </div>
        </section>
    )
}