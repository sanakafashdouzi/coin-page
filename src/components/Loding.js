import React from 'react';

//gif
import spinner from "../gif/spinner.gif";

const Loding = () => {
    return (
        <div style={{"display": "flex","flex":"wrap" , "justifyContent":"center", "alignItems":"center"}}>
            <img src={spinner} alt='spinner' />
            <br/>
            <h2>Loading...</h2>
        </div>
    );
};

export default Loding;