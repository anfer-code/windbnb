import './Items.css'

export default function Item({img, city, host, type, beds, rank, title}) {
    return (
        <div className="Items--container">
            <div className="Items--img">
                <img loading="lazy" src={img} alt={city} />
            </div>
            <div className="Items--info">
                {host && <p className="Items--host">Super Host</p>}
                <p className="Items--type">{type}{beds ? `. ${beds} beds` : null}</p>
                <div className="Items--rank">
                    <span className="material-icons md-style">star</span>
                    <p>{rank}</p>
                </div>
            </div>
            <h3 className="Items--title">{title}</h3>
        </div>
    );
}