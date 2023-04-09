import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Layout(props) {
    return (
        <div>
            <Navbar></Navbar>

            {/* Main content goes here */}
            {props.children}

            <Footer></Footer>
        </div>
    );
}

export default Layout;
