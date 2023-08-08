import { useState } from 'react';
import PostCard from '../components/PostCard';

const putDescriptions = (data = [], callingClass) => {
    let items = []
    let filteredData  = items.push(data )

}

const tagsData = () => [{
    ID : Math.random()*10000,
    name: 'Bigbutton',
    description: ['', ''],
    image_url : ''
}, {
    ID : Math.random()*10000,
    name: 'CoinBlock',
    description: ['', ''],
    image_url : ''
}, {
    ID : Math.random()*10000,
    name: 'Dorana',
    description: ['', ''],
    image_url : ''
}, {
    ID : Math.random()*10000,
    name: 'Upcider',
    description: ['', ''],
    image_url : ''
}, {
    ID : Math.random()*10000,
    name: 'Marketplace',
    description: ['', ''],
    image_url : ''
}, {
    ID : Math.random()*10000,
    name: 'IoT',
    description: ['', ''],
    image_url : ''
}, {
    ID : Math.random()*10000,
    name: 'Aptitude',
    description: ['', ''],
    image_url : ''
}, {
    ID : Math.random()*10000,
    name: 'SEO Marketing',
    description: ['', ''],
    image_url : ''
}, {
    ID : Math.random()*10000,
    name: '',
    description: ['', ''],
    image_url : ''
}, {
    ID : Math.random()*10000,
    name: 'Freelance Space',
    description: ['', ''],
    image_url : ''
}]
const Blogs = ({data}) => {
    const [tags, setTags] = useState()
    return (
        <div className='blogs page'>
            <div className="banner">
                <h1>READ FROM HERE</h1>
            </div>
            <div className="wrapper">
                <div className="posts-container">
                    {data && data.map(blog => {
                        return blog.image_url && <PostCard key={blog.title} data={blog}/>
                    })}
                </div>
                <div className="tags-container">
                    <h1>Tags</h1>
                    <div className="tag">javascript</div>
                    <div className="tag">java</div>
                    <div className="tag">c++</div>
                    <div className="tag">javascript</div>
                    <div className="tag">javascript</div>

                    <div className="tag">javascript</div>
                    <div className="tag">java</div>
                    <div className="tag">c++</div>
                    <div className="tag">javascript</div>
                    <div className="tag">javascript</div>

                    <div className="tag">javascript</div>
                    <div className="tag">java</div>
                    <div className="tag">c++</div>
                    <div className="tag">javascript</div>
                    <div className="tag">javascript</div>

                    <div className="tag">javascript</div>
                    <div className="tag">java</div>
                    <div className="tag">c++</div>
                    <div className="tag">javascript</div>
                    <div className="tag">javascript</div>
                </div>
            </div>
            
        </div>
    );
}

export default Blogs;
