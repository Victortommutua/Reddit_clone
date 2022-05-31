type Comments = {
    created_at: String 
    id: number
    post_id: number
    text: String
    username: String
}
type Vote = {
    created_at: String 
    id: number
    post_id: number
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
    id: number
    image: String
    subreddit_id: number
    title: String
    post_id: number
    username: String
    votes: Vote[]
    comments: Comments[]
    subreddit: Subreddit[]
}