import React from 'react';
import CardInfo from '../components/CardInfo';


function Card(props){
    return(

        <div className="d-inline-block r-card">
            <img className="r-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>
        </div>

    );
}

export default Card;