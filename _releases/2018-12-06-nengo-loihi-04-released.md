---
DoR: December 6, 2018
title: Nengo Loihi 0.4 released
author: Trevor Bekolay
icon: github
---

The Nengo team at ABR is pleased to announce
the release of Nengo Loihi 0.4.

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

Nengo Loihi remains in heavy development.
Lots of changes are happening under the hood
that might affect your model.
In most cases these changes should improve model speed and accuracy,
but if any of these changes has an adverse effect,
[please let us know](https://github.com/nengo/nengo-loihi/issues/new)!

The biggest change in version 0.4.0 is two new examples
that demonstrate the capabilities of Nengo and Loihi.

The new [nonlinear adaptive control example](https://www.nengo.ai/nengo-loihi/examples/adaptive_motor_control.html)
shows Nengo Loihi controlling a two-link arm
and learning to compensate for unexpected gravitational force.
While this is a simple case,
the underlying network structure is the same as
that used in ABR's
[adaptive control demo](https://www.youtube.com/watch?list=PL0Xs4sfQU-Q1MeTNaizzFWYv1Xz3ua7ZA&v=muaG2VETgHU).

The new [MNIST convolutional network example](https://www.nengo.ai/nengo-loihi/examples/mnist_convnet.html)
shows Nengo Loihi running a convolutional network
created and trained with [NengoDL](https://www.nengo.ai/nengo-dl).
It correctly classifies 99 of 100 randomly selected test images,
and provides a basis for constructing
the more sophisticated convolutional neural networks
used in state-of-the-art image and speech recognition.

Version 0.4.0 also includes many improvements
to make models easier to debug.
When using the Nengo Loihi emulator,
we more closely match chip behavior
and let you know when your model
will not fit on the chip.
When using Nengo Loihi hardware,
we fixed a bug that was preventing
error messages from being raised
in certain situations.

We have also enabled an experimental optimization
and made it on by default.
Nengo models often use "passthrough nodes,"
nodes that move data around without modification,
to simplify model construction.
Previously, these passthrough nodes were implemented
off-chip by sending chip data to the host and back again.
Now, we attempt to replace passthrough nodes
with on-chip connections in order to reduce
the amount of communication between chip and host.
Removing passthrough nodes can change model behavior,
so if your models are no longer working as expected,
you can disable this optimization by passing
`remove_passthrough=False` to the `Simulator`.

Finally, we have improved the look and feel
of the [documentation](https://www.nengo.ai/nengo-loihi/),
and keep old versions of the documentation accessible.
When you go the
[main documentation page](https://www.nengo.ai/nengo-loihi/),
you will be looking at the docs associated with
the latest development version.
The dropdown menu at the top-right of every page
links to the docs associated with specific versions
(e.g., [v0.4.0](https://www.nengo.ai/nengo-loihi/v0.4.0/)).

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
