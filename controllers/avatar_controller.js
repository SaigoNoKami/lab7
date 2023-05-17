const workershemas = require('../shemas/worker');
const path = require('path');
const fs = require("fs");

class avatarController {

  async add_avatar(req, res) {
    try {
        let name = req.body.name
        var img = fs.readFileSync(req.file.path);
       var encode_img = img.toString('base64');
        var final_img = {
           contentType:req.file.mimetype,
           image:Buffer.from(encode_img,'base64')
        };
      await workershemas.updateOne({name: name}, {avatar: final_img.image})
    
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new avatarController()