import React from "react";
import { Component } from "react";
//렌더링할 컴포넌트에 다른 컴포넌트 가져와서 렌더링
import axios from "axios";
//node.js와 브라우저를 위한 http통신 javascript 라이브러리
//promise를 지원한다.

import Movies from "./movies";
import "./App.css";
class App extends Component {
  //import 컴포넌트를 헤더에서 안해줬다면, react.Component
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {const {data: {data: { movies },},
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies: movies, isLoading: false });
  };
  //async await
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading
        ?(<div className="loader">
          <span className="loader_text">Loading...</span>
        </div>)
          : (<div className="movies">{movies.map(movie => (
            <Movies
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
      ))}</div>)}
      </section>
    );
  }
}

export default App;