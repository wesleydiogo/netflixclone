import './App.css'
import { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import linkedInLogo from './assets/linkedin-logo.png';

import {
  Header,
  FeaturedMovie,
  MovieRow
} from "./components/index";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {

      // Pegando a lista total
      let list = await Tmdb.getHomeList();

      setMovieList(list)

      // Pegando a Featured
      let originals = list.filter((i) => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')

      console.log(chosenInfo)

      setFeaturedData(chosenInfo)
    }

    loadAll();
  }, [])

  useEffect(() => {
    const scrollListener = () => window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader(false)

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) =>
          <MovieRow key={key} title={item.title} items={item.items} />
        )}
      </section>

      <footer>
        <div className="footer--contact">Meu LinkedIn → <a href="https://www.linkedin.com/in/wesleydiogo/"><img src={linkedInLogo} alt="logo-linkedin"/></a></div>
        <div>
          Feito com <span role="img" aria-label="coração" style={{ color: 'red', fontSize: '22px' }}>♥</span> por Wesley Diogo<br />
          Direitos de imagem para Netflix<br />
          Dados pegos do site TheMovieDB.org
        </div>
      </footer>
    </div>
  )
}