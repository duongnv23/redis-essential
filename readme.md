# Redis essentials
- install redis client
- install node

## for support redis package for node
npm install redis


## benchmark
- set
`redis-cli FLUSHALL && node benchmark-set.js && redis-cli INFO memory`

- bitmap
`redis-cli FLUSHALL && node benchmark-bitmap.js && redis-cli INFO memory`

