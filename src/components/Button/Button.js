

const Button = (props) => {
    return (
        <button className="hover:opacity-70 w-fit bg-custom-pink text-white px-3.5 py-2.5 rounded-lg font-bold text-sm">
                {props.title}
        </button>
    )
}

export default Button;