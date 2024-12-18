import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ContrasenaRecover from './pages/ContrasenaRecover';
import ContrasenaRecover2 from './pages/ContrasenaRecover2';
import ChangePassword from './components/regist-inisesion-input/ChangePassword';
import EleccionRol from './components/comunes/EleccionRol';
import DeleteUser from './pages/administrador/DeleteUser';

// Player imports
import DashboardJugador from './pages/jugador/DashboardJugador';
import ConfigurationPlayer from './pages/jugador/ConfigPlayer';
import PlayerDocuments from './pages/jugador/PlayerDocuments';
import PlayerHelp from './pages/jugador/PlayerHelp';
import PlayerNotifications from './components/jugador/NotificacionesJugador';

// Trainer imports
import DashboardTrainer from './pages/entrenador/DashboardTrainer';
import NotificacionesAdmin from './components/administrador/NotificacionesAdmin';
import CreacionEquipo from './pages/entrenador/CreacionEquipo';
import DocumentsTrainer from './pages/entrenador/DocumentsTrainer';
import EdicionMesociclo from './pages/entrenador/edicion-mesociclo/EdicionMesociclo';
import TrainerHelp from './pages/entrenador/TrainerHelp';
import ConfigurationTrainer from './pages/entrenador/ConfigTrainer';
import TeamOverview from './pages/entrenador/TeamOverview';
import Tabla from './components/comunes/Mesociclo';

// Admin imports
import ConfiguracionAdmin from './pages/administrador/configuracion/ConfiguracionAdmin';
import Restriccion from './pages/administrador/acceso-restringido/Restriccion';
import NavbarEdicion from './components/comunes/NavbarEdicion';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  console.log(location);

  return (
    <div className="bg-gradient-to-br m-0 from-sky-200 to-white-200 w-screen h-screen">
      <Routes location={background || location}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login/*' element={<Login />} />
        <Route path='/register/*' element={<SignUp />} />
        <Route path='/recoverPass/*' element={<ContrasenaRecover />} />
        <Route path='/recoverPass2/*' element={<ContrasenaRecover2 />} />
        <Route path='/changePass/*' element={<ChangePassword />} />
        <Route path='/restriccion' element={<Restriccion />} />
        <Route path='/navbarEdicion' element={<NavbarEdicion />} />

        {/* Rutas Jugador */}
        <Route path='/player/home' element={<DashboardJugador />} />
        <Route path='/player/config' element={<ConfigurationPlayer />} />
        <Route path='/player/help' element={<PlayerHelp />} />
        <Route path='/player/documents' element={<PlayerDocuments />} />

        {/* Rutas Entrenador */}
        <Route path='/trainer/home' element={<DashboardTrainer />} />
        <Route path='/trainer/config' element={<ConfigurationTrainer />} />
        <Route path='/trainer/newTeam' element={<CreacionEquipo />} />
        <Route path='/trainer/team' element={<TeamOverview />} />
        <Route path='/trainer/documents' element={<DocumentsTrainer />} />
        <Route path='/trainer/help' element={<TrainerHelp />} />
        <Route path='/trainer/editMesocycle' element={<EdicionMesociclo />} />
        <Route path='/trainer/tabla' element={<Tabla />} />

        {/* Rutas de admin */}
        <Route path='/admin/configuration' element={<ConfiguracionAdmin />} />
        <Route path='/admin/deleteUser' element={<DeleteUser />} />

        {/* Ruta de selección de rol */}
        <Route path='/EleccionRol' element={<EleccionRol title="Rol" />} />
      </Routes>

      {background && (
        <Routes>
          <Route path='/eleccionrol' element={<EleccionRol title="Rol" />} />
          <Route path='/player/notifications' element={<PlayerNotifications title="Notificaciones" />} />
          <Route path='/trainer/notifications' element={<NotificacionesAdmin title="NotificacionesAdmin" />} />
        </Routes>
      )}
    </div>
  );
}

export default App;