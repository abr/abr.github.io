---
DoR: May 31, 2018
title: NengoDL 1.0.0 released
author: Daniel Rasmussen
icon: github
---

The NengoDL team is very excited to announce the release of NengoDL 1.0.0.

### What is NengoDL?

NengoDL is a backend for Nengo that integrates deep learning methods (supported by the [TensorFlow](https://www.tensorflow.org/) framework) with other Nengo modelling tools. This allows users to optimize their models using deep learning training methods, improves simulation speed (on CPU or GPU), and makes it easy to insert TensorFlow models (such as a convolutional neural network) into Nengo networks.

### How do I use it?

To use NengoDL, replace instances of `nengo.Simulator` with `nengo_dl.Simulator`.

For example, if you have a network called `model` and you run it with

```python
with nengo.Simulator(model) as sim:
    sim.run(10)
```

you would change that to

```python
with nengo_dl.Simulator(model) as sim:
    sim.run(10)
```

and that's it!

Information on accessing the more advanced features of NengoDL can be found in the [documentation](http://www.nengo.ai/nengo-dl/).

### What's new?

The 1.0.0 release symbolizes the move from beta to stable release status for NengoDL.  This coincides with the release of the [NengoDL white paper](https://arxiv.org/abs/1805.11144).  And of course we have some new features!  Note that this list includes features from the 0.6.2 release, which didn't get its own announcement (it was intended to be part of 1.0.0, but we wanted to get a release out more quickly to address some package dependency issues users were running in to).  So, highlights since the last announcement include: new features that make it easier to extract trained parameters from one model for reuse in another, a number of new configuration options, improved speed for the PES implementation, reduced TensorFlow memory usage for large models, and the option for users to directly specify the output gradient during training (rather than using an objective function). Check out the [GitHub release page](https://github.com/nengo/nengo-dl/releases) for a full changelog.

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
