import React from 'react'
import useData from '../../hooks/useData'
import { NavLink } from 'react-router-dom';
import { List, Loader } from 'semantic-ui-react';

export default function UserPosts(props) {
    const userId = props.userId;
    const [posts, isLoading, err] = useData(`users/${userId}/posts`, null);
    return (
        <List>
        
        {isLoading && <Loader active inline='centered' />}

        {posts && posts.map( post => (
            <List.Item key={post.id}>
                <List.Header>
                    <NavLink to={`../posts/${post.id}`}>
                        {post.title}   
                    </NavLink>
                </List.Header>
                {post.body}
            </List.Item>
        ))}
    </List>
    )
}
