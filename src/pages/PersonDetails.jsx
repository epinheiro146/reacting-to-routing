import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const PersonDetails = () => {

    const [details, setDetails] = useState(null);

    const { personid } = useParams();

    useEffect(() => {
        fetch(`http://api-ghibli.herokuapp.com/people/${personid}`)
            .then(res => res.json())
            .then(data => setDetails(data))
            .catch(e => alert(e.message));
    }, [personid]);

    return (

        <div className="card m-4 border border-info border-2 shadow" style={{ width: '40rem' }}>
            <div className="card-body">
                <h1 className="card-title text-center text-info">{details?.name}</h1>
                <div className="d-flex flex-row flex-wrap justify-content-evenly my-4">
                    <h4 className="col-5">Gender: {details?.gender}</h4>
                    <h4 className="col-5">Age: {details?.age}</h4>
                    <h4 className="col-5">Eye Color: {details?.eye_color}</h4>
                    <h4 className="col-5">Hair Color: {details?.hair_color}</h4>
                </div>
            </div>
        </div >

    );
};

export default PersonDetails;