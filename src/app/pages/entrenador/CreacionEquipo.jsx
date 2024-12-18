import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import InputForm from "../../components/InputForm";
import { useState } from 'react';
import NavbarTrainer from '../../components/Navbar/NavbarTrainer';
import HeaderApp from "../../components/HeaderApp";

const CreacionEquipo = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    };

    return (
        <div className="flex p-3 w-screen h-screen">
            <NavbarTrainer />
            <div className=" w-full h-full flex flex-col">
                <HeaderApp />
                <section className="w-full h-[90vh] rounded-md bg-white ">
                    <h1 className=" text-3xl font-bold m-4">Creación de Equipo</h1>
                    <section className="flex justify-around">
                        <section>
                            <p className="text-lg my-4">Añade el escudo de tu equipo (Opcional)</p>
                            
                            <div className="w-48 h-48 border border-gray-300 rounded-lg overflow-hidden mb-2">
                                {image ? (
                                <img src={image} alt="Escudo del equipo" className="w-full h-full object-cover" />
                                ) : (
                                <div className="flex items-center justify-center h-full text-gray-400">
                                    Escudo del equipo
                                </div>
                                )}
                            </div>

                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleImageChange} 
                                className="mt-4" 
                            />
                        </section>
                        
                        <section>

                            <InputForm labelText="Nombre del equipo" placeholder="Nombre del equipo" />

                            <InputForm labelText="Descripción del equipo" placeholder="Descripción del equipo" />

                            <SecondaryButton text="Generar Link de invitación" />

                            <PrimaryButton text="Crear Equipo" />
                        </section>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default CreacionEquipo