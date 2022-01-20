import './MovieRow.css'

export default (props) => {
    const title = props.title
    const items = props.items

    return (
        <div className="movieRow">
            <h2>
                {title}
            </h2>
            <div className="movieRow--listarea">

                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key) =>
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={items.original_title} />
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}