import React from 'react';
import f from'./Images/facebook.png';
import i from'./Images/instagram.png';
import t from'./Images/twitter.png';

const Contact = () => {
    return (
    
        <div className="contact-section">
            <h2>Contact Us</h2>
            <p>Follow us on social media:</p>
            <a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer"><img src={f} alt="Facebook" style={{ width: '50px', height: '50px' }} /></a>&nbsp;&nbsp;
            <a href="https://www.instagram.com/YourProfile" target="_blank" rel="noopener noreferrer"><img src={i} alt="Instagram" style={{ width: '50px', height: '50px' }} /></a>&nbsp;&nbsp;
            <a href="https://twitter.com/YourHandle" target="_blank" rel="noopener noreferrer"><img src={t} alt="Twitter" style={{ width: '50px', height: '50px' }} /></a>
        </div>
    );
}

export default Contact;

	
