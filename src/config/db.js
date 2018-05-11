import mongoose from 'mongoose';
import config from './config';

export default () => {
     mongoose.Promise = global.Promise;
    // mongoose.connect('mongodb://localhost/meetupME');
     mongoose.connect(config.DB_URL);
     mongoose.set('debug', true);
     mongoose.connection
             .once('open', ()=>console.log('/server/config/db.js--mongodb running'))
             .on('error',err=>console.error(err))
};
