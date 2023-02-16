import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Films = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/films')
            .then(res => res.json())
            .then(data => setFilms(data))
    }, []);

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center">Films</h1>
                </div>
            </section>

            <div className="d-flex flex-wrap row justify-content-center">
                {films.map(film => {
                    return <div key={film.id} className="card m-4 col-4 bg-info-subtle border border-info border-2 shadow">
                        <div className="card-body text-center d-flex flex-column justify-content-between">
                            <h1 className="card-title text-center text-info">{film.title}</h1>
                            <img className="card-img-top my-2" src={film.image} alt="movie poster" />
                            <Link className="btn btn-primary me-2" to={`/films/${film.id}`}>See Info</Link>
                        </div>
                    </div>
                })}
            </div>
        </main>
    );
};

export default Films;