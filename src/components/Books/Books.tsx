import React from 'react';
import Styles from './Books.module.css';

interface BookItem {
    id: number;
    title: string;
    price: number;
    author: string;
    description: string;
    image?: string;
}

interface BooksProps {
    books: BookItem[];
    onDelete: (id: number) => void;
    onUpdate: (book: BookItem) => void;
}

const Books: React.FC<BooksProps> = ({ books, onDelete, onUpdate }) => {
    return (
        <div>
            <h1>Books</h1>
            <div className={Styles.productsContainer}>
                {books.map(book => (
                    <div key={book.id} className={Styles.product}>
                        <h2 className={Styles.prodTitle}>{book.title}</h2>
                        <p>{book.author}</p>
                        <img
                            src={book.image || "https://via.placeholder.com/150"}
                            alt={book.title}
                        />
                        <p>{book.price}$</p>
                        <div className={Styles.buttonContainer}>
                            <button onClick={() => onDelete(book.id)}>Delete</button>
                            <button onClick={() => onUpdate(book)}>Update</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;

