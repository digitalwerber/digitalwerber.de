/**
 *	@file
 *	Javascript file tweets.js of project worker
 *
 *	@author		Michael Müller <mich@el.mba>
 *	@copyright	https://digitalwerber.de 2020
 *
 *	HISTORY:
 *	┌───────────────┬───────┬───────────────────────────────────────────────────────────────────────
 *	│ Date			│ By	│ Comments
 *	┝━━━━━━━━━━━━━━━┿━━━━━━━┿━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *	│ 2020-04-29	│ mm	│ File created
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

/**
 * This class contains information about michael's twitter user
 *
 * @export
 * @class PublicUserInfo
 */
export class PublicUserInfo {
    constructor(user) {
        /**
         * ID of the user
         * @type {number}
         */
        this.id = user.id;

        /**
         * The user's full name
         * @type {string}
         */
        this.name = user.name;

        /**
         * Twitter username (@user)
         * @type {string}
         */
        this.screen_name = user.screen_name;

        /**
         * User's description text
         * @type {string}
         */
        this.description = user.description;

        /**
         * Https url of the user's avatar
         * @type {string}
         */
        this.image = user.profile_image_url_https.replace(/_normal\./i, ".");

        /**
         * Number of followers
         * @type {number}
         */
        this.followers = user.followers_count;

        /**
         * Number of friends
         * @type {number}
         */
        this.friends = user.friends_count;

        /**
         * Number of lists the user is added
         * @type {number}
         */
        this.listed = user.listed_count;

        /**
         * Number of tweets
         * @type {number}
         */
        this.statuses = user.statuses_count;
    }
}

/**
 * This class contains a single tweet
 *
 * @export
 * @class PublicTweet
 */
export class PublicTweet {
    constructor(tweet) {
        /**
         * Date & time the tweet was published
         * @type {date}
         */
        this.date = new Date(tweet.created_at);

        /**
         * Full text of the tweet
         * @type {string}
         */
        this.text = tweet.full_text.replace(
            /\s?(#web)?\s?(\s?https\:\/\/t.co\/\w+)*$/gi,
            ""
        );

        /**
         * Number of retweets
         * @type {number}
         */
        this.retweets = tweet.retweet_count;

        /**
         * Number of people loving the tweet
         * @type {number}
         */
        this.favorites = tweet.favorite_count;

        this.entities = tweet.entities;
        //this.original = tweet;
    }
}

export class PublicTwitterData {
    constructor(apiJson) {
        /**
         * Michael's twitter user
         * @type {PublicUserInfo}
         */
        this.user = new PublicUserInfo(apiJson[0].user);

        /**
         * Array of max 5 tweets
         * @type {PublicTweet[]}
         */
        this.tweets = filterTweets(apiJson).map(
            (tweet) => new PublicTweet(tweet)
        );
    }
}

/**
 * Calls the twitter api to get michael's user info and latest tweets
 *
 * @export
 * @returns {PublicTwitterData} Michael's user info and latest tweets
 */
export async function getTwitterData() {
    const apiResponse = await fetch(
        "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=digitalwerber&count=200&exclude_replies=true&tweet_mode=extended",
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${TWITTER_TOKEN}`,
            },
        }
    );

    return new PublicTwitterData(await apiResponse.json());
}

function filterTweets(tweets) {
    const filtered = tweets.filter((tweet) => /#web/i.test(tweet.full_text));
    return (filtered.length ? filtered : [tweets[0]]).filter(
        (tweet, i) => i < 5
    );
}
