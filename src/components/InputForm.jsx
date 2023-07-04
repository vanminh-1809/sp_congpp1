import { Fragment, memo } from "react"
import Review from "../containers/Review"

const InputForm = ({ placeholder, value, setValue, type, keyPayload, className }) => {
    return (
        <Fragment>
            <div className={`${className}`}>
                {className === 'not-msg' ?
                    <input
                        className={` ${className}`}

                        placeholder={placeholder}
                        onChange={(event) => setValue(event.target.value)}
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
                    /> : <textarea
                        className={` ${className}`}
                        type={type || 'text'}

                        placeholder={placeholder}
                        onChange={(event) => setValue(event.target.value)}
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
                    />}
            </div>
        </Fragment>
    )
}

export default memo(InputForm)