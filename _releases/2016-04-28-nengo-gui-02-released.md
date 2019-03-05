---
title: Nengo GUI 0.2 released
author: Trevor Bekolay
icon: github
DoR: April 28, 2016
extracss: |
    @media (max-width: 991px) {
        .post img {
            width: 100%;
        }
    }
    @media (min-width: 992px) {
        .post img {
            -webkit-transform: translateX(-179px);
            transform: translateX(-179px);
        }
    }
    @media (min-width: 1200px) {
        .post img {
            -webkit-transform: translateX(-111.5px);
            transform: translateX(-111.5px);
        }
    }
---

The [Nengo GUI team](https://github.com/nengo/nengo_gui/blob/master/CONTRIBUTORS.rst)
is excited to announce the release of Nengo GUI 0.2.

Nengo GUI is a relatively new project that is changing rapidly.
We would love to
[get your feedback](https://github.com/nengo/nengo_gui/issues)
on this new release
to ensure that version 1.0 is useful for everyone!

### What is Nengo GUI?

Nengo GUI is a web-based interactive interface
where you can build Nengo models,
simulate them on different backends,
and visualize model behavior.

![Nengo GUI interface]

### What's new?

Nengo GUI is a relatively new project that is changing rapidly.
The 0.2 release includes several new features:

- The network graph can now be exported to SVG for inclusion in publications.
- Data shown in the GUI can now be exported to CSV for later analysis.
- The simulation will automatically slow down to real time
  if it's simulating faster than real time.
  The speed can be controlled with a new slider in the bottom left.

Nengo GUI 0.2 is also the first release that is compatible with
[Nengo 2.1].

To see the full list of changes in Nengo GUI 0.2, head to the
[Github release page](https://github.com/nengo/nengo_gui/releases/tag/v0.2.0).

### How do I get it?

To get the new version of Nengo GUI, use `pip`.

```bash
pip install --upgrade nengo_gui
```

### Where can I learn more?

- [Install from PyPI](https://pypi.python.org/pypi/nengo_gui)
- [Source on Github](https://github.com/nengo/nengo_gui)
