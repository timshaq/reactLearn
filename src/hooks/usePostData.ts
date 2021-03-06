import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

interface IOriginalPost {
    data: IPost,
    kind: string,
}

export interface IPost {
    author: string,
    created: number,
    title: string,
    permalink: string, // url post
    url: string, // image post
    id: string,
    num_comments: number,
    ups: number,
}

function getNecessaryKeys(posts:IOriginalPost[]) {
    const arr:IPost[] = posts.map((post) => post.data);
    return arr;
}

export function usePostData() {
    const token = useContext(tokenContext);

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        axios.get('https://oauth.reddit.com/best?after=&before=&count=1&limit=5', {
            headers: { Authorization: `bearer ${token}` }
        })
            .then((res) => {
                console.log(res.data.data.children)
                setPosts(getNecessaryKeys(res.data.data.children))
            })
            .catch(console.log);
    },[token]);

    return [posts]
}