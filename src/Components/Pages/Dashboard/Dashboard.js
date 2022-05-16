import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <> 
        <label  tabIndex="1" for="dashboard-drawer"  className="flex justify-end btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            
       
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">

                <h2 className='text-5xl'>DASHBOARD</h2>
                <Outlet />


            </div>
            <div className="drawer-side">
                <label for="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Appointments</Link></li>
                    <li><Link to="/dashboard/review">My reviews</Link></li>
                </ul>

            </div>
        </div>
        </>
       
    );
};

export default Dashboard;