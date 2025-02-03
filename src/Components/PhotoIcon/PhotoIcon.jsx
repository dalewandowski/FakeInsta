import { Heart, MessageSquare, Send } from "lucide-react";
import "./photoIcon.css";
import { useState } from "react";

function PhotoIcon({ likes, onLike }) {
  let randomTime = Math.floor(Math.random() * 36 + 1);

  const [isLiked, setIsLiked] = useState(false);
  const [time, setTime] = useState(randomTime);

  function changeLike() {
    setIsLiked((prev) => !prev);
    onLike(!isLiked);
  }
  return (
    <aside className="container mt-2">
      <div className="row">
        <div className="col">
          <button onClick={changeLike}>
            <Heart className={`heart ${isLiked ? "active" : ""}`} />
            {likes}
          </button>
          <MessageSquare className="mx-1" />
          <Send />
        </div>
      </div>
      <div className="row">
        <div className="col text-muted">{time} hour ago</div>
      </div>
    </aside>
  );
}

export default PhotoIcon;
