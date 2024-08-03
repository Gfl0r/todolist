import * as Main from './styles';
import { useState } from 'react';
import iconPen from "../../assets/pen.svg";

export const AddTask = () => {
    return(
        <Main.Field>
            <Main.Icon src={iconPen}></Main.Icon>
            <Main.LabelAdd>Nome da tarefa</Main.LabelAdd>
            <Main.InputAdd></Main.InputAdd>
        </Main.Field>
    );
}