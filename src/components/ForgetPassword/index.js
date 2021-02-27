import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import {FirebaseContext} from '../Firebase';

const ForgetPassword = (props) => {

    const firebaseContext = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        firebaseContext.passwordReset(email)
            .then(() => {
                setError(null);
                setSuccess(`Consulter votre email ${email} pour changer le mot de passe !`);
                setEmail("");

                setTimeout(() => {
                    props.history.push('/login');
                }, 5000);
            })
            .catch((error) => {
                setError(error);
                setEmail("");
            });
    }

    const disableBtn = email === "";

    return(
        <div className="signUpLoginBox">
            <div className="slContainer">

                <div className="formBoxLeftForget"/>
                <div className="formBoxRight">
                    <div className="formContent">

                        {success &&
                        <span style={{
                            border: "1px solid green",
                            background: "green",
                            color: "#ffffff"
                        }}>
                            {success}
                        </span>}

                        {error && <span>{error.message}</span>}

                        <h2>Mot de pass oublié ?</h2>

                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" autoComplete="off" required={true}/>
                                <label htmlFor="email">Email</label>
                            </div>

                            <button disabled={disableBtn}>Récupérer</button>

                        </form>

                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">Déjà inscrit ? Connectez-vous !</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;
