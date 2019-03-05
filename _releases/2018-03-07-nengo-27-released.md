---
DoR: March 7, 2018
title: Nengo 2.7 released
author: Trevor Bekolay
icon: github
---

The [Nengo team](https://www.nengo.ai/people.html)
is jubilant to announce the release of Nengo 2.7.0!

### What is Nengo?

Nengo is a Python library for building and simulating
large-scale neural models for AI and robotics.
It can be thought of as a neural compiler,
transforming a functional description of a neural model
to a network of spiking or non-spiking neurons
that can run on multiple backends
including GPUs and neuromorphic hardware.

### What's new?

Nengo 2.7.0 contains a few new features and bugfixes.

We added a `SpikingRectifiedLinear` neuron type,
which provides an interesting balance between
biological realism and computational efficiency,
since it produces spikes yet is a very simple model.

We also added `amplitude` parameters to several neuron types,
including `LIF`, `LIFRate`, and `RectifiedLinear`.
Changing the amplitude of neural output
is useful for many
[deep learning algorithms](https://www.nengo.ai/nengo_dl/),
or when attempting to match a Nengo model
to a model implemented in another neural simulator.

We fixed several bugs related to pickling Nengo models,
the decoder cache, and the config system.

To see the full list of changes in Nengo 2.7.0, head to the
[Github release page](https://github.com/nengo/nengo/releases/tag/v2.7.0).

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
