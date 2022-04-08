import React from "react";
import {Link} from 'react-router-dom';


interface IProps{}

let Navbar:React.FC<IProps> = () => {
    return(
        <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <div className="container">
                <Link className="navbar-brand" to={'/'}>React Router</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link to={'/about'} className="nav-link">About</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to={'/'} className="nav-link">User List</Link>
                        </li>
                    </ul>
                </div>
               </div>
           </nav>
        </React.Fragment>
    )
};

export default Navbar;