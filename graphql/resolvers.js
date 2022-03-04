const Post = require('../models/post');

module.exports = {
  posts: async () => {
    try {
      const posts = await Post.find({});
      return posts;
    } catch (error) {
      console.log(error);
    }
  },

  post: async (args) => {
    try {
      const post = await Post.findById(args.id);
      return post;
    } catch (error) {
      console.log(error);
    }
  },

  createPost: async (args) => {
    try {
      await Post.create(args.post);
      return { message: 'Post is created' };
    } catch (error) {
      console.log(error);
    }
  },

  updatePost: async (args) => {
    try {
      await Post.findByIdAndUpdate(args.id, args.post);
      return { message: 'Post is updated' };
    } catch (error) {
      console.log(error);
    }
  },

  deletePost: async (args) => {
    try {
      await Post.findByIdAndDelete(args.id);
      return { message: 'Post is deleted' };
    } catch (error) {
      console.log(error);
    }
  },
};
