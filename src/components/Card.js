import React from 'react';
import Logo from "../imgs/Logo.png"

const Card = (props) => {
    return(
        <div class="card mx-auto" width="18rem">
            <img class="card-img-top" src={Logo} width={20} height={100} alt="sanitarios campana"/>
        <div class="card-body">
            <h5 class="card-title">Lavatorios</h5>
            <p class="card-text">Mueble colgante para lavatorio</p>
        </div>
    </div>
    );
}

export default Card;