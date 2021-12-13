import './Location.css' 


export default function Location({handlerOpenModalLocation, isOpen, location, setLocation}) {

    const handlerLocation = (ev) => setLocation(ev.target.value)

    return (
        <div className={`Location--container ${isOpen && "open"}`}>
            {isOpen && <label className="Location--label" htmlFor="Location">Location</label>}
            <input 
                value={location}
                id="Location"
                onChange={handlerLocation}
                onClick={handlerOpenModalLocation}
                className={`Location ${isOpen && "open"}`}
                type="text" 
                placeholder="Add location"
            />
        </div>
    );
}
