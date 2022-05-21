

const Button = (props) => {
    {/* pass the tailwind classname for padding as prop*/}
    
    return (
        <button className={"hover:opacity-70 w-fit bg-custom-pink text-white " + props.padding + " py-2.5 rounded-lg font-bold text-sm"}>
                {props.title}
        </button>
    )
}

export default Button;