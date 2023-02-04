import SignUpModal from './Component/singUp/singup';
import LoginModal from './Component/login/login';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/reset.css';
import './index.css';
// import 'react-datepicker2/dist/react-datepicker2.min.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// react-query
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// end

import './Component/css.css'
import Home from './pages/Home';
import MenuContext from './contexts/MenuContext';
import Established from './Component/Established/Established';
import Established1 from './Component/Established/Established-1';
import Established2 from './Component/Established/Established2';
import Established3 from './Component/Established/Established3';
import Established4 from './Component/Established/Established4';
import Established5 from './Component/Established/Established5';
import Established6 from './Component/Established/Established6';
import KHabar from './Component/KHabr/KHabar';
import KHabar1 from './Component/KHabr/KHabar1';
import KHabar2 from './Component/KHabr/KHabar2';
import KHabar3 from './Component/KHabr/KHabar3';
import Admin from './Component/Admin/Admin';
import Ezafereshte from './Component/Admin/Ezafereshte';
import Maliat from './Component/Admin/Maliat';
import DarkhasteSHoab from './Component/Admin/DarkhasteSHoab';
import DarkhasteGovahi from './Component/Admin/DarkhasteGovahi';
import DarkhasteTaghier from './Component/Admin/DarkhasteTaghier';
import Tamdid from './Component/Admin/Tamdid';
import TamdidTaeid from './Component/Admin/TamdidTaeid';
import TamdidAzmon from './Component/Admin/TamdidAzmon';
import TamdidNatije from './Component/Admin/TamdidNatije';
import EzafereshteUpload from './Component/Admin/EzafereshteUpload';
import EzafeOkey from './Component/Admin/EzafeOkey';
import FormShekayat from './Component/SecendAction/FormShekayat/FormShekayat'

// Colleague

import Colleague from '../src/Component/Colleague/Colleague'
// import LayoutColleague from './Component/layout/LayoutColleague';

// 

import LayoutUser from './Component/layout/LayoutUser';
import ModalStateContext from './contexts/ModalStateContext';
import ProfileAdmin from './Component/Admin/ProfileAdmin';
import ProfileColleague from './Component/Colleague/ProfileColleague';
import Archive from './Component/Colleague/Archive';
import Ezafereshte2 from './Component/Admin/Ezafereshte2';
import Ezafereshte21 from './Component/Admin/Ezafereshte21';
import ColleagueAccept from './Component/Colleague/ColleagueFolder/ColleagueAccept';
import ColleagueFolder from './Component/Colleague/ColleagueFolder/ColleagueFolder';
import ColleagueFolder2 from './Component/Colleague/ColleagueFolderOld/ColleagueFolder2';
import ColleagueAccept2 from './Component/Colleague/ColleagueFolderOld/ColleagueAccept2';
import ColleagueOk from './Component/Colleague/ColleagueFolder/ColleagueOk';
import ColleagueCancel from './Component/Colleague/ColleagueFolder/ColleagueCancel';
import ColleagueAcceptTable from './Component/Colleague/ColleagueFolder/ColleagueAcceptTable';
import ColleagueAcceptTable2 from './Component/Colleague/ColleagueFolderOld/ColleagueAcceptTable2';
import ColleagueOk2 from './Component/Colleague/ColleagueFolderOld/ColleagueOk2';
import ColleagueOkTable from './Component/Colleague/ColleagueFolder/ColleagueOkTable';
import ColleagueOkTable2 from './Component/Colleague/ColleagueFolderOld/ColleagueOkTable2';
import ColleagueCancel2 from './Component/Colleague/ColleagueFolderOld/ColleagueCancel2';
import DetailedNews from './Component/Admin/DetailedNews';
import Manage from './Component/manage/Manage';
import ManageFolder from './Component/manage/ManageFolder/ManageFolder';
import ManageAccept from './Component/manage/ManageFolder/ManageAccept';
import ManageFolder2 from './Component/manage/ManageFolderOld/ManageFolder2';
import ManageAccept2 from './Component/manage/ManageFolderOld/ManageAccept2';
import ManageOk from './Component/manage/ManageFolder/ManageOk';
import ManageOkTable from './Component/manage/ManageFolder/ManageOkTable';
import ManageOk2 from './Component/manage/ManageFolderOld/ManageOk2';
import ManageOkTable2 from './Component/manage/ManageFolderOld/ManageOkTable2';
import ManageCancel from './Component/manage/ManageFolder/ManageCancel';
import ManageCancel2 from './Component/manage/ManageFolderOld/ManageCancel2';
import ManageAcceptTable from './Component/manage/ManageFolder/ManageAcceptTable';
import ManageAcceptTable2 from './Component/manage/ManageFolderOld/ManageAcceptTable2';
import ProfileManage from './Component/manage/ProfileManage';
import Archive2 from './Component/manage/Archive2';
import AdminFolder from './Component/Admin/AdminFolder/AdminFolder';
import AdminAccept from './Component/Admin/AdminFolder/AdminAccept';
import AdminFolder2 from './Component/Admin/AdminFolderOld/AdminFolder2';
import AdminAccept2 from './Component/Admin/AdminFolderOld/AdminAccept2';
import AdminOk from './Component/Admin/AdminFolder/AdminOk';
import AdminOkTable from './Component/Admin/AdminFolder/AdminOkTable';
import AdminOk2 from './Component/Admin/AdminFolderOld/AdminOk2';
import AdminOkTable2 from './Component/Admin/AdminFolderOld/AdminOkTable2';
import AdminCancel from './Component/Admin/AdminFolder/AdminCancel';
import AdminCancel2 from './Component/Admin/AdminFolderOld/AdminCancel2';
import AdminAcceptTable from './Component/Admin/AdminFolder/AdminAcceptTable';
import AdminAcceptTable2 from './Component/Admin/AdminFolderOld/AdminAcceptTable2';
import KHabarManage from './Component/manage/KHabarManage';


