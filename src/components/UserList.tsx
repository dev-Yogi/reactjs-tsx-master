import React, {useEffect, useState} from "react";
import { IUser } from "../models/IUser";
import { UserService } from "../services/UserService";
import {Link} from 'react-router-dom';

interface IState{
    loading: boolean;
    users: IUser [];
    errorMessage: string;
}
interface IProps{}

let UserList:React.FC<IProps> = () => {
    let [state,setState] = useState<IState>({
        loading: false,
        users: [] as IUser[],
        errorMessage: ''
    });

    useEffect( () => {
        setState({...state, loading: true,});
        UserService.getAllUsers().then( (response) => {
            setState({
                ...state,
                loading : false,
                users: response.data,

            })
        }).catch( (error) => {
            setState({
                ...state,
                loading : false,
                errorMessage: error.message

            })
        });
    } , []);


    let {loading, users, errorMessage} = state;
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 fw-bold text-success">User List</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae ut vitae fugiat soluta numquam laboriosam? Odit non in at facere aperiam necessitatibus doloribus dolor illum. Illum repellat hic corrupti.ß</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col mg-10">
                        <table className="table table-hover text-center table-striped">
                            <thead className="bg-success text-white">
                                <tr>
                                    <th>I.D</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Company</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                users.length > 0 && users.map( user => {
                                    return (
                                        <tr key = {user.id}>
                                            <td>
                                                {user.id}
                                            </td>
                                            <td>
                                               <Link className="text-decoration-none text-success fw-bold"to={`/contacts/${user.id}`}>{user.name}</Link>
                                            </td>
                                         
                                            <td>
                                                {user.email}
                                            </td>
                                         
                                            <td>
                                                {user.phone}
                                            </td>
                                            <td>
                                                {user.company.name}
                                            </td>
                                            <td>
                                               <a href={user.website}>{user.website}</a>
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default UserList;