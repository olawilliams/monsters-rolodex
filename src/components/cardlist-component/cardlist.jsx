import React from 'react';
import './cardlist-styles.css';
import Card   from '../card-component/card.jsx';


const CardList = (props) => {
    return (
        <div className= 'cardlist'>
          {
            props.monsters.map(monsters => 
            <Card key={monsters.id}  monsters={ monsters }/>)}
          
        </div>
    )
}

export default CardList;