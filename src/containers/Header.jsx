import { Fragment, memo } from "react"
import logo from '../../src/asset/logo.png';
import "./App.css"
import Button from "../components/Button";
// import { Link } from 'react-router-dom';



const Header = () => {
    const buttonText = [
        {text: 'Home', active: false},
        {text: 'Company', active: false},
        {text: 'Services', active: false},
        {text: 'Contacts', active: true}
    ]
    return (
        <Fragment>
            <div style={{display: 'flex', margin: 'auto', justifyContent: 'center', maxWidth: '100%'}}>
                <div>
                    {/* <Link to={'/'}> */}
                        <img src={logo} alt="logo" />
                    {/* </Link> */}
                </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '50%'}}>
                    {buttonText.map((button) => (
                        <Button
                            className={button.active ? 'btn-header-active' : 'btn-header'}
                            key={button}
                            text={button.text}
                            textColor="text-black"
                        />
                    ))}
                </div>
                <div style={{width: '10%'}} />
            </div>
        </Fragment>
    )
}

export default memo(Header)