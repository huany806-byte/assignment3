# React.js Demo

This repository contains the demo project that I'll be building to explain the React.js library. Unlike our previous projects, this project depends on a tool, Vite, for building the application.

## Using This Repository

If you make a new copy of these files, you'll need to install the packages it depends on. Open the folder in VS Code, open a terminal, and run the following command:

```bash
npm install
```

If it installs correctly (doesn't give you any errors), then it should have created a `node_modules` subfolder. Once that's done, then you can run a development version of the project by running the following command in a terminal:

```bash
npm run dev
```

## Useful Files

Feel free to download the entire repository and follow along or play with the code. However, if you want to copy individual files into your own project, the following are the most useful:

- `.gitignore`: This file prevents GitHub from archiving files we don't want to save (like the node_modules folder)
- `package.json`: This lists the packages that `npm install` knows to install

And, of course, the site itself is stored in `index.html` as well as all of the files in the `src` folder.

## Publishing to GitHub Pages

**In addition**, this project requires a more complex setup for publishing on GitHub pages. You'll need to create a folder in your project called `.github/workflows` and copy the [`deploy.yaml`](https://github.com/PUDT3101C-Fall2026/react-demo/blob/main/.github/workflows/deploy.yaml) file into this folder in your project. Commit this file to your repository.

Then, in the settings for your repository, go to the **Pages** section and under **Source**, select **GitHub Actions**. Now, the action should run and deploy your page to GitHub pages. If there's an issue, you can look under the **Actions** section of your repository.
