# Akord AppVault: Photo Gallery Demo

## Overview

This demo guides you through using Akord Vaults to deploy an enduring, interactive, and censorship-proof website on the Arweave network, complete with dynamically loaded elements such as HTML, JSON data, and images. 

Akord Vaults are more than just storage solutions; they are functional building blocks for Web3 data ownership and online publishing. With the power of the Arweave blockchain, these vaults provide on-chain privacy, durability, and composability. Serving as a management hub that functions well into the future, the Vault offers specialized features like access control and version tracking, keeping a complete historical record of your website's evolutions.

Through this demo, you'll gain the know-how to integrate application logic, data, and on-chain controls to establish a lasting, interactive website.

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
4. **Transaction Confirmation**: Wait for the transactions to be confirmed on the network. This usually takes about 10 minutes. You can get updates from the 'Storage' sections on the left side menu.
5. **Generate a Manifest**: Click on the [+] button within your vault and select 'Add Manifest'.
6. **Your Website Permaweb URL**: Click on the file menu under `manifest.json` and select 'File Info'. Click on the 'copy permaweb url' button and paste that into your browser.

The URL you just copied is the permanent URL to your site on the permaweb. Use it for loading your website, point a DNS name to it, share it on social media.

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
