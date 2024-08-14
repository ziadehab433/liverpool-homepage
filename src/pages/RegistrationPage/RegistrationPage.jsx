import { useState } from "react";
import "./RegistrationPage.css";
import { Link } from "react-router-dom";
import Switch from "../../components/Switch/Switch";

const RegistrationPage = () => {
  const [manageOpen, setManageOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [switches, setSwitches] = useState({
    pAndO: false,
    clubNews: false,
    LFCFoundation: false,
    LFCOffical: false,
    email: false,
    SMS: false,
    directMail: false,
    telephone: false,
    other: false,
  });

  const toggleManage = () => {
    setManageOpen(!manageOpen);
  };

  const handleOptionClick = (option) => {
    const newState = option === "yes";
    setSelectedOption(option);
    setSwitches((prevState) => {
      const updatedSwitches = {};
      Object.keys(prevState).forEach((key) => {
        updatedSwitches[key] = newState;
      });
      return updatedSwitches;
    });
  };

  const toggleSwitch = (key) => {
    setSwitches((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="join-container">
      <div className="join-nav">
        <Link to={"/"}>
          {"<"} <span>BACK TO</span> WEB SITE{" "}
        </Link>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAABaCAMAAADU4dlXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////1fUNLcAAAAWdFJOUwACG/OGkdn85i8LUQbAzCMSP7BhdqG0VZYzAAAHz0lEQVR42tVciXbjIAwMNvdhTvf/P3WBpA3COey428Rq+97uS0IYD5YE0vh0+nPTaM2bnPUxYRKMmYoZE8JMUlReDPLGAFbcNivRylnlLxRerPrN5r1wjwdEchBeFQxzMBP9tgplJjhVLHZwEjUzVDG/sDCc1CDXwZAiErzS8sDzHMWTAa1PxFA+jqz8XC3/rxinZsZRiaGl1cc5TL2ZkLzTq1AgPSi8HOGuUZP8g+GcUCmvpAyCfd20jCYDmQoxUVynOChi8kcYMBqi1SsXFcp0hHtf2s8h/1Ds76+mTMQ8rRyMG3VdMNKJNI3wy/isVt8a9duTGb/W2l0Y2omYeeUrUXyNkwLr3mMOPsmnuHJFXXCcRKJsJ4xvEIWylTAohOEUpIPOaqMPdX49HXdgyLwoMhGrr0aG27GhReDt61MSG2EgO9N9MGyst+gW6xfVacBT+7qJdiuMfHfsgIGcjYGzm36p+tmz333CxglOggXvtkbmIYY77vFsD2Eg6bG5gyJ7V07zT4ki7AkbTjWTYGMQcisMqWbg6mjNHoDlgFyd0AJGCTwT7wGMfCr5x0xqbCWEzPN5jB80Czacn4G7tXozDEHAdSrZj/LVagLiS3YxT/wWjPztdLFiRm7IOekYXLHB2jxM8WU/d9CCDelJC4MMaBcMxoMSNk/gPIPzNIY8jYyEjh0MLRXp4lbBMCflc97kpNaomNayYCljkED5TTbgJCgZNmet0mJ4IX5Cyuk7gUM1b5mnCcJwgtA++k45Fxp0/XR/G+UxfHZqNeGij2Hg7TC0xdd10cBY5F8eBwADeQyTD5a5TN66e7kQ0m4QqrgE9gcw7k1C+pybtiGry4TYOOUU+Ek+hyojU7+o9J/BqBfTNQGjzypHStbk1rpsD8Lb2KiEXGdpFYx6I7/cFWvuRq86j6r/EkaLSM0c3twmus0x6z1stEltgk4qoxAavQzjTWxkX9uGPcZM2h54389GzgfbzQUbk5U7ULyJDelDm92zvM2R6HQ0NrSNfGyXVFD2dDocGzmXakPGyPEg98F4Cxt5kwNCRogaHY8NbUkb+RjfvHP+CDYGH9qYMRo17IXxDjZyTghPYyw6IhsKnqWYuJuMd7CBYrv9Zox4eToeG0gmEDRGPOhPZOPZhRswCBo0SvSRbPSmZbPPyFnh3KZT3KjT6QPZsFIDk+VUw6GmHBGgn/K/AOPX2TAp9pYSbqoqNoLD0gn7z2OjnhpSWGPi2Zpso4saUxSfx0Y9eu2NjQAGgYffe5Pb/8LGzUNpAMOD4MeMHz6QjdvliPswvsKvwHgDG7AwFJ7Vyj+TDeQNBxWVX4Hx52zo/wLjP3uqc7npcGxkFLQ1XqtMD9jI98YHeipWqk24dp7kv1LymoMB4a9j48t8oqeqOZWUTp6tVIl8CvQRG78S/v5HmabO+FxpytntIFQKzWla53DNryQjf7LfEFHchTEl8ZlsoBs7JXc3ilPiP5ONG9XH9t+CgJyKB3UUNuAKg+0dfFJHYQMwY2GPyciT0wdkw8JNLGNYyAOyAdo7is3KHZANaQlMJU064Kkh0g7Dejif7QHZQDrCIuxo9q+qd5zhKhjHv+gx6xsew+7EMUR0wGrTEA1sFjlm7U+K0LVR7T4eeU/tD3ctyAaL47FxKj1Ifc+5Q0djI1+7rqd85MS7w7GBnDJd26rBu3C8p2cEddl66eXcFTze1MEzqHkhydjTxPMSG6UMhnbB0APuW7pzEBQbNx5a72JDD/a6R3gJRk6s+rujtOltq8ki53awUbp61fWGfK3X8CRS32LP+BzXHyGWgyPl9etsOEUo3slG7X+Z2IKPtPqYpKjDQpIvsqFdUVJNzf75RRhI+r61u+AgUawIhENVEdFZvcSGlk4UvQU4lHkRRsahbsgFajfuo3p/aUq2KgXOSgPTSzCczUzSMft4325KMXtJc4CsmvlS9VA6vB/gqArHQPlY1A/ujqeavb3KFsph8qVEL50rygNclHlsBKfgeQQAY31Xkc65FV3ouxgNuMhfnQQtb5c+gaKgMOcP0Vn8vAHoN3IMwvEsIinSWPstBKmfV0VdWOQ52aO0jrHTb2yAUcQ0YaGlOTOSCpDW/Up3mUPRpLG+gcmBcFrkOFXRM1cj1X5kOZcrN5rU3oUS6HHGeUsMkzaSJR+lR+Bbyluu6rnRIU8ihKIM+v4m0pxvuTsCq4vE6lr8ulypQhnxGqR5AcTiTSkecp7clmiViuGPTKqKo6DWY5zaPstHcreLNpiNQC/GaALrZgA9IGxj46AeRAp3cFStWbXrlWxO4hVqvAVZLT78vgwGaicsSFbZtFU5iER8LuldvMxAeQeJxT32VIPYdQ5ZOALd3JGTIyqm49aLCSq4Ik4bB+jLQ7Yboegw9GYckYRpy/UcJ9zkEfkG30oGC+3i17KTkxQP4jc3DxahDy4xbaW+t+jBm2zoRhh9NgAj7e7GCcK7wxo2ke2HmcidZe/rplPc1NXNCEUM32h0SlK3qyEs35Lz1Be6IFFOdR4/hODHD5s5NTEjYrPZQltxLM8guPWmOb5SQEKoPCmjPBJifNhGk7NgoEjLwX27temUduL2m8SLPanfD+i4PJ+jY7k+DQLnLRtUOCJUf08bfm+VWPt37e2qRUUQl3BBMoFnjZSHpiiRiQDf8A8pC8KTMKoeAwAAAABJRU5ErkJggg=="
          alt=""
        />
        <div>
          {"<"} <span>BACK TO</span> WEB SITE{" "}
        </div>
      </div>
      <div className="join-header">
        <h1>Why Join MYLFC?</h1>
        <div className="join-list">
          <p>
            Unlock new, exciting and exclusive benefits all in one place. Join
            MyLFC, your FREE,Official LFC Account.
          </p>
        </div>
        <div className="join-list">
          <p>&#x2022; The chance to win amazing prizes every week</p>
          <p>&#x2022; Unlock behind-the-scenes videos</p>
          <p>&#x2022; Follow the match with live commentary </p>
          <p>&#x2022; Keep up to date through the Club newsletter</p>
          <p>&#x2022; Read exclusive interviews in the eMagazine</p>
          <p>&#x2022; Play EA Sports FIFA 23 at LFC Gaming</p>
          <p>&#x2022; Join the conversation on LFC Fan Forums</p>
          <p>&#x2022; Earn even more benefits and rewards </p>
        </div>
        <p>
          Already have an account? <a> Log In</a>
        </p>
      </div>

      <div className="join-box">
        <div className="join-grid">
          <div>
            <input type="text" id="fName" />
            <label htmlFor="fName">First name*</label>
          </div>
          <div>
            <input type="text" id="surname" />
            <label htmlFor="surname">Surname*</label>
          </div>
          <div>
            <input type="text" id="email" />
            <label htmlFor="email">E-mail*</label>
          </div>
          <div>
            <input type="text" id="dateOfBirth" />
            <label htmlFor="dateOfBirth">Date of birth*</label>
          </div>
          <div>
            <input type="text" id="password" />
            <label htmlFor="password">Password*</label>
          </div>
          <div>
            <input type="text" id="reEnterPassword" />
            <label htmlFor="reEnterPassword">Re-enter Password*</label>
          </div>
          <div className="tip">
            <p>For your security please ensure your password:</p>
            <p>
              Is between 8 and 30 characters long <br />
              Contains a mix of upper (capital) and lower case letters <br />
              Contains at least one number <br />
              Contains at least one special character (* : @ | # % , . ; [ ] {}{" "}
              ? - _ ~ $ & ‘ “ ^ ( ) / ! `) <br />
            </p>
          </div>
          <div>
            <select name="Gender" id="gender">
              <optgroup label="Select Gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </optgroup>
            </select>
            <label htmlFor="gender">Gender*</label>
          </div>
          <div>
            <select name="Country" id="country">
              <optgroup label="Select country">
                <option value="egypt">egypt</option>
                <option value="australia">australia</option>
              </optgroup>
            </select>
            <label htmlFor="country">Country*</label>
          </div>
        </div>
        <div className="get-more">
          <div>
            <div className="get-more-text">
              <h3>GET MORE FROM LFC?</h3>
              <p>
                Do you want to hear about our products, competitions, new
                signings, tickets, club news and partner offers? <br /> We send
                offers and news on behalf of our partners but do not share your
                information directly with them.
              </p>
            </div>
            <div className="get-more-options">
              <button
                className={selectedOption === "yes" ? "selected" : ""}
                onClick={() => handleOptionClick("yes")}
              >
                Yes
              </button>
              <button
                className={selectedOption === "no" ? "selected" : ""}
                onClick={() => handleOptionClick("no")}
              >
                No
              </button>
              <button
                onClick={toggleManage}
                className={
                  manageOpen
                    ? "get-more-options-colored-button"
                    : "get-more-options-regular-button"
                }
              >
                Manage {">"}
              </button>
            </div>
          </div>

          {manageOpen && (
            <div className="manage">
              <h4>CONTENT</h4>
              <p>
                Please select what type of things you would like to hear more
                about
              </p>
              <div className="manage-grid">
            <div className="slider-card">
              <div>
                <h3>Products & Offers</h3>
                <p>
                  Latest information on club products, new launches, retail,
                  ticketing news
                </p>
              </div>
              <Switch
                isOn={switches.pAndO}
                toggleSwitch={() => toggleSwitch("pAndO")}
              />
            </div>
            <div className="slider-card">
              <div>
                <h3>Club News</h3>
                <p>
                  Latest information on club news, updates, and more
                </p>
              </div>
              <Switch
                isOn={switches.clubNews}
                toggleSwitch={() => toggleSwitch("clubNews")}
              />
            </div>
            <div className="slider-card">
              <div>
                <h3>LFC Foundation</h3>
                <p>
                  Updates from the LFC Foundation, our charitable arm
                </p>
              </div>
              <Switch
                isOn={switches.LFCFoundation}
                toggleSwitch={() => toggleSwitch("LFCFoundation")}
              />
            </div>
            <div className="slider-card">
              <div>
                <h3>LFC Official</h3>
                <p>
                  Official club updates, matchday information, and more
                </p>
              </div>
              <Switch
                isOn={switches.LFCOffical}
                toggleSwitch={() => toggleSwitch("LFCOffical")}
              />
            </div>
          </div>

          <h4>CHANNELS</h4>
          <p>Please select how you would like to hear from us</p>
          <div className="manage-second-grid">
            <div className="slider-card">
              <div>
                <h3>Email</h3>
              </div>
              <Switch
                isOn={switches.email}
                toggleSwitch={() => toggleSwitch("email")}
              />
            </div>
            <div className="slider-card">
              <div>
                <h3>SMS</h3>
              </div>
              <Switch
                isOn={switches.SMS}
                toggleSwitch={() => toggleSwitch("SMS")}
              />
            </div>
            <div className="slider-card">
              <div>
                <h3>Direct Mail</h3>
              </div>
              <Switch
                isOn={switches.directMail}
                toggleSwitch={() => toggleSwitch("directMail")}
              />
            </div>
            <div className="slider-card">
              <div>
                <h3>Telephone</h3>
              </div>
              <Switch
                isOn={switches.telephone}
                toggleSwitch={() => toggleSwitch("telephone")}
              />
            </div>
          </div>

          <h4 className="special-h4">OTHER TYPES OF COMMUNICATION</h4>
          <div className="slider-card">
            <div>
              <p className="special-p">
                Please note we can send you messages related to your orders,
                services subscribed and updates relating to products or
                services you have purchased from us, or information about
                your account. This includes communications relating to
                Season Tickets, Ticket Sales and Official Membership
                benefits. If you explicitly would like to turn off these
                type of communication, it may limit your ability to be aware
                of these benefits.
              </p>
            </div>
            <Switch
              isOn={switches.other}
              toggleSwitch={() => toggleSwitch("other")}
            />
              </div>
            </div>
          )}

          <div className="TOC">
            You can acess our preference centre at any time to opt out of
            communications and control how [we] use your data. By registering to
            join, you confirm that you have read and accept Liverpool Football
            Club <a>Terms and Conditions</a> and have read the club{" "}
            <a>Privacy Policy.</a>
          </div>
        </div>
        <div className="join-captcha"></div>
        <button>Register Now</button>
        <p>
          Already have an account? <a href="">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
