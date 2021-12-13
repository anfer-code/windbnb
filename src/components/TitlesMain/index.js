import './TitlesMain.css'

export default function TitlesMain({sites}) {
    return (
        <div className="Titles--container">
            <h2>Stays in Finland</h2>
            <p>{sites.length ? `${sites.length} stays availables` : "Not stays availables"} </p>
        </div>
    );
}