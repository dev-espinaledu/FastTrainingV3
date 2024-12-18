import PrimaryButton  from "../../components/PrimaryButton";

function DeleteUser () {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen fixed inset-0 bg-black bg-opacity-50">
                <div className="flex flex-col justify-center items-center gap-4 bg-white p-8 rounded-xl ">
                    <img className="h-24" src="/public/alert-icon.png" alt="" />
                    <h1 className="text-2xl font-bold w-fit">Eliminar usuario</h1>
                    <p className="text-lg w-fit">Estás a punto de eliminar al usuario Armando Sierra Sánchez. <br />Esta acción es permanente y no se puede deshacer. <br /> ¿Deseas eliminar este usuario?</p>
                    <div className="flex justify-center items-center gap-4">
                        <PrimaryButton text="Eliminar" />
                        <PrimaryButton text="Cancelar" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteUser;