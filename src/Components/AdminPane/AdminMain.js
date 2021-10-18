import React from 'react';
import SidebarMain from '../Shared/Navbar/Sidebar/SidebarMain';
import Guitar from './Guitar/Guitar';
import Navbar from './../Shared/Navbar/Navbar';
import UsedGuitar from './UsedGuitar/UsedGuitar';
const AdminMain = () => {
    return (
        <div className="bg-dark row pb-4" style={{height:''}}>
        <Navbar/>
            <div className="col-md-3">
                <SidebarMain/>
            </div>
            <div className="col-md-9">
                <Guitar/>
                <UsedGuitar/>
            </div>
        </div>
    );
};

export default AdminMain;