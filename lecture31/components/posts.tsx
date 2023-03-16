import { useEffect, useState } from "react"

interface Post {
    id: number,
    body: string,
    title: string,
    userId: number
};

export const Posts = () => {
    const [count, setCount] = useState(0);
    const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = async () => {
        try{
            let posts = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            );
            let json = await posts.json();
            console.log(json);
            setPosts(json);
        }
        catch(error){
            console.error(error);
        }

    };

    useEffect(() => {
        getPosts();
    }, []);

    
    
    return(
        <>
        <button onClick={() => setCount(count + 1)}>Change State</button>
        <h1>Posts</h1>
        {posts?.map((post) => (
            <p>{post.title}</p>
        ))}
        </>
    )
}