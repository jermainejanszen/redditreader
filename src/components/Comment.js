import React, { useState } from 'react';
import { Card, ActionButtons } from 'bumbag';

export default function Comment({ commentProp }) {

    const [ user, setUser ] = useState(commentProp.user);
    const [ upvotes, setUpvotes ] = useState(commentProp.upvotes);
    const [ text, setText ] = useState(commentProp.text);
    const [ editMode, setEditMode ] = useState(commentProp.editMode);

    var card;
    if(editMode) {
        card = 
            <Card
                footer={
                    <ActionButtons
                        cancelText="Delete"
                        cancelProps={{ palette: "danger", variant: "outlined" }}
                        submitText="Save"
                        submitProps={{ palette: "success" }}
                        onClickSubmit={ () => { setEditMode(false) }}
                        justifyContent="flex-end"
                    />
                }
            >
                <form>
                    <label for="user">User: </label>
                    <input type="text" id="user" name="user" placeholder={user}  style={{ margin: "0px 16px 0px 0px" }} onChange={e => setUser(e.target.value)} />
                    <label for="user">Upvotes: </label>
                    <input type="text" id="upvotes" name="upvotes" size="8" placeholder={upvotes} style={{ margin: "0px 16px 0px 0px" }} onChange={e => setUpvotes(e.target.value)} />
                    <br/><br/>
                    <label for="user" style={{display: "block"}}>Text: </label>
                    <textarea id="text" name="text" rows="4" cols="61" placeholder={text} style={{ margin: "3px 0px", fontFamily: "inherit" }} onChange={e => setText(e.target.value)} />
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
