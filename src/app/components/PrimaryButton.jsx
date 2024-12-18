

const PrimaryButton = (props) => {
    return (
        <button className={props.clases + "  bg-sky-500 hover:bg-sky-600 text-white font-black py-2 px-4 rounded-lg "}  onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default PrimaryButton;