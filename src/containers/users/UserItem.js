import React from 'react';
import { List, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default function UserItem(props) {
    const user = props.user;
    
    return (
        <List.Item>
          <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
          <List.Content>
            <List.Header as='a'>
                <NavLink to={`users/${user.id}`}> {user.name} </NavLink>
            </List.Header>
            <List.Description>
                {user.company.bs} in {user.company.name},  {user.company.catchPhrase}
            </List.Description>
          </List.Content>
        </List.Item>
    )
}
