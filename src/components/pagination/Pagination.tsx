import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './index.module.scss';
import {useSelector} from 'react-redux';
import {productActions, productsSelectors} from "../../redux";
import {useActions} from "../../utils/redux-utils";
import {getIntervalsFromArr} from "../../utils/getIntervalFromArray";

export const Pagination = React.memo(() => {

    const total = useSelector(productsSelectors.total)
    const page = useSelector(productsSelectors.page)
    const {fetchProducts} = useActions(productActions)
    const pageCount = useSelector(productsSelectors.pageCount)
    const [pageCountValue, setPageCountValue] = useState(pageCount)
    const [currentPage,setCurrentPage]=useState(page)

    let pagesCount = Math.ceil(total! / pageCountValue);
    console.log(total!)
    console.log(pagesCount)
    //Todo change 10 value


    let pages: number[] = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    useEffect(() => {
        fetchProducts({data: getIntervalsFromArr(total, pageCountValue, 1)})
    }, [pageCountValue])

    const pagesOptions = [5, 10, 15]
    const pagesOptionsTags = pagesOptions.map(item => <option value={item} key={item}>{item}</option>)

    const pagesCountPacksChange = (value: number) => {
        setPageCountValue(value)
        fetchProducts({data: getIntervalsFromArr(total, pageCountValue, 1)})
    }

    const onPagesCountChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        pagesCountPacksChange(+event.currentTarget.value)
    }

    return (
        <div className={s.paginator}>
            <div className={s.paginatorContainer}>
                <div className={s.pageContainer}>
                    <div className={s.pageNumbersBlock}>
                        {
                            pages
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

                </div>
                <div className={s.selectWrapper}>
                    Show
                    <select name="pagesCountSelect"
                            id="pagesCountSelect"
                            value={pageCountValue}
                            onChange={onPagesCountChangeHandler}>
                        {pagesOptionsTags}
                    </select>
                    Cards per page
                </div>
            </div>
        </div>
    )
})