import React from 'react';

let elArry= [];
export default class Info extends React.Component {
    constructor(props) {
        super();
        this.state = props.data;
        this.state.items.map((item, i)=>{
            elArry.push(
                <div key={i}> 
                    <div className="o-card__name">{item.name}</div>            
                    <div className="o-card__role">{item.title}</div>
                    <div className="o-card__contact"><a href={"mailto:"+item.contact}>{item.contact}</a></div>
                </div>            
            );
        });
    }
    render(props){
        return(
            <div className="o-cards c-cards__info">
                <div className="o-cards__title">{this.state.title}</div>
                <div className="o-cards__card">
                     {elArry}
                </div>
            </div>
        );
    }
}   