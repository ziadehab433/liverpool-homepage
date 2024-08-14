import "./ContactPage.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Expandable from "../../components/Expandable/Expandable";
import { useState } from "react";

const ContactPage = () => {
  const [option, setOption] = useState(0);

  return (
    <>
      <div className="contact-page-container">
        <NavBar />
        <div className="contact-header">
          <h1>
            Supporter Services <span>Contact Us</span>
          </h1>
        </div>
        <div className="contact-body">
          <div className="contact-options">
            <div
              onClick={() => {
                setOption(0);
              }}
              className={option == 0 ? "selected" : ""}
            >
              CONTACT US
            </div>
            <div
              onClick={() => {
                setOption(1);
              }}
              className={option == 1 ? "selected" : ""}
            >
              CONTACT EMAIL FORM
            </div>
          </div>
          {option == 0 && (
            <>
              <div className="contact-us">
                <h3>
                  If you need help with any Club services, including Ticketing,
                  LFC Official Membership and the Official Liverpool FC Store,
                  you can find useful information and answers to frequently
                  asked questions on our <span>Help Centre.</span>
                </h3>
                <p>
                  You can also contact our Supporter Services team for help with
                  any of the above, or for general Club enquiries or complaints.
                  We’re normally available Monday to Saturday.
                </p>
              </div>
              <div className="supporter-services">
                <h2>Supporter Services Opening Times</h2>
                <Expandable header="Normal Opening Hours">
                  <div className="oh-list">
                    <p>Live Chat, Social and Email</p>
                    <ul>
                      <li>Mon-Fri: 8.15am-5.30pm</li>
                      <li>Saturday: 9am-3pm</li>
                      <li>Sunday: Closed</li>
                    </ul>
                    <p>Ticket Office Windows</p>
                    <ul>
                      <li>Mon-Fri: 8.15am-4pm</li>
                      <li>Saturday: 9am-3pm</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </Expandable>
                <Expandable header="Match Day Opening Hours">
                  <div className="match-day-oh">
                    <p> <span>Ticketing enquiries</span>- opening hours will vary depending on kick-off. We'll publish opening hours for upcoming matches on this page.</p>
                    <p> <span>Other enquiries (e.g. Official Liverpool FC Store, Stadium Tours etc.)</span>- our hours don't change. We're available to help during the same times as a non-matchday.</p>
                  </div>
                </Expandable>
              </div>
              <div className="ways-to-contact">
                <h2>Ways to Contact Supporter Services</h2>
                <div className="ways-container">
                  <div>
                    <h3>Chat</h3>
                    <p>Press the chat button on the bottom-right of the screen to start a chat with us. Please note, you must accept cookies on liverpoolfc.com for the Live Chat button to appear.</p>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p><a>Fill in our contact form</a> and we’ll email you back. We aim to respond within 48 hours.</p>
                  </div>
                  <div>
                    <h3>Social Media</h3>
                    <p><a>Contact us on X</a> - Follow @LFCHelp for important ticketing, matchday and other Supporter Services updates. You can also Direct Message us. We aim to respond within 4 hours.</p>
                    <p><a>Contact us on Facebook</a> - Send us a message through our Liverpool FC Help page. We aim to respond within 4 hours.</p>
                  </div>
                  <div>
                    <h3>Visit the Ticket Office at Anfield</h3>
                    <p>The Ticket Office is located underneath the Kop stand. You can contact us about ticketing using the options above, but if you're at <a>Anfield</a> you can also visit us in person.</p>
                  </div>
                  <div>
                    <h3>Accessible Contact Options</h3>
                    <p>Any supporters who are registered with the club as disabled, or who have accessibility needs that prevent them from using our online contact options, can also call us on 0151 264 2500. Our phone line is open Mon-Fri 8.15am-4pm and Saturday 9am-3pm.</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {option == 1 && (
            <div className="contact-email-form">
              <p>
                Please fill in our contact form below and we’ll email you back.
                We aim to respond within 48 hours.
              </p>
              <div></div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
