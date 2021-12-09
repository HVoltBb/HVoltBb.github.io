---
layout: default
title: Linking Intel MKL to R
DoMath: false
disqus-comments: true
fb-comments: false
describe: true
description: Dynamicaly link Intel oneAPI Math Kernel Library (MKL) to R to make R run faster
---

<h2>FastR with Intel MKL</h2>
<p>
    Follow the instructions here => <a href="https://www.intel.com/content/www/us/en/developer/articles/technical/quick-linking-intel-mkl-blas-lapack-to-r.html">Quick Linking MKL to R</a>.
</p>
<p>
    Note: If you are building from the source and want to use 3rd party tools such as RStudio, pay attention to point #1.
</p>

1. Use the `--enable-R-shlib` option when configuring.
1. The offline Intel MKL installer will try to install a bunch more packages by default. You just need to install the MKL library. Everything else is truely optional.
1. The location of the `libmkl_rt.so` is not the same as indicated in the link above. In my case, I used `find` to locate the library.
1. Just don't `make install`. After the `make` command, your R is fully functional.
1. Check that your `R.HOME_DIR` variable in `R/bin/R` is correctly set.
1. The MKL related environment variables need to be set every time you run R. Add the following lines to your `~/.bashrc` file.

```bash
    # Intel MKL oneAPI MKL
    source /opt/intel/oneapi/mkl/latest/env/vars.sh
    export MKL_INTERFACE_LAYER=GNU,LP64
    export MKL_THREADING_LAYER=GNU
```

<p>
    To see whether this makes any difference, try benchmarking it (<a href="https://mac.r-project.org/benchmarks/">R-benchmark-25</a>). On my old 4th gen intel Core i7 laptop, MKL scored <b>4.8</b> secs while the default library scored <b>38</b> secs.
</p>
<p>
    There has been a time when Intel intentionally crippled code generation on AMD processors. But I believe it is not the case now. At least it is not as obvious as it used to be, so if you have an AMD processor, feel free to upgrade as well.
</p>
