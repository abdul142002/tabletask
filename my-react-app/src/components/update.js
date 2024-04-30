import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import users from "./users";
import { Link, useNavigate } from "react-router-dom";


function Update() {
    
    let history = useNavigate();
    const [Name, setname] = useState("");
    const [Email, setemail] = useState("");
    const [PhoneNumber, setphonenumber] = useState("");
    const [Age, setage] = useState("");
    const [id, setid] = useState("");

    let index = users.map(function (e){
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(Name === "" || Email === "" || PhoneNumber === "" || Age === "" ){
            alert("Invaild input");
            return;
        }

        let a = users[index];
        a.Name = Name;
        a.Email = Email;
        a.PhoneNumber = PhoneNumber;
        a.Age = Age;

        history("/");
    }
    

    useEffect(() => {
        setname(localStorage.getItem("Name"))
        setemail(localStorage.getItem("Email"))
        setphonenumber(localStorage.getItem("PhoneNumber"))
        setage(localStorage.getItem("Age"))
        setid(localStorage.getItem("id"))
    },[])

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"5rem"}}>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Control
                    value={Name}
                    onChange={(e) => setname(e.target.value)}
                    type="text"
                    placeholder="Enter the Name"
                    requried
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Control
                    value={Email}
                    onChange={(e) => setemail(e.target.value)}
                    type="text"
                    placeholder="Enter the Email"
                    requried
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="PhoneNumber">
                    <Form.Control
                    value={PhoneNumber}
                    onChange={(e) => setphonenumber(e.target.value)}
                    type="text"
                    placeholder="Enter the PhoneNumber"
                    requried
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Age">
                    <Form.Control
                    value={Age}
                    onChange={(e) => setage(e.target.value)}
                    type="text"
                    placeholder="Enter the Age"
                    requried
                    />
                </Form.Group>
                <Button 
                onClick={(e) => handleSubmit(e)}
                variant="success"
                type="submit"
                >
                    Update
                </Button>
                <Link className="d-grid gap-2" to="/">
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    )
}

export default Update;