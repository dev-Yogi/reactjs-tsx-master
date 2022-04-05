import React from "react";

interface IState{}
interface IProps{}

let About:React.FC<IProps> = () => {
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success fw-bold">
                            About Us
                        </p>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci blanditiis temporibus similique libero beatae autem, veritatis, nam deleniti ratione reprehenderit iure earum? Mollitia saepe veniam cumque velit molestiae ut quaerat?
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                    <li className="list-group-item">
                                App Name:  <span className="fw-bold">React Router with TypeScript</span>
                            </li>
                            <li className="list-group-item">
                                Author :  <span className="fw-bold">Vanessa Kasun</span>
                            </li>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default About;