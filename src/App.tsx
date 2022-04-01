import React from 'react';
import logo from './logo.svg';
import './App.css';

import Employee from '../src/components/Employee';
import Customer from './components/Customer';
import { CustomerClass } from './components/CustomerClass';

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
     </div>

     <div className="row">
       <div className="col">
         <Employee/>

       </div>
     </div>

     <div className="row">
       <div className="col">
         <Customer name={'Vanessa'} age={28} title={"Software Engineer"}/>
       </div>
     </div>

     <div className="row">
       <div className="col">
         <CustomerClass name={'Vanessa'} age={28} title={"Software Engineer"}/>
       </div>
     </div>
   </React.Fragment>
  );
}

export default App;
