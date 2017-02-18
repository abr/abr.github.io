---
layout: post
title: Nengo 2.3.1 released
author: Trevor Bekolay
icon: github
---

The [Nengo team](https://github.com/nengo/nengo/blob/master/CONTRIBUTORS.rst)
is jazzed to announce the release of Nengo 2.3.1!

### What is Nengo?

Nengo is a Python library for building and simulating
large-scale neural models for AI and robotics.
It can be thought of as a neural compiler,
transforming a functional description of a neural model
to a network of spiking or non-spiking neurons
that can run on multiple backends
including GPUs and neuromorphic hardware.

### What's new?

Nengo 2.3.1 is primarily a bugfix release,
making sure that Nengo doesn't crash
even in strange situations.

Along with this release,
we have added documentation
for some of the more confusing parts of Nengo,
like the
[config system](http://pythonhosted.org/nengo/examples/config_quirks.html).
Some documentation that applies to all Nengo projects,
like our [code of conduct](https://nengo.github.io/conduct.html),
has been moved to a new home
at <https://nengo.github.io/>.
We will be adding more general documentation
there over the coming months.

As with version 2.3.0,
this release includes work
from a new addition to the Nengo team.
Welcome to the team, Genevieve Serafin!

To see the full list of changes in Nengo 2.3.1, head to the
[Github release page](https://github.com/nengo/nengo/releases/tag/v2.3.1).

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

Please come to the [Nengo forum](https://forum.nengo.ai/)!
We welcome any questions and suggestions you might have,
and invite you to share your Nengo creations there.
