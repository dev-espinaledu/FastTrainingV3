const PlatformsButton = ({icon, text}) => {
    return (
        <>
            <button className="flex items-center gap-2 w-full mb-1 p-1 rounded-lg border border-slate-950">
                <i className={`${icon} px-4 text-2xl`}></i>
                <p className="">{text}</p>
            </button>
        </>
    )
}

export default PlatformsButton;