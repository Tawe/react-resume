import React from 'react';

const Skills = (props)=>{
    let elArry= [];
    let data = props.data;
    console.log(data)
    for (let item in data.items){
        elArry.push(
             <div className="o-card__title" key={item}>{data.items[item].experience}</div>            
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


export default Skills;