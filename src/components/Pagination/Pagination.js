import React from 'react';
import "./Pagination.scss";

const Pagination = ({noOfBlogs, paginateHandler}) => {
    let noOfPaginateItems = Math.ceil(noOfBlogs / 6);
    return (
        <div className='paginate-items flex align-center justify-center'>
            {
                [...Array(noOfPaginateItems)].map((item, idx) => {
                    return (
                        <button type = "button" className='paginate-item font-rubik bg-ex-blue flex align-center justify-center text-white' onClick={() => paginateHandler(idx + 1)} key = {idx}>{idx + 1}</button>
                    )
                })
            }
        </div>
    )
}

export default Pagination