import React from 'react';
import { List } from 'semantic-ui-react';

import useData from '../../hooks/useData';
import UserItem from './UserItem';

export default function UsersList() {
    const [users, isLoading, error] = useData('/users', []);
    return (
        <div>
            {users && 
                <List>
                    {users.map(user => <UserItem key={user.id} user={user}/>)}
                </List>
            }
        </div>
    )
}
