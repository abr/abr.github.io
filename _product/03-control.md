---
title: AdaptiveControl
slug: adaptive
img: adaptive.jpg
link: product_AdaptiveControl
icon: icon-method.svg
pitch: >
  We have developed a patented adaptive control method
  that guarantees improvement over standard PID control.
  Not only does this algorithm introduce robust self-tuning,
  it can be run efficiently on standard hardware,
  or next generation neuromorphic hardware.
---

These patented techniques build on decades of research from MIT into efficient methods for building robust and adaptive controllers for nonlinear systems.

Regardless of whether you’re using position, force, or any other control target, our addition of a neural network into the controller is mathematically guaranteed to improve the control outcome compared to even a well-tuned PID controller.

Furthermore, if desired, the controller will continue to adapt while in use, to account for unknown or expected deviations from the original tuning conditions, whether that’s because of wear and tear on the plant, or a change in environmental dynamics.

Best of all we can implement the entire controller on state-of-the-art, efficient neuromorphic hardware (or standard hardware, if you already have it).

If you’re not sure that this will work for your application, contact us and we’ll help you get started, or work closely with you to develop the controller to suit your criteria.

For pricing and further information, <a href="{{ site.baseurl }} {% link contact.html %}">contact us</a>.

<hr>
<h5>As a step towards developing human-friendly robotics, directly controlling the force applied by each motor to the robot allows for safe, compliant robotic movement.</h5>

<iframe src="https://www.youtube.com/embed/muaG2VETgHU?list=PL0Xs4sfQU-Q1MeTNaizzFWYv1Xz3ua7ZA" allowfullscreen="" width="100%" height="400" frameborder="0"></iframe>

<br/>
To effectively implement force controllers, however, accurate models of the system dynamics are required. Nonlinear adaptive control methods provide means of compensating for inaccurate models online, and are provably stable and at least as effective as standard PID control.

Our research has shown how nonlinear adaptive control can be implemented in neural networks to control robotic simulations. We applied this control on the Kinova Jaco2 robotic arm by first developing a force-control interface to the arm (available publicly on GitHub), and then building a hybrid implementation of adaptive neural control using Nengo (which we have also made available publicly) and neuromorphic hardware. Our demonstration shows the system adapting to unexpected forces acting upon the arm in real-time, showcasing the utility of low-power, adaptive, embedded robotic systems.



