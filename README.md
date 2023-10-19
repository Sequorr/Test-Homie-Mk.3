# Sales Homie
A weird Discord bot implementation designed to help with purchase verification on different digital stores.

## ⚠️ Disclaimer 
This is a Discord bot **concept**. At the time of writing this, it is barely functional as a bot at all, and *none of what's discussed below exists yet*. This will be a lengthy project, as I'm the only one working on it during my off hours and when I'm not sleeping or whatever.

## What's it for?
First off, to be absolutely clear: This bot is designed for use by digital asset creators, such as those in the VRChat community. The concept behind it stems from an ongoing issue with purchase security and asset piracy: Users falsifying information when buying/downloading content, so as to remain anonymous and allow greater freedom to distribute said content against the wishes of the creator. This bot implements a rather-strange method of verifying user information to better record who has access to your products. Core functionality is designed to work with [Gumroad](https://gumroad.com/) and [Payhip](https://payhip.com/), with partial support for [Sellfy](https://sellfy.com/). [Booth](https://booth.pm/en) support is also an interest, but no research has been conducted into that avenue thus far.

In other words, Sales Homie does some weird shit in order to help discourage people from entering false info just to leak your stuff.

## How does it work?
Current implementation concept is for Sales Homie to generate one-time, item-specific discount/coupon codes for users in your Discord server. These codes are generated via the available API's, and as such *will require some setup before use*. The concept also dictates that your normal store prices should be **much higher** than your actual desired purchase price, so as to discourage users from buying without a generated code.

More information about how to actually set up the bot will be documented in the Wiki, whenever I get around to it.

## What all will Sales Homie do?
- Discount/Coupon code generation upon verifying user info
  - Ability to set minimum Discord account age
  - Ability to require valid VRChat Profile URL (checked via API)
  - Custom field support
- Purchase log, sent via Channel or DM
- Ability to quickly show Embed with product listing info
- Query functions (ex., pulling up a user's verified purchases)
- Ability to manually add purchases to Discord user ID
- Full API integration
    - [Gumroad API](https://app.gumroad.com/api) support
    - [Payhip API](https://payhip.com/api-docs/) support
- Partial Webhook support
    - [Sellfy Webhook](https://docs.sellfy.com/article/127-webhooks) support
- Even more stuff as I think of it, idk

## How can I help?
Well, for starters, take this project off my hands. I am a very, very mediocre developer and Discord bots are *not* my forté. Outside of that, feel free to fork the project, or open up an issue, or reach out to me on Discord (sequor) / ~Twitter~ X ([sequorr](https://twitter.com/sequorr)) / BlueSky ([sequor.bsky.social](https://bsky.app/profile/sequor.bsky.social)).

Much love, homies.