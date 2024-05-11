import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Image from '../assets/coongames.png'

export default function SinglePost() {
  const location = useLocation();
 

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
          <img src={Image} alt="" className="singlePostImg" />
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={"/"} className="link">
              <b> Kibet</b>
            </Link>
          </span>
          <span className="singlePostDate">
            12th may 2022
          </span>
        </div>
          <p className="singlePostDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Ullam consequuntur iure atque, dolorem at voluptate ipsa 
             minus expedita 
            blanditiis architecto deserunt? Tempora, fuga fugiat perferendis nam optio omnis odit unde?
          </p>
      </div>
    </div>
  );
}