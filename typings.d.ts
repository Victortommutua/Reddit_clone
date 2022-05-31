type Comments = {
    created_at: String 
    id: Number
    post_id: Number
    text: String
    username: String
}
type Vote = {
    created_at: String 
    id: Number
    post_id: Number
    upvote: boolean
    username: String
}
type Subreddit = {
    created_at: String 
    id: number
    topic: String
}
type Post = {
    body:   String
    created_at: String 
    id: Number
    image: String
    subreddit_id: Number
    title: String
    post_id: Number
    username: String
    votes: Vote[]
    comments: Comments[]
    subreddit: Subreddit[]
}