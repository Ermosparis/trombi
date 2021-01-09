const {Client}=require('pg')
const client = new Client(process.env);
   

client.connect();
module.exports=client;