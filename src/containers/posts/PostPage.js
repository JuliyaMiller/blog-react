import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom';
import useData from '../../hooks/useData';

import { Message } from 'semantic-ui-react';
import ComentsList from '../coments/ComentsList';

export default function PostPage() {
    const { postId } = useParams();
    const { path, url } = useRouteMatch();
    const [post, isLoading, err] = useData(`posts/${postId}`, null);
    
    return (
        <div>
            { post &&   
            <Message>
                <Message.Header>{post.title}</Message.Header>
                <p>{post.body}</p>
            </Message>}
            
            <ComentsList postId={postId}/> 
        </div>
    )
}
