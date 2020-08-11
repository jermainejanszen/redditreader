import React, { useState } from 'react';
import { Divider, Heading, Stack, Card } from 'bumbag';
import { postStyle } from '../styles';
import CommentList from './CommentList';
import Post from './Post';

const post = {
    text: "The post.",
    user: "u/poster",
    upvotes: 22100,
    editMode: false,
}

const firstComment = {
    text: "First Comment",
    user: "u/first",
    upvotes: 2100,
    editMode: false,
}

const secondComment = {
    text: "Second Comment",
    user: "u/second",
    upvotes: 743,
    editMode: true,
}

const testComments = [firstComment, secondComment];

export default function Body() {

    const [ comments, setComments ] = useState(testComments);

    return (
        <div style={postStyle}>
            <Heading use="h3">Post</Heading>
            <Post post={post} />
            <br />
            <Divider />
            <br />
            <Heading use="h3">Comments</Heading>
            <CommentList comments={comments} />
        </div>
    )
}