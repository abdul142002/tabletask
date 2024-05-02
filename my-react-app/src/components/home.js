import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import users from "./users";

function Home() {
	let history = useNavigate();

	function setID(id, name, email, phoneNumber, age) {
		localStorage.setItem("id", id);
		localStorage.setItem("Name", name);
        localStorage.setItem("Email", email);
        localStorage.setItem("PhoneNumber", phoneNumber);
		localStorage.setItem("Age", age);
	}

		function deleted(id) {
		let index = users
			.map(function (e) {
				return e.id;
			})
			.indexOf(id);

		users.splice(index, 1);
		history("/");
	}

	return (
		<div style={{ margin: "5rem" }}>
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
					{users.map((item) => {
						return (
							<tr>
								<td>{item.Name}</td>
                                <td>{item.Email}</td>
                                <td>{item.PhoneNumber}</td>
								<td>{item.Age}</td>
								<td>
									<Link to={`/edit`}>
										<Button
											onClick={(e) =>
												setID(
													item.id,
													item.Name,
                                                    item.Email,
                                                    item.PhoneNumber,
													item.Age
												)
											}
											variant="info"
										>
											Update
										</Button>
									</Link>
								</td>
								<td>
									<Button
										onClick={(e) =>
											deleted(item.id)
										}
										variant="danger"
									>
										Delete
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<Link className="d-grid gap-2" to="/create">
				<Button variant="warning" size="lg">
					Create Record
				</Button>
			</Link>
		</div>
	);
}

export default Home;
