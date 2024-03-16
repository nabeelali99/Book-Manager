import React from "react";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";
import BookSingleCard from "./BookSingleCard";

export default function BooksCard({ books }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <BookSingleCard key={book._id} book={book} />
      ))}
    </div>
  );
}
