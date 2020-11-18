import React from 'react'

class Buttons extends React.Component {
    
    state = {   
        increase: false, 
        decrease: false
    }


    render(){
        console.log('working')
        return (
            <div className='buttons'>
                <h2>buttons</h2>
                <button>6</button>
                <button className='buttons__left'>Left</button>
                <button className='buttons__right'>Right</button>
            </div>
        )
    }
}

export default Buttons
