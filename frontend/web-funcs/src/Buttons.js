import React from 'react';
import './buttons.css';

class Buttons extends React.Component {
   
    
    render(){

      
        return (
            <div className='buttons'>
                <h2>buttons</h2>
                <button className='buttons__number'>8</button>
                <button className='buttons__left' value='left'>Left</button>
                <button className='buttons__right' value='right'>Right</button>
            </div>
        )
    }
}


export default Buttons;

// state = {   
//     number: 0
// }

// increment = (e) => {
//     console.log('hitting')
//     console.log(e.target.value)

//     if(e.target.value === 'left'){
//         this.setState({
//             number: this.state.number - 1
//         }) }
//         else if(e.target.value === 'right'){
//             this.setState({
//                 number: this.state.number + 1
//             })
//         }
    
//     }
    
    
