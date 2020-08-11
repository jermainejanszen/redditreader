import React, { useState } from 'react';
import { Stack, Heading, Button } from 'bumbag';
import Comment from './Comment';

export default function CommentList({ comments }) {
    const commentComps = comments.map(comment => {
                                return <Comment commentProp={comment} />
                            })
    
    const [commentsState, setCommentsState] = useState(commentComps);
    
    function addComment() {
        const newComment = { user: "", upvotes: 0, text: "", editMode: true }
        setCommentsState([...commentsState, <Comment commentProp={newComment} />])
    }

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', flexFlow: 'space-between', marginBottom: "1.8%"}} >
                <Heading use="h3" style={{flexGrow: 1}}>Comments</Heading>
                <Button onClick={addComment} >Add Comment</Button>
            </div>
            <Stack>
                {commentsState}
            </Stack>
        </div>
    )
}
