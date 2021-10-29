import React, {useState} from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


export default function Header() {
    const [activeItem, setActiveItem] = useState('home');
  
    return (
        <Menu>
            <Menu.Item
                name='home'
                active={activeItem === 'home'} 
                onClick={() =>setActiveItem('home')}          
                >
                <NavLink to="/">Home</NavLink>
            </Menu.Item>

            <Menu.Item
                name='users'
                active={activeItem === 'users'}
                onClick={() =>setActiveItem('users')}
                >
                <NavLink to="/users">Users</NavLink>
            </Menu.Item>

            <Menu.Item
                name='posts'
                active={activeItem === 'posts'}
                onClick={() =>setActiveItem('posts')}         
                >
                <NavLink to="/posts">Posts</NavLink>
            </Menu.Item>
        </Menu>
    )
}
