import React from 'react';
import {usePagination} from "../../../hooks/usePagination";
import classes from './Pagination.module.css'

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = usePagination(totalPages)
    return (
        <div className={classes.page__wrapper}>
            {pagesArray.map(p => <span
                onClick={() => changePage(p)}
                key={p}
                className={page === p ? classes.page__current : classes.page}
            >{p}</span>)}
        </div>
    );
};

export default Pagination;
