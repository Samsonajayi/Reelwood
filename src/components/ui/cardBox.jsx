import '../../index.css'



function CardBox(props) {
    return (
        <button
            type="button"
            className={`cardBox${props.isSelected ? ' is-selected' : ''}`}
            aria-pressed={props.isSelected}
            onClick={() => props.onSelect(props.cardMain)}
        >
            <p>{props.cardMain}</p>
        </button>

    )
}

export default CardBox;