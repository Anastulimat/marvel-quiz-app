import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import {FirebaseContext} from '../Firebase';

const Login = (props) => {

    const firebaseContext = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if(password.length > 5 && email !== '')
        {
            setBtn(true);
        }
        else if (btn)
        {
            setBtn(false);
        }
    }, [password, email, btn]);

    const handleSubmit = (e) => {
        e.preventDefault();
        firebaseContext.loginUser(email, password)
            .then(user => {
                setEmail('');
                setPassword('');
                props.history.push('/welcome');
            })
            .catch(error => {
                setError(error);
                setEmail('');
                setPassword('');
            });
    }

    return(
        <div className="signUpLoginBox">
            <div className="slContainer">

                <div className="formBoxLeftLogin"/>
                <div className="formBoxRight">
                    <div className="formContent">

                        {error !== '' && <span>{error.message}</span>}

                        <h2>Connexion</h2>

                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" autoComplete="off" required={true}/>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" autoComplete="off" required={true}/>
                                <label htmlFor="password">Mot de passe</label>
                            </div>
                            {btn ? <button>Connexion</button> : <button disabled>Connexion</button>}
                        </form>

                        <div className="linkContainer">
                            <Link className="simpleLink" to="/signup">Nouveau sur Marvel Quiz ? Inscrivez-vous !</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
