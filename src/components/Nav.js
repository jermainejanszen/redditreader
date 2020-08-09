import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TopNav, Image, Button } from 'bumbag';

function Nav() {
    return (
        <TopNav>
            <TopNav.Section>
                <TopNav.Item href="/" fontWeight="semibold">
                    <Image src="/logo.png" height="44px" />
                </TopNav.Item>
                <TopNav.Item href="#">Edit Post</TopNav.Item>
                <TopNav.Item href="#">Add Comment</TopNav.Item>
            </TopNav.Section>
            <TopNav.Section marginRight="major-2">
                <TopNav.Item>
                    <Button variant="ghost" palette="primary">Save</Button>
                </TopNav.Item>
                <TopNav.Item>
                    <Button variant="ghost" palette="primary">Load</Button>
                </TopNav.Item>
                <TopNav.Item>
                    <Button palette="primary">Play</Button>
                </TopNav.Item>
            </TopNav.Section>
        </TopNav>
    )
}

export default Nav;
