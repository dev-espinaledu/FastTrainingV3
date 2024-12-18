import NavbarTrainer from "../../components/Navbar/NavbarTrainer";
import HeaderApp from "../../components/HeaderApp";
const TeamOverview = () => {
  const players = Array(12).fill({ name: 'Nombre' });

  const handlePlayerClick = (player) => {
    // Handle player click event
    console.log('Player clicked:', player.name);
  };

  return (
    <div className="flex p-3 w-screen h-screen">
            <NavbarTrainer />
            <div className=" w-full h-full flex flex-col">
                <HeaderApp />
                <section className="w-full h-[90vh] rounded-md bg-white overflow-y-scroll">
                  <div className="relative flex flex-col md:flex-row bg-white p-4 md:p-8 rounded-lg shadow-md w-full max-w-6xl h-full mx-auto">
                        
                        {/* Left Section */}
                        <div className="md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 pb-4 md:pb-0 md:pr-4">
                          <img src="/team-logo.png" alt="Team Logo" className="w-32 md:w-48 h-32 md:h-48 mx-auto mb-4 md:mb-6"/>
                          <div className="text-center text-sm md:text-lg text-black">
                            <p className="mb-2 md:mb-4"><strong>Nombre</strong><br />Tin Tin Colombia</p>
                            <p className="mb-2 md:mb-4"><strong>Entrenador</strong><br />Ernesto Motosierra</p>
                            <p className="mb-2 md:mb-4"><strong>Jugadores</strong><br />13</p>
                          </div>
                        </div>

                        {/* Right Section */}
                        <div className="md:w-2/3 md:pl-4">
                          <div className="grid grid-cols-3 gap-2 md:gap-4">
                            {players.map((player, index) => (
                              <div
                                key={index}
                                className="border-2 p-2 md:p-4 rounded-lg text-center cursor-pointer hover:bg-gray-200"
                                onClick={() => handlePlayerClick(player)}
                              >
                                <img src="/player-icon.png" alt="Player Icon" className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-2"/>
                                <p className="text-xs md:text-base">{player.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        
                  </div>
                </section>
            </div>
        </div>
    
  );
};

export default TeamOverview;