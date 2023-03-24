import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsAdded, setAttemptsAdded] = useState<string>("0");
    function parseAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        const parseAttempt = parseInt(event.target.value) || 0;
        setAttemptsAdded(parseAttempt.toString());
    }
    return (
        <div>
            <Form.Group controlId="addAttempts">
                <Form.Label>Attempts to Add</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsAdded}
                    onChange={parseAttempts}
                />
            </Form.Group>
            Attempts: {attemptsLeft}
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft <= 0}
            >
                Use
            </Button>
            <Button
                onClick={() =>
                    setAttemptsLeft(attemptsLeft + parseInt(attemptsAdded))
                }
            >
                Gain
            </Button>
        </div>
    );
}
