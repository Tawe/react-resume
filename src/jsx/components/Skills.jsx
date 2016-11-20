import React from 'react';

let elArry= [];
export default class Skills extends React.Component {
    constructor(props) {
        super();
        this.state = props.data;
        this.state.items.map((item, i)=>{
            elArry.push(
                 <div className="o-card__title" key={i}>{item.experience}</div>            
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