---
layout: product
theme: theme-blue

title: NengoEdge
altTitle: High accuracy, low power audio AI
badge: Beta
img: circuit.jpg
tagline: Train and deploy edge devices in the cloud

pitch: >
    Train high accuracy, low power audio processing models in an easy-to-use cloud
    platform.
    Reduce product development time and cost by taking advantage of the edge device
    expertise we have built into the training and deployment process.

feature:
  cta:
    text: Sign up for the beta
    link: "https://edge.nengo.ai"
  features:
    - title: High accuracy
      icon: /img/icon-architecture.svg
    - title: Low power
      icon: /img/icon-battery.svg
    - title: Low latency
      icon: /img/icon-speed.svg
    - title: Easy to use
      icon: /img/icon-rocket.svg
---

<em>{{ page.pitch }}</em>

**High accuracy**

NengoEdge uses
[Legendre Memory Units (LMUs)]({{ site.baseurl }}{% link _products/lmu.md %}), a
proprietary recurrent neural network architecture that provides provably optimal
representation of time series data.
In addition, NengoEdge uses a technique called Hardware Aware Training to fine-tune
your model to the edge hardware platform of your choice.
This allows NengoEdge to achieve state-of-the-art accuracy on keyword spotting tasks, as
well as other time series applications.

**Low power**

NengoEdge models are designed to be deployed in edge applications with constrained
power and memory budgets. NengoEdge automates all the details of efficiently mapping
your model on to low power edge devices, taking care of things like weight/activity
quantization and op kernel selection in order to optimize power and resource usage.
However, it is still often the case that power consumption represents a tradeoff, where
you have to balance accuracy against your available resource budget.
NengoEdge makes it easy to explore different
models and different edge devices by removing the device-specific development time,
and exposing a wide range of performance metrics. This lets you rapidly prototype
different options so that you can find the sweet spot for your applications.

**Easy to use**

Training and deploying models for edge hardware can be complicated, as each device has
its own advantages, limitations, and implementation quirks. This can lead to long
development times, and getting locked in to a specific edge device once that
development time has been sunk in to a project.
NengoEdge takes care of all the complicated details involved in training and deploying
models for edge hardware. It provides you with an easy-to-use interface that lets you
control the things that matter, while NengoEdge takes care of the device-specific
implementation under the hood. This gets you up and running with a minimum of in-house
development time.

Visit [edge.nengo.ai](https://edge.nengo.ai) to sign up for the beta!
