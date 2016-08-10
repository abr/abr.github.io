---
layout: post
title: Nengo 2.1.1 released
author: Trevor Bekolay
icon: github
---

The [Nengo team](https://github.com/nengo/nengo/blob/master/CONTRIBUTORS.rst)
is glad to announce the release of Nengo 2.1.1.

### What is Nengo?

Nengo is a Python library for building and simulating
large-scale neural models for AI and robotics.
It can be thought of as a neural compiler,
transforming a functional description of a neural model
to a network of spiking or non-spiking neurons
that can run on multiple backends
including GPUs and neuromorphic hardware.

### What's new?

Nengo 2.1.1 changes how the default `LIF` neuron model
decides when the spike. It should now be closer to the
behavior of the `LIFRate` model, which is used to
determine decoding weights, meaning that the new `LIF` model
is more accurate than the previous model.
However, the previous model is slightly faster,
so we have made it available as
[`nengo_extras.FastLIF`](https://github.com/nengo/nengo_extras).

This release also fixes several bugs.
To see the full list of changes, head to the
[Github release page](https://github.com/nengo/nengo/releases/tag/v2.1.1).

### How do I get it?

To get the new version of Nengo, use `pip`.

```bash
pip install --upgrade nengo
```

### Where can I learn more?

- [Install from PyPI](https://pypi.python.org/pypi/nengo)
- [Source on Github](https://github.com/nengo/nengo)
- [Documentation](https://pythonhosted.org/nengo)
- [Example models](https://pythonhosted.org/nengo/examples.html)
