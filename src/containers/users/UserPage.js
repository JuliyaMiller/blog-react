import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { Card, Icon, Image, Grid, Loader } from 'semantic-ui-react';

import useData from '../../hooks/useData';
import UserPosts from './UserPosts';

export default function UserPage() {
    const { userId } = useParams();
    const {path, url} = useRouteMatch();

    const [user, isLoading, err] = useData(`users/${userId}`, null);
    return (
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                {isLoading && <Loader active inline='centered' />}    
                {user && 
                <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{user.name}</Card.Header>
                    <Card.Meta>
                    <span className='date'>{user.email}</span>
                    </Card.Meta>
                    <Card.Description>
                    {user.name} is {user.company.bs} in {user.company.name}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    {user.phone}
                </Card.Content>
                </Card>     
                }
                </Grid.Column>
                <Grid.Column>
                    <UserPosts userId={userId}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}