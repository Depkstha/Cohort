"use strict";

//accessing all dom
const gridButtons = document.querySelectorAll(".grid-view-btn");
const bookContainer = document.getElementById("bookContainer");
const sortSelect = document.getElementById("sort-select");
const searchInput = document.getElementById("search-input");
const BOOKS_PER_PAGE = 10;

// functionality to toggle list and grid view
gridButtons.forEach((button) => {
  button.addEventListener("click", () => {
    gridButtons.forEach((btn) => {
      btn.classList.remove("bg-amber-400/20", "border-amber-400/30");
      btn.classList.add("bg-white/5", "border-white/10");
    });

    button.classList.remove("bg-white/5", "border-white/10");
    button.classList.add("bg-amber-400/20", "border-amber-400/30");

    bookContainer.classList.toggle("grid-cols-1");
    bookContainer.classList.toggle("lg:grid-cols-3");
    bookContainer.classList.toggle("sm:grid-cols-2");
  });
});

//fetch books data
const fetchBooks = async (page = 1, query, limit) => {
  const API_URL = `https://api.freeapi.app/api/v1/public/books?page=${page}&limit=${limit}&query=${query}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  try {
    const response = await fetch(API_URL, options);

    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    return response.json();
  } catch (error) {
    console.error(error.message);
  }
};

//generate book card to append in html
const renderBookCards = (books) => {
  bookContainer.innerHTML = books
    .map(
      ({
        volumeInfo: {
          title,
          authors,
          publisher,
          publishedDate,
          imageLinks: { thumbnail },
          infoLink,
        },
      }) => `
    <div class="group bg-gray-800/80 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-amber-400/30 hover:-translate-y-1">
      <a target="_blank" href="${infoLink}">
      <div class="aspect-[5/4] bg-gray-700 relative overflow-hidden">
        <img src="${thumbnail}"
             alt="${title}"
             class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
      </div>
      <div class="p-4">
        <h3 class="font-semibold text-lg mb-2 text-gray-100">${title}</h3>
        <p class="text-gray-400 mb-2">${authors.join(",")}</p>
        <div class="flex justify-between items-center text-sm text-gray-500">
          <span>${publisher}</span>
          <span>${publishedDate}</span>
        </div>
      </div>
      </a>
    </div>
  `
    )
    .join("");
};

const renderPagination = ({
  page,
  limit,
  previousPage,
  nextPage,
  totalItems,
  currentPageItems,
}) => {
  if (bookContainer.nextElementSibling)
    bookContainer.nextElementSibling.remove();

  const currentPage = page;
  const previousPageIndex = currentPage - 1;
  const nextPageIndex = currentPage + 1;

  const html = `<div class="pagination flex flex-col items-center mt-5">
            <span class="text-sm text-gray-700 dark:text-gray-400">
                Showing
                <span class="font-semibold text-gray-900 dark:text-white">${
                  previousPageIndex * limit + 1
                }</span> to
                <span class="font-semibold text-gray-900 dark:text-white">${
                  previousPageIndex * limit + currentPageItems
                }</span> of
                <span class="font-semibold text-gray-900 dark:text-white">${totalItems}</span>
                Entries
            </span>
            <div class="inline-flex mt-2 xs:mt-0">
                <button ${
                  !previousPage && "disabled"
                } class="prev-button flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Prev
                </button>
                <button ${
                  !nextPage && "disabled"
                } class="next-button flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                </button>
            </div>
        </div>`;

  bookContainer.insertAdjacentHTML("afterend", html);

  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  prevButton.addEventListener("click", (e) => {
    e.preventDefault();
    showBookCards(previousPageIndex);
  });

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    showBookCards(nextPageIndex);
  });
};

const showBookCards = async (page, query, sort) => {
  const response = await fetchBooks(page, query, (limit = BOOKS_PER_PAGE));
  const books = response?.data?.data;

  const sortedBooks = books.sort((a, b) => {
    switch (sort) {
      case "newest":
          b.volumeInfo.publishedDate - a.volumeInfo.publishedDate
        break;
  
        case "oldest":
          a.volumeInfo.publishedDate - b.volumeInfo.publishedDate
        break;
    
        case "a-z":
          a.volumeInfo.publishedDate - b.volumeInfo.publishedDate
        break;

      default:
        break;
    }
  });

  if (books?.length === 0) {
    bookContainer.innerHTML = `<p class="text-white/60 text-center">No books found</p>`;
    return;
  } else {
    renderBookCards(response.data.data);
    renderPagination(response?.data);
  }
};

searchInput.addEventListener("keyup", (e) => {
  const query = e.target.value;
});

sortSelect.addEventListener("change", (e) => {
  const sortType = e.target.value;
});

document.addEventListener("DOMContentLoaded", () => {
  showBookCards();
});
