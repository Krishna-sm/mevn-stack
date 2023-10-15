const multer = require("multer");

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
    cb(null,`${uniqueSuffix}-${file.originalname}`)
    }
  })
  
  exports.upload = multer({ storage: storage })