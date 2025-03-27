"use strict";

//accessing all dom
const gridButtons = document.querySelectorAll(".grid-view-btn");
const bookContainer = document.getElementById("bookContainer");

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
const getBooksData = async (page, limit = 10) => {
  const url = `https://api.freeapi.app/api/v1/public/books?page=${page}&limit=${limit}`;
  const options = { method: "GET", headers: { accept: "application/json" } };

  try {
    const response = await fetch(url, options);

    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    return response.json();
  } catch (error) {
    console.error(error.message);
  }
};

//generate book card to append in html
const generateHTML = async () => {
  const data = await getBooksData(1, 10);
  const books = data?.data?.data;
  console.log(books);

  v<div
  class="group bg-gray-800/80 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-amber-400/30 hover:-translate-y-1"
>
  <div class="aspect-[5/4] bg-gray-700 relative overflow-hidden">
    <img
      src="https://img.drz.lazcdn.com/static/np/p/70933e3494b5c681584031bf9cc3683e.jpg_400x400q75.avif"
      alt="Book Cover"
      class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"
    ></div>
  </div>
  <div class="p-4">
    <h3 class="font-semibold text-lg mb-2 text-gray-100">
      The Silent Echo
    </h3>
    <p class="text-gray-400 mb-2">Johnathan Smith</p>
    <div
      class="flex justify-between items-center text-sm text-gray-500"
    >
      <span>Penguin Books</span>
      <span>2023</span>
    </div>
  </div>
</div>
};

generateHTML();
