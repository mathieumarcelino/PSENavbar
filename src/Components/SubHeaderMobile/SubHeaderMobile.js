// ----- IMPORT -----
import React, { useContext } from 'react';
import './SubHeaderMobile.css';
import { AppContext } from "../../Context/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// ------------------


const SubHeaderMobile = () => {

    const [context] = useContext(AppContext);

    if(context.menu === 'mobile'){

        return(
            <div className="subheadermobile">
                <div className="subbtn-nav-mobile">
                    <span className="subtext-nav-mobile">L'association</span>
                    <FontAwesomeIcon className="icon-nav-mobile" icon={faAngleDown} />
                </div>
                <div className="subbtn-nav-mobile">
                    <span className="subtext-nav-mobile">Nos actions</span>
                    <FontAwesomeIcon className="icon-nav-mobile" icon={faAngleDown} />
                </div>
                <div className="subbtn-nav-mobile">
                    <span className="subtext-nav-mobile">Je soutiens</span>
                    <FontAwesomeIcon className="icon-nav-mobile" icon={faAngleDown} />
                </div>
                <div className="subbtn-nav-mobile">
                    <span className="subtext-nav-mobile">J'agis</span>
                    <FontAwesomeIcon className="icon-nav-mobile" icon={faAngleDown} />
                </div>
            </div>
        )

    }
}

export default SubHeaderMobile;