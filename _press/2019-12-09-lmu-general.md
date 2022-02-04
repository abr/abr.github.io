---
layout: news
title: >
    Deep-Tech Startup Applied Brain Research Inc. Extends
    Battery Life with Ultra-Low-Power AI Algorithm
author: Applied Brain Research
---

- Canadian Startup, Applied Brain Research, announces breakthrough at Vancouver
  [NeurIPS Spotlight Talk](https://nips.cc/Conferences/2019/Schedule?showParentSession=15731)
  on 10 Dec 19.
- Algorithm enables advances in ultra-low-power
  AI speech, vision and signal processing.
- Implemented on spiking neuromorphic hardware
  including Intel's Loihi Chip.

**Toronto, Ontario, Canada – December 10, 2019** --
Applied Brain Research (ABR) announce a new algorithm that enables advances
in ultra-low-power AI speech, vision and signal processing systems
for always-on and edge-AI applications, extending battery life
while making them more accurate.

ABR's announcement demonstrates the potential to realize ultra-low-power
instantiations of a large class of algorithms that learn patterns in data,
spanning extraordinarily long intervals of time.

### Existing LSTM technology fails to scale & limits commercial application

Current algorithms, like Long Short-Term Memories (LSTMs),
can learn and predict sequences of data for long periods of time
and make it possible for neural networks to learn to process data
like speech, video and control signals.

Present in most smart speakers and voice recognition systems,
LSTMs are said to be the most financially valuable AI algorithm
ever invented ([Bloomberg](https://www.bloomberg.com/news/features/2018-05-15/google-amazon-and-facebook-owe-j-rgen-schmidhuber-a-fortune)).

**LSTMs fail when tasked with learning temporal dependencies in signals
that span 1,000 time-steps or more, making them very difficult to scale
and limiting commercial application.**

### About ABR's breakthrough algorithm

This new algorithm -- the Legendre Memory Unit (LMU) -- is a
neuromorphic algorithm for continuous-time memory that can learn
temporal dependencies over millions of time-steps or more.
The algorithm is a new INN architecture that enables
networks of artificial neurons to classify and predict temporal patterns
far more efficiently than LSTMs.

- The LMU is mathematically derived to implement the continuous-time
  dynamical system that optimally maintains a scale-invariant representation of time.
- The ABR LMU obtains the best-known results on permuted sequential MNIST,
  a difficult RNN benchmark, and has been shown to scale to input sequences
  spanning hundreds of millions of time-steps.
- The resulting patterns in spiking activity have also been linked
  to neural "time cells" observed in the striatum and medial prefrontal cortex
  in mammalian brains.

**Unlike the LSTM, the LMU can be implemented using spiking neurons,
thus demonstrating an algorithmic advance that is anticipated
to provide leaps in efficiency for solutions to dynamical time-series problems
using low-power neuromorphic devices.**

### Notes to editors

Voelker et al. (2019) found that ABR's LMU required fewer resources and
less computations, whilst providing superior memory and demonstrating
state-of-the-art performance of 97.15% on a challenging RNN benchmark
compared to 89.86% using LSTMs. [Video](https://youtu.be/8t64QaTdBcU)

The core building block of the LMU has been implemented on spiking
neuromorphic hardware including Braindrop (Neckar et al., 2019) and
Loihi (Voelker, 2019).

The LMU outperforms both spiking and non-spiking reservoir computers
(i.e., liquid state machines and echo state machines) in efficiency
and memory capacity when tasked with representing
temporal windows of information (Voelker, 2019).

### About Applied Brain Research Inc. (ABR)

- ABR is the maker of the [Nengo](https://www.nengo.ai/)
  neuromorphic software development suite
  which includes the world's leading multi-platform, visual neuromorphic
  software compiler, runtime and spiking deep learning platform.

- Using [ABR's neuromorphic tools](https://appliedbrainresearch.com/products/),
  the team at ABR has built Spaun,
  the world's largest functional brain model and builds real-time,
  full-loop AI "[brains](https://appliedbrainresearch.com/services/)"
  for customers in the military, self-driving car,
  IoT and smartphone markets.
  ([www.appliedbrainresearch.com](https://www.appliedbrainresearch.com/))

### Media contacts

**North America**<br>
[Peter Suma](https://appliedbrainresearch.com/about-us/suma/), co-CEO<br>
[peter.suma@appliedbrainresearch.com](mailto:peter.suma@appliedbrainresearch.com)<br>
+1-416-505-8973

**EMEA**<br>
Oliver Morgan<br>
[oliver.morgan@tailoredbrands.co.uk](mailto:oliver.morgan@tailoredbrands.co.uk)<br>
+44 7957 489928

\#\#\#
