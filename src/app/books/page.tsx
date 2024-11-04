
'use client';
import { useEffect, useState } from "react";
import { booksAPI } from "../services/apiService";
import Books from '../../components/Books/Books';
import AddBook from '../../components/AddBook/AddBook';




interface BookItem {
    id: number;
    title: string;
    price: number;
    author: string;
    description: string;
    image?: string;
}

const BooksPage = () => {
    const [books, setBooks] = useState<BookItem[]>([]);
    const [editingBook, setEditingBook] = useState<BookItem | null>(null); 


    useEffect(() => {
        const fetchBook = async () => {
            const response = await booksAPI.getAll();
            setBooks(response.data);
        };
        fetchBook();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await booksAPI.deleteBook(id);
            setBooks(books.filter(book => book.id !== id));
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const handleBookAdded = async () => {
        const response = await booksAPI.getAll();
        setBooks(response.data); 
        setEditingBook(null);
    };

    const handleUpdate = (book: BookItem) => {
        setEditingBook(book);
    };

    return (
        <div>
            <AddBook onBookAdded={handleBookAdded} bookToEdit={editingBook}/>
            <Books books={books} onDelete={handleDelete} onUpdate={handleUpdate} />
        </div>
    );


};

export default BooksPage;


