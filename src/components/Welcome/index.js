import React, {useState, useContext, useEffect, Fragment} from "react";
import {FirebaseContext} from  "../Firebase";
import Logout from "../Logout";
import Quiz from "../Quiz";

const Welcome = (props) => {

    const firebaseContext = useContext(FirebaseContext);

    const[userSession, setUserSession] = useState(null);
    const[userData, setUserData] = useState({});

    useEffect(() => {
        let listener = firebaseContext.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/');
        });

        if(!!userSession)
        {
            firebaseContext.userCollection(userSession.uid)
                .get()
                .then((doc) => {
                    if(doc && doc.exists)
                    {
                        const docData = doc.data();
                        setUserData(docData);
                    }

                })
                .catch((error) => {
                    console.log(error);
                });
        }

        return () => {
            listener();
        }
    }, [userSession]);

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
                    <Quiz userData={userData}/>
                </div>
            </div>
        );
}

export default Welcome;
