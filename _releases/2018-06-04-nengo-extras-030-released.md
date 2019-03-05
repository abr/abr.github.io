---
DoR: June 4, 2017
title: Nengo Extras 0.3 released
author: Trevor Bekolay
icon: github
---

The [Nengo team](https://www.nengo.ai/people.html)
is pleased to announce the release of Nengo Extras 0.3.

### What is Nengo Extras?

Nengo Extras contains additional utilities for Nengo
that are not commonly used,
but are useful enough
that they should be publicly accessible.
These extra features include learning rules,
neuron types, domain-specific processes, and more.

### Features

The Nengo Extras 0.3.0 release
makes it easier to use specific parts of Nengo Extras
without having to install many dependencies,
as we no longer populate the `nengo_extras` namespace
at import. Instead, when you want to use a specific part
of Nengo Extras, you import it specifically:

```python
from nengo_extras.neurons import SoftLIFRate
```

See the [full documentation](https://www.nengo.ai/nengo-extras/)
for more details and example usage.

### How do I get it?

To install Nengo extras, use `pip`.

```bash
pip install nengo-extras
```

### Where can I learn more?

- [Documentation](https://www.nengo.ai/nengo-extras/)
- [Install from PyPI](https://pypi.python.org/pypi/nengo-extras)
- [Source on Github](https://github.com/nengo/nengo-extras)

### Where can I get help?

Please come to the [Nengo forum](https://forum.nengo.ai/)!
We welcome any questions and suggestions you might have,
and invite you to share your Nengo creations there.
