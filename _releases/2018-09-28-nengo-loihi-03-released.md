---
DoR: September 28, 2018
title: Nengo Loihi 0.3 released
author: Trevor Bekolay
icon: github
---

The Nengo team at ABR is excited to announce
the release of Nengo Loihi 0.3.

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

Nengo Loihi is still in heavy development,
so features are changing rapidly
and many bugs have been discovered and fixed.

In version 0.3.0, we have added support
for the `nengo.SpikingRectifiedLinear` neuron type,
which can be run in the emulator and on real hardware.
Models can also be run with different `dt` values,
which can be helpful for debugging models
that run well on the reference Nengo backend
but poorly on Nengo Loihi.

We have updated Nengo Loihi to work with
the recently released NxSDK 0.7.
We are currently not maintaining compatibility
with older versions of NxSDK,
so please upgrade it before upgrading Nengo Loihi.

Several bugs involving filtering connections
and connecting between objects simulated
on the host and on the chip have been found and fixed.
Additionally, the tuning curves that many models
use to solve for decoding weights are more accurate,
meaning that decoded values will be

### How do I get it?

If you are using the emulator, then you can
simply use `pip`.

```bash
pip install nengo-loihi
```

If you are setting up Nengo Loihi
to use Loihi hardware for the first time,
see the [Nengo Loihi installation instructions](https://www.nengo.ai/nengo-loihi/installation.html).

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
