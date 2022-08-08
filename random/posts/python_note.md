---
layout: default
title: Python notes
DoMath: false
disqus-comments: true
fb-comments: false
describe: true
codeHL: true
description: Python study notes
---

## Talks

### Refactoring Python: Why and How to Restructure Your Code
Brett Slatkin, PyCon 2016

Video [link][1] on YouTube

This is a talk on Python code writing style. The goal is to write more readable, easier to test and maintain Python code. Python is flexiable enough to allow solving a problem in multiple ways, and thus different code styles. The basic idea for these talks is to show some prefered code, and develop some strategy to achieve that. In this talk, Brett is promoting the idea to wrap details into objects. It may work in some cases but in general, not intuitive or appealing at all.

### Awesome Command Line Tools
Amjith Ramanujam, PyCon 2017

Video [link][2] on YouTube

While many of the tools mentioned here may be obsolete due to the presence of MS Code, some of the tools are real awesome. Such as the `prompt-toolkit` library, which provide useful features for building a REPL easily.

### Testing stochastic AI models with Hypothesis
Marina Shvartz, PyCon 2021

Video [link][3] on YouTube

In this talk, Marina gave an overview of the three types of testing: example based, property based and metamorphic testing. The metamorphic testing is really a specific property based testing, and the example based testing can be also thought of as property based. The `Hypothesis` package can automate many property based tests and produce random test examples. All in all, this is an introduction to the `Hypothesis` package, and there is nothing special about the AI aspects.









[1]: https://youtu.be/D_6ybDcU5gc
[2]: https://youtu.be/hJhZhLg3obk
[3]: https://youtu.be/uVjgkqEpgkE