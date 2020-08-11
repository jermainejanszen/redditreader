import React, { useState } from 'react';
import { Divider, Heading, Stack, Card } from 'bumbag';
import { postStyle } from '../styles';
import CommentList from './CommentList';
import Post from './Post';

export default function Body( {content} ) {

    const [ comments, setComments ] = useState(content.comments);
    const [ post, setPost ] = useState(content.post);

    return (
        <div style={postStyle}>
            <Heading use="h3">Post</Heading>
            <Post post={content.post} />
            <br />
            <Divider />
            <br />
            <Heading use="h3">Comments</Heading>
            <CommentList comments={content.comments} />
        </div>
    )
}