import { Fragment, memo } from "react"

const Button = ({ text, textColor, }) => {
    return (
        <Fragment>
            <div className="btn-header" style={{padding: '20px'}}>
                <a href="/" className="btn-text">
                    {text}
                </a>
            </div>
        </Fragment>
    )
}

export default memo(Button)