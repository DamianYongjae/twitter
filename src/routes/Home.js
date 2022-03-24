import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  const getTweets = async () => {
    const dbTweets = await dbService.collection("tweets").get();

    dbTweets.forEach(document => {
      const tweetObject = {
        ...document.data(),
        id: document.id
      };
      setTweets(prev => [tweetObject, ...prev]);
    });
  };

  useEffect(() => {
    setTweets([]);
    getTweets();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await dbService.collection("tweets").add({
        tweet,
        createdAt: Date.now()
      });
      setTweet("");
    } catch (e) {
      console.log(e);
    }
  };
  const onChange = e => {
    const {
      target: { value }
    } = e;

    setTweet(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={tweet}
          onChange={onChange}
          type="text"
          placeholder="what's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Tweet" />
      </form>
      <div>
        {tweets.map((tweet, index) => (
          <div key={tweet.id}>
            <h4>{tweet.tweet}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
