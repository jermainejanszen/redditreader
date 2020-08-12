import React, { useState } from 'react';
import { Divider, Heading } from 'bumbag';
import { postStyle } from '../styles';
import CommentList from './CommentList';
import Post from './Post';

export default function Body( {content} ) {

    const [ comments, setComments ] = useState(content.comments);
    const [ post, setPost ] = useState(content.post);

    function savePost(post) {
        setPost(post);
    }

    return (
        <div style={postStyle}>
            <Heading use="h3">Post</Heading>
            <Post post={post} savePost={savePost} />
            <br />
            <Divider />
            <br />
            <CommentList commentsProp={comments} />
        </div>
    )
}