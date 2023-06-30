import Box from "../components/Box";
import { Fragment, memo, useState } from "react";
import InputForm from "../components/InputForm";
import ContactForm from "../components/ContactForm";

const Body = () => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    message: "",
  });

  const placeholder = {
    name: "Your Name*",
    email: "Your Email*",
    message: "Message...",
  };

  const handleOnSubmit = () => {
    alert("1+1=");
  };

  return (
    <Fragment>
      <div className="body-box" style={{display: 'flex', margin: 0, width: "100%"}}>
        <div style={{margin: 'auto', width: '70%'}}>
            Contacts
            <div className="home-link">
              <a href="/">Home</a>
            </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          paddingTop: '100px'
        }}
      >
        <div className="contact-form">
          <ContactForm />
        </div>
        <div className="input-form">
          <h3 className="form-title"> Ready to Get Started?</h3>
          <small className="">
            Your email address will not be published. Required fields are
            marked*
          </small>
          <div className="input-field">
            <InputForm
              placeholder={placeholder.name}
              value={payload.name}
              setValue={setPayload}
              type="name"
              keyPayload={"name"}
              className={"not-msg"}
            />
            <br />
            <InputForm
              placeholder={placeholder.email}
              value={payload.email}
              setValue={setPayload}
              type="email"
              keyPayload={"email"}
              className={"not-msg"}
            ></InputForm>
            <br />
            <InputForm
              placeholder={placeholder.message}
              value={payload.message}
              setValue={setPayload}
              type="message"
              keyPayload={"message"}
              className={"is-msg"}
            />
          </div>
          <div className="send-btn">
            <button type="submit" onClick={() => handleOnSubmit()}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(Body);
