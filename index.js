const express=require('express')
const cors=require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const app=express()
const port =process.env.PORT ||5000

// middleware
app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8zyyzcn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

   const songsCollection = client.db('musicTracks').collection('songs')
   const recommendationCollection = client.db('musicTracks').collection('recommendation')

   app.get('/songs',async(req,res)=>{
    const cursor=songsCollection.find();
    const result=await cursor.toArray();
    res.send(result)
   })

   app.post('/recommendation',async(req,res)=>{
    const recommendationItem=req.body
    const result =await recommendationCollection.insertOne(recommendationItem)
    res.send(result)
   })

  //  app.get('/recommendation',async(req,res)=>{
  //   const cursor=recommendationCollection.find()
  //   const result=await cursor.toArray();
  //   res.send(result)
  //  })

  // app.get('/recommendation', async (req, res) => {
  //   try {
  //     const result = await recommendationCollection.aggregate([
  //       {
  //         $group: {
  //           _id: "$songId",
  //           title: { $first: "$title" },
  //           artist: { $first: "$artist" },
  //           audio_file: { $first: "$audio_file" },
  //           image: { $first: "$image" },
  //           clickCount: { $sum: "$clickCount" }
  //         }
  //       },
  //       {
  //         $sort: { clickCount: 1 }
  //       },
  //       {
  //         $sort: { clickCount: -1 }
  //       }
  //     ]).toArray();
  
  //     res.send(result);
  //   } catch (error) {
  //     console.error('Error fetching recommendations:', error);
  //     res.status(500).send('Error fetching recommendations');
  //   }
  // });
  

  app.get('/recommendation', async (req, res) => {
    const userEmail = req.query.email; 
    
    try {
      const result = await recommendationCollection.aggregate([
        {
          $match: { email: userEmail } 
        },
        {
          $group: {
            _id: "$songId",
            title: { $first: "$title" },
            artist: { $first: "$artist" },
            audio_file: { $first: "$audio_file" },
            image: { $first: "$image" },
            clickCount: { $sum: "$clickCount" }
          }
        },
        {
          $sort: { clickCount: -1 } 
        }
      ]).toArray();
    
      res.send(result);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      res.status(500).send('Error fetching recommendations');
    }
  });
  

  
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Surver is Running')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})