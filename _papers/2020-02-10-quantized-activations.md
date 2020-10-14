---
layout: news
title: >
  A spike in performance: training hybrid-spiking neural networks
  with quantized activation functions
author: Aaron R. Voelker, Daniel Rasmussen and Chris Eliasmith
---

Abstract
--------

The machine learning community has become increasingly interested in
the energy efficiency of neural networks. The Spiking Neural Network
(SNN) is a promising approach to energy-efficient computing, since its
activation levels are quantized into temporally sparse, one-bit values
(i.e., "spike" events), which additionally converts the sum over
weight-activity products into a simple addition of weights (one weight
for each spike). However, the goal of maintaining state-of-the-art
(SotA) accuracy when converting a non-spiking network into an SNN has
remained an elusive challenge, primarily due to spikes having only a
single bit of precision. Adopting tools from signal processing, we
cast neural activation functions as quantizers with
temporally-diffused error, and then train networks while smoothly
interpolating between the non-spiking and spiking regimes. We apply
this technique to the Legendre Memory Unit (LMU) to obtain the first
known example of a hybrid SNN outperforming SotA recurrent
architectures---including the LSTM, GRU, and NRU---in accuracy, while
reducing activities to at most 3.74 bits on average with 1.26
significant bits multiplying each weight. We discuss how these methods
can significantly improve the energy efficiency of neural networks.

[<span class="paperlink">Full paper</span>](https://arxiv.org/abs/2002.03553)
