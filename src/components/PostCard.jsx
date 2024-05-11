import React from "react";
import Image from '../assets/coongames.png'
import { Link } from "react-router-dom";

export default function PostCard({data}) {
  return (
    <div className="post-card" >
      <Link to={data.link} target="_blank" title={data.source_id} className="link">{data.title}</Link>
      <div className="image-container">
        <img src={data.thumbnail ? data.thumbnail : Image } alt={data.name} />
      </div>
      <div className="content">
        <h1>{data.title}</h1>
        <p>
          {data.content}
        </p>
      </div>
      
      <div className="info">
        <span>{new Date(data.posted).toDateString()}</span>
        <div>By <span>{data.source ? data.source : "user_null"}</span></div>
      </div>
    </div>
  );
}
