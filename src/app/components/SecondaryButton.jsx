const SecondaryButton = ({ text, className }) => {
    return (
      <button
        type="submit"
        className={ className + "w-full bg-zinc-300 text-white font-black py-2 px-4 rounded-md hover:bg-zinc-400 text-md"}>
        {text}
      </button>
    );
  };
  
  export default SecondaryButton;