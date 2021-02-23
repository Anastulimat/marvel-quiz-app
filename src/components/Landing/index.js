import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {

    /* State */
    const [btn, setBtn] = useState(false);

    /* Refs */
    const refWolverine = useRef(null);

    /* Methods */
    const setLeftImg = () => {
        refWolverine.current.classList.add("leftImg");
    }

    const setRightImg = () => {
        refWolverine.current.classList.add("rightImg");
    }

    const clearImg = () => {
        if(refWolverine.current.classList.contains("leftImg"))
        {
            refWolverine.current.classList.remove("leftImg");
        }
        else if(refWolverine.current.classList.contains("rightImg"))
        {
            refWolverine.current.classList.remove("rightImg")
        }
    }

    const displayBtn = btn && (
        <>
            <div className="leftBox">
                <Link to="/signup" className="btn-welcome" onMouseOver={setLeftImg} onMouseOut={clearImg}>Inscription</Link>
            </div>

            <div className="rightBox">
                <Link to="/login" className="btn-welcome" onMouseOver={setRightImg} onMouseOut={clearImg}>Connexion</Link>
            </div>
        </>
    );




    /* React Methods */
    useEffect(() => {
        refWolverine.current.classList.add("startingImg");
        setTimeout(() => {
            refWolverine.current.classList.remove("startingImg");
            setBtn(true);
        }, 1000);
    }, []);

    return(
       <main ref={refWolverine} className="welcomePage" >
           {displayBtn}
       </main>
    );
}

export default Landing;
