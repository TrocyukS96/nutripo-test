import React, {ChangeEvent, FC, useEffect, useState} from "react";
import s from './index.module.scss';
import {productsSelectors} from "../../redux";
import {useSelector} from "react-redux";
import {Row} from "../row/Row";
import {Pagination} from "../pagination/Pagination";
import {Product} from "../../api/types";
import {toFilterCards} from "../../utils/toFIlterCards";
import {Preloader} from "../preloader/Preloader";

export const WorkSpace: FC = () => {
    const products = useSelector(productsSelectors.products)
    const status = useSelector(productsSelectors.status)
    const [cards,setCards]=useState<Product[]>([])
    const [inputText,setInputText] = useState('')

    useEffect(()=>{
        setCards(products)
    },[products])

    const renderCardsHandler = () => {
        return toFilterCards(cards,inputText).map((product, index) => {
            return (
                <Row key={index}
                     id={product.id}
                     name={product.name}
                     standart_serving={product.standart_serving}
                />
            )
        })
    }

    const searchHandler =(e:ChangeEvent<HTMLInputElement>)=> {
        setInputText(e.currentTarget.value)
    }

    return (
        <div className={s.workSpace}>
            <h1 className={s.title}>Products table</h1>
            <div className={s.searchPanel}>
                <input type="text" onChange={searchHandler} placeholder={'add the text'} value={inputText}/>
            </div>
            <div className={s.tableBlock}>
                <Row id={'ID'} name={'Name'} standart_serving={'Standart serving'}/>
                {status === 'succeeded' ? renderCardsHandler()
                    : <Preloader/>
                }

            </div>
            <Pagination/>
        </div>
    )
}