---
layout: default
title: Little Things
DoMath: true
disqus-comments: true
fb-comments: false
describe: true
codeHL: false
description: Things your instructor never bothered to tell you
---
<div class="page-header">
    <h2>Little Things your instructor never bothered to tell you about</h2>
</div>
<p>This is a list of minor things across many subject areas that have bothered me for some time. I hope my instructors had explained these things to me when they introduced those ideas but good things only rarely happens. Anyway, this is going to be a never ending list.</p>
<h3>Why the f**k is the pdf of random variable X written as \(f_X(X=x)\)?</h3>
<p>
There are simply way too many Xs there, don't you agree? I never quite understood why you need so many both upper- and lower-case Xs in that function name until recently. Let's write that pdf in an equivalent form. It is perfectly fine to write it as \(g(X=y)\), where \(g\) is the pdf of some random variable, and \(y\) is the function argument. Now, we can parse \(f_X(X=x)\), where \(f_X\equiv g\), and \(x\equiv y\). Does \(f_X(X=x)\) still look cryptic to you?
</p>
<h3>\(E(X|Y)\) is a random variable and \(E(X|Y=y)\) is a function, what?!</h3>

<p>Statistics text is usually quite succinct on words, not being wrong but not quite clear either. \(E(X|Y)\) is the expectation of random variable `X` given random variable `Y`, and the expectation is taken with respect to `X`. So at the end it is just a function of `Y`, in other words, just another random variable. The expectation is taken with respect to `X` because `Y` is given, in other words, `Y`, whatever it is, is considered constant in the expectation. For the other expression, we fix the value of `Y` to `y`, so it is not random anymore, and therefore, it becomes a function in `y`. A mouthful, isn't it? At the start, you want someone to give you the more verbose version and after awhile, you may prefer the shorter version since no information is lost in the shorter version and you save a few keystrokes. BTW, \(E(X)\) is still a constant.
</p>

### A vector in R is neither a column vector nor a row vector, rather it is an ordered list

Here, let's consider two related terms: vector and list. What they mean depends heavily on context. In linear algebra, a `vector(1)` is a special matrix with a single row or column. In R, you create a zero column `vector(1)` of length 5 through

```{r}
vector1 <- matrix(0, ncol=1, nrow=5)
```

In R, vector is a basic data type, called _atomic vectors_ in the documentation. This R `vector(2)` is an ordered collection of objects of the same type, and not a `vector(1)` and you can't do any matrix operation on `vector(2)`. An R vector of 5 zeros can be created through

```{r}
vector2 <- rep(0, 5)
```

 So, in R, a vector is a list, then what are lists in R? R documentation calls their lists _generic vectors_, generic in the sense that they may contain objects of different types. Of course, no one can stop you from creating a list of objects of the same type, which is exactly what I am going to do next. An R list of 5 zeros can be created as

 ```{r}
vector3 <- as.list(vector2)
 ```

To add to your confusion, the [R documentaton][1] does say 

> Lists are vectors, ...

To make your R experience less frustrating, don't ever read their documentation and pay close attention to what the argument/return type of a function is in the help page and act accordingly. 



[1]: https://cran.r-project.org/doc/manuals/r-devel/R-lang.html#List-objects