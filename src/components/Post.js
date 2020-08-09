import React, { useState } from 'react';
import { Divider, Heading, Stack, Card } from 'bumbag';
import { postStyle } from '../styles';
import CommentList from './CommentList';

const firstComment = {
    text: "First Comment",
    user: "u/first",
    upvotes: 2100
}

const secondComment = {
    text: "Second Comment",
    user: "u/second",
    upvotes: 743
}

const testComments = [firstComment, secondComment];

export default function Post() {

    const [ comments, setComments ] = useState(testComments);

    return (
        <div style={postStyle}>
            <Heading use="h3">Post Title</Heading>
            <Divider />
            <br />
            <CommentList comments={comments} />
        </div>
    )
}