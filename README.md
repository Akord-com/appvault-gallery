# Akord AppVault : Photo Gallery Demo

**Overview**

This open-source demo provides developers with a step-by-step guide for using Akord's web3 digital vaults to deploy a permanent, dynamic website on the Arweave network. The source code illustrates how to load data and files directly from an Akord vault, offering a practical example of immutable, censorship proof web hosting with dynamically loaded content.

**Background**

Welcome to the README of our pioneering open-source project that shows you how to take full advantage of Akord's web3 digital vaults for permanent web hosting on the Arweave network. If you're a developer who's passionate about building long lasting, censorship proof, and immutable websites, then you've come to the right place!

Akord's vaults are not just another storage solution; they are a significant innovation in Web3 data ownership and web publishing. Leveraging the Arweave blockchain, Akord's vaults offer an innovative approach to permanent data storage. The immutability of the Arweave network ensures that once you publish your website, it's there forever.

But Akord takes it a step further by allowing you to publish dynamic websites capable of loading various types of data and files directly from its secure vaults. This means that you can have a permanent, censhorship proof website that is both dynamic and user-centric.

[Show me the demo](https://arweave.net/5OlDnd28hxVtDLnVkHdJE04vR_DtRvXspSi96j2yMRM)

## Table of Contents

- [Setup](#setup)
- [Tasks](#tasks)
  - [Adding/Removing Photos](#addingremoving-photos)
  - [Starting a Local Webserver](#starting-a-local-webserver)
  - [Deployment](#deployment)

## 10 minute deployment

Follow these steps to get started:

1. **Create/Login with Akord**: Head over to [akord.com](https://www.akord.com) and either sign in or create a new account.
2. **Create a New Vault**: After logging in, create a new vault. Add a title, description, and tags as you see fit.
3. **Upload Files**: Add your `index.html`, `body.md`, and the `photos` folder to your newly created vault.
4. **Generate a Manifest**: Click on the [+] button within your vault and select 'Add Manifest'.
5. **Transaction Confirmation**: Wait for the transactions to be confirmed on the network. This usually takes about 10 minutes. You can get updates from the 'Storage' sections on the left side menu.
6. **Get File Info**: Click on the file menu under `manifest.json` and select 'File Info'.
7. **Copy Permaweb URL**: Click on the 'copy permaweb url' button and paste that into your browser.
8. **Site on Permaweb**: The URL you just copied is the permanent URL to your site on the permaweb.

## Tasks

### Installation

Before starting your local server, make sure you've installed all necessary dependencies:

```
npm install
```

### Adding/Removing Photos

For local development and testing, it's often necessary to update the manifest file when you add or remove files, especially photos, from the `photos` folder.

Generate a local manifest by running:

```
npm run local-manifest
```

### Starting a Local Webserver

Start the local server with:

```
npm start
```

### Deployment

> Tip: When making deployments on Akord, make sure the files are fully committed on the network before generating your manifest.

1. **Upload Changes**: To deploy any updates, upload the new or modified files (`index.html`, `body.md`, or photos) to your existing vault.
2. **Versioning**: When prompted, choose 'New Version' to keep filenames consistent and maintain a record of past versions.
3. **Generate New Manifest**: Navigate to 'Storage' from the menu on the left to ensure your uploads have been confirmed. After confirmation, click on the [+] button within your vault and select 'Add Manifest'. Follow the dialog box instructions to generate a new manifest.
4. **Fetch New Permaweb URL**: Once the new manifest is confirmed on the network, navigate to 'File Info' under `manifest.json` to obtain the updated permaweb URL for your site.

Happy coding! Feel free to contribute or report issues to make this project better. Let's empower data ownership together!
