import React from 'react';


const Work = (props)=>{
    let elArry= [];
    let data = props.data;
    for(let item in data.items){
        elArry.push(
            <div className="o-card__group" key={item}>
                <div className="o-card__company">{data.items[item].company}</div>            
                <div className="o-card__position">{data.items[item].title}</div>            
                <div className="o-card__dates">{data.items[item].dates}</div> 
                <div className="o-card__tasks">{data.items[item].tasks}</div> 
                <div className="o-card__tech">"Tech Used: " <em>{data.items[item].tech}</em></div> 
            </div>           
        );
    };
    return(
        <div className="o-cards">
            <div className="o-cards__title">{data.title}</div>
            <div className="o-cards__card">
                <div className="o-camkrd__bg"></div>
                 {elArry}
            </div>
        </div>
    );
}   

export default Work;