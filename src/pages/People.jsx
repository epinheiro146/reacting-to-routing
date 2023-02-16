import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const People = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/people')
            .then(res => res.json())
            .then(data => setPeople(data))
    }, []);

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-center">People</h1>
                </div>
            </section>

            <div className="d-flex flex-wrap row justify-content-center">
                {people.map(person => {
                    return <div key={person.id} className="card col-5 bg-info-subtle border border-info border-2 shadow">
                        <div className="card-body text-center d-flex flex-column justify-content-between">
                            <h1 className="card-title text-center text-info">{person.name}</h1>
                            <Link className="btn btn-primary" to={`/people/${person.id}`}>See Info</Link>
                        </div>
                    </div>
                })}
            </div>
        </main>
    );
};

export default People;