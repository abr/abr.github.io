---
DoR: February 22, 2019
title: Nengo Loihi 0.6 released
author: Trevor Bekolay
icon: github
---

The Nengo team at ABR is psyched to announce
the release of Nengo Loihi 0.6.

### What is Nengo Loihi?

Nengo Loihi is a backend for the Nengo neural simulator
allowing standard spiking Nengo models
to run on Intel's new Loihi neuromorphic chip.
Nengo Loihi includes an emulator so that
you can develop spiking neuron models
for Loihi without having access to hardware.

### How do I use it?

Once installed, Nengo Loihi simulates Nengo networks.
After defining your network, instead of simulating it with

```python
nengo.Simulator(model)
```

do

```python
nengo_loihi.Simulator(model)
```

and that's it!

### What's new?

The most significant changes in this release
relate to the syntax used for convolutional networks.
The previous experimental syntax has been
cleaned up and incorporated into the
development version of Nengo core.
Nengo Loihi 0.6.0 is now compatible with
both the 2.8.0 release of Nengo and the development version.
If you want to build convolutional networks,
you will need the development version
of Nengo core until a new version of Nengo core is released.

Several improvements were made to
improve the accuracy of models trained with NengoDL,
and to make more aspects of the model deterministic
when seeded.
If you find any situations in which a seeded model
changes between runs, please
[file an issue on Github](https://github.com/nengo/nengo-loihi/issues/new).

Finally, we have added dozens of tests
in order to reach 100% coverage of the Nengo Loihi codebase
and removed lots of unused or unnecessary code
in the process.
To see the full list of changes in Nengo Loihi 0.6.0, head to the
[Github release page](https://github.com/nengo/nengo-loihi/releases/tag/v0.6.0).

### How do I get it?

If you are using the emulator, then you can
simply use `pip`.

```bash
pip install nengo-loihi
```

If you are setting up Nengo Loihi
to use Loihi hardware for the first time,
see the [Nengo Loihi installation instructions](https://www.nengo.ai/nengo-loihi/installgiation.html).

### Where can I learn more?

- [Nengo Loihi documentation](https://www.nengo.ai/nengo-loihi)
- [Instructions for installing Nengo and Nengo Loihi](https://www.nengo.ai/nengo-loihi/installation.html)
- [An introduction to Nengo](https://www.nengo.ai/quickstart.html)
- [General Nengo documentation](https://www.nengo.ai/)

### Where can I get help?

Please come ask questions on the
[Nengo forum](https://forum.nengo.ai/c/backends/loihi)!
And if you run in to any bugs or have suggestions for new features,
[file an issue](https://github.com/nengo/nengo-loihi/issues)
through Github.
