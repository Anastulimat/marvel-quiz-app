import React, {useState, useContext, useEffect, Fragment} from "react";
import {FirebaseContext} from  "../Firebase";
import Logout from "../Logout";
import Quiz from "../Quiz";

const Welcome = (props) => {

    const firebaseContext = useContext(FirebaseContext);

    const[userSession, setUserSession] = useState(null);

    useEffect(() => {
        let listener = firebaseContext.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/');
        })

        return () => {
            listener();
        }
    }, []);

    return userSession === null ?
        (
            <Fragment>
                <div className="loader"/>
                <p className="loaderText">Loading ...</p>
            </Fragment>
        )
        :
        (
            <div className="quiz-bg">
                <div className="container">
                    <Logout/>
                    <Quiz/>
                </div>
            </div>
        );
}

export default Welcome;
