import React, { useEffect, useState } from "react";

import DefineAI from '../assets/DefineAI.png';
import Editor from "../assets/editor.png";
import Coongames from "../assets/coongames.png";
import Upcider from "../assets/upcider.png";

import Bigplay from "../assets/Bigplay.png";
import Bigshare from "../assets/Bigshare.png";
import Codespear from '../assets/Codespear.png';

import Smartchat from "../assets/Smartchat.png";
import Healthgen from "../assets/Healthgen.png";

import Adblocker from "../assets/Adblocker.png"

const Data = [
    {
        category: "productivity",
        products: [
            {
                id:1,
                name: "Smartchat",
                title: "Upcider for freelancers.",
                img: Smartchat,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit",
                link: "#",
            },

            {
                id:2,
                name: "Bigplay",
                title: "Upcider for freelancers",
                img: Bigplay,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit.",
                link: "#",
            },

            {
                id:3,
                name: "Bigshare",
                title: "Upcider for freelancers",
                img: Bigshare,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit.",
                link: "#",
            },

            {
                id:4,
                name: "DefineAI",
                title: "Upcider for freelancers",
                img: DefineAI,
                desc: "We bring you a freelancer platform where we connect skills with market.",
                link: "#",
            },

            {
                id:5,
                name: "Healthgen",
                title: "Upcider for freelancers",
                img: Healthgen,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit.",
                link: "#",
            },

            {
                id:6,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: Upcider,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit.",
                link: "#",
            },
        ]
    },

    {
        category: "developer-tools",
        products: [
            {
                id:1,
                name: "Deveditor",
                title: "Upcider for freelancers",
                img: Editor,
                desc: "If you are a freelacer then we got your back.If you are a freelacer then we got your back Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                link: "#",
            },
            {
                id:2,
                name: "Codespear",
                title: "Upcider for freelancers",
                img: Codespear,
                desc: "If you are a freelacer then we got your back.If you are a freelacer then we got your back Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                link: "#",
            },
            {
                id:3,
                name: "Coinblock",
                title: "Upcider for freelancers",
                img: Adblocker,
                desc: "If you are a freelacer If you are a freelacer then we got your back Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                link: "#",
            }
        ]
    },

    {
        category: "browser-tools",
        products: [
            {
                id:1,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: Adblocker,
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
            {
                id:2,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: Adblocker,
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
            {
                id:3,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: Adblocker,
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
            {
                id:4,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: Adblocker,
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
            {
                id:5,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: Adblocker,
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
            {
                id:6,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: Adblocker,
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
            {
                id:7,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: Adblocker,
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
            {
                id:8,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: Adblocker,
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
        ]
    },
]

const Products = () => {
    console.log(Data)
    return (
        <div className='products page'>
            <div className="banner">
                <section>
                    <img src={Coongames} alt="" />
                </section>
                <section>
                    <h1>
                      COONGAMES
                    </h1>
                    <p>
                       Play Unlimited Games Interractively
                    </p>

                    <button>
                        Learn more
                    </button>
                </section>
            </div>

            <h1>Productivity</h1>

            <div className='section' >
                {
                    Data[0].products.map(item => {
                        return <div className="card" id={item.id}>
                            <div className="image-container">
                                <img src={`${item.img}`} alt="" />
                            </div>
        
                            <div className="content">
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                            <button>Learn more &raquo;</button>
                        </div>
                        
                    })
                }

            </div>

            <h1>Developer</h1>

            <div className='wrapper'>
                {
                    Data[1].products.map(item => {
                        return  <div className='item' id={item.id}>
                            <div className='image-container'>
                                <img src={item.img} alt=''/>
                            </div>
                            <div className='content'>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                    </div>
                </div>
                    })
                }
            </div>
        </div>
    );
}

export default Products;
