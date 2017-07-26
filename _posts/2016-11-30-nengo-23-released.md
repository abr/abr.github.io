---
layout: post
title: Nengo 2.3 released
author: Trevor Bekolay
icon: github
---

The [Nengo team](https://github.com/nengo/nengo/blob/master/CONTRIBUTORS.rst)
is elated to announce the release of Nengo 2.3!

### What is Nengo?

Nengo is a Python library for building and simulating
large-scale neural models for AI and robotics.
It can be thought of as a neural compiler,
transforming a functional description of a neural model
to a network of spiking or non-spiking neurons
that can run on multiple backends
including GPUs and neuromorphic hardware.

### What's new?

Nengo 2.3 features several improvements under the hood
which should speed up certain operations,
such as accessing probe data via `sim.data`.

One nice new feature is the ability to
copy and pickle Nengo objects.
Nengo objects like `Ensemble` now have
a `copy` method that will clone that ensemble
in the current network context.
If you created a model in a console session,
for example, you can pickle that model
to a file using `pickle.dump(model, file)`,
then load it back up anywhere else
with `model = pickle.load(file)`.

We have also added a progress bar for models
that take a long time to build.
Previously, we showed a progress bar when
simulating large models, but not when building them.
Now you will get a progress bar for each step.

The Nengo team also grew this release.
Welcome to the team, Ben Morcos!

To see the full list of changes in Nengo 2.3, head to the
[Github release page](https://github.com/nengo/nengo/releases/tag/v2.3.0).

### How do I get it?

To get the new version of Nengo, use `pip`.

```bash
pip install --upgrade nengo
```

### Where can I learn more?

- [Install from PyPI](https://pypi.python.org/pypi/nengo)
- [Source on Github](https://github.com/nengo/nengo)
- [Documentation](https://www.nengo.ai/nengo/)
- [Example models](https://www.nengo.ai/nengo/examples.html)

### Where can I get help?

Please come to the [Nengo forum](https://forum.nengo.ai/)!
We welcome any questions and suggestions you might have,
and invite you to share your Nengo creations there.
