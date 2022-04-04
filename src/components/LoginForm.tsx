import React, {useState} from "react";
import { IUser } from "../models/IUser";

interface IState{
    user: IUser;
}
interface IProps{}

let LoginForm:React.FC<IProps> = () => {
    let [state, setState] = useState<IState>({
        user: {
            username: '',
            password: ''
        }
    });

    let updateInput = (event:React.ChangeEvent<HTMLInputElement>):void =>{
        setState({
           user: {
               ...state.user,
               [event.target.name] : event.target.value
           }
        });
    }

    let login = (event:React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        console.log(state.user);
    }
    return(
        <React.Fragment>
            {/*<pre>{JSON.stringify(state.user)}</pre> -- making sure state is changing*/}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header text-center bg-primary text-white">
                                <p className="h4">Login Here</p>
                            </div>

                            <div className="card-body">
                                <form action="" onSubmit={login}>
                                    <div className="mb-2">
                                      
                                        <input 
                                          required = {true}
                                          name = 'username'
                                          value = {state.user.username}
                                          type="text" 
                                          onChange ={updateInput}
                                          className="form-control" placeholder="username/email"/>
                                    </div>
                                    
                                    <div className="mb-2">
                                        <input required = {true}
                                          name = 'password'
                                          value = {state.user.password} 
                                          onChange ={updateInput} 
                                          type="password" className="form-control" placeholder="********"/>
                                    </div>
                                    
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-primary" value="Login"/>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default LoginForm;