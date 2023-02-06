import React, {useEffect, useState} from 'react';
import "./Comment.scss";
import { useUserContext } from '../../context/userContext';
import axios from '../../api/axios';
import { USER_URL } from '../../utils/constants';

const Comment = ({comment}) => {
    const [postUser, setPostUser] = useState({})

    useEffect(() => {
        const fetchPostUser = async(id) => {
            const response = await axios.get(`${USER_URL}/${id}`);
            setPostUser(response.data);
        }

        fetchPostUser(comment?.user?.id);
    }, []);

    return (
        <div className='blog-comments-item grid align-center' key = {comment.id}>
            <div className='comment-img'>
                <img src = {postUser?.image} alt = "" />
            </div>
            <div className='comment-info'>
                <span className='comment-info-name fw-7 text-dark-blue fs-18'>{comment?.user?.username}</span>
                <p className='my-1 fs-15'>{comment?.body}</p>
            </div>
        </div>
    )
}

export default Comment