import React from 'react'
// import "./HomePage.css"
import { useState, useRef } from 'react'



export default function Form() {
  // const [formData, setFormData] = useState(
  //   {userName: "", email: "", password: ""}
  // )
  const [formData, setFormData] = useState(
    {
      firstName: "", 
      lastName: "", 
      email: "", 
      password: "", 
      comments: "",
      isFriendly: true,
      tourism: ""
    }
  )


  const [submit, setSubmit] = useState([])

console.log(formData)


  const handleFormData = (e) => {
    const {name, value, type, checked} = e.target
    setFormData(prevFormData => {
      return { 
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
 

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  }


  return (
    <div className='main-container sm:w-full sm:h-screen h-screen -mt-14'>
   
          <form onSubmit={handleSubmit} className="page-form sm:w-full sm:h-full  w-full h-full grid space-y-4  ml-12 bg-white">
          <label htmlFor="firstName" className='fname'> Your First Name (required)</label>

            <input 
              onChange={handleFormData} 
              type="text" 
              className='fname w-3/4 h-14 sm:w-7/12 sm:h-14 border-2 border-gray-500 outline-none pl-10' 
              placeholder='FirstName'
              name= 'firstName'
              value={formData.firstName}
              />


          <label htmlFor="lastName" className='lname'> Your Last Name (required)</label>

            <input 
              onChange={handleFormData} 
              type="text" 
              className='lname w-3/4 h-14 sm:w-7/12 sm:h-14 border-2 border-gray-500 outline-none pl-10' 
              placeholder='LastName'
              name= 'lastName'
              value={formData.lastName}
              />



        <label htmlFor="email" className='email'> Your Email (required) </label>

            <input 
              onChange={handleFormData} 
              type="text" 
              className='email w-3/4 h-14 sm:w-7/12 sm:h-14 border-2 border-gray-500 outline-none pl-10' 
              placeholder='Email'
              name= 'email'
              value={formData.email}
              />
              

        <label htmlFor="password" className='pass-word'> Password (required) </label>
            
            <input 
              onChange={handleFormData}
              type="password" 
              className='pass-word w-3/4 h-14 sm:w-7/12 sm:h-14 border-2 border-gray-500  outline-none pl-10' 
              placeholder='Password'
              name= 'password'
              value={formData.password}
              />

        <label htmlFor="comments" className=''> Your Message </label>

            <textarea 
              onChange={handleFormData}  
              className='text-area w-3/4 h-28 sm:w-7/12 sm:h-32 border-2 border-gray-500  outline-none pl-10'
              placeholder='Put your text here'
              name='comments'
              value={formData.comments}
            />

            {/* <br></br>
          <label htmlFor="isFriendly" className='is-friendly'> What's most fascinating about your holiday here?</label>
            {/*This is a checkbox 
          <input 
            type="checkbox"
            id="isFriendly"
            checked={formData.isFriendly}  //instead of the value attribute use checked 4 checked box
            onChange={handleFormData}
            name="isFriendly"
            className='questn-check'
          /> */}
          
         
          {/* <fieldset className='fieldset'>
            <legend>More like this ... </legend>

            <input 
              type="radio"
              id="palmtree"
              name="tourism"
              value="palmtree"
              onChange={handleFormData}
            />
            <label htmlFor="palmtree" className='employ-label'>Palm Trees</label>

            <input 
              type="radio"
              id="ocean"
              name="tourism"
              value="ocean"
              onChange={handleFormData}
            />
            <label htmlFor="ocean" className='employ-label'>Ocean</label>

            <input 
              type="radio"
              id="adventure"
              name="tourism"
              value="adventure"
              onChange={handleFormData}
            />
            <label htmlFor="adventure" className='employ-label'>Adventure</label>

            <input 
              type="radio"
              id="lifestyle"
              name="tourism"
              value="lifestyle"
              onChange={handleFormData}
            />
            <label htmlFor="lifestyle" className='employ-label'>Lifestyle</label>
          </fieldset> */}

          {/* <label htmlFor="favPackages" className='last-label'>What's your favourite vacation package?</label> <br></br>
          <select
              id='favPackages'
              value={formData.favColor}
              onChange={handleFormData}
              name="favPackages"
              className='select'
          >
            <option value="" >Travel Packages</option>
            <option value="red" >Vacations</option>
            <option value="orange" >Tour</option>
            <option value="yellow" >Events</option>
            <option value="green" >Hotels</option>
            <option value="blue" >Cars</option>
            <option value="indigo" >Groups</option>
            <option value="violet" >Blog</option>
          </select> */}

            <button className= ' w-32 h-14 bg-lime-500 items-center justify-center text-white font-medium uppercase '>Send</button>

          </form>
    </div>
  )
}
