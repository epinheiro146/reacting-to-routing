import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FilmDetails = () => {

    const [details, setDetails] = useState(null);

    const { filmid } = useParams();

    useEffect(() => {
        fetch(`http://api-ghibli.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(data => setDetails(data))
            .catch(e => alert(e.message));
    }, [filmid]);

    return (

        <div className="card m-4 bg-info-subtle border border-info border-2 shadow">
            <div className="card-body">
                <h1 className="card-title text-center text-info">{`${details?.title} (${details?.release_date})`}</h1>
                <div className="row justify-content-evenly my-4">
                    <img className="col-5" src={details?.image} alt="movie poster" />
                    <div className="col-5">
                        <h4>Original Title: {details?.original_title}</h4>
                        <h4>Romaji: {details?.original_title_romanised}</h4>
                        <h4>Director: {details?.director}</h4>
                        <p className="card-text mt-4">{details?.description}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FilmDetails;