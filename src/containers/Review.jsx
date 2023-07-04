import { Fragment, useState, useContext } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setFromPayload } from "../Redux/payloadDataAction";

const Review = () => {
    const payloadData = useSelector((state) => state);
    const dispatch = useDispatch()

    const handleOnclick = () => {
        let finalPayload = {
            name: payloadData.name,
            email: payloadData.email,
            message: payloadData.message
        }
        dispatch(setFromPayload(finalPayload));
    }

    return (
        <Fragment>
            <div>
                <h2>Review</h2>
                <p>Name: {payloadData.name}</p>
                <p>Email: {payloadData.email}</p>
                <p>Message: {payloadData.message}</p>
            </div>
            <div>
                <button type="submit" onClick={handleOnclick}>Submit</button>
            </div>
        </Fragment >
    )
}

export default Review