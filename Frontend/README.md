# Appliance Care frontend

## Run locally

```sh
npm ci
npm run dev
```

## Deploy to GitHub Pages

The GitHub Actions workflow at `.github/workflows/deploy-pages.yml` builds this
frontend and deploys it to the repository's GitHub Pages site whenever changes
are pushed to `main`. Enable GitHub Pages in the repository settings with
**GitHub Actions** as the deployment source if it is not already enabled.
If the first deployment ran before Pages was enabled, rerun it from the
repository's **Actions** tab after changing the setting.

The published site is available at
https://123anjan.github.io/Home_Appliance_Repair_Service_Center/.
