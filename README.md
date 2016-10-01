# markdown 英文段落去除

标签（空格分隔）： markdown 去除

---

该库主要是用来将 markdwon 格式中的英文段落删除。

## 安装
```
npm install xxx
```

## 使用
```

```

例如：
```
# WebGL - Orthographic 3D

# WebGL - 正交3D

This post is a continuation of a series of posts about WebGL. The first [started with fundamentals][1] and the previous was [about 2D matrices][2]. If you haven't read those please view them first.

在这里，我们将继续学习WebGL。本文假定你已经对[WebGL基础][3]，[二维矩阵（2D matrices）][4]有所了解。如果你还未阅读过这些章节，请先移步到相应章节。

In the last post we went over how 2D matrices worked. We talked about how translation, rotation, scaling, and even projecting from pixels into clip space can all be done by 1 matrix and some magic matrix math. To do 3D is only a small step from there.

上一篇文章中，我们学习了二维矩阵（2D matrices）的工作方式。如平移（translation）、旋转（rotation）、缩放（scale）、像素空间到裁剪空间的映射（projection from pixels into clip space），这些操作都能通过矩阵运算，然后用1个矩阵表示。现在，我们只需在此基础上稍加改动，便能实现3D效果。
```
这里存在两种，一种是英文段落，一种为中文段落。经过该库处理过后就为：
```
# WebGL - Orthographic 3D

# WebGL - 正交3D
在这里，我们将继续学习WebGL。本文假定你已经对[WebGL基础][3]，[二维矩阵（2D matrices）][4]有所了解。如果你还未阅读过这些章节，请先移步到相应章节。
上一篇文章中，我们学习了二维矩阵（2D matrices）的工作方式。如平移（translation）、旋转（rotation）、缩放（scale）、像素空间到裁剪空间的映射（projection from pixels into clip space），这些操作都能通过矩阵运算，然后用1个矩阵表示。现在，我们只需在此基础上稍加改动，便能实现3D效果。
```