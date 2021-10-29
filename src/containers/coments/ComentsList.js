import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';
import useData from '../../hooks/useData';
import ComentsItem from './ComentsItem';

export default function ComentsList(props) {
    const postId = props.postId;
    const [coments, isLoading, err] = useData(`posts/${postId}/comments`, null);
    
    return (
        <Comment.Group>
            {coments && coments.map(c => <ComentsItem comment={c}/>)}
        </Comment.Group>
    )
}
