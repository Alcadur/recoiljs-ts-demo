import React from 'react';
import './App.css';
import { PostsList } from './Posts';
import { AddPostForm } from './AddPostForm';
import { RecoilRoot } from 'recoil';


function App() {

    return (
        <div className="App">
            <RecoilRoot>
                <AddPostForm />
                <PostsList />
            </RecoilRoot>
        </div>
    );
}

export default App;
