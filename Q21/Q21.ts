//21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const books: Book = {
    title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960
}
 



    console.log(books);
