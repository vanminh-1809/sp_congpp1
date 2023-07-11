import { Fragment, memo } from "react";
import { useForm } from "react-hook-form";

const InputForm = ({
  placeholder,
  setValue,
  type,
  keyPayload,
  className,
  handleFileChange,
  value
}) => {
  let inputElement;
  const { register, handleSubmit } = useForm();

  // const handleOnchange = (event) => {
  //     setValue(event.target.value)
  // };
  const submit = (data) => {
    console.log(data);
  };
//   if (className === "not-msg") {
//     inputElement = (
//       <input
//         className={` ${className}`}
//         type={type || "text"}
//         placeholder={placeholder}
//         // onChange={handleOnchange}
//         value={value}
//         registerName
//         style={{
//           paddingLeft: "20px",
//           gap: "100px",
//           border: "none",
//           outline: "none",
//           background: "rgba(242, 242, 242, 0.5)",
//           fontFamily: "Nunito Sans sans-serif",
//           fontSize: "16px",
//           lineHeight: "1.875",
//           fontWeight: "400",
//           color: "white",
//         }}
//       />
//     );
//   } else if (className === "file-input") {
//     inputElement = (
//       <input
//         className={` ${className}`}
//         type="file"
//         placeholder={placeholder}
//         // onChange={handleFileChange}
//         // value={value}
//         style={{
//           paddingLeft: "20px",
//           gap: "1000px",
//           outline: "none",
//           background: "rgba(242, 242, 242, 0.5)",
//           fontFamily: "Nunito Sans sans-serif",
//           fontSize: "16px",
//           lineHeight: "1.875",
//           fontWeight: "400",
//           color: "white",
//         }}
//       />
//     );
//   } else if (className === "is-msg") {
//     inputElement = (
//       <textarea
//         className={` ${className}`}
//         type={type || "text"}
//         placeholder={placeholder}
//         // onChange={handleOnchange}
//         value={value}
//         style={{
//           paddingLeft: "20px",
//           gap: "1000px",
//           outline: "none",
//           background: "rgba(242, 242, 242, 0.5)",
//           fontFamily: "Nunito Sans sans-serif",
//           fontSize: "16px",
//           lineHeight: "1.875",
//           fontWeight: "400",
//           color: "white",
//         }}
//       />
//     );
//   }

  return (
    <Fragment>
      <form onSubmit={handleSubmit(submit)}>
      <input
        className={` ${className}`}
        type="text"
        placeholder={placeholder}
        // onChange={handleOnchange}
        value={value}
        {...register('name', {required: true})}
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
      />
      <input
        className={` ${className}`}
        placeholder={placeholder}
        // onChange={handleOnchange}
        value={value}
        type="email"
        {...register('email', {required: true})}
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
      />
      {/* <input
        className={` ${className}`}
        type="file"
        placeholder={placeholder}
        // onChange={handleFileChange}
        // value={value}
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
      /> */}
      <textarea
        className={` ${className}`}
        type={type || "text"}
        placeholder={placeholder}
        // onChange={handleOnchange}
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
        <button type="submit">
            Send Message
        </button>
      </form>
    </Fragment>
  );
};

export default memo(InputForm);
