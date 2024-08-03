import * as Main from './styles';
import { useState, useEffect } from 'react';
import iconPen from "../../assets/pen.svg";
import { Item } from '../../types/Item';


type Props = {
    onAddTask: (id: number, name: string, description: string, status: boolean) => void;
    editTask: Item | null;
};

export const AddTask = ({ onAddTask, editTask }: Props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    // Função para gerar um ID único
    const generateId = () => {
        return new Date().getTime(); // Gera um ID baseado no timestamp atual
    };

    useEffect(() => {
        if (editTask) {
            setName(editTask.name);
            setDescription(editTask.description);
        } else {
            setName('');
            setDescription('');
        }
    }, [editTask]);

    const handleAddTask = () => {
        if (name.trim() && description.trim()) {
            if (editTask) {
                onAddTask(editTask.id, name.trim(), description.trim(), editTask.status);
            } else {
                const newTask = {
                    id: generateId(), // Gera um ID único para a nova tarefa
                    name: name.trim(),
                    description: description.trim(),
                    status: false // Define o status inicial como false
                };
                onAddTask(newTask.id, newTask.name, newTask.description, newTask.status);
            }
            setName(''); // Limpa o campo de nome
            setDescription(''); // Limpa o campo de descrição
        }
    };

    return(
        <Main.Field>
            <Main.Icon src={iconPen}></Main.Icon>
            <Main.FieldTitle>{editTask ? "Editar tarefa" : "Nova tarefa"}</Main.FieldTitle>
            <Main.GroupAdd>
                <Main.LabelAdd>Nome da tarefa</Main.LabelAdd>
                <Main.InputAdd
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Main.GroupAdd>
            <Main.GroupAdd>
                <Main.LabelAdd>Descrição da tarefa</Main.LabelAdd>
                <Main.InputAdd
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Main.GroupAdd>
            <Main.ButtonPrimary onClick={handleAddTask}>
                {editTask ? "Salvar alterações" : "Adicionar nova tarefa"}
            </Main.ButtonPrimary>
        </Main.Field>
    );
}