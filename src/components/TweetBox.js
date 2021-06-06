import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("tweet").add({
      displayName: "Naveen Kala",
      userName: "kalanaveen",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
      "https://pbs.twimg.com/profile_images/901352178408751104/IN8Gwj5Z_400x400.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/901352178408751104/IN8Gwj5Z_400x400.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening ?"
            value={tweetMessage}
            type="text"

          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__inputImgUrl" placeholder="Enter Image Url" type="text" />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetBtn">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox;
