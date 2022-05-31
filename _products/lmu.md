---
layout: product
theme: theme-red

title: Legendre Memory Units
altTitle: Optimal time series AI
img: lmu-diag.svg
hideimg: true
tagline: Solve time series problems more accurately and efficiently with the LMU

pitch: >
  Time series problems include processing of language, audio, biosignals, RF,
  network traffic and so on -- anything where the order of the data matters.
  We have invented Legendre Memory Units (LMUs),
  which are provably optimal at compressing time series,
  resulting in increased efficiency and accuracy
  compared to LSTMs and Transformers.

feature:
  cta:
    text: Purchase a license
    link: /store/
  features:
    - title: 10x more data efficient than Transformers
      icon: /img/icon-models.svg
    - title: O(n) compute scaling<br /> O(1) memory scaling
      icon: /img/icon-software-red.svg
    - title: Provably optimal
      icon: /img/icon-learning.svg
    - title: Deployable on microcontrollers
      icon: /img/icon-board.svg

ctas:
  - title: Getting started
    description: >
      The KerasLMU package is a simple and user-friendly
      LMU implementation for TensorFlow.
    link: https://www.nengo.ai/keras-lmu/
    linkText: Try KerasLMU
  - title: Community
    description: >
      Talk to the people who know LMUs best at the Nengo forum.
    link: https://forum.nengo.ai/c/deep-learning/10
    linkText: Visit the forum
  - title: Commerical licenses
    description: >
      Commercial LMU use can be purchased at a per-year per-processor rate.
    link: /store/
    linkText: Visit the store

service:
  title: Services
  subtitle: Custom AI solutions with LMUs
  services:
    - title: LMU apps
      description: >
        Let us build an AI solution for your time series problem using LMUs.
      link: /services/lmu

related:
  - Time Series Processor
  - NengoEdge
---

Time series problems include processing of language, audio,
biosignals, RF signals, network traffic and so on -- anything where the order
of the data matters. Most researchers know of two main architectures
used to solve time series problems: LSTMs and Transformers. We have
invented a third: Legendre Memory Units (LMUs). LMUs are **[provably
optimal](https://papers.nips.cc/paper/9689-legendre-memory-units-continuous-time-representation-in-recurrent-neural-networks.pdf)**
at compressing time series.

<img class="img-left fade-in" width="460" src="{{ site.baseurl }}{% link img/lmu-plot.svg %}" />
Long short-term memories (LSTMs) have been called the most
commercially valuable AI algorithm ever invented
([Bloomberg](https://www.bloomberg.com/news/features/2018-05-15/google-amazon-and-facebook-owe-j-rgen-schmidhuber-a-fortune)),
having been deployed in many speech, vision and text analysis
systems. **But LSTMs fall apart when tasked with learning temporal
dependencies spanning thousands of timesteps, limiting their
usefulness.**

Transformers are the workhorse of NLP and the basis for the largest AI
models available, including GPT-3 and Google Brain's Switch
Transformer. But **Transformers are incredibly expensive in both
computation and memory, O(N<sup>2</sup>) for both.**

The Legendre Memory Unit (LMU) is a recurrent network that can learn
temporal dependencies over **millions of timesteps**, unlike
LSTMs. The LMU can scale to the size of transformers, but **scales as
O(N) in compute and O(1) in memory**. In addition, **LMUs require [10x
less training](https://arxiv.org/abs/2110.02402) (and data) to be as
accurate as a transformer**.

<img class="img-right fade-in" width="400"  src="{{ site.baseurl }}{% link img/lmu-memory.svg %}" />
LMUs maintain efficient and scale-invariant representations of recent
inputs and learn how to solve real world problems using those
representations. LMUs can be implemented with traditional deep
learning techniques on hardware you already have, or can be deployed
on neuromorphic hardware or neural accelerators for massive power
savings. Using LMUs, we and others have obtained the best-known
results on a variety of benchmarks.

Do you have a time series problem you're currently solving with an
LSTM or Transformer?

Have a time series problem that you haven't been able to solve yet?

Do you need to solve a time series problem in an edge or IoT device?

Take a look at our [published](https://arxiv.org/abs/2110.02402) and
[easily reproducible](https://github.com/nengo/keras-lmu)
results. ABR's patent-pending LMU is free to use for academic research
and personal non-commercial uses and is available at a yearly
per-processor rate commercially through
[our store]({{ site.baseurl }}{% link store.html %}).
