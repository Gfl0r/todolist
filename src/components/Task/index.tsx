import * as Main from './styles';
import checkOut from "../../assets/check-disable.svg";
import checkIn from "../../assets/check.svg";
import { Item } from '../../types/Item';
import { useState } from 'react';


type Props = {
    item: Item;
}


export const Task = ({ item }: Props) => {
    const [checked, setChecked] = useState(item.status);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <Main.Task>
            {checked ? (
                <Main.TaskCheckIn
                    src={checkIn}
                    alt="Checked"
                    onClick={handleCheckboxChange}
                />
            ) : (
                <Main.TaskCheckOut
                    src={checkOut}
                    alt="Unchecked"
                    onClick={handleCheckboxChange}
                />
            )}
            <Main.HiddenCheckbox
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
            />
            <Main.TaskH2 checked={checked}>{item.name}</Main.TaskH2>
            <Main.TaskDescription>{item.description}</Main.TaskDescription>
        </Main.Task>
    );
}