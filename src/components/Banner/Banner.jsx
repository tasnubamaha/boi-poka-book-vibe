import React from 'react'
import bannerImg from '../../assets/books.jpg'

export const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-28">
    <img
      src={bannerImg}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br></br> your bookself</h1>
      <button className="btn btn-primary mt-16 ">View the List</button>
    </div>
  </div>
</div>
  );
};
