import React from 'react';
import './CSS/contact.css';

const Contact = () => {
    return (
        <section className='contact-section'>
        <div className='contact-container'>
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to contact us:</p>
          <div className="contact-info">
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
          <div className="opening-hours">
            <h3>Opening Hours:</h3>
            <table>
              <tbody>
                <tr>
                  <td>Monday - Friday:</td>
                  <td>9:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td>Saturday:</td>
                  <td>10:00 AM - 4:00 PM</td>
                </tr>
                <tr>
                  <td>Sunday:</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
}

export default Contact;