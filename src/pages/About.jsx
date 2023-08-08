import React from 'react';
const About = () => {
    return (
        <div class="about">
          <h1>Contact us</h1>
            <form>
              <div className="input-container">
                <input type="text"  placeholder="NAME"  required />
                <input type="email"  placeholder="EMAIL"  required />
              </div>
              <textarea placeholder="MESSAGE" required/>
              <button type="submit" >SEND</button>
          </form> 
     </div>
    );
}
export default About;