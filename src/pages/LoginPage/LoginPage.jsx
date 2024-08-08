import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-nav">
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
      <div className="login-header">
        <h1>Log In</h1>
        <p>
          No account? Unlock new, exciting and exclusive benefits all in one
          place. Join MyLFC, your FREE, Official LFC Account.{" "}
          <a>Register Now</a>
        </p>
      </div>

      <div className="login-box">
        <div>
          <input type="text" id="email" />
          <label htmlFor="email">E-mail*</label>
        </div>
        <div>
          <input type="text" id="password" />
          <label htmlFor="password">Password*</label>
        </div>
        <a href="">Forgot password</a>
        <div className="login-captcha">
        </div>
        <button>Login</button>
        <p>
          No account? <a href="">Register Now</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
