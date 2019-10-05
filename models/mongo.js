var mongoClient = require("mongodb").MongoClient;

class mongoDbClient {

  async criaCollation(collation_name){
    return new Promise((resolve, reject) => {
      console.log('connect')
      console.log(process.env.DATABASE_URL)
      mongoClient.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
        if (err) throw err
        var dbo = client.db(process.env.DATABASE_NAME)
        dbo.createCollection(collation_name)
        resolve('')
      })
    })
  }

  async insertDados(collect, dataObj){
    mongoClient.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
      if (err) throw err;
      var dbo = client.db(process.env.DATABASE_NAME);
      dbo.collection(collect).insertOne(dataObj, function(err, res) {
        if (err) throw err;
        // console.log(res);
        client.close();
      });
    });
  }

  async updateDados(collect, objWhere, dataObj){
    return new Promise((resolve, reject) => {
      mongoClient.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
        if (err) throw err;
        var dbo = client.db(process.env.DATABASE_NAME);
        dbo.collection(collect).updateOne(objWhere, {$set: dataObj}, function(err, res) {
          if (err) throw err
          client.close()
          resolve(res)
        })
      })
    })
  }

    async findDados(collect, dataObj){

        return new Promise((resolve, reject) => {
            mongoClient.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, async function(err, client) {
                if (err) throw err
                var dbo = client.db(process.env.DATABASE_NAME)
                dbo.collection(collect).findOne(dataObj, async function(err, res) {
                    if (err) throw err
                    client.close()
                    resolve(res)
                })
            })
        })
    }

}

module.exports = new mongoDbClient();

// EXEMPLO DE OBJETO PARA UPDATE 
// { "lastName" : "Andersen" },
// {
//     $set: { "pets": [
//         { "givenName": "Fluffy" },
//         { "givenName": "Rocky"}
//     ] },
//     $currentDate: { "lastModified": true }
// }