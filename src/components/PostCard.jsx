import React from "react";
import { Link} from "react-router-dom";
import Image from '../assets/coongames.png'

export default function PostCard({data}) {
  return (
    <div className="post-card" >
      <a href={data.link} target="_blank" title={data.source_id} className="link">{data.title}</a>
      <div className="image-container">
        <img src={data.image_url ? data.image_url : Image } alt="" />
      </div>
      <div className="content">
        <h1>{data.title}</h1>
        <p>
          {data.description}
        </p>
      </div>

      <div className="info">
        <span>{new Date(data.pubDate).toDateString()}</span>
        <div>By <span>{data.creator ? data.creator : data.source_id}</span></div>
      </div>
    </div>
  );
}
