# CacheIssue Reproduce

This is a stripped version of the project in which this happens:

```sh
# clear cache
rm -rf node_modules/.cache
# build lib (with CI flag enabled to force in-process-hash)
CI=true npx nx run-many -t build --projects=some-lib
# build app (with CI flag enabled to force in-process-hash)
CI=true npx nx run-many -t build --projects=some-app
```

First output, as expected, builds lib

```
 >  NX   Running target build for project some-lib:

    - some-lib

 —————————————————————————————————————————————————————————————————————————————————————————————————————

> nx run some-lib:build:production

vite v4.3.9 building for production...
transforming...
✓ 3 modules transformed.
rendering chunks...
computing gzip size...
../../dist/packages/some-lib/style.css  0.00 kB │ gzip: 0.02 kB
../../dist/packages/some-lib/index.mjs  0.24 kB │ gzip: 0.19 kB
../../dist/packages/some-lib/index.js  0.25 kB │ gzip: 0.21 kB

[vite:dts] Start generate declaration files...
✓ built in 2.47s
[vite:dts] Declaration files built in 2174ms.


 —————————————————————————————————————————————————————————————————————————————————————————————————————

 >  NX   Successfully ran target build for project some-lib

```

Second output, surprisingly, builds lib again

```
 >  NX   Running target build for project some-app and 1 task it depends on:

    - some-app

 —————————————————————————————————————————————————————————————————————————————————————————————————————

> nx run some-lib:build:production

vite v4.3.9 building for production...
transforming...
✓ 3 modules transformed.
rendering chunks...
computing gzip size...
../../dist/packages/some-lib/style.css  0.00 kB │ gzip: 0.02 kB
../../dist/packages/some-lib/index.mjs  0.24 kB │ gzip: 0.19 kB
../../dist/packages/some-lib/index.js  0.25 kB │ gzip: 0.21 kB

[vite:dts] Start generate declaration files...
✓ built in 2.25s
[vite:dts] Declaration files built in 2054ms.


> nx run some-app:build:production

vite v4.3.9 building for production...
transforming...
✓ 35 modules transformed.
rendering chunks...
computing gzip size...
../../dist/apps/some-app/index.html                   0.48 kB │ gzip:  0.30 kB
../../dist/apps/some-app/assets/index-e3b0c442.css    0.00 kB │ gzip:  0.02 kB
../../dist/apps/some-app/assets/index-5f41df50.js   166.34 kB │ gzip: 51.75 kB
✓ built in 1.09s

 —————————————————————————————————————————————————————————————————————————————————————————————————————

 >  NX   Successfully ran target build for project some-app and 1 task it depends on
```
