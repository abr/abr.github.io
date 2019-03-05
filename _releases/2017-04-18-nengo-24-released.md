---
DoR: April 18, 2017
title: Nengo 2.4 released
author: Trevor Bekolay
icon: github
---

The [Nengo team](https://github.com/nengo/nengo/blob/master/CONTRIBUTORS.rst)
is stoked to announce the release of Nengo 2.4.0!

### What is Nengo?

Nengo is a Python library for building and simulating
large-scale neural models for AI and robotics.
It can be thought of as a neural compiler,
transforming a functional description of a neural model
to a network of spiking or non-spiking neurons
that can run on multiple backends
including GPUs and neuromorphic hardware.

### What's new?

The biggest change in 2.4.0 is an optimization step
in the build process.
When you do `nengo.Simulator(model)`,
Nengo sets up some internal data structures
to run the model quickly.
Now, after setting up those internal data structures,
we inspect them and merge together similar operations
in order to speed up the simulation.
The end result is that many common types of models
will be faster in Nengo 2.4.0,
so we recommend upgrading as soon as possible!

Note, however, that optimizing models
does take some time,
so if you're running into long build times
and you're not running your model for very long,
you can turn off the optimizer like so:

```python
nengo.Simulator(model, optimize=False)
```

Along with adding the optimizer,
we have fixed a few bugs,
and now raise exceptions when
model act strangely.
For example, if a node returns
`np.nan` or `np.infinity`,
we will now raise a `SimulationError`,
as these issues are hard to track down and debug.

To see the full list of changes in Nengo 2.4.0, head to the
[Github release page](https://github.com/nengo/nengo/releases/tag/v2.4.0).

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
