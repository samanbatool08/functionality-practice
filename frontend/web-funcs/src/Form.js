import React from 'react'

function Form() {
    return (
        <div>
            <form>
                <label>Name: 
                    <input type='text' name='name' />
                </label>

                <textarea> Here is some textarea</textarea>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default Form
