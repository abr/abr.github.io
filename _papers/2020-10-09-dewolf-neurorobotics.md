---
layout: news
title: Nengo and low-power AI hardware for robust, embedded neurorobotics
author: Travis DeWolf, Pawel Jaworski and Chris Eliasmith
---

Abstract
--------

In this paper we demonstrate how the Nengo neural modeling and
simulation libraries enable users to quickly develop robotic
perception and action neural networks for simulation on neuromorphic
hardware using tools they are already familiar with, such as Keras and
Python. We identify four primary challenges in building robust,
embedded neurorobotic systems, including: (1) developing
infrastructure for interfacing with the environment and sensors; (2)
processing task specific sensory signals; (3) generating robust,
explainable control signals; and (4) compiling neural networks to run
on target hardware. Nengo helps to address these challenges by: (1)
providing the NengoInterfaces library, which defines a simple but
powerful API for users to interact with simulations and hardware; (2)
providing the NengoDL library, which lets users use the Keras and
TensorFlow API to develop Nengo models; (3) implementing the Neural
Engineering Framework, which provides white-box methods for
implementing known functions and circuits; and (4) providing multiple
backend libraries, such as NengoLoihi, that enable users to compile
the same model to different hardware. We present two examples using
Nengo to develop neural networks that run on CPUs and GPUs as well as
Intel's neuromorphic chip, Loihi, to demonstrate two variations on
this workflow. The first example is an implementation of an end-to-end
spiking neural network in Nengo that controls a rover simulated in
Mujoco. The network integrates a deep convolutional network that
processes visual input from cameras mounted on the rover to track a
target, and a control system implementing steering and drive functions
in connection weights to guide the rover to the target. The second
example uses Nengo as a smaller component in a system that has
addressed some but not all of those challenges. Specifically it is
used to augment a force-based operational space controller with neural
adaptive control to improve performance during a reaching task using a
real-world Kinova Jaco robotic arm. The code and implementation
details are provided, with the intent of enabling other researchers to
build and run their own neurorobotic systems.

[<span class="paperlink">Full paper</span>](https://www.frontiersin.org/articles/10.3389/fnbot.2020.568359/full)
