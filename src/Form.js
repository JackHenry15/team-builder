
import React from 'react'

export default function Form(props) {
const {values, update, submit } = props

const onChange = evt =>{
    const {name, value} = evt.target
    update(name, value)
}

const onSubmit = evt => {
    evt.preventDefault()

    submit()
}

    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
            <label>Name: 
                <input
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={values.name}
                    placeholder='Type your name...'
                    maxLength='15'
                />
            </label>
            <label>Email: 
                <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={values.email}
                    placeholder='name@email.com'
                />
            </label>
            <label>Role: 
                <select value={values.role} name="role" onChange={onChange}>
                    <option value=''>----Select Role----</option>
                    <option value='CHEF'>Chef</option>
                    <option value='BARTENDER'>Bartender</option>
                    <option value='SERVER'>Server</option>
                    <option value='MANAGER'>Manager</option>
                </select>
            </label>
                <div className='submit'>
                    <button disabled={!values.name || !values.email || !values.role}>submit</button>
                </div>
            </div>

        </form>
    );
}