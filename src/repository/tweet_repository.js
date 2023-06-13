import Tweet from "../models/tweet.js";


class TweetRepository{

  async create(data){
    try{
        let tweet= await Tweet.create(data);
        return tweet;
    }catch(error){
       throw error
    }
  }

  async getAllTweets(){
    try{
        let tweets= await Tweet.find({});
        return tweets;
    }
    catch(error){
        throw error
    }
  }

  async getTweet(id){
    try{
        let tweet= await Tweet.findById(id);
        return tweet;
    }catch(error){
        throw error;
    }
  }

  async deleteTweet(data){
    try{
        let tweet= await Tweet.deleteOne(data);
        return tweet;
    }
    catch(error){
        throw error;
    }
  }

}

export default TweetRepository;