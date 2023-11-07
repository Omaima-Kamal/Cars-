import React from 'react'
import '../../css/contactUsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div className='contactPage'>
      <h1 className="contact_us">Contact Us</h1>

      <div className="container contact-parent">
        <div className="row contact-child">
          <div className="col-md-6">
            <h2>Our Contact Channels</h2>
            <p>We aim to keep in touch with you to know your problems and try to solve them.<br />For any complaints please contact us:</p>
            <table>
              <tr>
                <td><img src={require("../../assets/social/facebook.png")} alt="Facebook" /></td>
                <td>Facebook</td>
              </tr>
              <tr>
                <td><img src={require("../../assets/social/instagram-sketched.png")} alt="Instgram" /></td>
                <td>Instagram</td>
              </tr>
              <tr>
                <td><img src={require("../../assets/social/twitter.png")} alt="Twitter" /></td>
                <td>Twitter</td>
              </tr>
              <tr>
                <td><img src={require("../../assets/social/whatsapp.png")} alt="Whatsapp" /></td>
                <td>Whatsapp</td>
              </tr>
              <tr>
                <td><img src={require("../../assets/social/youtube.png")} alt="Youtube" /></td>
                <td>Youtube</td>
              </tr>
              <tr>
                <td><img src={require("../../assets/social/google-plus.png")} alt="Google+" /></td>
                <td>Google+</td>
              </tr>
            </table>
          </div>
          {/* contact us by email */}
          <div className="emails col-md-6">
            <h2><FontAwesomeIcon icon={faEnvelope} /> Our Contact Emails</h2>
            <p>Nile City <br />2005C Corniche El Nil, Nile City Towers, 12nd floor North <br />Tower<br />Postal Code: 12121</p>
            <h2><FontAwesomeIcon icon={faPhone} /> Our Contact phones</h2>
            <p>01112546655</p>
            <p>01254865454</p>
            <h2>Our Contact form</h2>
            <p>We invite you to fill in our form, if you have commercial, technical questions or complaints about mobile or internet services. Orange commits to reply within 2 hours.</p>
            <a href={"/logIn"}>
              <button>Access The Form</button>
            </a>
          </div>
        </div>
      </div>

      <section className="account">
        <h2>Manage your account</h2>
        <div>
          <h4>Customer Care</h4>
          <p>You can see your balance, remaining credit, or manage your services<br />in your customer care.</p>
          <a href={"/logIn"}>
            <button><FontAwesomeIcon icon={faUser} /> Your Account</button></a>
        </div>
      </section>

      <section className="FAQs text-center">
        <div>
          <h1>Frequent asked questions</h1>
          <p className="lead">Get all the answers you need for your voice and internet plans, services, roaming.</p>
          <a href="../Visitor%20agreement/Instructions.html">
            <button><i className="fa fa-question-circle"></i> Get Some Help</button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default ContactUs;