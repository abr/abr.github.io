---
layout: post
title: Nengo 2.8 released
author: Trevor Bekolay
icon: github
---

The [Nengo team](https://www.nengo.ai/people.html)
is elated to announce the release of Nengo 2.8.0!

### What is Nengo?

Nengo is a Python library for building and simulating
large-scale neural models for AI and robotics.
It can be thought of as a neural compiler,
transforming a functional description of a neural model
to a network of spiking or non-spiking neurons
that can run on multiple backends
including GPUs and neuromorphic hardware.

### What's new?

Nengo 2.8.0 contains a few bugfixes and changes to learning rules.

Learning rules that can received inputs (usually error signals)
can now be slices, like other Nengo objects you can connect to.

Learning rules that used to take in `tau` values
denoting the decay time constant of a lowpass filter
have been changed to instead take in a `Synapse` instance.
The `tau` parameters still exist for backwards compatibility,
but are deprecated and will be removed in Nengo 3.0.

Also deprecated is the `nengo.ipynb` IPython notebook extension,
which was previously required for rich progress bars
in the notebook environment.
We now use the IPython rich display system
to render progress bars,
which will work automatically without the `nengo.ipynb` extension.

To see the full list of changes in Nengo 2.8.0, head to the
[Github release page](https://github.com/nengo/nengo/releases/tag/v2.8.0).

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
