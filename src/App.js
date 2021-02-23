import React , { useState } from 'react'
import './App.css';
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) =>{
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    };
    if (newMember.name === '' || newMember.email === '' || newMember.role === ''){
      return;
    }
    setMembers([...members, newMember])
    setFormValues(initialFormValues)
  }

  

  return (
    <div className="container">
      <h1>Team Builder</h1>

      <Form      
      values={formValues}
      update={updateForm}
      submit={submitForm}      
      />
      {
        members.map(member => {
          return (
            <div className='member container'>
              <h2>{member.name}</h2>
              <p>Email: {member.email}</p>
              <p>Role: {member.role}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
