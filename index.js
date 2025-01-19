// User class
class User {
    constructor(name, email) {
      this.userId = User.Utils.generateId();
      this.name = name;
      this.email = email;
      this.posts = [];
    }
  
    createPost(content) {
      const newPost = new Post(content, this);
      this.posts.push(newPost);
      return newPost;
    }
  
    viewPosts() {
      return this.posts;
    }
  
    // Static utility class inside User
    static Utils = class {
      static generateId() {
        return Math.random().toString(36).substring(2, 9);
      }
    };
  }
  
  // Post class
  class Post {
    constructor(content, author) {
      this.postId = Post.Utils.generateId();
      this.content = content;
      this.author = author;
      this.likes = 0;
      this.comments = [];
    }
  
    likePost() {
      this.likes++;
    }
  
    addComment(comment) {
      this.comments.push(comment);
    }
  
    // Static utility class inside Post
    static Utils = class {
      static generateId() {
        return Math.random().toString(36).substring(2, 9);
      }
    };
  }
  
  // Comment class
  class Comment {
    constructor(content, author) {
      this.commentId = Comment.Utils.generateId();
      this.content = content;
      this.author = author;
    }
  
    // Static utility class inside Comment
    static Utils = class {
      static generateId() {
        return Math.random().toString(36).substring(2, 9);
      }
    };
  }
  
  // Example Usage
  
  // Create users
  const user1 = new User("Alice", "alice@example.com");
  const user2 = new User("Bob", "bob@example.com");
  
  // User1 creates a post
  const post1 = user1.createPost("Hello, this is my first post!");
  
  // User2 likes the post
  post1.likePost();
  
  // User2 comments on the post
  const comment1 = new Comment("Nice post!", user2);
  post1.addComment(comment1);
  
  // Display post details
  console.log("Post Details:");
  console.log(`Content: ${post1.content}`);
  console.log(`Author: ${post1.author.name}`);
  console.log(`Likes: ${post1.likes}`);
  console.log("Comments:");
  post1.comments.forEach((comment) => {
    console.log(`- ${comment.author.name}: ${comment.content}`);
  });
  
  // User1 views their posts
  console.log("User1's Posts:");
  user1.viewPosts().forEach((post) => {
    console.log(`- ${post.content}`);
  });
  