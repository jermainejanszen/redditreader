import React from 'react';
import { Card, ActionButtons } from 'bumbag';

export default function Comment({ comment }) {
    return (
        <Card
            title={comment.user} 
            headerAddon={<p>Upvotes: <b>{comment.upvotes}</b></p>}
            footer={
                <ActionButtons
                    cancelText="Delete"
                    cancelProps={{ palette: "danger", variant: "outlined" }}
                    submitText="Edit"
                    submitProps={{ palette: "default" }}
                    justifyContent="flex-end"
                />
            }
        >
            {comment.text}
        </Card>
    )
}
