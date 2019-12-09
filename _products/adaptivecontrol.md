---
layout: product
theme: theme-purple

title: Adaptive control
img: control.png
tagline: Better industrial and robotic control

pitch: >
  We have developed and patented an adaptive control method that
  guarantees improvement over standard PID control. Not only does this
  algorithm introduce robust self-tuning, it can be run efficiently on
  standard hardware or next generation neuromorphic hardware.

feature:
  cta:
    text: Contact us for more information
    link: /contact/?subject=adaptivecontrol
  features:
    - title: Online learning
      icon: /img/icon-online-learning.svg
    - title: Self-tuning controller
      icon: /img/icon-brain2-purple.svg
    - title: Neuromorphic or conventional
      icon: /img/icon-method.svg
    - title: Guaranteed convergence
      icon: /img/icon-convergence.svg

ctas:
  - title: Demonstration
    description: >
      When applied to a Jaco<sup>2</sup> robotic arm, the adaptive
      controller can compensate for unknown forces and use novel
      tools.
    link: https://www.youtube.com/watch?v=muaG2VETgHU&list=PL0Xs4sfQU-Q1MeTNaizzFWYv1Xz3ua7ZAs&index=1
    linkText: See the demo video
  - title: Follow us
    description: >
      The core algorithms are publicly available in the ABR Control
      Github repository. Explore the code and follow the project!
    link: https://github.com/abr/abr_control
    linkText: Follow on Github
  - title: Partnerships
    description: >
      If you're not sure this will work for your application, contact
      us and we'll help you decide. We can work closely with you to
      apply the controller to your application.
    link: /contact/?subject=adaptivecontrol
    linkText: Contact us

service:
  title: Services
  subtitle: An adaptive controller for your problem
  services:
    - title: Neuromorphic applications
      description: >
        Let us help with your control problems by developing
        neuromorphic applications for you. We've built our reputation on
        developing proof-of-concept applications of neuromorphic
        technology.
      link: /services/#custom-neuromorphic-applications

research:
  title: Robotic Arm
  content: >
    <iframe width="100%" height="500" src="https://www.youtube.com/embed/muaG2VETgHU?list=PL0Xs4sfQU-Q1MeTNaizzFWYv1Xz3ua7ZA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    To effectively implement force controllers, accurate models of the
    system dynamics are required. Nonlinear adaptive control methods
    provide means of compensating for inaccurate models online, and
    are provably stable and at least as effective as standard PID
    control.

    Our research has shown how nonlinear adaptive control can be
    implemented in neural networks to control robotic simulations. We
    applied this control on the Kinova Jaco<sup>2</sup> robotic arm by
    first developing a force-control interface to the arm (available
    publicly on Github), and then building a hybrid implementation of
    adaptive neural control using Nengo (which we have also made
    available publicly) and neuromorphic hardware. Our demonstration
    shows the system adapting to unexpected forces acting upon the arm
    in real-time, showcasing the utility of low-power, adaptive,
    embedded robotic systems.
---

Our novel controller uses machine learning
and artificial intelligence methods
to improve standard industrial control, including robotics.

These patented techniques build on
decades of research from MIT
into efficient methods for building robust adaptive controllers
for nonlinear systems.

Regardless of whether you're using
position, force, or any other control target,
our addition of a neural network into the controller
is mathematically guaranteed
to improve the control outcome
compared to even a well-tuned PID controller.

If desired, the controller
can continue to adapt while in use
to account for unknown or expected deviations
from original tuning conditions,
whether that's because of wear and tear on the plant,
or a change in environmental dynamics.

Best of all, we can implement
the entire controller on state-of-the-art, efficient neuromorphic hardware
(or standard hardware, if you already have it).
