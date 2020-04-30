/**
 *	@file
 *	Typescript File index.tsx of project landingpage
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
import renderer from "react-test-renderer";
import Index from "../../pages/index";

it("renders homepage unchanged", () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
});
