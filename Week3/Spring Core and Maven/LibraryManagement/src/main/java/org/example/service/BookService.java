package org.example.service;

import org.example.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;
    public void setBookRepository(BookRepository bookRepository)
    {
        this.bookRepository = bookRepository;
    }
    public void printBookName()
    {
        System.out.println("Book: " + bookRepository.getBookName());
    }
}
