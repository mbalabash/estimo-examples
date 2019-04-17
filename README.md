**Each test runs Estimo like new process by** `child_process.spawn`.

## Examples

**Basic**:

```sh
yarn start:basic
```

Will run estimo 5 times for one lib without any [perf-timeline-cli](https://github.com/CondeNast/perf-timeline-cli) options.

**Output**:

```json
[
  {
    "lib": "angular.1.7.8.min.js",
    "size": "172.11kB",
    "compileMetrics": ["8.51", "8.55", "8.67", "8.72", "8.74"],
    "estimoDurationMetrics": ["0.33", "0.34", "0.34", "0.34", "0.41"],
    "medianCompileTime": "8.67ms",
    "medianEstimoDuration": "0.34s"
  }
]
```

##

**Basic, but 50 times**

It can takes some time.

```sh
yarn start:basic-50
```

##

**Basic + cpu throttling rate 4**

```sh
yarn start:basic-cpu
```

##

**10 minified libs, 5 times**

Will run estimo 5 times for 10 minified libs ([from here](./libs)) without any [perf-timeline-cli](https://github.com/CondeNast/perf-timeline-cli) options.

It can takes some time.

```sh
yarn start:libs-10_5
```

##

**10 minified libs, 5 times + cpu throttling rate 4**

It can takes some time.

```sh
yarn start:libs-10_5-cpu
```

## Results

You can find all results in **reports** directory.
Each report has name according to npm task.
