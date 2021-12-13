import Location from '../Location';
import './Buscador.css';
import Guests from '../Guests';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../Modal';
import { useContext } from 'react';
import {Context} from '../../App';
import asset from '../../assets/stays.json';



export default function Buscador() {

    // States of this and children components
    const { 
        listItems, 
        setListItems, 
        setListArr: setListArrRender, 
        isOpen, 
        setIsOpen } = useContext(Context);

    const [isOpenLocation, setIsOpenLocation] = useState(false);
    const [isOpenGuests , setIsOpenGuests] = useState(false);
    const [location, setLocation] = useState("");
    const [guest, setGuest] = useState(0);

    // Manejador para el boton filtrador | Handler to Filter button
    const filterByLocation = (locat, guesters) => {
        if(locat && !guesters) {
            const arr = listItems.filter((item) => item.city.toLowerCase().includes(locat.toLowerCase()));
            setListArrRender(arr);
            setListItems(asset)
            handlerCloseModal();
            return;
        }
        if(!locat && guesters) {
            const arr = listItems.filter((item) =>  guesters <= item.maxGuests);
            setListArrRender(arr);
            setListItems(asset)
            handlerCloseModal();
            return;
        }
        const arr = listItems.filter((item) => item.city.toLowerCase().includes(locat.toLowerCase()));
        const arr2 = arr.filter((item) =>  guesters <= item.maxGuests);
        setListArrRender(arr2);
        setListItems(asset)
        handlerCloseModal();
        return;

        
    }

    
    const handlerOpenModalLocation = () => {
        setIsOpenGuests(false)
        setIsOpen(true)
        setIsOpenLocation(true)
    }
    const handlerOpenModalGuests = () => {
        setIsOpenLocation(false)
        setIsOpen(true)
        setIsOpenGuests(true)
    }
    const handlerCloseModal = () => setIsOpen(false)

    return (
    <div className={`Buscador-container ${isOpen && "isOpen"}`}>
        <Location 
            handlerOpenModalLocation={handlerOpenModalLocation} 
            isOpen={isOpen} 
            setLocation={setLocation}
            location={location}
        />
        <Guests 
            handlerOpenModalGuests={handlerOpenModalGuests} 
            isOpen={isOpen} 
            guest={guest} 
            setGuest={setGuest}
        />
        <button 
            onClick={() => {filterByLocation(location, guest)}}
            className={`Button--Search ${isOpen ? "isOpen" : ""}`}
        >
            <span 
                className={`material-icons md-buscador ${isOpen ? "isOpen" : ""}`}
            >
                search
            </span>
            {isOpen && <span>Search</span>}
        </button>

        {isOpen && ReactDOM.createPortal(
        <Modal 
            handlerCloseModal={handlerCloseModal}
            setLocation={setLocation}
            isOpenGuests={isOpenGuests} 
            isOpenLocation={isOpenLocation}
            isOpen={isOpen} 
            guest={guest}
            setGuest={setGuest}
        />, document.getElementById("myModal"))}
    </div>
    );
}
