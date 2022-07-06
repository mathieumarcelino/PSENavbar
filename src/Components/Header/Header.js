// ----- IMPORT -----
import React, { useContext } from 'react';
import './Header.css';
import logo from '../../Assets/Icons/logo.png' ;
import { AppContext } from "../../Context/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
// ------------------


const Header = () => {

    const [context, setContext] = useContext(AppContext);
    function handleChange(event) {
        if(event !== undefined && window.innerWidth > 768){
            setContext({
                menu: event
            });
        } else {
            if(event === 'mobile' && context.menu === 'mobile'){
                setContext({
                    menu: undefined
                });
            } else if(event === 'mobile' && context.menu === undefined ){
                setContext({
                    menu: 'mobile'
                });
            } else if(event === 'mobile' && context.menu !== undefined ){
                setContext({
                    menu: 'mobile'
                });
            }
        }
    }

    return(
        <header className="header" onMouseEnter={window.innerWidth > 768 ? () => handleChange(context.menu) : () => handleChange()}>
            <div className="container-title">
                <img className="logo" alt="logo PSE" src={logo}></img>
            </div>

            <div className="container-btn">
                <div className="subcontainer-btn">
                    <div className={`btn-nav ${context.menu === 0 ? "btn-nav-selected" : ""}`} onMouseEnter={() => handleChange(0)}>
                        <span className="text-nav">L'association</span>
                        <FontAwesomeIcon className="icon-nav" icon={faAngleDown} />
                    </div>
                    <div className={`btn-nav ${context.menu === 1 ? "btn-nav-selected" : ""}`} onMouseEnter={() => handleChange(1)}>
                        <span className="text-nav">Nos actions</span>
                        <FontAwesomeIcon className="icon-nav" icon={faAngleDown} />
                    </div>
                    <div className={`btn-nav ${context.menu === 2 ? "btn-nav-selected" : ""}`} onMouseEnter={() => handleChange(2)}>
                        <span className="text-nav">Je soutiens</span>
                        <FontAwesomeIcon className="icon-nav" icon={faAngleDown} />
                    </div>
                    <div className={`btn-nav ${context.menu === 3 ? "btn-nav-selected" : ""}`} onMouseEnter={() => handleChange(3)}>
                        <span className="text-nav">J'agis</span>
                        <FontAwesomeIcon className="icon-nav" icon={faAngleDown} />
                    </div>
                </div>
                <div className="subcontainer-btn">
                    <div className="btn">
                        <span className="text-btn">Faire un don</span>
                    </div>
                </div>
                <div className="subcontainer-btn burger-mobile" onClick={() => handleChange('mobile')}>
                    <FontAwesomeIcon className="burger-icon-nav" icon={context.menu === 'mobile' ? faXmark : faBars} />
                </div>
            </div>
        </header>
    )
}

export default Header;