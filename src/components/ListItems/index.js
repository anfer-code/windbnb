import './ListItems.css'

export default function ListItems({children}) {
    return (
        <div className="ListItems">
            {children}
        </div>
    );
}