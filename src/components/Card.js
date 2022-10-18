import React from 'react';
import Logo from "../imgs/Logo.png"

const Card = (props) => {
    return(
        <div className="card mx-auto" width="18rem">
            <img className="card-img-top" src={props.images} width={20} height={100} alt="producto"/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
        </div>
    </div>
    );
}

export default Card;