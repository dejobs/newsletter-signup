import './App.css';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [formData, setFormData] =useState({
    email: "",
    password: "",
    confirmPassword: "",
    isSignup: true
  })
const handleInput = event => {
  const {name, value, checked, type} = event.target

  setFormData(prevState => {
    return {
      ...prevState, [name]: type==="checkbox" ? !prevState.isSignup : value
    }
  })
}


const submitButton = (event) => {
  event.preventDefault()
  console.log(formData)

  formData.password===formData.confirmPassword? console.log("correct login") : console.log("password incorrect")
  formData.isSignup===true? console.log("Thanks for signing up") : console.log("You are missing")
}

  return (
    <>
      <Form handleChange={handleInput} superFormData={formData} handleSubmit={submitButton} />
    </>
  );
}

export default App;
