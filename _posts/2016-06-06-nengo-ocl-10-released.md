---
layout: post
title: Nengo OpenCL 1.0 released
author: Trevor Bekolay
---

The [Nengo OCL team](https://github.com/nengo/nengo_ocl/blob/master/CONTRIBUTORS.rst)
is proud to announce the release of Nengo OpenCL 1.0.

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

Since its first 0.1 release one year ago,
Nengo OpenCL has been mostly stable and bug-free,
hence bumping up to version 1.0.
Version 1.0 works with the recent
[Nengo 2.1]({% post_url 2016-04-27-nengo-21-released %}) release.
Under the hood, we've made a number of improvements
to simplify the codebase and speed up many models.

To see the full list of changes in Nengo OpenCL 1.0, head to the
[Github release page](https://github.com/nengo/nengo_ocl/releases/tag/v1.0.0).

### How do I get it?

Installing Nengo OpenCL is more difficult than
other parts of the Nengo ecosystem since
OpenCL must be properly installed first.
See [our notes on installing OpenCL](https://github.com/nengo/nengo_ocl/blob/master/README.rst#installing-opencl)
for assistance.

Once OpenCL is installed, use `pip`.

```bash
pip install --upgrade nengo_ocl
```

If something goes wrong during the installation,
which can happen due to differing OpenCL installs,
refer to our [installation notes](https://github.com/nengo/nengo_ocl/blob/master/README.rst#dependencies-and-installation)
for assistance.

### Where can I learn more?

- [Install from PyPI](https://pypi.python.org/pypi/nengo_ocl)
- [Source on Github](https://github.com/nengo/nengo_ocl)
