# Redis essentials
- install redis client
- install node

## for support redis package for node
npm install redis


## commong pitfalls

- wrong data type -> benchmark set vs bitmap
 + set
`redis-cli FLUSHALL && node benchmark-set.js && redis-cli INFO memory`

 + bitmap
`redis-cli FLUSHALL && node benchmark-bitmap.js && redis-cli INFO memory`

- multi redis database vs multi instance: because of redis is single thread -> should multi instance

- key should has a namespace

- using swap

- no planing and configuring the memory poperly: case redis server may double usage memory when backup(RDB, AOF)

- an appropriate persisten strategy (RDB, AOF)


## Security

## Scaling
### persistent:
- RDB -> redis database
- AOF -> appended only file
- RDB vs AOF
 + If application does not need persistence, disable RDB and AOF
 + If application has tolerance to data loss, use RDB
 + If application requires fully durable persistence, use both RDB and AOF

### Replication

### partition
- range
- hashing
- prehasing
- consistent hasing
- tagging

- data store vs cache
  + cache -> consistent hashing
  + data store: Redis cluster

- implement
 + client
 + proxy layer: twemproxy/nutcatcher
 + query router: Redis Cluster

- twemproxy/nutcatcher -> my has single point of failure -> should has load balance