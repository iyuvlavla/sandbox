const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

MongoClient.connect('mongodb://127.0.0.1:27017/testDB', (err, db) => {
    assert.equal(null, err);//assert.equal(a === b)
    console.log("Connected successfully to server");
    
        findAllDocuments(db, () => {
            db.close();
        });

});

const insertDocuments = (db, callback) => {
    const documents = [
        { name: 'hoge' ,code: 01 },
        { name: 'fuga' ,code: 02 },
        { name: 'piyo' ,code: 03 }
    ];
    db.collection('documents').insertMany(documents, (err, result) => {
        // insert結果の確認
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);

        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};

function findAllDocuments(db, callback) {
    let collection = db.collection('documents');
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log('Found the following records');
        console.log(docs);
        callback(docs);
    });
}

function findDocument(db, callback) {
    let collection = db.collection('documents');
    collection.find({/*対象*/}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log('Found record');
        console.log(docs);
        callback(docs);
    });
}

function updateDocment(db, callback) {
    const collection = db.collection('documents');
    collection.updateOne({/*対象*/},
        { $set: {/*更新*/} }, function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log('Updated the document');
            callback(result);
        });
}

function removeDocument(db, callback) {
    const collection = db.collection('documents');
    collection.deleteOne({/*対象*/}, function(err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log('Removed the document');
        callback(result);
    });
}
