import { Heart, MessageSquare, Send } from "lucide-react";
import "./photoIcon.css";
import { useState } from "react";

function PhotoIcon() {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 2500 + 1));
  let randomTime = Math.floor(Math.random() * 48 + 1);

  function addPhotoLike() {
    let heart = document.querySelector(".heart");
    if (heart.classList.contains("active")) {
      setLikes(likes - 1);
      heart.classList.remove("active");
    } else {
      setLikes(likes + 1);
      heart.classList.add("active");
    }
  }
  return (
    <div className="container mt-2 ">
      <div className="row ">
        <div className="col ">
          <button onClick={addPhotoLike}>
            <Heart className="heart" /> {likes}
          </button>
          <MessageSquare className="mx-3" />
          <Send />
        </div>
      </div>
      <div className="row mt-1 mb-2">
        <div className="col">
          <span className="text-muted">{randomTime} hours ago</span>
        </div>
      </div>
    </div>
  );
}
export default PhotoIcon;
