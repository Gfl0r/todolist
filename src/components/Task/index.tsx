import * as Main from './styles';
import { useState } from 'react';
import checkOut from "../../assets/check-disable.svg";
import checkIn from "../../assets/check.svg";
import { Item } from '../../types/Item';
import editIcon from '../../assets/editar.svg';
import trashIcon from '../../assets/trash.svg';

type Props = {
    item: Item;
    onEdit: (item: Item) => void;
    onDelete: (id: number) => void;  // Nova prop para exclusão
}

export const Task = ({ item, onEdit, onDelete }: Props) => {
    const [checked, setChecked] = useState(item.status);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    const handleEditClick = () => {
        onEdit(item);
    };

    const handleDeleteClick = () => {
        onDelete(item.id);
    };

    return (
        <Main.Task>
            <Main.TaskGroup>
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
            </Main.TaskGroup>
            <Main.TaskEdit
                src={editIcon}
                alt="Editar"
                onClick={handleEditClick}
            />
            <Main.TaskEdit
                src={trashIcon}
                alt="Excluir"
                onClick={handleDeleteClick}  // Handler de exclusão
            />
        </Main.Task>
    );
}
