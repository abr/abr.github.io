---
layout: post
title: Nengo 2.5 released
author: Trevor Bekolay
icon: github
---

The [Nengo team](https://github.com/nengo/nengo/blob/master/CONTRIBUTORS.rst)
is pumped to announce the release of Nengo 2.5.0!

### What is Nengo?

Nengo is a Python library for building and simulating
large-scale neural models for AI and robotics.
It can be thought of as a neural compiler,
transforming a functional description of a neural model
to a network of spiking or non-spiking neurons
that can run on multiple backends
including GPUs and neuromorphic hardware.

### What's new?

Nengo 2.5.0 contains several improvements to documentation,
bugfixes, and a few new features.

Networks now have an `n_neurons` property
that gives the number of neurons in the network,
including all subnetworks.

It is now possible to combine `LinearFilter` synapses,
to implement more complex synapses types like double exponentials.

Neuron types can now determine maximum firing rates
and intercepts given gain and bias values.
If the gain and bias is specified,
the maximum firing rates and intercepts will be
determined in the build process,
or can be found at any time using the
`max_rates_intercepts` method.

To see the full list of changes in Nengo 2.5.0, head to the
[Github release page](https://github.com/nengo/nengo/releases/tag/v2.5.0).

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
