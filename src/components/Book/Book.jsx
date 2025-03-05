import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {

    const {bookId, image, bookName, author, tags, category, rating, totalPages} = book;

    return (
    <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm p-6">
            <figure className='bg-blue-200 py-8 rounded-2xl'>
                <img
                src={image}
                className='h-[166px]'
                alt={bookName} />
            </figure>
        <div className="card-body">
        <div className='flex justify-center gap-4'>
        {
                tags.map((tag, index) => <button key={index} className='btn btn-xs bg-blue-200 text-black'>{tag}</button>)
            }
        </div>
            <h2 className="card-title">
            {bookName}
            <div className="badge badge-outline badge-secondary">NEW</div>
            </h2>
            <p>By: {author}</p>
            <div className="divider"></div>
            <div className="card-actions justify-between">
            <div className="badge badge-outline badge-accent">{category}</div>
            <div>{rating}</div>
            <div>{totalPages}</div>
                    <div className="rating gap-1">
                        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" aria-label="1 star" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" aria-label="3 star" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" aria-label="4 star" />
                        <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" aria-label="5 star" />
                </div>
            </div>
        </div>
    </div>
</Link>
    );
};

export default Book;