---
layout: post
title: NengoDL 1.2.0 released
author: Daniel Rasmussen
icon: github
---

The NengoDL team is jazzed to announce the release of NengoDL 1.2.0.

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

The 1.2.0 release has made it much easier to train spiking neural networks.  NengoDL will now automatically use a differentiable, rate-based approximation for spiking neuron models during training (if one is known), rather than the old approach where users had to swap neuron types manually.  Check out the updated [spiking MNIST example](https://www.nengo.ai/nengo-dl/examples/spiking_mnist.html) to see how this looks in practice.  We've also [expanded the config system](https://www.nengo.ai/nengo-dl/config.html), and made improvements to both training and inference speed. Check out the [GitHub release page](https://github.com/nengo/nengo-dl/releases) for a full changelog.

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