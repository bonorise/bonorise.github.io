---
layout: post
title: 零基础看段子学Javascript - 函数
description: 函数，是一种子程序，用function的另一个含义“功能”更好理解。
category: js
---

## 什么是函数？
（维基百科）函数，是一种子程序，利用函数名称，可以接收回传值。例如c = max(a,b)。是一个大型程序中的某部分代码，由一个或多个语句块组成。它负责完成某项特定任务，而且相较于其他代码，具备相对的独立性。一般会有输入参数并有返回值，提供对过程的封装和细节的隐藏。这些代码通常被集成为软件库。

函数是对具有相关性语句的归类和对某过程的抽象，是最基本的一种代码抽象的方式。

在面向对象程序设计语言中，类或对象中的函数（子程序），被称为方法（method）。

## 我的理解

函数用function的另一个含义“功能”更好理解。一个软件就是一个机器比如汽车，一个函数就是一个功能，相当于是汽车上的一个按钮，按下去，就会执行指定的操作，按点火就会发动，按喇叭就会有声音，转方向盘就会转弯。我们可以不用管汽车是如何实现发动、发声或转弯的原理，我们只需要根据我们的需求使用就行。函数是更便于需求方使用的一种表达形式，名称和使用方式越符合人的本能越好。

- 函数，可以减少代码的重复输入。
- 函数名称可以更便于理解代码的功能。比如3.14*r*r写成函数名称area_of_circle，一看就懂函数是求圆的面积。
- 可以更灵活地调用，比如插件，或库。
- 使用的人只需要知道怎么用就行，不需要知道是过程是如何实现的。

## 举个例子
- 苹果手机的触屏使用方式，就是比键盘更好的函数（功能），因为要输入的参数更少，只有一个home键和触屏。
- 各种软件的菜单，其实就是函数的具体体现。点击某个菜单，如新建功能，就会输出一个结果，就是新建一个文件。如查找功能，需要输入查找的词语，词语就是输入参数，输出就是把所有的词语找出来。

## 如何应用
- 函数的命名要体现出函数的功能，这也要求自己在写函数的时候，主动去思考函数的目的。
- 大部分时候，自己也只需要知道如何去使用函数就行，理解它要输入什么参数，会得到什么结果即可。
