import { Fragment, useState, useContext } from "react"
import { useSelector } from "react-redux"

const Review = () => {
    const payloadData = useSelector((state) => state);

    const handleOnclick = () => {
        alert('anc')
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