import { NextResponse } from "next/server";

let books = [
    { id: 1, title: "The Help", price: 10.99, author: "Kathryn Stockett", 
        description: "A story about the friendships between African American maids and the white families they work for in the 1960s." , 
        image: "https://upload.wikimedia.org/wikipedia/en/e/ef/Thehelpbookcover.jpg" },
    { id: 2, title: "The Secret Life of Bees", price: 8.99, author: "Sue Monk Kidd", 
        description: "A coming-of-age story set in South Carolina in 1964, exploring themes of racism and female empowerment." ,
        image: "https://upload.wikimedia.org/wikipedia/en/1/1f/The_Secret_Life_of_Bees.jpg" },
    { id: 3, title: "Gone with the winds", price: 12.99, author: "Margaret Mitchell", 
        description: "A historical novel set during the American Civil War, focusing on the life of Scarlett O'Hara.",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Gone_with_the_Wind_cover.jpg/220px-Gone_with_the_Wind_cover.jpg" },
    { id: 4, title: "Big little lies", price: 9.99, author: "Liane Moriarty", 
        description: "A darkly comedic tale of murder, friendship, and the secrets that women keep.", 
        image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Big_Little_Lies_Cover.jpg" },
    { id: 5, title: "The Hitchhiker's Guide to the Galaxy", price: 10.99, author: "Douglas Adams", 
        description: "A science fiction comedy about the misadventures of Arthur Dent as he travels through space.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Z4J6ieuZ8ymNONqTJpY5uMI2_aLLqmdX9A&s" },
    { id: 6, title: "The Lord of the Rings", price: 15.99, author: "J.R.R. Tolkien", 
        description: "An epic fantasy novel about the quest to destroy the One Ring and the battle against Sauron.", 
        image: "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif" },
    { id: 7, title: "The Hobbit", price: 12.99, author: "J.R.R. Tolkien", 
        description: "A fantasy adventure that follows Bilbo Baggins as he joins a group of dwarves on a quest.", 
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Hobbit_cover.JPG/170px-Hobbit_cover.JPG" },
    { id: 8, title: "The Nightingale", price: 9.99, author: "Kristin Hannah", 
        description: "A historical novel about two sisters in France during World War II and their struggle to survive.", 
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/The_Nightingale_%282015_novel%29.jpg/220px-The_Nightingale_%282015_novel%29.jpg" },
    { id: 9, title: "The four winds", price: 11.99,author: "Kristin Hannah", 
        description: "A tale of love and resilience during the Great Depression.", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflVQHazUTLkqbp7TQNd2ACNaif-fdgxjwrw&s" },
];
export async function GET(){

    return NextResponse.json(books)
}


export async function DELETE(request: Request) {
    const { id } = await request.json(); 
    books = books.filter((book) => book.id !== id);
    return NextResponse.json({ message: "Book deleted successfully" });
}

export async function POST(request: Request) {
    const newBook = await request.json();
    newBook.id = books.length ? Math.max(...books.map(book => book.id)) + 1 : 1; // Assign a new ID
    books.push(newBook);
    return NextResponse.json(newBook);
}

export async function PUT(request: Request) {
    const updatedBook = await request.json();
    books = books.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
    );
    return NextResponse.json(updatedBook);
}
