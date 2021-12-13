import { useState } from 'react';
import './Modal.css'

// Componentes que se renderizarán dependiendo del input al que se le hizo click
function OptionsLocation({setLocation}){
    return (
        <>
            <ul className="Modal--Options">
                <li>
                    <button onClick={() => {setLocation("Helsinki")}}>
                        <span className="material-icons">
                            location_on
                        </span>
                        Helsinki, Finland
                    </button>
                </li>

                <li>
                    <button onClick={() => {setLocation("Turku")}}>
                        <span className="material-icons">
                            location_on
                        </span>
                        Turku, Finland
                    </button>
                </li>

                <li>
                    <button onClick={() => {setLocation("Vaasa")}}>
                        <span className="material-icons">
                            location_on
                        </span>
                        Vaasa, Finland
                    </button>
                </li>

                <li>
                    <button onClick={() => {setLocation("Oulu")}}>
                        <span className="material-icons">
                            location_on
                        </span>
                        Oulu, Finland
                    </button>
                </li>
                
            </ul>
        </>
    );
}

function OptionsGuests({guest, setGuest}){

    const [children, setChildren] = useState(0);
    const [adult, setAdult] = useState(0);

    return (
        <div className="Modal--Options">
            <div className="Modal--control">
                <h4>Adults</h4>
                <label>Ages 13 or above</label>
                <div className="Modal--buttons">
                    <button 
                        disabled={(adult === 0 && true) || (guest === "" && true)}
                        onClick={() => {
                            if(guest === "") {
                                setAdult(0)
                            }
                            setGuest(prev => parseInt(prev - 1))
                            setAdult(prev => prev - 1)
                        }}
                    >-</button>
                    <span>{adult}</span>
                    <button
                        onClick={() => {
                            if(guest === "") {
                                setAdult(0)
                            }
                            setGuest(prev => parseInt(prev + 1))
                            setAdult(prev => prev + 1)
                        }}
                    >+</button>
                </div>
            </div>
            <div className="Modal--control">
                <h4>Children</h4>
                <label>Ages 2-12</label>
                <div className="Modal--buttons">
                    <button
                        disabled={(children === 0 && true) || (guest === "" && true)}
                        onClick={() => {
                            if(guest === "") {
                                setChildren(0)
                            }
                            setGuest(prev => parseInt(prev - 1))
                            setChildren(prev => prev - 1)

                        }}
                    >-</button>
                    <span>{children}</span>
                    <button
                        onClick={() => {
                            if(guest === "") {
                                setChildren(0)
                            }
                            setGuest(prev => parseInt(prev + 1))
                            setChildren(prev => prev + 1)
                        }}
                    >+</button>
                </div>
            </div>
        </div>
    );
}

export default function Modal({
    handlerCloseModal, 
    setLocation, 
    isOpenLocation, 
    isOpenGuests,
    isOpen,
    guest,
    setGuest,
}) {
    return (
        <div className="Modal">
            <div className="Modal--header">
                <p>Edit your search</p>
                <button onClick={handlerCloseModal}>
                <span className="material-icons md-close">
                    close
                </span>
                </button>
            </div>
            <div className="Modal--container">
                {isOpen && isOpenLocation ? 
                    (<OptionsLocation setLocation={setLocation} />) : 
                    (
                        isOpen && isOpenGuests ? <OptionsGuests guest={guest} setGuest={setGuest}/> :
                        ""
                        
                    )}
            </div>
        </div>
    );
}