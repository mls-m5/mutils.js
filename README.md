# mutils

Simple utilities for web projects


## Require javascript files
```js
console.log("staring scripts");

require(["main.js", "../get.js", "../utils.js", "../mustache.js"], function() {
    console.log("js loaded");

    init();
});
console.log("after require function");
```

## Get

```js
get("post.php", function(data) {
    console.log(data);
});
```

## Post
```js
post("post.php", {title: "This is a title", message: "This is some text"}, function(data) {
    ...
});
```


