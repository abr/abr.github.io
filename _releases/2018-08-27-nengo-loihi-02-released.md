---
DoR: August 27, 2018
title: Nengo Loihi released
author: Trevor Bekolay
icon: github
---

The Nengo team at ABR is excited to announce
the first public release of
our new Nengo Loihi backend (currently version 0.2).
This backend for the Nengo neural simulator allows
standard spiking Nengo models
to run on Intel's new Loihi neuromorphic chip.

While still under heavy development,
this alpha release of our latest backend
allows users to build recurrent, feedforward,
and many layered networks, including deep neural networks.
We've provided several examples
in the [documentation](https://www.nengo.ai/nengo-loihi/)
accompanying the software.
As an alpha release, we expect there to be growing pains,
and there are limitations to how efficiently networks
are mapped on to the hardware,
the size of networks supported, and so on.
Nevertheless we believe that this is a useful tool
for those interested in quickly and easily
building spiking networks on hardware (even with the Nengo GUI).
We hope the feedback that early users provide
can direct our development efforts
and make this backend the preferred method for programming Loihi.

Thanks in advance for any feedback and suggestions for future improvements!

### Features

- Runs standard Nengo models on Loihi with a single line of code
- Supports recurrent, feedforward, many-layered, and 'deep' spiking networks
- Provides control over a wide variety of network parameters
- Allows specifying your own connections weights, learning them offline,
  determining them automatically with the NEF,
  or learning them online using the PES learning rule
- Supports the interactive Nengo GUI
- Includes a functional model of Loihi's core SNN features
  for software-only development
- Includes several examples

### How do I get it?

You can get a copy of Nengo Loihi at
<https://github.com/nengo/nengo-loihi>,
then follow the
[installation instructions](https://www.nengo.ai/nengo-loihi/installation.html).

Additionally, to run models on real Loihi hardware,
you need physical access to a board
or access to Intel's Neuromorphic Research Community (INRC).
Anyone can install Nengo Loihi, however,
to run Nengo models on the software-only emulator.

### How do I use it?

Setting up Nengo Loihi for the first time
is more involved than other Nengo backends
if you are using Loihi hardware.
The Nengo Loihi documentation includes detailed steps for
[setting up physical hardware](https://www.nengo.ai/nengo-loihi/setup/),
and for
[installing Nengo Loihi on the INRC cloud server](https://www.nengo.ai/nengo-loihi/installation.html#inrc).
If you are using the emulator, then you can
simply [use `pip`](https://www.nengo.ai/nengo-loihi/installation.html#local-machine).

Once installed, Nengo Loihi simulates Nengo networks.
After defining your network, instead of simulating it with

```python
nengo.Simulator(model)
```

do

```python
nengo_loihi.Simulator(model)
```

And that's it!

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
