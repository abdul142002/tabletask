import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import users from "./users";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    
    let history = useNavigate();
    const [name, setname] = useState("");
    const [Email, setemail] = useState("");
    const [PhoneNumber, setphonenumber] = useState("");
    const [Age, setage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uni = ids.slice(0,8);

        let a = name,
        b = Email,
        c = PhoneNumber,
        d = Age;

        if(name === "" || Email === "" || PhoneNumber === "" || Age === "" ){
            alert("Invaild input");
            return;
        }

        users.push({
            id:uni,
            Name:a,
            Email:b,
            PhoneNumber:c,
            Age:d
        })
        history("/")
    }
    
    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"5rem"}}>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Control
                    onChange={(e) => setname(e.target.value)}
                    type="text"
                    placeholder="Enter the Name"
                    requried
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Control
                    onChange={(e) => setemail(e.target.value)}
                    type="text"
                    placeholder="Enter the Email"
                    requried
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="PhoneNumber">
                    <Form.Control
                    onChange={(e) => setphonenumber(e.target.value)}
                    type="text"
                    placeholder="Enter the PhoneNumber"
                    requried
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Age">
                    <Form.Control
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
                    Submit
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

export default Create;