---
layout: news
title: Automatic conversion from Keras to Nengo with NengoDL
author: Daniel Rasmussen
---

ABR has recently released the
[NengoDL Converter](https://www.nengo.ai/nengo-dl/converter.html), a tool designed to
automate the process of translating models from the popular
[Keras deep learning framework](https://www.tensorflow.org/guide/keras) into Nengo.
The process is as easy as

``` python
import nengo_dl
converter = nengo_dl.Converter(my_keras_model)
```

and the Converter will take care of all the rest! The result is a Nengo Network
that produces the same behaviour as the original Keras model (both for training
and inference). Whenever possible this will be done using native Nengo objects, but
the Converter can also use NengoDL's
[TensorNodes](https://www.nengo.ai/nengo-dl/tensor-node.html) to build hybrid
Nengo/TensorFlow networks.

In addition to producing behaviour equivalent to Keras, the Converter can also be used
to enhance a Keras model. In particular, it is designed to assist in the translation
from a non-spiking Keras model into a spiking Nengo network. More details on this
process can be found in
[this example](https://www.nengo.ai/nengo-dl/examples/keras-to-snn.html) [1], which walks
through the entire process of translating a Keras model into spikes and then optimizing
the performance of the spiking model to match the original, non-spiking network.

Once a Keras model has been converted to a native Nengo network it enjoys all of the
benefits of the Nengo ecosystem. For example, these networks will be able to run on any
Nengo-supported hardware platform. This can be seen in action in
[this example](https://www.nengo.ai/nengo-loihi/examples/keras-to-loihi.html) [2],
where a Keras model is converted to a Nengo network using the NengoDL Converter and
then deployed onto neuromorphic hardware using Nengo Loihi.

For more information, or if you have any questions about using the Converter, check out
the [NengoDL documentation](https://www.nengo.ai/nengo-dl/converter.html) [3],
[drop by the forums](https://forum.nengo.ai/), or
[contact us directly]({{ site.baseurl }}{% link contact.html %})!

Links:

- [1] [Converting a non-spiking Keras model to a spiking Nengo network](
  https://www.nengo.ai/nengo-dl/examples/keras-to-snn.html)
- [2] [Deploying a converted network on Loihi](
  https://www.nengo.ai/nengo-loihi/examples/keras-to-loihi.html)
- [3] [Converter documentation](https://www.nengo.ai/nengo-dl/converter.html)
