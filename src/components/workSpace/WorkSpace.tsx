import React, {FC} from "react";
import s from './index.module.scss';
import {productsSelectors} from "../../redux";
import {useSelector} from "react-redux";
import {Row} from "../row/Row";
import {Pagination} from "../pagination/Pagination";

export const WorkSpace: FC = () => {
    const products = useSelector(productsSelectors.products)
    const status = useSelector(productsSelectors.status)

    console.log(status)

    const renderCardsHandler = () => {
        return products.map((product, index) => {
            return (
                <Row key={index}
                     id={product.id}
                     name={product.name}
                     standart_serving={product.standart_serving}
                />
            )
        })
    }

    return (
        <div className={s.workSpace}>
            <h1 className={s.title}>Products table</h1>
            <div className={s.searchPanel}>
                {/*<input type="text" onChange={searchHandler}/>*/}
            </div>
            <div className={s.tableBlock}>
                {status === 'succeeded' ? renderCardsHandler()
                    : <div>Loading ...</div>
                }
            </div>
            <Pagination/>
        </div>
    )
}