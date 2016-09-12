---
layout: post
title: Nengo 2.2 released
author: Trevor Bekolay
icon: github
---

The [Nengo team](https://github.com/nengo/nengo/blob/master/CONTRIBUTORS.rst)
is thrilled to announce the release of Nengo 2.2!

### What is Nengo?

Nengo is a Python library for building and simulating
large-scale neural models for AI and robotics.
It can be thought of as a neural compiler,
transforming a functional description of a neural model
to a network of spiking or non-spiking neurons
that can run on multiple backends
including GPUs and neuromorphic hardware.

### What's new?

Unlike the jump to Nengo 2.1,
not a whole lot has changed for existing models in Nengo 2.2.
Everything that worked in Nengo 2.1
should still work after upgrading!

Nengo 2.2 features a number of nice improvements,
however, that can make some models faster.
If you don't know the exact function
that you want to compute in a connection,
but you have a set of example input / output pairs,
it is now possible to pass a set of outputs
as the `function` in a connection,
as long as you also pass in the inputs as `eval_points`.
If you've used the
[`target_function` helper](https://github.com/nengo/nengo/blob/master/nengo/utils/connection.py#L11),
then you should use this new feature instead.

We have also introduced the idea of
"config presets" to group together
sets of parameters that are commonly used together.
For example, when making ensembles that
should be silent up to a certain input threshold,
several parameters need to be set
to get good performance.
Those parameters can be set all at once with
the [`ThresholdingEnsembles` preset](http://pythonhosted.org/nengo/config.html#nengo.presets.ThresholdingEnsembles).

If you're still using the ancient NumPy 1.6,
then now is a good time to update,
as this new release drops support for NumPy 1.6.

To see the full list of changes in Nengo 2.2, head to the
[Github release page](https://github.com/nengo/nengo/releases/tag/v2.2.0).

### How do I get it?

To get the new version of Nengo, use `pip`.

```bash
pip install --upgrade nengo
```

### Where can I learn more?

- [Install from PyPI](https://pypi.python.org/pypi/nengo)
- [Source on Github](https://github.com/nengo/nengo)
- [Documentation](https://pythonhosted.org/nengo)
- [Example models](https://pythonhosted.org/nengo/examples.html)

### Where can I get help?

Please come to the new [Nengo forum](https://forum.nengo.ai/)!
We welcome any questions and suggestions you might have,
and invite you to share your Nengo creations there.
