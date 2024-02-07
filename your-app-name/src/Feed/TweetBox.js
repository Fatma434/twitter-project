import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

function TweetBox() {
  const [tweetMsg, setMesg] = useState('');
  const [tweetImg, setImg] = useState('');

  const sendTweet = async (e) => {
    e.preventDefault();

    // Use 'collection' function from Firestore to add a document
    const docRef = await addDoc(collection(db, "posts"), {
      displayName: "Rafeh Qazi",
      username: "cleverqazi",
      verified: true,
      text: tweetMsg,
      image: tweetImg,
      avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
    });

    // Clear the input fields after sending the tweet
    setMesg('');
    setImg('');
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweet__input'>
          <Avatar alt="Remy Sharp" src="https://i.cbc.ca/1.7046282.1701447456!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/humane-society.jpg" />
          <input
            onChange={(e) => setMesg(e.target.value)}
            value={tweetMsg}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImg}
          onChange={(e) => setImg(e.target.value)}
          className='tweet__imageInput'
          placeholder=" Optional: Enter Image URL"
          type="text"
        />
        <Button onClick={sendTweet} type='submit' className='tweet__tweetButton'>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
