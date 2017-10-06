---
layout: post
title: Nengo 2.6 released
author: Trevor Bekolay
icon: github
---

The [Nengo team](https://github.com/nengo/nengo/blob/master/CONTRIBUTORS.rst)
is hyped to announce the release of Nengo 2.6.0!

### What is Nengo?

Nengo is a Python library for building and simulating
large-scale neural models for AI and robotics.
It can be thought of as a neural compiler,
transforming a functional description of a neural model
to a network of spiking or non-spiking neurons
that can run on multiple backends
including GPUs and neuromorphic hardware.

### What's new?

Nengo 2.6.0 contains several new features and bugfixes.

We added a new `NoSolver` solver for situations
in which you want to skip the decoder solving process,
but don't want to pass in a full connection weight matrix.
`NoSolver` should be especially useful
when learning decoders with online learning
across several trials.

We have added a warning when the simulator
is run for 0 timesteps.
This can sometimes happen when running
one timestep at a time if the
`dt` is changed to a higher value.

We have also raised the minimum required version of NumPy
to 1.8 to take advantage of some more recent NumPy features.
If you're still using NumPy 1.7 or below,
we recommend upgrading to a newer version of NumPy.

Finally, the Nengo team grew this release.
Welcome to the team, Allen Wang!

To see the full list of changes in Nengo 2.6.0, head to the
[Github release page](https://github.com/nengo/nengo/releases/tag/v2.6.0).

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
