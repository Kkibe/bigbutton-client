import React from 'react';
import PostCard from '../components/PostCard';
const Blogs = ({ data }) => {
    return (
        <div className='blogs page'>
            <div className="banner">
                <h1>READ FROM HERE</h1>
            </div>
            <div className="wrapper">
                <div className="posts-container">
                    {data && data.map(blog => {
                        return <PostCard key={blog.id} data={blog} />
                    })}
                </div>
                <div className="tags-container">
                    {data && data.map(blog => {
                        return <div className="tag">{blog.source}</div>
                    })}
                </div>
            </div>

        </div>
    );
}

export default Blogs;
