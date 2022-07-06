// ----- IMPORT -----
import React, { useContext, useState, useEffect} from 'react';
import './SubHeader.css';
import { AppContext } from "../../Context/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faGear, faThumbsUp, faCalendar, faBookOpenReader, faBowlFood, faBriefcase, faHouseMedical, faHandHoldingHand, faCircleDollarToSlot, faLandmark, faBuilding, faHandshakeAngle, faClipboardQuestion, faNetworkWired, faHand} from '@fortawesome/free-solid-svg-icons'
// ------------------


const SubHeader = () => {

    const [context, setContext] = useContext(AppContext);
    const [state, setState] = useState(0);


    useEffect(() => {
        if(context.menu === undefined || context.menu === 'mobile'){
            setState(0);
        } else {
            setState(context.menu);
        }
    }, [context.menu]);

    const menu = [
        [
            ['Qui sommes-nous ?', 'Mission, vision, valeurs', faInfoCircle], 
            ['Notre fonctionnement', 'Gouvernance et équipes', faGear], 
            ['Une ONG exemplaire', 'Transparence financière', faThumbsUp], 
            ['Actualités', 'Nos dernières actualités', faCalendar]
        ],
        [
            ['Éducation', 'Nos actions pour l\'éducation', faBookOpenReader], 
            ['Nourrir les enfants', 'Lutte contre la malnutrition', faBowlFood], 
            ['Formation professionnelle', 'Mener les jeunes à un métier', faBriefcase], 
            ['Santé et social', 'Soins des enfants', faHouseMedical]
        ],
        [
            ['Soutenir par le parrainage', 'Parrainer un enfant', faHandHoldingHand], 
            ['Soutenir par le don', 'L\'impact de votre don', faCircleDollarToSlot], 
            ['Quelle fiscalité ?', 'Connaître la fiscalité de vos dons', faLandmark], 
            ['En tant qu\'entreprise', 'Parrainer en tant qu\'entreprise', faBuilding]
        ],
        [
            ['Volontariat au Cambodge', 'Postes à pourvoir', faHandshakeAngle], 
            ['Devenir bénévole', 'Quelles formes de bénévolat ?', faHand], 
            ['Devenir partenaire', 'Qui peut devenir partenaire ?', faNetworkWired], 
            ['FAQ bénévolat', 'Questions réponses', faClipboardQuestion]
        ],
    ]

    function handleChange(event) {
        setContext({
            menu: event
        });
    }

    if(context.menu !== undefined && context.menu !== 'mobile'){

        return(
            <div className="subheader" onMouseEnter={() => handleChange(context.menu)} onMouseLeave={() => handleChange(undefined)}>

                <div className="subbtn-nav">
                    <div className="subbtn-cont">
                        <FontAwesomeIcon className="subbtn-icon" icon={menu[state][0][2]} />
                    </div>
                    <div className="subbtn-cont">
                        <div className="subbtn-title">{menu[state][0][0]}</div>
                        <div className="subbtn-text">{menu[state][0][1]}</div>
                    </div>
                </div>
                <div className="subbtn-nav">
                    <div className="subbtn-cont">
                        <FontAwesomeIcon className="subbtn-icon" icon={menu[state][1][2]} />
                    </div>
                    <div className="subbtn-cont">
                        <div className="subbtn-title">{menu[state][1][0]}</div>
                        <div className="subbtn-text">{menu[state][1][1]}</div>
                    </div>
                </div>
                <div className="subbtn-nav">
                    <div className="subbtn-cont">
                        <FontAwesomeIcon className="subbtn-icon" icon={menu[state][2][2]} />
                    </div>
                    <div className="subbtn-cont">
                        <div className="subbtn-title">{menu[state][2][0]}</div>
                        <div className="subbtn-text">{menu[state][2][1]}</div>
                    </div>
                </div>
                <div className="subbtn-nav">
                    <div className="subbtn-cont">
                        <FontAwesomeIcon className="subbtn-icon" icon={menu[state][3][2]} />
                    </div>
                    <div className="subbtn-cont">
                        <div className="subbtn-title">{menu[state][3][0]}</div>
                        <div className="subbtn-text">{menu[state][3][1]}</div>
                    </div>
                </div>

            </div>
        )

    }
}

export default SubHeader;