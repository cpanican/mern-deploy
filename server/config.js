const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://cpanican:9614512asd@cluster0-shard-00-00-bx9rg.mongodb.net:27017,cluster0-shard-00-01-bx9rg.mongodb.net:27017,cluster0-shard-00-02-bx9rg.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
  port: process.env.PORT || 8000,
};

export default config;
