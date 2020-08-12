import React, { useState, useRef } from 'react';
import { Card, ActionButtons } from 'bumbag';
import { commentFormStyle } from '../styles';

export default function Post( { post, savePost } ) {
    
    const [ user, setUser ] = useState(post.user);
    const [ upvotes, setUpvotes ] = useState(post.upvotes);
    const [ text, setText ] = useState(post.text);
    const [ editMode, setEditMode ] = useState(post.editMode);

    const userInputRef = useRef();
    const upvotesInputRef = useRef();
    const textInputRef = useRef();
    
    function saveAndGetPost() {
        setUser(userInputRef.current.value);
        setUpvotes(upvotesInputRef.current.value);
        setText(textInputRef.current.value);
        setEditMode(false);
        return {
            user: user,
            upvotes: upvotes,
            text: text,
            editMode: editMode
        }
    }

    var card;
    if(editMode) {
        card = 
            <Card
                footer={
                    <ActionButtons
                        cancelText="Cancel"
                        cancelProps={{ palette: "danger", variant: "outlined" }}
                        onClickCancel={() => setEditMode(false)}
                        submitText="Save"
                        submitProps={{ palette: "success" }}
                        onClickSubmit={ () => savePost(saveAndGetPost()) }
                        justifyContent="flex-end"
                    />
                }
            >
                <form style={commentFormStyle.general}>
                    <div style={commentFormStyle.user}>
                        <label htmlFor="user">User </label>
                        <input ref={userInputRef} type="text" id="user" name="user" defaultValue={user}  style={commentFormStyle.userInput} />
                    </div>
                    <div style={commentFormStyle.upvotes}>
                        <label htmlFor="upvotes">Upvotes </label>
                        <input ref={upvotesInputRef} type="number" id="upvotes" name="upvotes" size="8" defaultValue={upvotes} style={commentFormStyle.upvotesInput} />
                    </div>
                    <div style={commentFormStyle.text}>
                        <br />
                        <label htmlFor="text">Text </label>
                        <textarea ref={textInputRef} id="text" name="text" rows="4" defaultValue={text} style={commentFormStyle.textInput} />
                    </div>
                </form>
            </Card>
    } else {
        card = 
            <Card
                title={user} 
                headerAddon={<p>Upvotes: <b>{upvotes}</b></p>}
                footer={
                    <ActionButtons
                        cancelText="Delete"
                        cancelProps={{ palette: "danger", variant: "outlined", disabled: true }}
                        submitText="Edit"
                        submitProps={{ palette: "default" }}
                        onClickSubmit={ () => { setEditMode(true) }}
                        justifyContent="flex-end"
                    />
                }
            >
                {text}
            </Card>
    }

    return card;
}
