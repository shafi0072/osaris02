import React, { useContext } from 'react';
import SidebarMain from '../Shared/Navbar/Sidebar/SidebarMain';
import Guitar from './Guitar/Guitar';
import Navbar from './../Shared/Navbar/Navbar';
import UsedGuitar from './UsedGuitar/UsedGuitar';
import Slider from './Slider/Slider';
import { userContext } from '../../App';
import './Admin.css'
import BuilderAdmin from './BuilderAdmin/BuilderAdmin';
const AdminMain = () => {
    const [user, setUser] = useContext(userContext)
    return (
        <div className="bg-dark row pb-4 " style={{height:''}}>
        <Navbar/>
            <div className="col-md-3 bg-dark">
                <SidebarMain/>
            </div>
            <div className="col-md-9 mainClor">
                <BuilderAdmin/>
                {user.guitars&& <Guitar/>}
                {user.useGuitar && <UsedGuitar/>}
                {user.slider && <Slider/>}
            </div>
        </div>
    );
};

export default AdminMain;