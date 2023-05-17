const mongo = require('../db')

const productshemas = require('../shemas/product');


class productController {
  async post(req, res) {
    try {
        const {name, material} = req.body
       let product = await new productshemas({name: name, material: material})
       await product.save();
        console.log(product)
          //let product = productshemas.create({id: id, name: name, material: material})
          res.status(200).send()
      } 
     catch (error) {
      console.log(error)
    }
}

  async get(req, res) {
    try {
      const product = await productshemas.find({})
      if (product) {
        res.json({ product: product})
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
      const product = await productshemas.findOne({name: name})
      res.status(200).send()
      if (product) {
        await productshemas.findByIdAndDelete(product._id);
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
      let newobj =   await productshemas.updateOne({name: name}, {name: newname})
      res.status(200).send()
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new productController()
