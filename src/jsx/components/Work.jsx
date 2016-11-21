import React from 'react';

let elArry= [];
export default class Work extends React.Component {
    constructor(props) {
        super();
        this.state = props.data;
        this.state.items.map((item, i)=>{
            elArry.push(
                <div className="o-card__group" key={i}>
                    <div className="o-card__company">{item.company}</div>            
                    <div className="o-card__position">{item.title}</div>            
                    <div className="o-card__dates">{item.dates}</div> 
                    <div className="o-card__tasks">{item.tasks}</div> 
                    <div className="o-card__tech">{"Tech Used: "} <em>{item.tech}</em></div> 
                </div>           
            );
        });
    }
    render(props){
        return(
            <div className="o-cards">
                <div className="o-cards__title">{this.state.title}</div>
                <div className="o-cards__card">
                    <div className="o-camkrd__bg"></div>
                     {elArry}
                </div>
            </div>
        );
    }
}   