import { Fragment, memo } from "react"
import logo from '../../src/asset/logo.png';
import "./App.css"
import Button from "../components/Button";
// import { Link } from 'react-router-dom';



const Header = () => {
    const buttonText = ['Home', 'Company', 'Services', 'Contacts']
    return (
        <Fragment>
            <div style={{display: 'flex', margin: 'auto', justifyContent: 'center', maxWidth: '100%'}}>
                <div>
                    {/* <Link to={'/'}> */}
                        <img src={logo} alt="logo" />
                    {/* </Link> */}
                </div>
                <div style={{display: 'flex', justifyContent: 'center', padding: '10px', width: '50%'}}>
                    {buttonText.map((button) => (
                        <Button
                            key={button}
                            text={button}
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