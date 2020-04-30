/**
 *	@file
 *	Typescript File layout.tsx of project landingpage
 *	
 *	@author		Michael Müller <mich@el.mba>
 *	@copyright	https://digitalwerber.de 2020
 *	
 *	HISTORY:
 *	┌───────────────┬───────┬───────────────────────────────────────────────────────────────────────
 *	│ Date			│ By	│ Comments
 *	┝━━━━━━━━━━━━━━━┿━━━━━━━┿━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *	│ 2020-04-30	│ mm	│ File created
 *	└───────────────┴───────┴───────────────────────────────────────────────────────────────────────
 *	
 *	┏━━━━━━━┓
 *	┃  ╻┓┓  ┃	Problems? Questions? I (the author, Michael from 🇩🇪) would ❤️ to work with you!
 *	┃  ╹╹╹  ┃	✉️ mail@digitalwerber.de  🔗https://github.com/digitalwerber
 *	┗━━━━━━━┛
 *	
 */

/**
 *	@license
 *	This file is part of the project aforementioned. It is released under a proprietary
 *	licence. All rights are reserved by the author, the agency and the client named above.
 *	Any usage which has not been not expressly approved is prohibited and will be
 *	prosecuted
 */

import React, { Fragment, ReactChildren, PropsWithChildren } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";

const PHI = 1.618;

const margin = 3;
const padding = 30;
const logoSize = 42;

const Header = styled.header`
    position: fixed;
    top: ${margin}rem;
    left: ${margin}rem;
    right: ${margin}rem;
    display: flex;
    align-content: space-between;
`;

const Footer = styled.footer`
    position: fixed;
    bottom: ${margin}rem;
    left: ${margin}rem;
    right: ${margin}rem;
    display: flex;
    align-content: space-between;
`;

const GlobalStyle = createGlobalStyle`

    html, body {
        margin: 0;
        overflow: hidden;
    }

    body {
        font-family: Futura, "futura-pt", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 1.125rem;
        width: 100vw;
        height: 100vh;
        color: #222;

        & > #root {
            width: 100vw;
            height: 100vh;
            display: flex;
        }

    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    ${Header}, ${Footer} {
        font-size: 1rem;
    }

`;

const Frame = styled.main`
    margin: ${margin}rem;
    flex-grow: 1;
`;

const LeftRow = styled.div`
    width: ${logoSize}px;
    padding: ${padding}px;
    flex-grow: 0;
    display: flex;
    font-size: 13px;
    font-weight: bold;
    color: #222;
`;

const Grid = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: stretch;
    background-color: #222222;

    div {
        flex-grow: 1;
    }

    ${LeftRow} {
        flex-grow: 0;
    }
`;

const Title = styled.div`
    transform: rotate(-90deg) translateX(-100%);
    transform-origin: top left;
    display: flex;
    height: ${logoSize}px;
    flex-shrink: 0;
    align-items: center;
`;

const Logo = styled.img`
    width: ${PHI * PHI}rem;
    height: ${PHI * PHI}rem;
    flex-grow: 0;
`;

export default ({children}: PropsWithChildren<{}>) => (
    <Fragment>
        <GlobalStyle />
        <Head>
            <title>My page title</title>
            
            <meta property="og:title" content="My page title" key="title" />
        </Head>
        <Header>
            <Logo alt="Logo" src="/logo.png" />
        </Header>
        {children}
        <Footer>
            <div>&copy; 2020 Michael Müller</div>
        </Footer>
    </Fragment>
);