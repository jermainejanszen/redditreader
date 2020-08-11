import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TopNav, Image, Button, Text, useColorMode } from 'bumbag';

function Nav() {

    const { colorMode, setColorMode } = useColorMode();

    return (
        <TopNav>
            <TopNav.Section>
                <TopNav.Item href="/" fontWeight="semibold">
                    <Image src="/logo.png" height="44px" />
                </TopNav.Item>
                <TopNav.Item href="#">New Post</TopNav.Item>
                <TopNav.Item onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}>Color Mode</TopNav.Item>
            </TopNav.Section>
            <TopNav.Section marginRight="major-2">
                <TopNav.Item>
                    <Button variant="ghost" palette="primary"><Text>Save</Text></Button>
                </TopNav.Item>
                <TopNav.Item>
                    <Button variant="ghost" palette="primary"><Text>Load</Text></Button>
                </TopNav.Item>
                <TopNav.Item>
                    <Button palette="primary"><Text color="white">Play</Text></Button>
                </TopNav.Item>
            </TopNav.Section>
        </TopNav>
    )
}

export default Nav;
