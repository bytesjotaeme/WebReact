import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import { Empty } from "./Empty";
import whatsappIcon from "./assets/whatsapp.png";
import githubIcon from "./assets/github.png";

export function MoviesGrid({ search }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setTotalPages(data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerText}>
            <p>2023 Películas React</p>
            <div className={styles.socialLinks}>
            <a href="https://api.whatsapp.com/send?phone=5493815557165" target="_blank" rel="noopener noreferrer">
  <img src={whatsappIcon} alt="WhatsApp" />
</a>

              <a href="https://github.com/bytesjotaeme" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </div>
          <div className={styles.scrollButtonContainer}>
            <button onClick={handleScrollToTop} className={styles.scrollButton}>
              ^
            </button>
          </div>
        </div>
        <div className={styles.pagination}>
          <button onClick={handlePreviousPage} disabled={page === 1}>
            Anterior
          </button>
          <button onClick={handleNextPage} disabled={page === totalPages}>
            Siguiente
          </button>
        </div>
      </footer>
      {isLoading && <Spinner />}
    </div>
  );
}
