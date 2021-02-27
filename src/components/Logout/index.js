import React, {useState, useEffect, useContext} from 'react';
import {FirebaseContext} from '../Firebase';

const Logout = () => {
    const firebaseContext = useContext(FirebaseContext);

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if(checked)
        {
            firebaseContext.signOutUser();
        }
    }, [checked]);

    const handleChange = (e) => {
        setChecked(e.target.checked);
    }

    return(
        <div className="logoutContainer">
            <label className="switch">
                <input
                    onChange={handleChange}
                    type="checkbox"
                    checked={checked}
                />
                <span className="slider round"/>
            </label>

        </div>
    );
}

export default Logout;
