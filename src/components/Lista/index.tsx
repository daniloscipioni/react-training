import React  from 'react';
import { ITarefa } from '../../types/tarefa';
import Item from './item';
import style from './Lista.module.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecioanada: ITarefa) => void
}

function Lista( { tarefas, selecionaTarefa }: Props) {
    

    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos dos dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        selecionaTarefa = {selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}

            </ul>
        </aside>
    )
}

export default Lista;