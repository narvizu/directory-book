const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'books.json'
);

const getBooksFromFile = cb =>{
    fs.readFile(p, (err, fileData) => {
        if(err){
            cb([]);
        }else{
            cb(JSON.parse(fileData));
        }
    });
};

module.exports = class Books {
    constructor(id, title, description, ranking){
        this.id = id;
        this.title = title;
        this.description = description;
        this.ranking = ranking;
    }

    add(){
        getBooksFromFile(books => {
            this.id = Math.floor(Math.random() * 100);
            books.push(this);
            fs.writeFile(p, JSON.stringify(books), err => {
                console.log(err);
            });
        });
    }

    save(){
        getBooksFromFile(books => {
            this.id = Number(this.id);
            if(this.id){
                const existingBookIndex = books.findIndex(
                    b => b.id === this.id
                );
                const updatedBooks = [...books];
                updatedBooks[existingBookIndex] = this;
                fs.writeFile(p, JSON.stringify(updatedBooks), err => {
                    console.log(err);
                });
            }
        });
    }

    static allBooks(cb){
        getBooksFromFile(cb);
    }

    static deleteById(id, cb){
        getBooksFromFile(books => {
            id = Number(id);
            const newBooks = books.filter(b => b.id !== id);
            fs.writeFile(p, JSON.stringify(newBooks), err => {
                console.log('error');
            })
        });
    }

    static findById(id, cb){
        getBooksFromFile(books => {
            id = Number(id);
            const book = books.find(element => element.id === id);
            console.log(book);
            cb(book);
        });
    }
    
}