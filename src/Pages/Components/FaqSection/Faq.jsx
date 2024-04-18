import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <>
      <div className="faq">
        <h2>Frequently Asked Questions</h2>

        <ul className="accordion">
          <li>
            <input type="radio" name="accordion" id="first" />
            <label for="first">what is Netflix?</label>
            <div className="content">
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
              </p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="second" />
            <label for="second">How much does Netflix cost?</label>
            <div className="content">
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹149 to ₹649 a month. No extra costs, no contracts.
              </p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="third" />
            <label for="third">where can I Watch ?</label>
            <div className="content">
              <p>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
              </p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="fourth" />
            <label for="fourth">how do I cancel?</label>
            <div className="content">
              <p>
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="fifth" />
            <label for="fifth">what can I watch on Netflix?</label>
            <div className="content">
              <p>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </p>
            </div>
          </li>

          <li>
            <input type="radio" name="accordion" id="sixth" />
            <label for="sixth"> Is Netflix good for kids?</label>
            <div className="content">
              <p>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space.
                {/* <p>  Kids profiles come with
                PIN-protected parental controls that let you restrict the
                maturity rating of content kids can watch and block specific
                titles you don’t want kids to see.</p> */}
              </p>
            </div>
          </li>
        </ul>

        {/* <small>
          ready to watch? enter your email to create of restart your membership
        </small> */}

        {/* <form className="emil-signup">
        <input type="emil" placeholder="emil addres" required></input>
        <button type="submit">Get started</button>
      </form> */}



<div className="inputdiv">
  <div className="asd">
  <small>
          ready to watch? enter your email to create of restart your membership
        </small>
  </div>
  <div className="inp">
  <input
            type="text"
            placeholder="emil addrees"
            className="inputfield"
          />
          <button className="getstarte"> Get Started</button>

  </div>
          
        </div>






      </div>
     
    </>
  );
};

export default Faq;
