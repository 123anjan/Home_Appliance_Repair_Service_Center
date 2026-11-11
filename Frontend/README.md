# Appliance Care frontend

## Run locally

```sh
npm ci
npm run dev
```

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` builds the frontend and
publishes the generated site files to the repository root, which is the
configured GitHub Pages source. It runs when frontend files are pushed to
`main` and can also be started manually from the repository's **Actions** tab.

The published site is available at
https://123anjan.github.io/Home_Appliance_Repair_Service_Center/.
