import React from 'react';
import logo from './logo.svg';
import './App.css';



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
             <button className='btn btn-success btn-sm'>
               <i className="fa fa-book"> </i>Read More
             </button>
           </div>
         </div>
       </div>

    </div> {/*Container Closing Div */}
   </React.Fragment>
  );
}

export default App;
