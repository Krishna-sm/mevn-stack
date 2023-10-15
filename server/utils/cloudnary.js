// import {v2 as cloudinary} from 'cloudinary';
const cloudinary = require("cloudinary").v2
          
cloudinary.config({ 
  cloud_name: 'dufrfjrxm', 
  api_key: '378367253615539', 
  api_secret: 'dUekvxfoF8avF7SQ8flp3pTGa2k' 
});

module.exports= cloudinary