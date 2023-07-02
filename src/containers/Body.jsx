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
      <div className="body-box" style={{ display: 'flex', margin: 0, width: "100%" }}>
        <div style={{ margin: 'auto', width: '70%' }}>
          Contacts
          <div className="home-link">
            <a href="/">Home</a>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          paddingTop: '100px'
        }}
      >
        <div className="contact-container">
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
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3674681433736!2d105.78172491121074!3d21.017977780547866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab54f2982fbf%3A0x3a1fa0bffdd98df0!2zVMOyYSBuaMOgIE1pdGVjLCBT4buRIDEgRMawxqFuZyDEkMOsbmggTmdo4buHLCBN4buFIFRyw6wsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1688307581111!5m2!1svi!2s" 
        width="100%" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

    </Fragment>
  );
};

export default memo(Body);
