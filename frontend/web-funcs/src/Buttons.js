import React from 'react'

class Buttons extends React.Component {
    render(){

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
