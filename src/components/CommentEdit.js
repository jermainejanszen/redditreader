import React from 'react';
import { Card, ActionButtons } from 'bumbag';

export default function CommentEdit({ comment }) {
    return (
        <Card
            footer={
                <ActionButtons
                    cancelText="Delete"
                    cancelProps={{ palette: "danger", variant: "outlined" }}
                    submitText="Save"
                    submitProps={{ palette: "success" }}
                    justifyContent="flex-end"
                />
            }
        >
            <div>
                <label for="user">User: </label>
                <input type="text" id="user" name="user" value={comment.user} style={{ margin: "0px 16px 0px 0px" }}/>
                <label for="user">Upvotes: </label>
                <input type="text" id="upvotes" name="upvotes" size="8" value={comment.upvotes} style={{ margin: "0px 16px 0px 0px" }}/>
                <br/><br/>
                <label for="user" style={{display: "block"}}>Text: </label>
                <textarea id="text" name="text" rows="4" cols="61" value={comment.text} style={{ margin: "3px 0px", fontFamily: "inherit" }} />
            </div>
        </Card>
    )
}
