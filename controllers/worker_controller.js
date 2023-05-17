const workershemas = require('../shemas/worker');

class workerController {
  async post(req, res) {
    try {
        const {name, surname, phone, email} = req.body
       let worker = await new workershemas({name: name, surname: surname, phone: phone, email: email, avatar:""})
       await worker.save();
        console.log(worker)
        res.status(200).send()
      } 
     catch (error) {
      console.log(error)
    }
}

  async get(req, res) {
    try {
      const worker = await workershemas.find({})
      if (worker) {
        res.json({ worker: worker})
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
      const worker = await workershemas.findOne({name: name})
      res.status(200).send()
      if (worker) {
        await workershemas.findByIdAndDelete(worker._id);
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
      let newobj =   await workershemas.updateOne({name: name}, {name: newname})
      res.status(200).send()
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = new workerController()
