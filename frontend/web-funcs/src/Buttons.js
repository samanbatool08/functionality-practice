import React from 'react'

class Buttons extends React.Component {
    
    state = {   
        number: 0
    }

    increment = (e) => {
        console.log('hitting')
        console.log(e.target.value)

        if(e.target.value === 'left'){
            this.setState({
                number: this.state.number - 1
            }) }
            else if(e.target.value === 'right'){
                this.setState({
                    number: this.state.number + 1
                })
            }
        
        }
        
    

    render(){
        console.log('working')
        return (
            <div className='buttons'>
                <h2>buttons</h2>
                <button className='buttons__number'>{this.state.number}</button>
                <button className='buttons__left' onClick={this.increment} value='left'>Left</button>
                <button className='buttons__right' onClick={this.increment} value='right'>Right</button>
            </div>
        )
    }
}

export default Buttons
