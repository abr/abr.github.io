---
title: Nengo 2.1 released
author: Trevor Bekolay
icon: github
DoR: April 27, 2016
---

The [Nengo team](https://github.com/nengo/nengo/blob/master/CONTRIBUTORS.rst)
is happy to announce the release of Nengo 2.1.

### What is Nengo?

Nengo is a Python library for building and simulating
large-scale neural models for AI and robotics.
It can be thought of as a neural compiler,
transforming a functional description of a neural model
to a network of spiking or non-spiking neurons
that can run on multiple backends
including GPUs and neuromorphic hardware.

### What's new?

Since Nengo 2.0, the ecosystem has grown significantly.
We have recently released a graphical interface called
[Nengo GUI](https://github.com/nengo/nengo_gui)
to look at different parts of your model as it simulates,
and [Nengo OCL](https://github.com/nengo/nengo_ocl)
to speed up large simulations
by taking advantage of your GPU.

Nengo itself has learned several new features. Some highlights:

- The output of a node can now be properly reset by using a
  [Process](https://www.nengo.ai/nengo/examples/processes.html).
  Processes can also be used to inject noise into an ensemble.
- We added a new learning rule called
  [Voja](https://www.nengo.ai/nengo/examples/learn_associations.html)
  that updates an ensemble's encoders to fire selectively to its inputs.

We also changed how learning rules get error information.
Instead of the `Connection.modulatory` attribute,
you provide error information by connecting to the learning rule.
Additionally, if you were probing a connections' `'decoders'` or `'transform'`
to see how weights were changing during learning,
you should now probe the more general `'weights'`.

To see the full list of changes in Nengo 2.1, head to the
[Github release page](https://github.com/nengo/nengo/releases/tag/v2.1.0).

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
