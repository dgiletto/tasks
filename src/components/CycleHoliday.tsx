import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🎁" | "🍀" | "🦃";

const HOLIDAY_ALPHABET: Record<Holiday, Holiday> = {
    "🎁": "🎄",
    "🎄": "🎃",
    "🎃": "🍀",
    "🍀": "🦃",
    "🦃": "🎁"
};

const HOLIDAY_INORDER: Record<Holiday, Holiday> = {
    "🎁": "🍀",
    "🍀": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🎁"
};
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎁");
    function changeAlphabetically(): void {
        const newHoliday = HOLIDAY_ALPHABET[holiday];
        setHoliday(newHoliday);
    }
    function changeInOrder(): void {
        const newHoliday = HOLIDAY_INORDER[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            Holiday: {holiday}
            <Button onClick={changeAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={changeInOrder}>Advance by Year</Button>
        </div>
    );
}
