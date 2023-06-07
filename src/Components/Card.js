import React from "react";
import '../Containers/Card.css'

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 wid'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div className="cardW">
                <h2 className="f2">{name}</h2>
                <p className="f3">{email}</p>
            </div>
        </div>
    );
}
export default Card;