import {FC} from "react";
import s from './index.module.scss';

interface IProps {
    id: number | string
    name: string
    standart_serving: number | string
}

export const Row: FC<IProps> = ({
                                    id, name, standart_serving
                                }) => {
    return (
        <div className={s.row}>
            <div className={s.item}>{id}</div>
            <div className={s.item}>{name}</div>
            <div className={s.item}>{standart_serving}</div>
        </div>
    )
}