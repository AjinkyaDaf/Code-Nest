import { useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";
import "./Books.css";
import Navbar from "../Navbar/Navbar"

const Books = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=40')
                .then(res => setData(res.data.items))
                .catch(err => console.log(err))
        }
    }
    return (
        <>
        <div className="animation-container">
            <Navbar />

            <div className="book-header">
                <h1>A room without <span  className="text sec-text">Books</span> is like a body without a soul.</h1>
                    <p>Explore endless literary possibilities with our Book Finding website! Uncover captivating books across various genres effortlessly. Search by topics, authors, or genres, and enjoy a visually engaging display of book cards. Dive deeper with "Know More" buttons, revealing detailed information and convenient purchase links. Your next great read is just a click away</p>
                    <br/>
                    <hr/>
                    <br/>

                <div>
                    <h2>Find Your Book 📚</h2>
                    <div className="book-search">
                        <input type="text" placeholder="Enter Your Book Name"
                            value={search} onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook} />
                        <button>Search Books</button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>
           

            <div className="books-container">
                {
                    <BookCard book={bookData} />
                }
            </div>
            </div>
        </>
    )
}
export default Books;