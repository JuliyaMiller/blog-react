import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Page404 from './Page404';
import PostList from './posts/PostList';
import PostPage from './posts/PostPage';
import UserPage from './users/UserPage';
import UsersList from './users/UsersList';
   
function SwitchContext(){
    const location = useLocation();
   
    return(
        <Switch location={location}>
            <Route exact path="/">
                <h1>It's home page</h1>
            </Route>
            <Route exact path="/users" component={UsersList}/>
            <Route exact path="/users/:userId" component={UserPage}/>
            <Route exact path="/posts" component={PostList}/>
            <Route exact path="/posts/:postId" component={PostPage}/>
            <Route path="*" component={Page404}/>
        </Switch>
    )
}

export default function Blog() {
    return (
        <Router>
            <Header></Header>
            <SwitchContext/>
        </Router>
    )
}
