import React from 'react';
import { List } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function PostItem(props) {
    const post = props.post;
    return (
        <List.Item>
            <List.Header><NavLink to={`posts/${post.id}`}>{post.title}</NavLink></List.Header>
            <List.Description>{post.body}</List.Description>
            <NavLink to={`users/${post.userId}`}>go tu author</NavLink>
        </List.Item>
    )
}
