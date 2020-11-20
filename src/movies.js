import PropTypes from "prop-types";
import "./Movies.css";
//함수 파라미터로 Props가 아닌 데이터를 바로 가져올때는 {}를 꼭 씌우기
function Movies({id, year, title, summary, poster, genres}) {
    return <div className="movie">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <img src={poster} alt={title} title={title}/>
                <ul className="genres"> {genres.map((genre,index) => (<il key={index} className="genre">•{genre}</il> ))} </ul>
                <div className="summaryDiv"><p className="movie_summary">{summary.slice(0,300)}</p></div>
            </div>;
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired
  //장르나 시놉시스, 유튜브 영상 링크도 달아보기
};

export default Movies;