// puerto
process.env.PORT = process.env.PORT || 8080;

//entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//base de datos
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://cafe-user:bBxfQ5z088Lz5i2y@cluster0-ns9bo.mongodb.net/cafe?retryWrites=true&w=majority'
}

process.env.URLDB = urlDB;