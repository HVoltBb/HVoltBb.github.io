---
layout: default
title: Numerical Linear Algebra
DoMath: true
disqus-comments: true
describe: true
numberedHeadings: true
description: Numerical linear algebra with Eigen
---
<div class="page-header">
	<h1>Numerical Linear Algebra with Eigen 3.4.0</h1>
</div>

## Column space of A

## Foundamental decompositions

Elimination

$$
\boldsymbol{A} = \boldsymbol{LU} = \sum_i{l_i u_i^T}
$$

Gram-Schmidt

$$
\boldsymbol{A} = \boldsymbol{QR}
$$

Eigen-decomposition

$$
\boldsymbol{S} = \boldsymbol{Q \Lambda Q^T} = \sum_i{\lambda_i q_i q_i^T}
$$

$$
\boldsymbol{A} = \boldsymbol{X \Lambda X^T}
$$

Singular value decomposition

$$
\boldsymbol{A} = \boldsymbol{U \Sigma V^T}
$$

Here, $\boldsymbol{A}$ is a m-by-n matrix, $\boldsymbol{S}$ a symmetrical matrix, and $\boldsymbol{Q}$, $\boldsymbol{U}$ and $\boldsymbol{V}$ are orthogonal matrices.  

## Orthonormal columns in \\(\boldsymbol{Q}\\)

Orthogonal matrices preserve the length:
$$
\lVert\boldsymbol{Q}x\rVert^2 = \lVert x\rVert^2
$$

### Householder reflections
With $u^Tu=1$,
$$
\boldsymbol{H} = \boldsymbol{I} - 2 u u^T.
$$
