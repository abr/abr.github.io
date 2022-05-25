---
layout: product
theme: theme-red

title: Brain Board Bitstream
img: fpga-board3.png
tagline: Own a piece of the neuromorphic revolution

pitch: >
  Running Nengo on inexpensive FGPA boards opens neuromorphics up to anyone.
  Explore and exploit the advantages of neuromorphic computing
  in the classroom, the innovation lab, or your basement.

feature:
  cta:
    text: Purchase bitstreams
    link: /store/
  features:
    - title: Onboard learning
      icon: /img/icon-brain2-red.svg
    - title: Bring your own board
      icon: /img/icon-board.svg
    - title: Use with any Nengo model
      icon: /img/icon-models.svg
    - title: Easy setup
      icon: /img/icon-setup.svg

ctas:
  - title: Documentation
    description: >
      Documentation is freely available and frequently updated. Take a
      look to see how easy it is to get up and running.
    link: https://www.nengo.ai/nengo-fpga
    linkText: View the documentation
  - title: Community
    description: >
      Join a growing community of people building Nengo models
      together.
    link: https://forum.nengo.ai
    linkText: Visit the forum
  - title: Commercial licenses
    description: >
      We offer a full software suite to integrate with
      your inexpensive off-the-shelf FPGAs.
    link: /store/
    linkText: Visit the store

research:
  title: Large-scale Nengo Brain Boards
  content: >
    Our small Nengo Brain Boards are just the beginning, developed to
    be inexpensive and targeting DE1-SoC, PYNQ-Z1 and PYNQ-Z2 FPGA boards. These
    initial proof-of-concept Brain Boards offer encouraging results and
    motivate us to actively continue development! Take a look at
    [this conference paper](http://compneuro.uwaterloo.ca/files/publications/morcos.2018.pdf)
    for more information about the design and performance of
    the PYNQ implementation of Nengo Brain Board.
    See also, the [paper presentation](/img/nef-on-pynq-fpt18.pdf)
    and [talk](https://www.youtube.com/watch?v=dj8Wlk4h1-Y) for further explanations.

    To make neuromorphics easy and fast to deploy at scale, beyond our currently
    available Nengo Brain Boards, we're developing larger and more capable
    versions with researchers at the University of Waterloo, which target larger
    off-the-shelf Intel and Xilinx FPGAs. This will provide a quick route to get
    the benefits of neuromorphic computing sooner rather than later.

    Given the large scale and increasing complexity, we're working with
    collaborators to develop special communication protocols to move spiking
    data efficiently on chip. This project is still in the early stages,
    but has already generated promising results, showing significantly
    better performance for high bandwidth and compute intensive use
    cases.
---

The Nengo Brain Board Bitstream implements a learning, spiking neural network
that you can directly program from within Nengo.
Use Nengo to build brains in hardware.

The Brain Board Bitstream works on inexpensive off-the-shelf
boards, which opens neuromorphics up to anyone.
Explore and exploit the advantages of neuromorphic computing
in the classroom, the innovation lab, or your basement.

Use Nengo's friendly graphical interface
to run parts of your standard Nengo model
on power-efficient and fast neuromorphic hardware.
These self-contained boards outperform
most laptops in terms of both speed and efficiency.

Start by running one of the many demos
that come with the board out of the box:
visual classifiers, adaptive controllers,
reinforcement learning, and more!
