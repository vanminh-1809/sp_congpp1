import { Fragment, memo } from "react";
import { useForm } from 'react-hook-form';

const InputForm = ({ placeholder, setValue, type, className, handleFileChange, value, name }) => {
    let inputElement;
    const { register } = useForm();

    const handleOnchange = (event) => {
        setValue(event.target.value)
    };

    if (className === 'not-msg') {
        inputElement = (
            <input
                className={` ${className}`}
                type={type || 'text'}
                placeholder={placeholder}
                onChange={handleOnchange}
                value={value}
                style={{
                    paddingLeft: '20px',
                    gap: '100px',
                    border: 'none',
                    outline: 'none',
                    background: 'rgba(242, 242, 242, 0.5)',
                    fontFamily: "Nunito Sans sans-serif",
                    fontSize: '16px',
                    lineHeight: '1.875',
                    fontWeight: '400',
                    color: 'white',
                }}
            />
        );
    } else if (className === 'file-input') {
        inputElement = (
            <input
                className={` ${className}`}
                type="file"
                placeholder={placeholder}
                onChange={handleFileChange}
                style={{
                    paddingLeft: '20px',
                    gap: '1000px',
                    outline: 'none',
                    background: 'rgba(242, 242, 242, 0.5)',
                    fontFamily: "Nunito Sans sans-serif",
                    fontSize: '16px',
                    lineHeight: '1.875',
                    fontWeight: '400',
                    color: 'white',
                }}
            />
        );
    } else if (className === 'is-msg') {
        inputElement = (
            <textarea
                className={` ${className}`}
                type={type || 'text'}
                placeholder={placeholder}
                onChange={handleOnchange}
                value={value}
                style={{
                    paddingLeft: '20px',
                    gap: '1000px',
                    outline: 'none',
                    background: 'rgba(242, 242, 242, 0.5)',
                    fontFamily: "Nunito Sans sans-serif",
                    fontSize: '16px',
                    lineHeight: '1.875',
                    fontWeight: '400',
                    color: 'white',
                }}
            />
        );
    }

    return (
        <Fragment>
            <div className={`${className}`}>
                {inputElement}
            </div>
        </Fragment>
    );
}

export default memo(InputForm);
