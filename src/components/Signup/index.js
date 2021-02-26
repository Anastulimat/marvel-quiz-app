import React, {useState, useContext} from "react";
import {Link} from "react-router-dom";
import {FirebaseContext} from '../Firebase';

const Signup = (props) => {

    /**
     * Firebase context
     * @type {null}
     */
    const firebaseContext = useContext(FirebaseContext);

    /**
     * UserData a template for user infos
     * @type {{password: string, confirmPassword: string, pseudo: string, email: string}}
     */
    const userData = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    /**
     * States vars
     */
    const [formData, setFormData] = useState(userData);
    const {pseudo, email, password, confirmPassword} = formData;

    const [error, setError] = useState('');

    /**
     * Display Sign-up button logic
     * @type {JSX.Element}
     */
    const signupBtn = pseudo === '' || email === '' || password === '' || password !== confirmPassword
        ? <button disabled>Inscription</button>
        : <button>Inscription</button>;

    /**
     * Display form error logic
     * @type {boolean|JSX.Element}
     */
    const errorMsg = error !== '' && <span>{error.message}</span>;

    /**
     * Handle form's fields change
     * @param e
     */
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
    }

    /**
     * Handel form submit
     * @param e event
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = formData;
        firebaseContext.signupUser(email, password)
            .then(user => {
                setFormData({...userData});
                props.history.push('/welcome')
            })
            .catch(error => {
                setError(error);
                setFormData({...userData});
            });
    }



    return(
        <div className="signUpLoginBox">
            <div className="slContainer">
                
                <div className="formBoxLeftSignup"/>
                <div className="formBoxRight">
                    <div className="formContent">
                        {errorMsg}
                        <h2>Inscription</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox">
                                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required={true}/>
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required={true}/>
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required={true}/>
                                <label htmlFor="password">Mot de passe</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required={true}/>
                                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            </div>
                            {signupBtn}
                        </form>

                        <div className="linkContainer">
                            <Link className="simpleLink" to="/login">Déjà inscrit ? connectez-vous !</Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Signup;
