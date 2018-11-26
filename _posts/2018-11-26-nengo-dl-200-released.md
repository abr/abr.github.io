---
layout: post
title: NengoDL 2.0.0 released
author: Daniel Rasmussen
icon: github
---

The NengoDL team is delighted to announce the release of NengoDL 2.0.0.

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

The 2.0.0 release has a lot of new content.  Most significant, there are three breaking API changes:

- ``sim.train`` and ``sim.loss`` now accept a single ``data`` argument, which
  combines the previous ``inputs`` and ``targets`` arguments. For example,

  ``` python
  sim.train({my_node: x}, {my_probe: y}, ...)
  ```

  is now equivalent to

  ``` python
  sim.train({my_node: x, my_probe: y}, ...)
  ```

  The motivation for this change is that not all objective functions require
  target values. Switching to the more generic ``data`` argument simplifies
  the API and makes it more flexible, allowing users to specify whatever
  training/loss data is actually required.
- The ``objective`` argument in ``sim.train``/``sim.loss`` is now always
  specified as a dictionary mapping probes to objective functions.  Note that
  this was available but optional previously; it was also possible to pass
  a single value for the objective function, which would be applied to all
  probes in ``targets``.  The latter is no longer supported.  For example,

  ``` python
  sim.train(..., objective="mse")
  ```

  must now be explicitly specified as

  ``` python
  sim.train(..., objective={my_probe: "mse"})
  ```

  The motivation for this change is that, especially with the other new
  features introduced in the 2.0 update, there were a lot of different ways to
  specify the ``objective`` argument.  This made it somewhat unclear how
  exactly this argument worked, and the automatic "broadcasting" was also
  ambiguous (e.g., should the single objective be applied to each probe
  individually, or to all of them together?).  Making the argument explicit
  helps clarify the mental model.
- NengoDL no longer supports Python 2.  Most major Python packages will 
  be dropping Python 2 support within a year or so, so the NengoDL 2.0 
  release was a good opportunity to do the same.  See 
  https://python3statement.org/ for more detail.


We've also added the [sim.run_batch](https://www.nengo.ai/nengo-dl/reference.html#nengo_dl.simulator.Simulator.run_batch) function, which exposes all the functionality used to implement the higher level ``sim.run/train/loss`` functions.  This provides a lot of flexibility for anyone looking to customize the way a NengoDL model is simulated.  In the same vein, we've improved the flexibility of the ``objective`` argument in ``sim.train/loss``, to make it easier to build different types of objective functions.  And we've reorganized [the documentation](https://www.nengo.ai/nengo-dl) to make it easier to find the information you're looking for. Check out the [GitHub release page](https://github.com/nengo/nengo-dl/releases) for a full changelog.

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