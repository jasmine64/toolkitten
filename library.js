//Library management system

class Book {

    constructor(bookId,title,author,publisher,ISBN,branch,shelfNumber, numberOfCopies, numberBooksBorrowed,numberOfCopiesLeft,currentState){
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.ISBN = ISBN;
        this.branch = branch;
        this.shelfNumber = shelfNumber;
        this.numberOfCopies = numberOfCopies;
        this.numberBooksBorrowed = numberBooksBorrowed;
        this.numberOfCopiesLeft = numberOfCopiesLeft;
        this.currentState = currentState;

        this.oneBookIdBorrow = function(){
            
            this.numberOfCopiesLeft = this.numberOfCopies - 1;
            alert(this.numberOfCopiesLeft);
            return [this.bookId, this.numberOfCopiesLeft];
        }

       this.availableBook = function() {
        
            if (bookId && title){
                this.numberOfCopiesLeft = this.oneBookIdBorrow()[1];
               
                    if (this.numberOfCopiesLeft> 0) {
                            this.currentState = "available";
                            let message = `Book with title: ${this.title} it is at branch ${this.branch},  on the shelf ${this.shelfNumber}  and is ${this.currentState} .` ;
                            alert(message);
                    } else {
                             this.currentState = "exhausted";
                            let message = `Book with id ${this.id} ,${this.author},${this.publisher},${this.ISBN} was not found + "."`;
                            alert(message);
                    }
              }
              return [this.id, this.currentState, this.numberOfCopiesLeft];
            }
            
        this.getBook=function() {
            return this.availableBook;
        }
        
    }
}


const meantToBe = new Book (1, "Mean To Be", "Morrill Lauren", "New York Ballantine Books", 283947476, "Beach Grove Branch",8,100,0);
meantToBe.oneBookIdBorrow();
meantToBe.availableBook();
meantToBe.getBook();

class Author {

    constructor(name, bookTitle, contractNumber, numberOfBooks, publishingType, publishingCompany, payment){
        this.name = name;
        this.bookTitle = bookTitle;
        this.contractNumber = contractNumber;
        this.numberOfBooks = numberOfBooks;
        this.publishingType = publishingType;
        this.publishingCompany = publishingCompany;
        this.payment = "$" + payment;
        this.getWrittenWork = function(){
            console.log(`${this.name} had written ,${this.numberOfBooks} book with title ${this.bookTile}.`);
             }
        this.hasReachedToAudience = function(){
            console.log(`Author book was published by, $(this.publishingCompany},which is of type ${this.publishingType}`);
        }
        this.getAuthorPayment = function(){
            console.log(`This author contract has the number ${this.contractNumber}  and received the sum: ${this.payment}  as a percentage of wholesale.`);
        }
    }
}

const morillLauren = new Author("Morrill Lauren", "Mean To Be", 17, 1, "traditional" ,"New York Ballantine Books", 10000);
morillLauren.getWrittenWork();
morillLauren.hasReachedToAudience();
morillLauren.getAuthorPayment();


class Branch {

    constructor(name, address, librarySystem, resource, service){
        this.name = name;
        this.address =address;
        this.librarySystem = librarySystem;
        this.resource = resource;
        this.service = service;
        this.getBranch = function(){
            console.log(`This branch name is ${this.name} and is located at ${this.address}`);
        }
        this.useCatalogClassification = function(){
            console.log(`Being part of ${this.librarySystem}, this branch use their catalog classification. `);
        }
        this.provideAccessToResources = function(){
            console.log(`${this.name} manage traditional resources as books,magazines,but also have ${this.resource}.`);
        this.hasService = function(){
            console.log(`Main service of a branch library is ${this.service}.`);
        }
        }
    }
}

const newyork = new Branch("58th Street Library", "127 East 58th StretLibrary New York", "New York Public Library System", "digital content","information literacy instructions");
newyork.getBranch();
newyork.useCatalogClassification();
newyork.provideAccessToResources();
newyork.hasService();


class Genre {

    constructor(communicationType, category){
        this.communicationType = communicationType;
        this.category = category;
        this.isDeterminedBy = function(){
            console.log(`The content of literary genre is a ${communicationType}, ${category}`);
         }
    } 
}
const comedy = new Genre("written  or spoken", "literary Composition");
comedy.isDeterminedBy();


class PublishingC0 {
    constructor(name, scope, activity, type, subdivision, expenses, year, numberOfBooks, numberOfAuthors, numberOfNewspapers){
        this.name = name;
        this.scope = scope;
        this.activity = activity;
        this.type = type;
        this.subdivision = subdivision;
        this.expenses = expenses;
        this.year = year;
        this.numberOfBooks= numberOfBooks
        this.numberOfAuthors= numberOfAuthors;
        this.numberOfNewspapers = numberOfNewspapers;
        this.getPublishingCo = function(){
            console.log(`${this.name} is a ${this.type} one, which  pays to the authors ${this.expenses}.It has a ${subdivision} subdivision.`);
        }
        this.offerService = function(){
            console.log(`To achieve  ${this.scope}, the publishing company has the main service: ${this.activity}.`);
            }
        this.getAnnualReport = function(){
            console.log(`${this.name} has published in ${this.year} for ${this.numberOfAuthors}, ${this.numberOfBooks} and ${this.numberOfNewspapers}.`);
        }
     }
}


const bloomsbury = new PublishingC0("Bloomsbury Publishing", "distribution of printed works", "printing", "modern", "newspaper publishing", "pre-publishing costs" , 2020, 12500, 35, 16800);
bloomsbury.getPublishingCo();
bloomsbury.offerService();
bloomsbury.getAnnualReport();