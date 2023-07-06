import { Fragment, React } from "react"
import { useSelector } from "react-redux"
import { apiSubmit } from "../APIs/submit";
import { useNavigate } from "react-router-dom";

const Review = () => {
    const payloadData = useSelector((state) => state);
    const navigate = useNavigate();

    const handleOnclickSubmit = () => {
        let finalPayload = {
            name: payloadData.name,
            email: payloadData.email,
            message: payloadData.message,
            file: payloadData.file.name
        }
        apiSubmit(finalPayload);
        console.log(payloadData);
    }
   
    const handleOnclickBack = () => {
        navigate('/');
    }

    return (
        <Fragment>
            <div className="review-form">
                <div className="review-form-input">
                    <h2>Review</h2>
                    <p>Name: {payloadData.name}</p>
                    <p>Email: {payloadData.email}</p>
                    <p>Message: {payloadData.message}</p>
                    <p>File: {payloadData.file.name}</p>
                </div>
                <div className="button-list">
                    <button
                        type="submit"
                        onClick={handleOnclickSubmit}
                    >
                        Submit
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        onClick={handleOnclickBack}
                    >
                        Back
                    </button>
                </div>
            </div>
        </Fragment >
    )
}

export default Review