import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './index.module.scss';
import {useSelector} from 'react-redux';
import {productActions, productsSelectors} from "../../redux";
import {useActions} from "../../utils/redux-utils";
import {getIntervalsFromArr} from "../../utils/getIntervalFromArray";
import {portionSize} from "../../redux/selectors";

export const Pagination = React.memo(() => {

    const total = useSelector(productsSelectors.total)
    const page = useSelector(productsSelectors.page)
    const {fetchProducts} = useActions(productActions)
    const pageCount = useSelector(productsSelectors.pageCount)
    const [pageCountValue, setPageCountValue] = useState(pageCount)
    const [currentPage,setCurrentPage]=useState(page)
    const CurrentPortionSize = useSelector(portionSize)

    let pagesCount = Math.ceil(total! / pageCountValue);

    let pages: number[] = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const pagesOptions = [5, 10, 15]

    useEffect(() => {
        debugger
        fetchProducts({data: getIntervalsFromArr(total, pageCountValue, 1)})
    }, [pagesOptions])

    let portionCount = Math.ceil(pagesCount / CurrentPortionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * CurrentPortionSize + 1;
    let rightPortionPageNumber = portionNumber * CurrentPortionSize;

    const pagesOptionsTags = pagesOptions.map(item => <option value={item} key={item}>{item}</option>)

    const pagesCountPacksChange = (value: number) => {
        fetchProducts({data: getIntervalsFromArr(total, value, 1)})
        setPageCountValue(value)
    }

    const onPagesCountChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        pagesCountPacksChange(+event.currentTarget.value)
    }

    return (
        <div className={s.paginator}>
            <div className={s.paginatorContainer}>
                <div className={s.pageContainer}>
                    <div className={s.pageNumbersBlock}>
                        {portionNumber > 1 &&
                            <button
                                className={s.paginatorBtn}
                                disabled={!(portionNumber > 1)}
                                onClick={() => setPortionNumber(portionNumber - 1)}>
                                {'<<<'}
                            </button>}
                        {
                            pages
                                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                                .map((p, i) => {
                                    console.log('page ->'+page)
                                    return <div className={`${s.pageNumber} ${p === currentPage ? s.selectedPage : ''}`}
                                                key={i}
                                                onClick={() => {
                                                    setCurrentPage(p)
                                                    return fetchProducts({data: getIntervalsFromArr(total, pageCountValue, p)})
                                                }}> {p}</div>
                                })
                        }
                    </div>
                    {portionCount > portionNumber &&
                        <button
                            className={s.paginatorBtn}
                            disabled={!(portionCount > portionNumber)}
                            onClick={() => setPortionNumber(portionNumber + 1)}>
                            {'>>>'}
                        </button>}
                </div>
                <div className={s.selectWrapper}>
                    <span className={s.span}>Show</span>
                    <select name="pagesCountSelect"
                            id="pagesCountSelect"
                            value={pageCountValue}
                            onChange={onPagesCountChangeHandler}>
                        {pagesOptionsTags}
                    </select>
                    <span>cards per page</span>
                </div>
            </div>
        </div>
    )
})