# waggish

[![travis build](https://img.shields.io/travis/distalx/waggish.svg?style=flat-square)](https://travis-ci.org/distalx/waggish)
[![codecov coverage](https://img.shields.io/codecov/c/github/distalx/waggish.svg?style=flat-square)](https://codecov.io/github/distalx/waggish)
[![version](https://img.shields.io/npm/v/waggish.svg?style=flat-square)](http://npm.im/waggish)
[![downloads](https://img.shields.io/npm/dm/waggish.svg?style=flat-square)](http://npm-stat.com/charts.html?package=waggish&from=2016-08-10)
[![MIT License](https://img.shields.io/npm/l/waggish.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)


Get random humorous loading message.

## Installation

This package is distributed via npm:

```
npm install waggish
```

## Usage

```javascript
var waggish = require('waggish');
var allMessages = waggish.all;
var randomMessage = waggish.random();
var threeRandomMessages = waggish.random(3);
```


#### Acknowledgements
A big shoutout to [Kent C. Dodds](https://github.com/kentcdodds) for the awesome course ["How to Write a JavaScript Library."](https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-introduction).

#### Project Setup

This project assumes you have [NodeJS v6](http://nodejs.org/) or greater installed. You should
also have [npm v3](https://www.npmjs.com/) or greater installed as well (this comes packaged
with Node 6). You'll also need a recent version of [git](https://git-scm.com/) installed
as well.

You may have come to this project from different varying sources. There are a
different series of branches for each workshop/course I've done. To get started with
the project, start with this:

1. [Sign up](https://github.com/join) for a GitHub Account (if you don't already have one)
2. [Fork](https://help.github.com/articles/fork-a-repo/) this repo
3. [Clone](https://help.github.com/articles/cloning-a-repository/) your fork
4. In the directory you cloned the repository, run `git fetch --all`

If you need help with these steps, you might check out
[this free Egghead.io course](http://kcd.im/pull-request) which can help you get things going.
