Applied Brain Research Inc. webpage
===================================

This repository contains code and sources files
to generate [ABR's static website](https://www.appliedbrainresearch.com/).
It's generated with the [Jekyll](https://jekyllrb.com/)
static website generator.

Github will build this website on each push.

Build the site locally
======================

To simplify building locally, we include `Dockerfile` and `docker-compose.yml`
files to easily generate a docker container that can listen for file changes.

Initially, and whenever a dependency is updated or another core change is made,
you will need to build the docker image.

```bash
docker build -t abr .
```

After building, you can serve the website with

```bash
docker compose up --build
```

You can then open up <http://localhost:4000> and should see the website.
When you change files, the served website should update to reflect
those changes without having to rebuild the image or the container.

Props
=====

The site was redesigned in 2019 by a team at
[Fusionbox](https://www.fusionbox.com/)
who were lovely to work with.
