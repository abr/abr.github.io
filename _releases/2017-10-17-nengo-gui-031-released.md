---
DoR: October 17, 2017
title: Nengo GUI 0.3.1 released
author: Trevor Bekolay
icon: github
extracss: |
    @media (max-width: 1201px) {
        .post img {
            width: 100%;
        }
    }
    @media (min-width: 1202px) {
        .post img {
            -webkit-transform: translateX(-134px);
            transform: translateX(-134px);
        }
    }
---

The [Nengo GUI team](https://www.nengo.ai/people.html)
is happy to announce the release of Nengo GUI 0.3.1.

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

![Nengo GUI interface]({{ site.baseurl }}/img/gui-03.gif)

### What's new?

Nengo GUI is still changing rapidly.
The 0.3.1 release is a bugfix release
that fixes an issue with websockets in Safari.
It is compatible with Nengo 2.1.0 and later.

To see the full list of changes in Nengo GUI 0.3.1, head to the
[Github release page](https://github.com/nengo/nengo_gui/releases/tag/v0.3.1).

### How do I get it?

To get the new version of Nengo GUI, use `pip`.

```bash
pip install --upgrade nengo_gui
```

### Where can I learn more?

- [Install from PyPI](https://pypi.python.org/pypi/nengo_gui)
- [Source on Github](https://github.com/nengo/nengo_gui)

### Where can I get help?

Please come to the [Nengo forum](https://forum.nengo.ai/c/visualization)!
We welcome any questions and suggestions you might have.
