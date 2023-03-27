import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function changeUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }
    return inEditMode ? (
        <div>
            {isStudent && <div>{username} is a student</div>}
            {!isStudent && <div>{username} is not a student</div>}
            <Form.Group controlId="userName">
                <Form.Label>Enter Username</Form.Label>
                <Form.Control value={username} onChange={changeUsername} />
            </Form.Group>
            <Form.Check
                type="checkbox"
                id="student-check"
                label="Student?"
                checked={isStudent}
                onChange={() => setIsStudent(!isStudent)}
            />
            <Form.Check
                type="switch"
                id="in-EditMode-check"
                label="Change Username"
                checked={inEditMode}
                onChange={() => setInEditMode(!inEditMode)}
            />
        </div>
    ) : (
        <div>
            {isStudent && <div>{username} is a student</div>}
            {!isStudent && <div>{username} is not a student</div>}
            <Form.Check
                type="switch"
                id="in-EditMode-check"
                label="Change Username"
                checked={inEditMode}
                onChange={() => setInEditMode(!inEditMode)}
            />
        </div>
    );
}
