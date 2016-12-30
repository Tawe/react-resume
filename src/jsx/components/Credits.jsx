import React from 'react';

const Credits = (props)=>{
    let elArry= [];
    let data = props.data;
    for(let item in data.items){
        elArry.push(
            <div className="o-card__group" key={item}>
                <div className="o-card__company">{data.items[item].name}</div>            
                <div className="o-card__client">{data.items[item].client}</div>            
                <div className="o-card__position">{data.items[item].title}</div> 
                <div className="o-card__link"><a className="o-card__href" href={data.items[item].link} target="_blank">{data.items[item].link}</a></div> 
            </div>           
        );  
    };
    return(
        <div className="o-cards">
            <div className="o-cards__title">{data.title}</div>
            <div className="o-cards__card">
                 {elArry}
            </div>
        </div>
    );
}   

export default Credits;