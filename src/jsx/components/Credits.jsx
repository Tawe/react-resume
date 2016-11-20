import React from 'react';

let elArry= [];
export default class Credits extends React.Component {
    constructor(props) {
        super();
        this.state = props.data;
        console.log(this.state)
        this.state.items.map((item, i)=>{
            elArry.push(
                <div className="o-card__group" key={i}>
                    <div className="o-card__company">{item.name}</div>            
                    <div className="o-card__client">{item.client}</div>            
                    <div className="o-card__position">{item.title}</div> 
                    <div className="o-card__link"><a className="o-card__href" href={item.link} target="_blank">{item.link}</a></div> 
                </div>           
            );  
        });
    }
    render(props){
        return(
            <div className="o-cards">
                <div className="o-cards__title">{this.state.title}</div>
                <div className="o-cards__card">
                     {elArry}
                </div>
            </div>
        );
    }
}   