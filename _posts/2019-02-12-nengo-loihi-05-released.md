---
layout: post
title: Nengo Loihi 0.5 released
author: Trevor Bekolay
icon: github
---

The Nengo team at ABR is excited to announce
the release of Nengo Loihi 0.5.

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

Nengo Loihi is still changing rapidly,
but in this release we have
made several changes under the hood
that should improve model stability
and solidify the Nengo Loihi API.

With this release, we now support NxSDK 0.8.0
while maintaining support for 0.7.0 and 0.7.5.

We have fixed several bugs that impacted
the performance of several common types of models.
Current and voltage is now integrated more accurately,
which significantly improves performance
of recurrently connected networks like integrators.
We now use more neurons with more diverse properties
to communicate values between ensembles,
which improves performance significantly
for networks with multiple ensembles
connected to the same ensemble
(i.e., when one ensemble sums input from multiple ensembles).

Error-driven learning with the PES learning rule
is now more user friendly because
PES learning in the emulator
more closely matches PES learning on hardware.

We now use population spikes in certain situations,
which allow for more efficient transmission
of information to the chip.
Population spikes have been used to
[classify CIFAR-10 images with a convolutional network](https://github.com/nengo/nengo-examples/blob/master/loihi-dl/cifar10_convnet.ipynb).

Finally, we have made several other bug fixes
and improvements under the hood,
including several fixes for different types of probes.
To see the full list of changes in Nengo Loihi 0.5.0, head to the
[Github release page](https://github.com/nengo/nengo-loihi/releases/tag/v0.5.0).

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
