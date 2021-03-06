import React from "react";
import { IPost, usePostData } from "../../hooks/usePostData";

export const postsContext = React.createContext<IPost[]>([]);

export function PostsContextProvider({ children }: { children: React.ReactNode}) {

    const [posts] = usePostData();

    return (
        <postsContext.Provider value={posts}>
            { children }
        </postsContext.Provider>
    )
}