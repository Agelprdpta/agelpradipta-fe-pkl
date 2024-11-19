import React, { useState } from 'react';
import axios from 'axios';

const AddMoviesPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/movies', {
                title,
                description,
            });

            setMessage('Movies added successfully!');
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error adding movies:', error);
            setMessage('Failed to add movies.');
        }
    };

    return (
        <div className="container">
            <h1>Add New Movies</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Movies
                </button>
            </form>
        </div>
    );
};

export default AddMoviesPage;
