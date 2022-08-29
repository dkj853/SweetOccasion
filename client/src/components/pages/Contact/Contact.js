import { React, useState } from 'react'
import '../Contact/Contact.css'
import  axios  from 'axios'


const Contact = () => {
  const [userState, setUserState] = useState({
    firstname: "",
    lastname: "",
    cityState: "",
    subject: "",
    //this could be many things
  })
  console.log('user', userState)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserState({ ...userState, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitty");
    axios.post('/api/comments/newcomments', userState)
      .then((response) => {
        console.log("response",response);
        // This is where we want to take the server
        // response and do something with the state
        // But we don't know that quite yet
      })

  }
  return (
    <div className='container-fluid'>

      <h1>Contact Me</h1>
      <div className='ContactDiv'>
        <form id='registerForm'method='post'>

          <label >First Name</label>
          <input type="text" id="fname" placeholder='Your name...' name='firstname' onChange={handleChange} required />

          <label >Last Name</label>
          <input type="text" id="lname" placeholder='Your last name...' name='lastname' onChange={handleChange} required />

          <label >City and State</label>
          <input type="text" id="cityState" placeholder='City and State' name='cityState' onChange={handleChange} required />

          <label >Subject</label><br />
          <textarea id="subject" placeholder='How can I help...' name='subject' style={{ width: 400 }} onChange={handleChange} required />

          <button id="submit" name="submit" type='submit' onClick={handleSubmit}>Send</button>

        </form>
      </div>
    </div>


  )
};

export default Contact;