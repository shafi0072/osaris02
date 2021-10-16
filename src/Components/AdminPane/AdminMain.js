import React from 'react';
import SidebarMain from '../Shared/Navbar/Sidebar/SidebarMain';
import Guitar from './Guitar/Guitar';
const AdminMain = () => {
    return (
        <div className="bg-dark row pb-4" style={{height:''}}>
            <div className="col-md-3">
                <SidebarMain/>
            </div>
            <div className="col-md-9">
                <Guitar/>
            </div>
        </div>
    );
};

export default AdminMain;