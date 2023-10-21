import { User } from "./User";

export class SocialUser extends User {
  postsByUser: Array<Post> = [];
  postsSharedByUsers: User[] = [];
  constructor(public id: number, public name: string) {
    super(id, name);
  }
  createPost(data: string, content_type: MediaContent | null) {
    const postByUser = new Post(data, content_type);
    this.postsByUser.push(postByUser);
  }
  sharePost(users: User) {
    this.postsSharedByUsers.push(users);
  }
}

export class Post {
  constructor(public text: string, public content: MediaContent | null) {}
}

export class MediaContent {
  constructor(public media_type: string | null) {}
}

