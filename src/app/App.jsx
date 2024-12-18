import './App.css';
import { BrowserRouter as Router,  Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
// import Codigo from './pages/Codigo'
import ContrasenaRecover from './pages/ContrasenaRecover'
import ContrasenaRecover2 from './pages/ContrasenaRecover2'
import ChangePassword from './components/regist-inisesion-input/ChangePassword'
// import Notificaciones2 from './components/NotificacionesJugador'
import Rol from './components/eleccion-rol/Rol';
import EleccionRol from './components/eleccion-rol/EleccionRol';
import DeleteUser from './pages/admin/deleteUser';
// import Perfil from './components/Perfil/cuadro1'
// import Configuracion from './components/configuración/cuadro2'

// Player imports
import DashboardJugador from './pages/jugador/DashboardJugador';
import ConfigurationPlayer from './pages/jugador/confiplayer';
import PlayerDocuments from './pages/jugador/PlayerDocuments';
import PlayerHelp from './pages/jugador/PlayerHelp';
import PlayerNotifications from './components/notificaciones/NotificacionesJugador';

// Trainer imports
import DashboardTrainer from './pages/entrenador/DashboardTrainer';
import NotificacionesAdmin from './components/notificaciones/NotificacionesAdmin';
import CreacionEquipo from './pages/entrenador/CreacionEquipo';
import DocumentsTrainer from './pages/entrenador/DocumentsTrainer';
import EdicionMesociclo from './pages/entrenador//edicion-mesociclo/edicionMesociclo';
import TrainerHelp from './pages/entrenador/TrainerHelp';
import ConfigurationTrainer from './pages/entrenador/configTrainer';
import TeamOverview from './pages/entrenador/TeamOverview';
import Tabla from './components/mesociclo/Mesociclo';

// Admin imports
// import AdminDashboard from './pages/admin/AdminDashboard';
import ConfiguracionAdmin from './pages/admin/configuracion/configuracionAdmin';
import Restriccion from './pages/admin/acceso-restringido/restriccion';
import NavbarEdicion from './components/Navbar/NavbarEdicion';


function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  console.log(location)

  return (
      <div className="bg-gradient-to-br m-0 from-sky-200 to-white-200 w-screen h-screen">
        <Routes location={background || location}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login/*' element={<Login />} />
          <Route path='/register/*' element={<SignUp />} />2
          <Route path='/recoverPass/*' element={<ContrasenaRecover />} />
          <Route path='/recoverPass2/*' element={<ContrasenaRecover2 />} />
          <Route path='/changePass/*' element={<ChangePassword />} />
          <Route path='/restriccion' element={<Restriccion/>}></Route>
          <Route path='/navbarEdicion' element={<NavbarEdicion/>}></Route>
          {/* Rutas Jugador */}
          <Route path='/player/home' element={<DashboardJugador />}></Route>
          <Route path='/player/config' element={<ConfigurationPlayer/>}></Route>
          {/* <Route path='/player/notifications' element={<NotificacionesPlayer />}></Route> */}
          <Route path='/player/help' element={<PlayerHelp />}></Route>
          <Route path='/player/documents' element={<PlayerDocuments/>}></Route>


          {/* Rutas Entrenador */}
          
          <Route path='/trainer/home' element={<DashboardTrainer />} />
          <Route path='/trainer/config' element={<ConfigurationTrainer/>}></Route>
          <Route path='/trainer/changePass'></Route>
          <Route path='/trainer/newTeam' element={<CreacionEquipo />}></Route>
          {/* <Route path='/trainer/notifications' element={<NotificacionesAdmin/>}></Route> */}
          <Route path='/trainer/team' element={<TeamOverview/>}></Route>
          <Route path='/trainer/documents' element={<DocumentsTrainer/>}></Route>
          <Route path='/trainer/help' element={<TrainerHelp />}></Route>
          <Route path='/trainer/editMesocycle' element={<EdicionMesociclo/>}></Route>
          <Route path='/trainer/tabla' element={<Tabla/>}></Route>

          {/* Rutas de admin */}
          {/* <Route path='/admin/home' element={<AdminDashboard />}></Route> */}
          <Route path='/admin/configuration' element={<ConfiguracionAdmin/>}></Route>
          <Route path='/admin/deleteUser' element={<DeleteUser />} ></Route>
          {/* <Route path='/admin/incidents' element={<AdminIncidents />}></Route>
          <Route path='/admin/incidents/info' element={<IncidentInfo />}></Route>
          <Route path='/admin/archivos' element={<AdminFiles />}></Route> */}
        <Route path='/eleccionRol' element={<EleccionRol title="Rol2" /> } ></Route>
        </Routes>

        {background && (
          <Routes>
            <Route path='/rol' element={<Rol />} ></Route>
            <Route path='/player/notifications' element={<PlayerNotifications title="Notificaciones" />} ></Route>
            <Route path='/trainer/notifications' element={<NotificacionesAdmin title="Notificaciones" />} ></Route>
          </Routes>
        )}
      </div>
  );
}

export default App;