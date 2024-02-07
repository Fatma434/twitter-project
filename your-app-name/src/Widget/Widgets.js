import React from 'react'
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import SearchIcon from '@mui/icons-material/Search';
function Widgets() {
  return (
    <div className='widgets'>
        <div className='widget__input'>
          <SearchIcon className="widgets__searchIcon"/>
        <input placeholder='Search in Twitter' type ="text"/>
        </div>
        <div className='widget__Containeer'>
          <h3>What's happing </h3>
          <TwitterTweetEmbed tweetId={"858551177860055040"} /> 
          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.linkedin.com/in/fatma-mohamed-a989141b6/"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
          </div>
    </div>
  )
}

export default Widgets