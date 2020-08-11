import React from 'react';
import { Card, ActionButtons, Button } from 'bumbag';

export default function Post( { post } ) {
    return (
        <Card standalone>
            <Card.Header>
                <Card.Title>{post.user}</Card.Title>
                {<p>Upvotes: <b>{post.upvotes}</b></p>}
            </Card.Header>
            <Card.Content>{post.text}</Card.Content>
            <Card.Footer>
                <ActionButtons
                    cancelText="Delete"
                    cancelProps={{ palette: "danger", variant: "outlined", disabled: true }}
                    submitText="Edit"
                    submitProps={{ palette: "default" }}
                    justifyContent="flex-end"
                />
            </Card.Footer>
        </Card>
    )
}
