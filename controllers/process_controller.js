const processshemas = require('../shemas/process');


class processController {
  async post(req, res) {
    try {
        const {name, product_id} = req.body
       let process = await new processshemas({name: name, product_id: product_id})
       await process.save();
        console.log(product)
          res.status(200).send()
      } 
     catch (error) {
      console.log(error)
    }
}

  async get(req, res) {
    try {
      const process = await processshemas.find({})
      if (process) {
        res.json({ process: process})
      } else {
        return res.status(400).send()
      }
    } catch (error) {
      console.log(error)
    }
  }
  async delete(req, res) {
    try {
      const {name} = req.body
      const process = await processshemas.findOne({name: name}
      if (process) {
        await processshemas.findByIdAndDelete(product._id);
        res.status(200).send()
      } else {
        return res.status(400).send()
      }
    } catch (error) {
      console.log(error)
    }
  }
  async put(req, res) {
    try {
      const {name, newname} = req.body
      let newobj =   await processshemas.updateOne({name: name}, {name: newname})
      res.status(200).send()
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new processController()
