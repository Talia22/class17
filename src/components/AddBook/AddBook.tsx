import React, { useEffect, useState } from 'react';
import { booksAPI } from '../../app/services/apiService';
import styles from './AddBook.module.css'; 

interface BookItem {
    id: number;
    title: string;
    author: string;
    price: number;
    image?: string; 
}

interface AddBookProps {
    onBookAdded: () => void; 
    bookToEdit?: BookItem | null; 
}

const AddBook: React.FC<AddBookProps> = ({ onBookAdded, bookToEdit }) => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>(''); 

    useEffect(() => {
        if (bookToEdit) {
            setTitle(bookToEdit.title);
            setAuthor(bookToEdit.author);
            setPrice(bookToEdit.price.toString());
            setImageUrl(bookToEdit.image || '');
        }
    }, [bookToEdit]);

    type NewBook = { 
        title: string; 
        author: string; 
        price: number; 
        image?: string; 
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newBook: NewBook = { 
            title, 
            author, 
            price: parseFloat(price), 
            image: imageUrl || undefined 
        };

        if (bookToEdit) {
            await booksAPI.updateBook({ ...newBook, id: bookToEdit.id });
        } else {
            await booksAPI.createBook(newBook);
        }

        onBookAdded();
        resetFields();
    };

    const resetFields = () => {
        setTitle('');
        setAuthor('');
        setPrice('');
        setImageUrl('');
    };

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <h2 className={styles.title}>{bookToEdit ? 'Edit Book' : 'Add New Book'}</h2>
            <input 
                type="text" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
                className={styles.inputField} 
            />
            <input 
                type="text" 
                placeholder="Author" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                required 
                className={styles.inputField} 
            />
            <input 
                type="number" 
                placeholder="Price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                required 
                className={styles.inputField} 
            />
            <input 
                type="url" 
                placeholder="Image URL (optional)" 
                value={imageUrl} 
                onChange={(e) => setImageUrl(e.target.value)} 
                className={styles.inputField} 
            />
            <div className={styles.buttonContainer}>
                <button type="submit" className={styles.addButton}>
                    {bookToEdit ? 'Update Book' : 'Add Book'}
                </button>
            </div>
        </form>
    );
};

export default AddBook;
