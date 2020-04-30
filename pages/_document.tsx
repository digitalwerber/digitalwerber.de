/**
 *	@file
 *	Typescript File _document.tsx of project landingpage
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

import React from "react";
import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}
