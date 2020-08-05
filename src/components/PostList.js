import React, { Component } from 'react';
import { Divider, Heading, Stack, Card } from 'bumbag';

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {post: "None", comments: []};
    }

    render() {
        return (
            <div>
                <Heading use="h3">Post Title</Heading>
                <Divider />
                <Stack>
                    <Card>First Comment</Card>
                    <Card>Second Comment</Card>
                </Stack>
            </div>
        )
    }
}
