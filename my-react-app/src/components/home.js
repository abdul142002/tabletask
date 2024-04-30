import React from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import users from "./users";
import {Link, useNavigate} from "react-router-dom";


function Home(){
    
    let history = useNavigate();
    function setID(id,Name,Email,PhoneNumber,Age) {
        localStorage.setItem("id",id);
        localStorage.setItem("Name",Name);
        localStorage.setItem("Email",Email);
        localStorage.setItem("PhoneNumber",PhoneNumber);
        localStorage.setItem("Age",Age);
        
    }

    function deleted(id) {
        let index = users.map(function (e){
            return e.id;
        }).indexOf(id);
        users.slice(index,1);
        history("/")
    }

    return(
        <div style={{}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>PhoneNumber</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item)=>{
                            return (
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Email}</td>
                                <td>{item.PhoneNumber}</td>
                                <td>{item.Age}</td>
                                <td>
                                    <Link to={'/edit'}>
                                        <Button onclick={(e) => setID(item.id, item.Name, item.Email, item.PhoneNumber, item.Age)}
                                        variant = "primary"
                                        >
                                            Update
                                        </Button>
                                    </Link>
                                </td>
                                <td>
                                    <Button onclick={(e) => deleted(item.id)}
                                    variant = "danger"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Link className="d-grid gap-2" style={{"text-decoration":"none"}} to="/create">
                <Button variant="success" size="lg">
                    Create Record
                </Button>
            </Link>
        </div>
    )
}
export default Home;