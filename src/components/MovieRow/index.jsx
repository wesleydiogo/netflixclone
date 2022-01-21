import './MovieRow.css'
import NavigateBefore from '@mui/icons-material/NavigateBefore'
import NavigateNext from '@mui/icons-material/NavigateNext'
import { useState } from 'react'

export default (props) => {
    const [movieRowScrollX, setMovieRowScrollX] = useState(0)

    const title = props.title
    const items = props.items

    const handleLeftArrow = () => {
        let x = movieRowScrollX + Math.round(window.innerWidth / 2)
        if (x > 0)
            x = 0
        return setMovieRowScrollX(x)
    }

    const handleRightArrow = () => {
        let x = movieRowScrollX - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 150

        if(window.innerWidth - listW > x)
            x = (window.innerWidth - listW) - 60

        return setMovieRowScrollX(x)
    }

    return (
        <div className="movieRow">
            <h2>
                {title}
            </h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBefore className="movieRow--lefticon" style={{ fontSize: 60 }} />
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNext style={{ fontSize: 60 }} />
            </div>
            <div className="movieRow--listarea">

                <div className="movieRow--list" style={{
                    marginLeft: movieRowScrollX,
                    width: items.results.length * 150
                }}>
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