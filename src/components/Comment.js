import React, { useState, useRef } from 'react';
import { Card, ActionButtons } from 'bumbag';
import { ACTIONS } from './CommentList';
import { commentFormStyle } from '../styles';

export default function Comment({ commentProp, dispatch }) {

    const [ user, setUser ] = useState(commentProp.user);
    const [ upvotes, setUpvotes ] = useState(commentProp.upvotes);
    const [ text, setText ] = useState(commentProp.text);
    const [ editMode, setEditMode ] = useState(commentProp.editMode);

    const userInputRef = useRef();
    const upvotesInputRef = useRef();
    const textInputRef = useRef();

    function saveComment() {
        setUser(userInputRef.current.value);
        setUpvotes(upvotesInputRef.current.value);
        setText(textInputRef.current.value);
        setEditMode(false);
    }

    function getComment() {
        return {
            id: commentProp.id,
            user: user,
            upvotes: upvotes,
            text: text,
            editMode: editMode
        }
    }

    function submitComment() {
        saveComment();
        if(userInputRef.current.value === "" && upvotesInputRef.current.value < 1 && textInputRef.current.value === "") {
            dispatch({type: ACTIONS.DELETE_COMMENT, payload: {id: commentProp.id}});
        } else {
            dispatch({type: ACTIONS.SAVE_COMMENT, payload: {comment: getComment()}})
        }
    }

    function cancelCommentChange() {
        if(user === "" && upvotes < 1 && text === "") {
            dispatch({type: ACTIONS.DELETE_COMMENT, payload: {id: commentProp.id}});
        } else {
            setEditMode(false);
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
                        onClickCancel={ () => cancelCommentChange() }
                        submitText="Save"
                        submitProps={{ palette: "success" }}
                        onClickSubmit={ () => submitComment() }
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
                        cancelProps={{ palette: "danger", variant: "outlined" }}
                        onClickCancel={ () => dispatch({type: ACTIONS.DELETE_COMMENT, payload: {id: commentProp.id}}) }
                        submitText="Edit"
                        submitProps={{ palette: "default" }}
                        onClickSubmit={ () => setEditMode(true) }
                        justifyContent="flex-end"
                    />
                }
            >
                {text}
            </Card>
    }

    return card;
}
