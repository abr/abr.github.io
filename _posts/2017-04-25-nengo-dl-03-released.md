---
layout: post
title: Nengo DL 0.3.0 released
author: Daniel Rasmussen
icon: github
---

The Nengo DL team is jazzed to announce the release of Nengo DL 0.3.0.

### What is Nengo DL?

Nengo DL is a backend for Nengo that integrates deep learning methods
(supported by the [TensorFlow](https://www.tensorflow.org/) framework) with 
other Nengo modelling tools. This allows users to optimize their models using 
deep learning training methods, improves simulation speed (on CPU or GPU), 
and makes it easy to insert TensorFlow models (such as a convolutional neural 
network) into Nengo networks.

### How do I use it?

To use Nengo DL, replace instances of `nengo.Simulator`
with `nengo_dl.Simulator`.

For example, if you have a network called `model`
and you run it with

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

Information on accessing the more advanced features of Nengo DL
can be found in the [documentation](https://nengo.github.io/nengo_dl/).

### What's new?

The major changes with this release are a number of behind-the-scenes 
improvement that result in faster simulation speeds and lower build times.  
We've also added more documentation, fixed some bugs, and brought 
everything up to date with Nengo 2.4.0.  Check out the 
[GitHub release page](https://github.com/nengo/nengo_dl/releases) for a 
full changelog.

### How do I get it?

To install Nengo DL, we recommend using `pip`:

```bash
pip install nengo_dl
```

More detailed installation instructions can be found
[here](https://nengo.github.io/nengo_dl/installation.html).

### Where can I learn more?

- [Documentation](https://nengo.github.io/nengo_dl/)
- [Install from PyPI](https://pypi.python.org/pypi/nengo_dl)
- [Source on GitHub](https://github.com/nengo/nengo_dl)

### Where can I get help?

Please come to the [Nengo forum](https://forum.nengo.ai/c/backends)!
We welcome any questions and suggestions you might have.