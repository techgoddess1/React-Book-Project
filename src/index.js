import React from "react";
import ReactDom from "react-dom";
import './index.css'


function Books() {
  return (
    <section className="books" >
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
      return <article className='book' >
        <CoverImage/>
        <Title/>
        <Author/>
      </article>
};
const CoverImage = () => ( 
  <img width='200' src="https://m.media-amazon.com/images/I/51AQQAR2A1L._AC_UL480_FMwebp_QL65_.jpg" alt="peter rabbit"
/>
);
const Title = () => <h1>Peter Rabbit</h1>
const Author = () => <p>by Beatrix Potter</p>;



ReactDom.render(<Books/>, document.getElementById("root"));

