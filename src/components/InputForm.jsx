import { Fragment, memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setFromPayload } from "../Redux/payloadDataAction";
import { useNavigate } from "react-router";
import { path } from "../utils/constant";

const InputForm = ({
  placeholder,
  setValue,
  type,
  handleFileChange,
  value
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const payloadData = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnchange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (data) => {
    const updatedPayloadData = {
      ...payloadData,
      ...data,
    };
    dispatch(setFromPayload(updatedPayloadData));
    navigate(path.REVIEW);
  };

  useEffect(() => {
    reset({ name: payloadData.name, email: payloadData.email });
  }, [payloadData]);

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="not-msg"
          // type={type || 'text'}
          placeholder="Your name*"
          // onChange={handleOnchange}
          // value={value}
          style={{
            paddingLeft: "20px",
            gap: "100px",
            border: "none",
            outline: "none",
            background: "rgba(242, 242, 242, 0.5)",
            fontFamily: "Nunito Sans sans-serif",
            fontSize: "16px",
            lineHeight: "1.875",
            fontWeight: "400",
            color: "white",
          }}
          // register
          {...register("name", { required: true })}
        />
        {errors.name && (
          <small className="error-container">Name is required</small>
        )}
        <input
          className="not-msg"
          // type={type || 'text'}
          placeholder="Your email*"
          // onChange={handleOnchange}
          // value={value}
          style={{
            paddingLeft: "20px",
            gap: "100px",
            border: "none",
            outline: "none",
            background: "rgba(242, 242, 242, 0.5)",
            fontFamily: "Nunito Sans sans-serif",
            fontSize: "16px",
            lineHeight: "1.875",
            fontWeight: "400",
            color: "white",
          }}
          {...register("email", {
            required: true,
            pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
          })}
        />
        {errors.email && (
          <small className="error-container">Email is not valid</small>
        )}
        <input
          className="file-input"
          type="file"
          placeholder={placeholder}
          onChange={handleFileChange}
          style={{
            paddingLeft: "20px",
            gap: "1000px",
            outline: "none",
            background: "rgba(242, 242, 242, 0.5)",
            fontFamily: "Nunito Sans sans-serif",
            fontSize: "16px",
            lineHeight: "1.875",
            fontWeight: "400",
            color: "white",
          }}
        />
        <textarea
          className="is-msg"
          type={type || "text"}
          placeholder={placeholder}
          onChange={handleOnchange}
          value={value}
          style={{
            paddingLeft: "20px",
            gap: "1000px",
            outline: "none",
            background: "rgba(242, 242, 242, 0.5)",
            fontFamily: "Nunito Sans sans-serif",
            fontSize: "16px",
            lineHeight: "1.875",
            fontWeight: "400",
            color: "white",
          }}
        />
        <div className="send-btn">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </Fragment>
  );
};

export default memo(InputForm);
