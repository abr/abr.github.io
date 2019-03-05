---
DoR: March 14, 2018
title: Nengo Extras 0.1 released
author: Trevor Bekolay
icon: github
---

The [Nengo team](https://www.nengo.ai/people.html)
is super excited to announce the release of Nengo Extras!

### What is Nengo Extras?

Nengo Extras contains additional utilities for Nengo
that are not commonly used,
but are useful enough
that they should be publicly accessible.
These extra features include learning rules,
neuron types, domain-specific processes, and more.

### Features

This initial 0.1.0 release of Nengo Extras contains:

- Utilities for deep learning, including functions for
  downloading popular datasets and Nengo networks that
  interact with Keras.
- Several composite distributions
  that sample from other distributions.
- The classic ``DeltaRule`` learning rule.
- Nengo networks for matrix multiplication
  and two dimensional product.
- Variants of the leaky integrate-and-fire neuron type.
- Processes for 2D convolution, 2D pooling,
  and presenting images.
- Utilities for making vision models,
  including classes for making Gabor filters
  and optimized encoders.
- Visualization tools including extra Matplotlib plots,
  a simple GUI for viewing and manipulating images,
  and functions to make GraphViz visualizations of Nengo models.

See the [full documentation](https://www.nengo.ai/nengo_extras/)
for more details and example usage.

### How do I get it?

To install Nengo extras, use `pip`.

```bash
pip install nengo_extras
```

### Where can I learn more?

- [Documentation](https://www.nengo.ai/nengo_extras/)
- [Install from PyPI](https://pypi.python.org/pypi/nengo_extras)
- [Source on Github](https://github.com/nengo/nengo_extras)

### Where can I get help?

Please come to the [Nengo forum](https://forum.nengo.ai/)!
We welcome any questions and suggestions you might have,
and invite you to share your Nengo creations there.
