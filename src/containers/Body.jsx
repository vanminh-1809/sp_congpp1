import { Fragment, memo, useState } from "react";
import InputForm from "../components/InputForm";
import ContactForm from "../components/ContactForm";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { path } from '../utils/constant.js';
import { useSelector, useDispatch } from "react-redux";
import { setFromPayload, updateFile } from "../Redux/payloadDataAction";

const Body = () => {
  const { register, handleSubmit } = useForm();
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    message: "",
    file: "",
  });
  const payloadData = useSelector((state) => state);
  const dispatch = useDispatch();

  const placeholder = {
    name: "Your Name*",
    email: "Your Email*",
    message: "Message...",
  };

  const navigate = useNavigate();
  const handleSendMsg = useCallback((flag, data) => {
    navigate(path.REVIEW, { state: { flag } });
    console.log('aaa', data)
  });

  const handleInputChange = (key, value) => {
    const updatedPayloadData = {
      ...payloadData,
      [key]: value
    };
    console.log('payloadData', payloadData.file)
    console.log(updatedPayloadData);
    dispatch(setFromPayload(updatedPayloadData));
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    dispatch(updateFile(selectedFile))
  };

  const test = () => {
    console.log('test');
  };

  return (
    <Fragment>
      <div className="body" style={{ marginTop: '111px' }}>
        <div
          className="body-box"
          style={{ display: "flex", margin: 0, width: "100%" }}
        >
          <div style={{ margin: "auto", width: "70%" }}>
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
            paddingTop: "100px",
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
            <div className="input-field" >
              <InputForm
                placeholder={placeholder.name}
                value={payloadData.name}
                setValue={(value) => handleInputChange('name', value)}
                type="name"
                keyPayload={"name"}
                className={"not-msg"}
              />
              <br />
              <InputForm
                placeholder={placeholder.email}
                value={payloadData.email}
                setValue={(value) => handleInputChange('email', value)}
                type="email"
                keyPayload={"email"}
                className={"not-msg"}
                
              />
              <br />
              <InputForm
                placeholder={placeholder.message}
                value={payloadData.message}
                setValue={(value) => handleInputChange('message', value)}
                type="message"
                keyPayload={"message"}
                className={"is-msg"}
                // {...register('message', { required: true })}
              />
              <br />
              <InputForm
                // value={payload.file}
                handleFileChange={handleFileChange}
                value={payloadData.file.name}
                type="file"
                keyPayload={"file"}
                className={'file-input'}
              />
              <div className="send-btn">
                <button type="submit" onClick={() => handleSendMsg(false)}>
                  Send Message
                </button>
              </div>
            </div>

          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3674681433736!2d105.78172491121074!3d21.017977780547866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab54f2982fbf%3A0x3a1fa0bffdd98df0!2zVMOyYSBuaMOgIE1pdGVjLCBT4buRIDEgRMawxqFuZyDEkMOsbmggTmdo4buHLCBN4buFIFRyw6wsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1688307581111!5m2!1svi!2s"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
};

export default memo(Body);
