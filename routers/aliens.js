const express = require("express");
const router = express.Router();
const Alien = require("../node_modules/alien");
router.get('/', async(req, res)=>{
       try{
          const alines = await Alien.find()
          res.json(alines)
       }catch(err){
           res.send(err)
       }
})
router.get('/:id', async(req, res)=>{
   try{
      const aline = await Alien.findById(req.params.id);
      res.json(aline)
   }catch(err){
       res.send(err)
   }
})
router.post('/', async(req,res)=>{
      const alien = new Alien({
         name:req.body.name,
         tech:req.body.tech,
         sub:req.body.sub
      })
      try{
        const al = await alien.save();
        res.json(al)
      }catch(err){
         res.send(err)
      }
})
router.patch('/:id', async(req,res)=>{
   
try{
      const alien = await Alien.findById(req.params.id);
      alien.sub = req.body.sub;
      const al = await alien.save()
      res.json(al)

}catch(err){
     res.send(err)
}

})

router.delete('/:id', async(req,res)=>{
   
   try{
         const alien = await Alien.findById(req.params.id);
         const al = await alien.deleteOne()
         res.json(al)
   
   }catch(err){
        res.send(err)
   }
   
   })
   


module.exports = router