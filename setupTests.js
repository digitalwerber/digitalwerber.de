/**
 *	@file
 *	Typescript File setupTests.js of project landingpage
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

// optional: configure or set up a testing framework before each test
// if you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// used for __tests__/testing-library.js
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

import { toMatchImageSnapshot } from "jest-image-snapshot";
import { setDefaultOptions } from "jsdom-screenshot";
setDefaultOptions({
    serve: ["public"],
    debug: true,
    launch: {
        defaultViewport: { width: 1920, height: 1024 },
    }
});
expect.extend({ toMatchImageSnapshot });
