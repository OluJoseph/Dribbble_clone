const Button = (props) => {
  /* pass the tailwind classname for padding as prop*/

  return (
    <button
      className={
        "w-max hover:opacity-70 w-fit bg-custom-pink text-white " +
        props.padding +
        " py-2.5 rounded-lg font-bold text-sm"
      }
    >
      <p className="w-max">{props.title}</p>
    </button>
  );
};

export default Button;
