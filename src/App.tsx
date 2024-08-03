import { useState, useRef, useEffect } from 'react';
import * as Main from './App.styles';
import { Item } from './types/Item';
import { Task } from './components/Task';
import { AddTask } from './components/AddTask';

function App() {
    const [list, setList] = useState<Item[]>([]);
    const [editTask, setEditTask] = useState<Item | null>(null);
    const [scrollbarVisible, setScrollbarVisible] = useState(false);
    const [thumbHeight, setThumbHeight] = useState(0);
    const areaRef = useRef<HTMLDivElement>(null);

    const handleAddTask = (id: number, name: string, description: string, status: boolean) => {
        if (editTask) {
            setList(list.map(task =>
                task.id === editTask.id
                    ? { ...task, id, name, description, status }
                    : task
            ));
            setEditTask(null);
        } else {
            setList([...list, { id, name, description, status }]);
        }
    };

    const handleEditTask = (task: Item) => {
        setEditTask(task);
    };

    const handleDeleteTask = (id: number) => {
        setList(list.filter(task => task.id !== id));
    };

    const updateScrollbar = () => {
        if (areaRef.current) {
            const scrollHeight = areaRef.current.scrollHeight;
            const clientHeight = areaRef.current.clientHeight;
            setScrollbarVisible(scrollHeight > clientHeight);
            const scrollRatio = clientHeight / scrollHeight;
            setThumbHeight(clientHeight * scrollRatio);
        }
    };

    useEffect(() => {
        updateScrollbar();
        window.addEventListener('resize', updateScrollbar);
        return () => window.removeEventListener('resize', updateScrollbar);
    }, [list, editTask]);

    return (
        <Main.Container>
            <Main.AreaContainer>
                <Main.Title>To do List</Main.Title>
                <Main.Area ref={areaRef}>
                    <AddTask onAddTask={handleAddTask} editTask={editTask}/>
                    {list.map((item) => (
                        <Task
                            key={item.id}
                            item={item}
                            onEdit={handleEditTask}
                            onDelete={handleDeleteTask}  // Passa o handler de exclusão
                        />
                    ))}
                </Main.Area>
                <Main.CustomScrollbar>
                    <Main.ScrollThumb />
                </Main.CustomScrollbar>
            </Main.AreaContainer>
        </Main.Container>
    );
}

export default App;
