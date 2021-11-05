const redis = require('redis');

const redisClient = redis.createClient(
    {
        host:process.env.REDIS_HOST,
        port:process.env.REDIS_PORT,
        retry_strategy: ()=> 1000
    }
);

module.exports.add = (operation)=>{
    return new Promise (
        (resolve,reject)=>{
            resolve(redisClient.rpush('historial',operation));
        }
    )
}

module.exports.getAll = ()=>{
    return new Promise(
        (resolve,reject)=>{
            redisClient.lrange('historial',0,-1,(error,exists)=>{
                if (error) {
                    reject(0);
                }
                else{
                    resolve(exists);
                }
            })
        }
    )
}