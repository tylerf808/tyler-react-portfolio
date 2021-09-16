import React from 'react';

export default function Contact() {
  return (
    <div>
      <section className="page-section" id="contact">
        <h2>Contact Page</h2>
        <div className="col">
          <form>

            <label className="row "for="fname">First Name</label>
            <input className="row mb-3" type="text" id="fname" name="firstname" placeholder="Your first name.."></input>

            <label className="row" for="lname">Last Name</label>
            <input className="row mb-3" type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

            <label className="row" for="lname">Email</label>
            <input className="row mb-3" type="email" id="lname" name="lastname" placeholder="Your email.."></input>

            <label className="row" for="subject">Subject</label>
            <textarea className="row" id="subject" name="subject" placeholder="Write something.." ></textarea>

            <input type="submit" value="Submit"></input>

          </form>
        </div>
      </section>
    </div>
  );
}
