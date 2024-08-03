import { useState } from 'react';
import * as Main from './App.styles';
import { Item } from './types/Item';
import { Task } from './components/Task';
import { AddTask } from './components/AddTask';

function App() {
    const [list, setList] = useState<Item[]>([
        {
            id: 1,
            name: "Comprar o pão",
            description: "Na padaria do supermercado Menor Preço",
            status: false
        },
        {
            id: 2,
            name: "Fazer V Desafio INOVA",
            description: "Desafio de criar um to-do list",
            status: false
        }
    ]);

    return (
        <Main.Container>
            <Main.Area>
            <Main.Title>To do List</Main.Title>

                <AddTask></AddTask>
            {list.map((item, index)=>(
                <Task key={index} item={item}></Task>
            ))}


            </Main.Area>
        </Main.Container>
    );
}

export default App;
