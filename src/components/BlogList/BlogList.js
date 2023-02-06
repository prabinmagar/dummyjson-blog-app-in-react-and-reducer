import React, {useState} from 'react';
import "./BlogList.scss";
import {MdAddReaction} from "react-icons/md";
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { useBlogsContext } from '../../context/blogsContext';
import Loader from '../Loader/Loader';

const BlogList = ({blogs}) => {
    const { blogsLoading, searchBlogsLoading } = useBlogsContext();
    const blogLimit = 6;
    const [paginate, setPaginate] = useState(1 * blogLimit);
    const paginateHandler = (value) => setPaginate(value * blogLimit);
    if(blogsLoading || searchBlogsLoading){ return (<Loader />) }

    return (
        <>
            <div className = "blog-items grid my-6">
                {
                    blogs.slice(paginate - 6, paginate).map(blog => {
                        return (
                            <div className = "blog-item" key = {blog.id}>
                                <div className='blog-item-title fw-5 fs-18 font-rubik'>{blog.title}</div>
                                <div className='blog-item-text'>{(blog.body).substring(0, 100)}...</div>
                                <div className='blog-item-reaction flex align-center'>
                                    <MdAddReaction />
                                    <span className='reaction-value font-rubik fs-15 fw-5'>{blog.reactions}</span>
                                </div>
                                <div className='blog-item-tags'>
                                    {
                                        blog.tags.map((tag, idx) => (
                                            <span className='blog-item-tags-single fs-13 font-rubik text-uppercase' key = {idx}>{tag}</span>
                                        ))
                                    }
                                </div>
                                <div className='blog-item-btn'>
                                    <Link to = {`/blog/${blog.id}`} className = "read-more-btn font-rubik fw-4">Read More</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Pagination noOfBlogs = {blogs.length} paginateHandler = {paginateHandler} />
        </>
    )
}

export default BlogList