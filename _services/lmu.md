---
layout: service

title: Upgrade from LSTMs
tagline: Solve temporal problems more accurately and efficiently with LMUs
img: lmu.png
pitch: >
  Are you having trouble solving a temporal problem,
  or your LSTM solution isn't cutting it?
  Need to deploy in a situation with a low power budget?
  We'll help you apply LMUs to solve it better and more efficiently.

links:
  - text: NeurIPS 2019 LMU paper
    external_url: https://papers.nips.cc/paper/9689-legendre-memory-units-continuous-time-representation-in-recurrent-neural-networks.pdf
  - text: NeurIPS 2019 Github repo
    external_url: https://github.com/abr/neurips2019
  - text: State of the art psMNIST performance using LMUs in NengoDL
    external_url: https://www.nengo.ai/nengo-dl/examples/lmu.html
  - text: Simple LMU example in Nengo
    external_url: https://www.nengo.ai/nengo/examples/learning/lmu.html
  - text: LMUs on Loihi neuromorphic hardware
    external_url: https://www.nengo.ai/nengo-loihi/examples/lmu.html
  - text: ABR press release (general)
    external_url: /press/2019-12-09-lmu-general
  - text: ABR press release (technical)
    external_url: /press/2019-12-09-lmu-tech
---

Long short-term memories (LSTMs) have been called the most commercially
valuable AI algorithm every invented
([Bloomberg](https://www.bloomberg.com/news/features/2018-05-15/google-amazon-and-facebook-owe-j-rgen-schmidhuber-a-fortune)),
having been deployed in many speech, vision and text analysis systems.
**But LSTMs fall apart when tasked with learning temporal dependencies
spanning thousands of timesteps, limiting their usefulness**.

We have developed a new algorithm called the Legendre Memory Unit (LMU)
that can learn temporal dependencies over **millions of timesteps**.
LMUs maintain efficient and scale-invariant representations
of recent inputs and learn how to solve real world problems
using those representations.
LMUs can be implemented with traditional deep learning techniques
on hardware you already have,
or can be deployed on neuromorphic hardware
for massive power savings.
Using LMUs, we have obtained the best-known results on the
permuted sequential MNIST task, a difficult RNN benchmark.

Do you have a temporal problem you're currently solving with an LSTM?

Have a temporal problem that you haven't been able to solve yet?

Do you need to solve a temporal problem in an edge or IoT device?

Take a look at our
[published](https://papers.nips.cc/paper/9689-legendre-memory-units-continuous-time-representation-in-recurrent-neural-networks.pdf)
and [easily reproducible](https://github.com/abr/neurips2019)
results.
ABR's patent-pending LMU is free to use for
academic research and personal non-commercial uses.
For commercial uses, please contact us through the form below.
