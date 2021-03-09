const data = require  ('../data/data.json')


exports.get = (req, res, next) => {
console.log(data)
   res.status(200).json(data);
};

exports.post = (req, res, next) => {

   data.push({title:req.body.title,price:req.body.price,image:req.body.image})
   res.status(200).json(req.body);
};