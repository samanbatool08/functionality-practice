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
                <button className='buttons__left' onClick={this.increment} value='left'>Left</button>
                <button className='buttons__right' onClick={this.increment} value='right'>Right</button>
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
    }
  }

export default connect(msp, mdp) (Buttons);

//  
    
