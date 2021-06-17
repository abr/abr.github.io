---
layout: news
title: A Spiking Neural Network for Image Segmentation
author: Kinjal Patel, Eric Hunsberger, Sean Batir, Chris Eliasmith
---

Abstract
--------

We seek to investigate the scalability of neuromorphic computing for
computer vision, with the objective of replicating non-neuromorphic
performance on computer vision tasks while reducing power
consumption. We convert the deep Artificial Neural Network (ANN)
architecture U-Net to a Spiking Neural Network (SNN) architecture
using the Nengo framework. Both rate-based and spike-based models are
trained and optimized for benchmarking performance and power, using a
modified version of the ISBI 2D EM Segmentation dataset consisting of
microscope images of cells. We propose a partitioning method to
optimize inter-chip communication to improve speed and energy
efficiency when deploying multi-chip networks on the Loihi
neuromorphic chip. We explore the advantages of regularizing firing
rates of Loihi neurons for converting ANN to SNN with minimum accuracy
loss and optimized energy consumption. We propose a percentile based
regularization loss function to limit the spiking rate of the neuron
between a desired range. The SNN is converted directly from the
corresponding ANN, and demonstrates similar semantic segmentation as
the ANN using the same number of neurons and weights. However, the
neuromorphic implementation on the Intel Loihi neuromorphic chip is
over 2x more energy-efficient than conventional hardware (CPU, GPU)
when running online (one image at a time). These power improvements
are achieved without sacrificing the task performance accuracy of the
network, and when all weights (Loihi, CPU, and GPU networks) are
quantized to 8 bits.

[<span class="paperlink">Full paper</span>](https://arxiv.org/abs/2106.08921)
