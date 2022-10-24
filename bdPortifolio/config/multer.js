const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, "..","..", 'tmp', 'uploads'),

    storange: multer.diskStorage({
        destination: (req, file, cb) =>{
            cb(null, path.resolve(__dirname, "..","..", 'tmp', 'uploads'))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash)=>{
                if (err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`; 

                cb(null, fileName);
            });
        },
    }),

    limits: {
        fileSize: 2 * 1024 * 1024,
    },

    fileFilter: (req, file, cb) => {
        const allowedMines = [
            'image/jpeg',
            'image/pjeg',
            'image/png',
            'image/gif'
        ];

        if(allowedMines.includes(file.mimetype)){
            cb(null, true);
        } else{
            cb(new Error.prototype('Tipo invalido'));
        }
    }

}