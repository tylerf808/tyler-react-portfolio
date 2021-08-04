import React from 'react';

export default function Contact() {
  return (
    <div>
      <section class="page-section" id="contact">
        <h2>Contact Page</h2>
        <div class="col">
          <form>

            <label class="row "for="fname">First Name</label>
            <input class="row mb-3" type="text" id="fname" name="firstname" placeholder="Your first name.."></input>

            <label class="row" for="lname">Last Name</label>
            <input class="row mb-3" type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

            <label class="row" for="lname">Email</label>
            <input class="row mb-3" type="email" id="lname" name="lastname" placeholder="Your email.."></input>

            <label class="row" for="subject">Subject</label>
            <textarea class="row" id="subject" name="subject" placeholder="Write something.." ></textarea>

            <input type="submit" value="Submit"></input>

          </form>
        </div>
      </section>
    </div>
  );
}
