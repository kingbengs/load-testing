
## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

To run the website locally navigate to main folder (caspar-website) and run
```sh
gatsby develop
```
or
```sh
npm run develop
```

## Deploy

Deployments are automatically managed with GitHub Actions.

The workflow will manage everything for you, from building a proper docker image, to deploying it to the EKS cluster.

This applies even if nothing has been commited to the repository (For example, blog posts). In that case
all you need is to create a pre-release (for stage) or a release (for production) and the article will be deployed.

### Dev (www.caspar-dev.net)

Create a PR and add the `deploy` label. 

[Example](https://github.com/casparhealth/caspar-website/pull/132)

### Stage (www.caspar-stage.net)

Create a [release](https://github.com/casparhealth/caspar-website/releases/new) via the Github UI using the following Parameters:
- Tag: `vX.Y.Z-rc.A` (example: `v0.0.1-rc.1`)
- Name: `vX.Y.Z-rc.A` (example: `v0.0.1-rc.1`)
- Tick the `This is a pre-release` checkbox.

[Example](https://github.com/casparhealth/caspar-website/releases/tag/v1.0.0-rc.1)

### Production (www.caspar-health.com)

Create a [release](https://github.com/casparhealth/caspar-website/releases/new) via the Github UI using the following parameters:
- Tag: `vX.Y.Z` (example: `v0.0.1`)
- Name: `vX.Y.Z` (example: `v0.0.1`)

[Example](https://github.com/casparhealth/caspar-website/releases/tag/v1.0.0)
