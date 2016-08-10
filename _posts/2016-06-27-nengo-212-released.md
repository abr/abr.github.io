---
layout: post
title: Nengo 2.1.2 released
author: Trevor Bekolay
---

The [Nengo team](https://github.com/nengo/nengo/blob/master/CONTRIBUTORS.rst)
is glad to announce the release of Nengo 2.1.2.

### What is Nengo?

Nengo is a Python library for building and simulating
large-scale neural models for AI and robotics.
It can be thought of as a neural compiler,
transforming a functional description of a neural model
to a network of spiking or non-spiking neurons
that can run on multiple backends
including GPUs and neuromorphic hardware.

### What's new?

Nengo 2.1.2 is a bug fix release to fix a compatibility issue
with Nengo 2.1.1 and
[Nengo OpenCL 1.0]({% post_url 2016-06-06-nengo-ocl-10-released %}).
If you are using the OpenCL backend, we recommend upgrading to 2.1.2.

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
