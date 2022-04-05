import React from 'react';
import './App.css';
import UserList from './components/UserList';

import logo from './logo.svg';


function App() {
  return (
   <React.Fragment>
     <div className="container mt-3">
       <div className="gird">
         <div className="row">
           <div className="col">
             <p className="h3 fw-bold text-success">
               App Component
             </p>
             <p className='fs-italic'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis suscipit unde perferendis saepe facilis optio necessitatibus. Similique alias, fuga dignissimos molestiae itaque voluptatem vel ut dolor pariatur rerum nam minima?
             </p>
            
           </div>
         </div>
       </div>

        <div className="row">
          <div className="col">
            <UserList/>
          </div>
        </div>


    </div> {/*Container Closing Div */}
   </React.Fragment>
  );
}

export default App;
