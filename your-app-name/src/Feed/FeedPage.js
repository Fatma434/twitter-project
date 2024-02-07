import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import { db } from '../firebase'; 
import FlipMove from "react-flip-move";
import { collection, onSnapshot } from 'firebase/firestore';

function FeedPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* post */}
      <FlipMove>
      {posts.map((post) => (
        <Post
          key={post.text} // Add a unique key for each post
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      ))}
      </FlipMove>
    </div>
  );
}

export default FeedPage;