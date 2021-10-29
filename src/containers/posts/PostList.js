import React from 'react';
import { List, Loader } from 'semantic-ui-react';
import useData from '../../hooks/useData';
import PostItem from './PostItem';


export default function PostList() {
    const [posts, isLoading, err] = useData('/posts', []);
    console.log(posts);
    return (
        <List>
                {posts && posts.map( post => <PostItem key={post.id} post={post}/>)}
            </List>
    )
}
