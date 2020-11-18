import React from 'react';
import { connect } from 'react-redux';


class Buttons extends React.Component {
   
    dispatch = () => {}
    
    render(){
        console.log('app props', this.props)
        return (
            <div className='buttons'>
                <h2>buttons</h2>
                <button className='buttons__number'>{this.props.number}</button>
                <button className='buttons__left' onClick={this.props.decrement} value='left'>Left</button>
                <button className='buttons__right' onClick={this.props.increment} value='right'>Right</button>
            </div>
        )
    }
}

const msp = (state) => {
    return {
      // props based on state that app will receive
      number: state.number 
    } 
  }
  
  const mdp = (dispatch) => {
    return {
      // series of functions that app will be able to call that affect our store
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
        
    }
  }

export default connect(msp, mdp) (Buttons);

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
    
    