const queryClient = new QueryClient()
const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <MenuContext>
        <ModalStateContext>
          <Router>
            <SignUpModal />
            <LoginModal />
            <Routes>
              <Route exact path='/center8' element={<Home />} />
              <Route exact path='/KHabar' element={<KHabar />} />
              <Route exact path='/KHabar1' element={<KHabar1 />} />
              <Route exact path='/KHabar2' element={<KHabar2 />} />
              <Route exact path='/KHabar3' element={<KHabar3 />} />
              <Route path='/center8/Established' element={<LayoutUser><Established /></LayoutUser>} />
              <Route path='/center8/Established/:code' element={<LayoutUser><Established /></LayoutUser>} />
              <Route path='/Established-1' element={<LayoutUser><Established1 /></LayoutUser>} />
              <Route path='/Established2' element={<LayoutUser><Established2 /></LayoutUser>} />
              <Route path='/Established3' element={<LayoutUser><Established3 /></LayoutUser>} />
              <Route path='/Established4' element={<LayoutUser><Established4 /></LayoutUser>} />
              <Route path='/Established5' element={<LayoutUser><Established5 /></LayoutUser>} />
              <Route path='/Established6' element={<Established6 />} />
              <Route path='/FormShekayat' element={<FormShekayat />} />
              {/*  */}

              <Route path='/AdminFolder' element={<AdminFolder />} />
              <Route path='/AdminAccept' element={<AdminAccept />} />
              <Route path='/AdminFolder2' element={<AdminFolder2 />} />
              <Route path='/AdminAccept2' element={<AdminAccept2 />} />
              <Route path='/AdminOk' element={<AdminOk />} />
              <Route path='/AdminOkTable' element={<AdminOkTable />} />
              <Route path='/AdminOk2' element={<AdminOk2 />} />
              <Route path='/AdminOkTable2' element={<AdminOkTable2 />} />
              <Route path='/AdminCancel' element={<AdminCancel />} />
              <Route path='/AdminCancel2' element={<AdminCancel2 />} />
              <Route path='/AdminAcceptTable' element={<AdminAcceptTable />} />
              <Route path='/AdminAcceptTable2' element={<AdminAcceptTable2 />} />
              {/*  */}

              {/*  */}
              <Route path='/Colleague' element={<Colleague />} />
              <Route path='/ColleagueFolder' element={<ColleagueFolder />} />
              <Route path='/ColleagueAccept' element={<ColleagueAccept />} />
              <Route path='/ColleagueFolder2' element={<ColleagueFolder2 />} />
              <Route path='/ColleagueAccept2' element={<ColleagueAccept2 />} />
              <Route path='/ColleagueOk' element={<ColleagueOk />} />
              <Route path='/ColleagueOkTable' element={<ColleagueOkTable />} />
              <Route path='/ColleagueOk2' element={<ColleagueOk2 />} />
              <Route path='/ColleagueOkTable2' element={<ColleagueOkTable2 />} />
              <Route path='/ColleagueCancel' element={<ColleagueCancel />} />
              <Route path='/ColleagueCancel2' element={<ColleagueCancel2 />} />
              <Route path='/ColleagueAcceptTable' element={<ColleagueAcceptTable />} />
              <Route path='/ColleagueAcceptTable2' element={<ColleagueAcceptTable2 />} />
              <Route path='/ProfileColleague' element={<ProfileColleague />} />
              <Route path='/Archive' element={<Archive />} />
              {/*  */}


              {/*  */}
              <Route path='/Manage' element={<Manage />} />
              <Route path='/ManageFolder' element={<ManageFolder />} />
              <Route path='/ManageAccept' element={<ManageAccept />} />
              <Route path='/ManageFolder2' element={<ManageFolder2 />} />
              <Route path='/ManageAccept2' element={<ManageAccept2 />} />
              <Route path='/ManageOk' element={<ManageOk />} />
              <Route path='/ManageOkTable' element={<ManageOkTable />} />
              <Route path='/ManageOk2' element={<ManageOk2 />} />
              <Route path='/ManageOkTable2' element={<ManageOkTable2 />} />
              <Route path='/ManageCancel' element={<ManageCancel />} />
              <Route path='/ManageCancel2' element={<ManageCancel2 />} />
              <Route path='/ManageAcceptTable' element={<ManageAcceptTable />} />
              <Route path='/ManageAcceptTable2' element={<ManageAcceptTable2 />} />
              <Route path='/ProfileManage' element={<ProfileManage />} />
              <Route path='/Archive2' element={<Archive2 />} />
              <Route path='/KHabarManage' element={<KHabarManage />} />
              {/*  */}


              <Route path='/admin' element={<Admin />} />
              <Route path='/ProfileAdmin' element={<ProfileAdmin />} />
              <Route path='/Ezafereshte' element={<Ezafereshte />} />
              <Route path='/Ezafereshte2' element={<Ezafereshte2 />} />
              <Route path='/Ezafereshte21' element={<Ezafereshte21 />} />
              <Route path='/Maliat' element={<Maliat />} />
              <Route path='/DarkhasteTaghier' element={<DarkhasteTaghier />} />
              <Route path='/DarkhasteSHoab' element={<DarkhasteSHoab />} />
              <Route path='/DarkhasteGovahi' element={<DarkhasteGovahi />} />
              <Route path='/Tamdid' element={<Tamdid />} />
              <Route path='/TamdidTaeid' element={<TamdidTaeid />} />
              <Route path='/TamdidAzmon' element={<TamdidAzmon />} />
              <Route path='/TamdidNatije' element={<TamdidNatije />} />
              <Route path='/EzafereshteUpload' element={<EzafereshteUpload />} />
              <Route path='/EzafeOkey' element={<EzafeOkey />} />
              <Route path='/DetailedNews/:id' element={<DetailedNews />} />



              <Route path="*" element={<Navigate replace to="/center8" />} />
              <Route path="/" element={<Navigate replace to="/center8" />} />
              <Route path="" element={<Navigate replace to="/center8" />} />
            </Routes>
          </Router>
        </ModalStateContext>
      </MenuContext>
    </QueryClientProvider>
  );
}

export default App;

