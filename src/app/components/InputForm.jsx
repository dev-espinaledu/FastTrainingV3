export default function InputTextForm( { labelText, placeholder, }) {
    return (
        <div className="my-8 flex flex-col self-center w-full items-start">
            <label className="self-start text-zinc-800 text-lg">{ labelText }</label>
            <input className="w-full bg-zinc-200 p-2 rounded-lg" type="text" placeholder={ placeholder }/>
        </div>
    );
}