import React, { useEffect, useState } from  'react';
import { ArrowLeftOutlined, ArrowRightOutlined  } from '@mui/icons-material';
import Upcider from '../assets/upcider.png';

//slides
import DefineAI from '../assets/DefineAI.png';
import Editor from "../assets/Editor.png";
import Smartchat from "../assets/Smartchat.png";

import Bigplay from "../assets/Bigplay.png";
import Bigshare from "../assets/Bigshare.png";
import Codespear from '../assets/Codespear.png';

const slides = [
    {
        id: 1,
        img: DefineAI,
        title: "Define AI",
        description: "Get the definition of a word easily with Define AI",
        link: ""
    },
    {
        id: 2,
        img: Editor,
        title: "DEVEDITOR",
        description: "A free full-featured online code editor for HTML, CSS and JAVASCRIPT.",
        link: ""
    },
    {
        id: 3,
        img: Bigshare,
        title: "BIGSHARE",
        description: "Share Your Files and Images Across Your Browser Safely",
        link: ""
    }
    
]

const products = [
    {
        id: 1,
        img: Smartchat,
        title: "Chat with friends and family",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        link: ""
    },
    {
        id: 2,
        img: Bigplay,
        title: "Stream Play And Download Unlimited Content With Bigplay",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        link: ""
    },
    {
        id: 3,
        img: Codespear,
        title: "Lorem Ipsum and typesetting industry.",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        link: ""
    },
    {
        id: 4,
        img: Editor,
        title: "Lorem Ipsum is simply dummy text.",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        link: ""
    }
]

const testimonials = [
    {
        id: 1,
        img: Editor,
        name: "",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 2,
        img: Editor,
        name: "",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 3,
        img: Editor,
        name: "",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        description: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
]


const Home = ({data}) => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        setPopular(data);
        console.log(popular)
        
    }, []) 
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }


    return (
        <div className="home page">
            <div className="slider">

                <div className="arrow"  onClick={() => handleClick("left")}>
                   <ArrowLeftOutlined />
                </div>

                   <div className="wrapper" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
                    {
                        slides && slides.map(slide => {
                            return (
                                <div className="slider">
                                    <div className="image-container">
                                        <img src={slide.img} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>{slide.title}</h1>
                                        <p>{slide.description}</p>
                                       <button>Visit Now</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                   </div>

                <div className="arrow" onClick={() => handleClick("right")}>
                   <ArrowRightOutlined />
                </div>
            </div>

            <div className="featuredproducts">
                {
                    products && products.map(product => {
                        return (
                            <section>
                                <div className='image-container'>
                                    <img src={product.img} alt="file-share"/>
                                </div>
                                <div className='wrapper' >
                                    <a href='#' className='title'>
                                        {product.title}
                                    </a>
                                    <p>
                                        {product.description}
                                    </p>
                                    <a href={product.link} className="link">
                                        Learn more &raquo;
                                    </a>
                                </div>
                            </section>
                        )
                    })
                }
            </div>
    

            <div className='popularposts'>
                <h1>Popular Posts 🔥</h1>
                <div className='wrapper'>
                    {
                        popular && popular.map((post) => {
                            return (
                                <div className='post theme' key={post.title}>
                                    <div className='image-container'>
                                        <img src={post.image_url} alt=""/>
                                    </div>
                                    <div className='content'>
                                        <h3>
                                           <a className='link' href="#">{post.title}</a>
                                        </h3>
                                        <p>
                                           {post.description}
                                        </p>
                                        <span>
                                           <i class="fa fa-clock-o"></i>{new Date(post.pubDate).toDateString()}
                                        </span>
                                       <a href={post.link} className='readmore'>READ MORE</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> 
            </div>
            <div className='testimonials'>
                <h2 className='title'>What clients say</h2>
                <div className="wrapper">
                    {
                        testimonials && testimonials.map(testimonial => {
                            return (
                                <div className='testimonial theme'>
                                    <img src={testimonial.img} alt=""/>
                                    <div className='content'>
                                        <h5 id='name'>{testimonial.name}</h5>
                                        <h1 >{testimonial.title}</h1>
                                        <p>
                                            {testimonial.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    );
}

export default Home;
