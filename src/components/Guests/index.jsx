import './Guests.css';

export default function Guests({handlerOpenModalGuests, isOpen, guest, setGuest}) {

    const handlerGuest = (ev) => {
        if(isNaN(parseInt(ev.target.value))) {
            setGuest("")
            return
        }
        setGuest(parseInt(ev.target.value, 10))
    }

    return (
        <div className={`Guests--container ${isOpen && "open"}`}>
            {isOpen && <label className="Guests--label" htmlFor="Guests">Guests</label>}
            <input 
                id="Guests"
                value={guest}
                onClick={handlerOpenModalGuests}
                onChange={handlerGuest}
                className={`Guests ${isOpen && "open"}`}
                type="number" 
                placeholder="Add guests"
            />
        </div>
    );
}