const mongoose = require('mongoose')
const { Schema } = mongoose

const tweetSchema = new Schema(
  {
    description: {
      required: true,
      default: '',
      type: String,
    },
    images: {
      default: [],
      type: Array,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    parent: {
      type: Schema.Types.ObjectId,
      ref: 'Tweet',
    },
    retweets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tweet',
      },
    ],
    replies: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tweet',
      },
    ],
    user: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    thread: {
      type: Array,
      default: [],
    },
    username: {
      type: String,
    },
    name: {
      type: String,
    },
    retweet: {
      type: Schema.Types.ObjectId,
      ref: 'Tweet',
    },
  },
  { timestamps: true },
)

const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet
