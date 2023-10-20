import { useState, useEffect } from 'react';
import like from "../../assets/like.jpeg"
import dislike from "../../assets/dislike.jpeg"
import { Botao, Img } from './Like.jsx';

function Like() {
  const [liked, setLiked] = useState(true);

  function handleClick() {
    setLiked(!liked);
  }

  useEffect(() => {
    if (liked) {
      const timer = setTimeout(() => {
        setLiked(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [liked]);

  return (
    <Botao
      className={`botao-like ${liked ? 'liked' : ''}`}
      onClick={handleClick}
    >
      {liked ? <Img src={like}/> : <Img src={dislike}/>}
    </Botao>
  );
}

export default Like