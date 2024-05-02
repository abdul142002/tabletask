import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import users from "./users";
function Create() {
    
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phoneNumber, setphonenumber] = useState("");
    const [age, setage] = useState("");
    
    let history = useNavigate();
    
    const handelSubmit = (e) => {
        e.preventDefault(); 
        const ids = uuid(); 
        let uni = ids.slice(0, 8); 

        let a = name,
            b = email,
            c = phoneNumber,
            d = age;
        if (name == "" || email == "" || phoneNumber == "" || age == "") {
            alert("invalid input");
            return;
        }
        users.push({ id: uni, Name: a, Email:b, PhoneNumber:c, Age: d });
        history("/");
    };
    return (
        <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
                <Form.Group
                    className="mb-3"
                    controlId="formBasicName">
                    <Form.Control
                        onChange={(e) =>
                            setname(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Name"
                        required
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicName">
                    <Form.Control
                        onChange={(e) =>
                            setemail(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Email"
                        required
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicName">
                    <Form.Control
                        onChange={(e) =>
                            setphonenumber(e.target.value)
                        }
                        type="text"
                        placeholder="Enter PhoneNumber"
                        required
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicAge">
                    <Form.Control
                        onChange={(e) =>
                            setage(e.target.value)
                        }
                        type="number"
                        placeholder="Age"
                        required
                    />
                </Form.Group>
                <Button
                    onClick={(e) => handelSubmit(e)}
                    variant="primary"
                    type="submit">
                    Submit
                </Button>
                <Link className="d-grid gap-2" to="/">
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Create;