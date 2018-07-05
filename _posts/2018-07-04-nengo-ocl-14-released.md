---
layout: post
title: Nengo OpenCL 1.4 released
author: Trevor Bekolay
icon: github
---

The [Nengo OCL team](https://github.com/nengo/nengo-ocl/blob/master/CONTRIBUTORS.rst)
is happy to announce the release of Nengo OpenCL 1.4.0.

### What is Nengo OpenCL?

Nengo OpenCL is a backend for Nengo that uses
the OpenCL framework to run large-scale neural models
on CPUs, GPUs, and other OpenCL-capable platforms.
Using the OpenCL backend can be orders of magnitude faster
than the reference backend for large models.

### How do I use it?

To use Nengo OpenCL, replace instances of `nengo.Simulator`
with `nengo_ocl.Simulator`.

For example, if you have a network called `model`
and you run it with

```python
with nengo.Simulator(model) as sim:
    sim.run(10)
```

you would change that to

```python
with nengo_ocl.Simulator(model) as sim:
    sim.run(10)
```

and that's it!

### What's new?

Nengo OpenCL 1.4.0 is a compatibility release,
adding compatibility for
the recently released
[Nengo 2.8.0]({% post_url 2018-06-09-nengo-28-released %}).

This version of Nengo OpenCL also implements
the new `SpikingRectifiedLinear` neuron type,
which is a relatively simple neuron model,
allowing for networks that simulate extremely fast.
To see the full list of changes in version 1.4,
head to the
[Github release page](https://github.com/nengo/nengo-ocl/releases/tag/v1.4.0).

### How do I get it?

Installing Nengo OpenCL is more difficult than
other parts of the Nengo ecosystem since
OpenCL must be properly installed first.
See [our notes on installing OpenCL](https://github.com/nengo/nengo-ocl/blob/master/README.rst#installing-opencl)
for assistance.

Once OpenCL is installed, use `pip`.

```bash
pip install --upgrade nengo-ocl
```

If something goes wrong during the installation,
which can happen due to differing OpenCL installs,
refer to our [installation notes](https://github.com/nengo/nengo-ocl/blob/master/README.rst#dependencies-and-installation)
for assistance.

### Where can I learn more?

- [Install from PyPI](https://pypi.python.org/pypi/nengo-ocl)
- [Source on Github](https://github.com/nengo/nengo-ocl)

### Where can I get help?

Please come to the [Nengo forum](https://forum.nengo.ai/c/backends)!
We welcome any questions and suggestions you might have.
