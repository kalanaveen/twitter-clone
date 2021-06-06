import React from 'react';
import './Widget.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from "@material-ui/icons/Search";

function Widget() {
    return (
        <div className="widget">
            <div className="widget__input">
                <SearchIcon className="widget__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widget__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed
                    tweetId={'1399648496769134593'}
                />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="imVkohli"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={'https://facebook.com/viratkohli'}
                    options={{ text: '#virat kohli is great', via: 'viratkohli' }}
                />
            </div>
        </div>
    )
}

export default Widget
