import React from 'react';

const Info = (props)=>{
    let data = props.data;
    return(
        <div className="o-cards c-cards__info">
            <div className="o-cards__title">{data.title}</div>
            <div className="o-cards__card">
                 <div className="o-card__name">{data.name}</div>            
                 <div className="o-card__role">{data.title}</div>
                 <div className="o-card__contact"><a href={"mailto:"+data.contact}>{data.contact}</a></div>
            </div>
        </div>
    );
}   
export default Info;