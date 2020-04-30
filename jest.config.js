/**
 *	@file
 *	Typescript File jest.config.js of project landingpage
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

module.exports = {
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/*.d.ts",
        "!**/node_modules/**",
        "!**/src/**",
    ],
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "/src/",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
    moduleNameMapper: {
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    },
    testEnvironmentOptions: { resources: "usable" },
};
