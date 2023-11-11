import React from 'react'
import './Contact1.css'

const Contact1 = () => {
  return (
    <>
       <div className="container">
    <h1>Contat me</h1>
    <form >
   <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Name</label>
  <input type="text" name="name" className="form-control" id="formGroupExampleInput" placeholder="Enter your name"  required/>
</div>

<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Phone</label>
  <input type="text" name="phone" className="form-control" id="formGroupExampleInput2" placeholder="Enter your phone number"  />
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Email</label>
  <input type="text" name="email" className="form-control" id="formGroupExampleInput2" placeholder="Enter your email " />
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Message</label>
  {/* <input type="text" name="message" className="form-control message" id="formGroupExampleInput2" placeholder="Enter your messsage " rows="3" /> */}
  <textarea name="message" className='form-label message' id="" cols="6" rows="6"></textarea>
</div>
 <input type="submit" className="btn btn-primary" />
    </form>
   </div>
    </>
  )
}

export default Contact1
