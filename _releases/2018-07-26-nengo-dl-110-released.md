---
DoR: July 26, 2018
title: NengoDL 1.1.0 released
author: Daniel Rasmussen
icon: github
---

The NengoDL team is happy to announce the release of NengoDL 1.1.0.

### What is NengoDL?

NengoDL is a backend for Nengo that integrates deep learning methods (supported by the [TensorFlow](https://www.tensorflow.org/) framework) with other Nengo modelling tools. This allows users to optimize their models using deep learning training methods, improves simulation speed (on CPU or GPU), and makes it easy to insert TensorFlow models (such as a convolutional neural network) into Nengo networks.

### How do I use it?

To use NengoDL, replace instances of `nengo.Simulator` with `nengo_dl.Simulator`.

For example, if you have a network called `net` and you run it as

```python
with nengo.Simulator(net) as sim:
    sim.run(10)
```

you would change that to

```python
with nengo_dl.Simulator(net) as sim:
    sim.run(10)
```

and that's it!

Information on accessing the more advanced features of NengoDL can be found in the [documentation](http://www.nengo.ai/nengo-dl/).

### What's new?

The 1.1.0 release contains a number of usability improvements.  We've added the new `sim.freeze_params` feature to make it easy to transfer an optimized NengoDL model to a different Nengo Simulator (you can read more about that [here](https://www.nengo.ai/nengo-dl/training.html#saving-and-loading-parameters).  Along with that we've improved the speed of fetching trained parameters from the simulation.  We've also added a couple useful warnings or error messages in places where previous user feedback wasn't clear (e.g., when attempting to train a network with non-differentiable elements).  You may also notice that all previous NengoDL releases are now tracked in [the documentation](https://www.nengo.ai/nengo-dl), handy for those looking for examples/documentation for an earlier version. Check out the [GitHub release page](https://github.com/nengo/nengo-dl/releases) for a full changelog.

### How do I get it?

To install NengoDL, we recommend using `pip`:

```bash
pip install nengo-dl
```

More detailed installation instructions can be found [here](https://nengo.github.io/nengo-dl/installation.html).

### Where can I learn more?

- [Documentation](http://www.nengo.ai/nengo-dl/)
- [White paper](https://arxiv.org/abs/1805.11144)
- [Install from PyPI](https://pypi.python.org/pypi/nengo-dl)
- [Source on GitHub](https://github.com/nengo/nengo-dl)

### Where can I get help?

Please come to the [Nengo forum](https://forum.nengo.ai/c/backends)!
We welcome any questions and suggestions you might have.
