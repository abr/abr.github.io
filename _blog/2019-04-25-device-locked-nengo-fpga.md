---
layout: news
title: Device-locked designs for Nengo FPGA on the PYNQ-Z1
author: Ben Morcos
---

ABR's Nengo FPGA project recently matured to the point of being a commercial
product [for sale online]({{ site.baseurl }}{% link _products/brainboard.md %}).
As part of commercialization, we had to address the issue of how to protect our
IP from unauthorized distribution. Many standard methods to protect FPGA
designs, known as bitstreams, rely on control of the physical device.
They work by preloading secret encryption keys or locking out access to read or
configure certain parts of a device. In our case, however, our distribution
model is more of the *bring-your-own-board flavour*, which makes such standard
protection methods infeasible.

Instead, we lock our bitstreams to a specific device using a read-only, unique
identifier that Xilinx calls the Device DNA. Before Nengo FPGA begins execution
on the FPGA we check this Device DNA and compare it to a reference value
compiled into the bitstream itself. With this *DNA-lock*, if we find a valid
DNA then it's business as usual, but a mismatch raises an error. So even if our
bitstreams are replicated and distributed, without an authorized DNA they won't
be of much use.

In order to use this DNA-locked system we need access to the Device DNA so we
can program the reference value into the bitstream. The PYNQ-Z1 board that we
use with Nengo FPGA is a system on a chip (SoC) device, which means it has both
an ARM processing system (PS) and programmable logic (PL) on the same chip.
Having the PS available is very convenient for integration since it runs a
Linux operating system and can provide an easy interface to both Nengo and the
PL but, for better or for worse, the Device DNA is only accessible from PL and
not from the PS. This means we have a few hoops to jump through in order to
read this Device DNA value. One of the main goals of Nengo FPGA is to make the
FPGAs easy to use for the end user so, to make this as simple as possible,
we've added a script in the Nengo FPGA frontend. This `dna_extractor` script
makes reading the Device DNA a simple one-line command from your PC!

<img src="{{ site.baseurl }}/img/dna_extractor.svg" title="PYNQ DNA extractor workflow" width="100%">

Simple for the user usually implies a little more work on the development side
though, so let's take a look at what's really going on here. When you run the
script from your PC it will open up a connection with the PS on the PYNQ device.
Using the PYNQ API from Xilinx, the PS now loads the `dna_extractor` bitstream
onto the PL, which in turn reads the Device DNA registers and puts that value
into PS accessible memory. The PS can now read the Device DNA and send it back
to your PC -- easy! We want to reuse the same mechanism to read the Device DNA
for both the DNA-lock implementation of our design and the `dna_extractor`
script that reads the DNA for the user so we decided to tack on an AXI interface
and package up a DNA extractor as an independent IP block that can be easily
dropped into any design. I was surprised this function didn't exist in a library
somewhere (the HDL primitive exists, but nothing plug-and-play) so we decided to
make this block public for anybody that is looking at using Device DNA with
Zynq-7000 devices!

The Zynq AXI DNA IP block, along with source code and an example implementation,
is publicly available [on GitHub](https://github.com/abr/zynq-axi-dna).

For more information about Nengo FPGA check out the
[Brain Board]({{ site.baseurl }}{% link _products/brainboard.md %}) section of
our website or [get in touch]({{ site.baseurl }}{% link contact.html %})!
