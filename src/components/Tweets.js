import React from 'react';

function Tweets(props){
    return(
        <div className='tweets'>
            <h3 className='item'>{props.item}<br></br> {props.message}</h3>
            
            
        </div>
    );
}

export default Tweets;