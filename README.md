# Omar Aouf Portfolio

React + SCSS developer portfolio built with Vite and ready for GitHub Pages.

## Personalize

Update these placeholders before publishing:

- `src/App.jsx`: project descriptions, GitHub URL, LinkedIn URL, and any custom copy
- `assets/developer-hero.png`: replace if you want a personal photo or different visual
- GitHub Pages custom domain: set it in repository `Settings -> Pages`

Your contact details are already wired:

- `aouf460@gmail.com`
- `+971586828506`

## Run Locally

```text
npm install
npm run dev
```

## Build

```text
npm run build
```

## Publish On GitHub Pages

1. Create a new GitHub repository.
2. Add these files at the repository root.
3. Commit and push to the `main` branch.
4. In GitHub, open `Settings -> Pages`.
5. Set source to `GitHub Actions`.
6. The included workflow builds and deploys the `dist` folder.
7. Add your custom domain in the GitHub Pages settings.

Do not commit `node_modules/` or `dist/`; they are ignored and recreated automatically.

## Domain DNS

For an apex domain such as `example.com`, add GitHub Pages `A` records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

For `www.example.com`, add a `CNAME` record pointing to:

```text
your-github-username.github.io
```

After DNS is set, enable `Enforce HTTPS` in GitHub Pages.
