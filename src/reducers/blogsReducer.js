import {
    GET_BLOGS_BEGIN,
    GET_BLOGS_SUCCESS,
    GET_BLOGS_ERROR,
    GET_SINGLE_BLOG_BEGIN,
    GET_SINGLE_BLOG_SUCCESS,
    GET_SINGLE_BLOG_ERROR,
    GET_BLOG_BY_SEARCHTERM_BEGIN,
    GET_BLOG_BY_SEARCHTERM_SUCCESS,
    GET_BLOG_BY_SEARCHTERM_ERROR, 
    SET_SEARCH_TERM
} from "../utils/constants";

const blogsReducer = (state, action) => {
    switch(action.type){
        case GET_BLOGS_BEGIN: 
            return {
                ...state, blogsLoading: true 
            }
        case GET_BLOGS_SUCCESS:
            return { 
                ...state, blogsLoading: false, blogs: action.payload, tempBlogs: action.payload 
            }
        case GET_BLOGS_ERROR:
            return { 
                ...state, blogsLoading: false, blogsError: true
            }
        case GET_SINGLE_BLOG_BEGIN:
            return { 
                ...state, singleBlogLoading: true 
            }
        case GET_SINGLE_BLOG_SUCCESS:
            return { 
                ...state, singleBlogLoading: false, singleBlog: action.payload
            }
        case GET_SINGLE_BLOG_ERROR:
            return { 
                ...state, singleBlogLoading: false,singleBlogError: true 
            }
        case GET_BLOG_BY_SEARCHTERM_BEGIN: 
            return {
                ...state, searchBlogsLoading: true
            }
        case GET_BLOG_BY_SEARCHTERM_SUCCESS:
            return {
                ...state, searchBlogsLoading: false, blogs: action.payload
            }
        case GET_BLOG_BY_SEARCHTERM_ERROR:
            return {
                ...state, searchBlogsLoading: false, searchBlogsError: true
            }
        case SET_SEARCH_TERM: 
            return {
                ...state, searchTerm: action.payload
            }
        default: 
            return state;
    }
}

export default blogsReducer;