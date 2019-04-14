## Launch

```js
node ./src/index.js
```

**...and wait a minute**

## Report examples

**Without any throttling**

```json
{
  "angular.1.7.8.min.js": {
    "size": "172.11kB",
    "average": "14ms"
  },
  "moment.min.js": {
    "size": "52.07kB",
    "average": "9ms"
  },
  "react.16.8.6.production.min.js": {
    "size": "12.38kB",
    "average": "7ms"
  },
  "redux.4.0.1.min.js": {
    "size": "6.31kB",
    "average": "6ms"
  },
  "jquery-3.4.0.min.js": {
    "size": "86.08kB",
    "average": "20ms"
  },
  "antd.3.16.3.min.js": {
    "size": "1868.50kB",
    "average": "22ms"
  },
  "aurelia-core.1.0.2.min.js": {
    "size": "266.72kB",
    "average": "7ms"
  },
  "backbone-min.1.4.0.js": {
    "size": "24.42kB",
    "average": "8ms"
  },
  "bluebird.core.3.5.4.min.js": {
    "size": "54.85kB",
    "average": "12ms"
  },
  "clipboard.2.0.4.min.js": {
    "size": "10.50kB",
    "average": "9ms"
  }
}
```

**With CPU throttling --rate 4**

```json
{
  "angular.1.7.8.min.js": {
    "size": "172.11kB",
    "average": "68ms"
  },
  "moment.min.js": {
    "size": "52.07kB",
    "average": "47ms"
  },
  "react.16.8.6.production.min.js": {
    "size": "12.38kB",
    "average": "40ms"
  },
  "redux.4.0.1.min.js": {
    "size": "6.31kB",
    "average": "35ms"
  },
  "jquery-3.4.0.min.js": {
    "size": "86.08kB",
    "average": "92ms"
  },
  "antd.3.16.3.min.js": {
    "size": "1868.50kB",
    "average": "111ms"
  },
  "aurelia-core.1.0.2.min.js": {
    "size": "266.72kB",
    "average": "34ms"
  },
  "backbone-min.1.4.0.js": {
    "size": "24.42kB",
    "average": "45ms"
  },
  "bluebird.core.3.5.4.min.js": {
    "size": "54.85kB",
    "average": "79ms"
  },
  "clipboard.2.0.4.min.js": {
    "size": "10.50kB",
    "average": "37ms"
  }
}
```
