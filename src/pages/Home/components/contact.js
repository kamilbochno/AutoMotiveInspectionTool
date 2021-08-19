import { useState } from 'react'
import emailjs from 'emailjs-com'
import Contact from '../assets/contact.png';
const initialState = {
  name: '',
  email: '',
  message: '',
}
export const ContactForm = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div class="hx-contact-area section-padding">
      <div class="container">
        <div class="row">
          <div class="col col-lg-7 col-md-12 col-sm-12 col-12">
            <div class="hx-contact-content">
              <h2>Book An Appointment</h2>
            <div class="hx-contact-form">
              <form>
                <div class="contact-form form-style row">
                  <div class="col-12 col-lg-6">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      id="name" 
                      name="name" 
                      className="form-control" 
                      required 
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col col-lg-6">
                    <input 
                      type="number" 
                      placeholder="Phone" 
                      id="number" 
                      name="number" 
                      className="form-control" 
                      required 
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-12  col-lg-6">
                    <input 
                    type="email" 
                    placeholder="Your Email" 
                    id="email" 
                    name="email"
                    className="form-control"
                    required
                    onChange={handleChange} 
                    />
                  </div>
                  <div class="col col-lg-6">
                    <select className="form-control" name="events" required onChange={handleChange}>
                      <option disabled="" value="1">Tires Replacement</option>
                      <option value="2">Transmission</option>
                      <option value="3">Diagnostic</option>
                      <option value="4">Batteries</option>
                      <option value="5">Breaks</option>
                    </select>
                  </div>
                  <div class="col-12 col-sm-12">
                    <textarea 
                      className="contact-textarea" 
                      placeholder="Message" 
                      name="notes"
                      required
                      onChange={handleChange}>
                    </textarea>
                  </div>
                  <div class="col-12">
                    <button 
                      type="submit"
                      class="theme-btn-s4">
                        Appointment
                    </button>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-12 ">
        <div class="hx-contact-img">
          <img src={Contact} alt=""/>
        </div>
      </div>
    </div>
  </div>
</div>
)
}