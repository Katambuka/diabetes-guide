// components/LikeDislikeButtons.tsx
'use client';

import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function LikeDislikeButtons({ postSlug }: { postSlug: string }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userReaction, setUserReaction] = useState<'like' | 'dislike' | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`reactions-${postSlug}`);
    if (saved) {
      const { likes, dislikes, reaction } = JSON.parse(saved);
      setLikes(likes);
      setDislikes(dislikes);
      setUserReaction(reaction);
    }
  }, [postSlug]);

  const handleReaction = (type: 'like' | 'dislike') => {
    const newState = {
      likes: type === 'like' && userReaction !== 'like' ? likes + 1 : likes - (userReaction === 'like' ? 1 : 0),
      dislikes: type === 'dislike' && userReaction !== 'dislike' ? dislikes + 1 : dislikes - (userReaction === 'dislike' ? 1 : 0),
      reaction: userReaction === type ? null : type
    };

    setLikes(Math.max(0, newState.likes));
    setDislikes(Math.max(0, newState.dislikes));
    setUserReaction(newState.reaction);
    
    localStorage.setItem(`reactions-${postSlug}`, JSON.stringify({
      likes: Math.max(0, newState.likes),
      dislikes: Math.max(0, newState.dislikes),
      reaction: newState.reaction
    }));
  };

  return (
    <div className="flex items-center gap-4">
      <button 
        onClick={() => handleReaction('like')}
        className={`flex items-center gap-1 px-3 py-1 rounded-md ${
          userReaction === 'like' 
            ? 'bg-blue-100 text-blue-600' 
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        <FaThumbsUp className="text-sm" />
        <span className="text-sm">{likes}</span>
      </button>
      <button 
        onClick={() => handleReaction('dislike')}
        className={`flex items-center gap-1 px-3 py-1 rounded-md ${
          userReaction === 'dislike' 
            ? 'bg-red-100 text-red-600' 
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        <FaThumbsDown className="text-sm" />
        <span className="text-sm">{dislikes}</span>
      </button>
    </div>
  );
}