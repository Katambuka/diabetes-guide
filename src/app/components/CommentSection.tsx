
"use client";

import { useState, useEffect } from 'react';
import { FiHeart, FiMessageSquare, FiSend, FiUser, FiMapPin } from 'react-icons/fi';

interface Comment {
  id: number;
  author: string;
  location?: string;
  content: string;
  date: string;
  likes: number;
}

export default function CommentSection({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load comments from localStorage when component mounts
  useEffect(() => {
    try {
      const savedComments = localStorage.getItem(`blog-comments-${postSlug}`);
      if (savedComments) {
        const parsed = JSON.parse(savedComments);
        if (Array.isArray(parsed)) {
          setComments(parsed);
        }
      }
    } catch (error) {
      console.error('Failed to load comments', error);
    } finally {
      setHasLoaded(true);
    }
  }, [postSlug]);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem(`blog-comments-${postSlug}`, JSON.stringify(comments));
    }
  }, [comments, postSlug, hasLoaded]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !comment.trim()) {
      alert('Please enter your name and comment');
      return;
    }

    setIsSubmitting(true);
    
    const newComment: Comment = {
      id: Date.now(),
      author: name,
      location: location.trim() || undefined,
      content: comment,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      likes: 0
    };

    setComments(prev => [...prev, newComment]);
    setName('');
    setLocation('');
    setComment('');
    setIsSubmitting(false);
  };
  const handleLike = (id: number) => {
    setComments(prev => 
      prev.map(c => 
        c.id === id ? { ...c, likes: c.likes + 1 } : c
      )
    );
  };

  return (
    <div className="mt-16 border-t pt-12">
      <h3 className="text-2xl font-bold mb-8">Community Discussion</h3>
      
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="text-gray-400" />
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name *"
              className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMapPin className="text-gray-400" />
            </div>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Your location (optional)"
              className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts... *"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-4"
          required
        />
        
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            * Required fields
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Posting...
              </>
            ) : (
              <>
                <FiSend className="text-lg" />
                <span>Post Comment</span>
              </>
            )}
          </button>
        </div>
      </form>

      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No comments yet. Be the first to share your thoughts!
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full w-10 h-10 flex items-center justify-center font-medium">
                    {comment.author.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold">{comment.author}</span>
                    {comment.location && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 block md:inline md:ml-2">
                        from {comment.location}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{comment.date}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 pl-13">{comment.content}</p>
              <button 
                onClick={() => handleLike(comment.id)}
                className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 mt-3 pl-13"
              >
                <FiHeart className="text-base" />
                <span>Like ({comment.likes})</span>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}