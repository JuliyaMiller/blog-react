import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';

export default function ComentsItem(props) {
    const comment = props.comment; 
    
    return (
    <Comment>
            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
            <Comment.Content>
                <Comment.Author>{comment.name}</Comment.Author>
                <Comment.Text>{comment.body}</Comment.Text>
                <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
                <Comment.Action>Save</Comment.Action>
                <Comment.Action>Hide</Comment.Action>
                <Comment.Action>
                    <Icon name='expand' />
                    Full-screen
                </Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    )
}