import { render } from "@testing-library/react";
import React, {useState} from "react";
import { renderIntoDocument } from "react-dom/test-utils";

interface IProps{};
interface IState{
    name: string;
    age: number;
    title: string;
};

export class EmployeeClass extends React.Component<IProps, IState >{
    constructor(props:IProps){
    super(props);
    this.state = {
        name: 'Vanessa',
        age: 28,
        title: 'Software Engineer'
    } as IState //initializing state in the constructor
    }


render() {
    let {name, age, title} = this.state
    
    
        return(
            <React.Fragment>
                <h3>Employee State Class Compontent</h3>

                <ul className="list-group">
                <li className="list-group-item">
                    Name : {name}
                 
                </li>
                <li className="list-group-item">
                    Age : {age}
                 
                </li>
                <li className="list-group-item">
                    Title : {title}
                 
                </li>
            </ul>
            </React.Fragment>
        );
    }
}
