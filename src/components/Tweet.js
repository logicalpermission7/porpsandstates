import React, {useState} from 'react';
import Tweets from './Tweets';

function Tweet(){
    const [count, setCount] = useState(0);
    const [isRed, setRed] = useState(false);
    
  // these arrow functions will increment count.
    const increment_1 = () =>{
        setCount(count + 1);
    }
    const increment_5 = () =>{
        setCount(count + 5);
      }
    const increment_10 = () =>{
        setCount(count + 10);
      }
    const increment_20 = () =>{
        setCount(count + 20);
      }
  // this arrow function will clear count by miltiplying count by 0
    const clear = () =>{
        setCount(count * 0);
    }
    const changer = () =>{
        setRed(!isRed);
    }
    
  
    const messages = [
        {item: 'PROPS:', message: 'Moving data from one component to another.'},
        {item: 'STATES: ', message: 'Used withen a single component to manipulate and change it.'},
       
        
    ]


    return(
        <div  className='button_section'>
            <h1 className={isRed ? 'red' : ''}>{count}</h1>
            <button onClick={isRed ? increment_5 : increment_1}>Increment</button>
            <button onClick={changer}>Change Color</button>
            <button onClick={clear}>Clear</button>
            {messages.map((info) => (
                <Tweets item={info.item} message={info.message}/>
            ))}
        </div>
    )
}
export default Tweet;