import { Fragment, memo } from "react"

const Button = ({ text, textColor, }) => {
    return (
        <Fragment>
            <div className="btn-header" style={{padding: '20px'}}>
                <a href="/" style={{textDecoration: 'none', color: 'black', fontWeight: '600'}}>
                    {text}
                </a>
            </div>
        </Fragment>
    )
}

export default memo(Button)