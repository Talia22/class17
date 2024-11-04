import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api", // Use the base URL for Next.js API routes
  headers: {
    "Content-Type": "application/json",
  },
});


export const booksAPI = {
  getAll: () => apiClient.get("/books"),
  getById: (id: number) => apiClient.get(`/books/${id}`),
  deleteBook: (id: number) => apiClient.delete(`/books`, { data: { id } }), 
  createBook: (book: { title: string; price: number; author: string; image?: string; }) => apiClient.post("/books", book),
  updateBook: (data: { id: number; title: string; author: string }) => apiClient.put("/books", data),



//   create: (data: { title: string; author: string }) =>
//     apiClient.post("/books", data),

//   delete: (id: number) => apiClient.delete("/books", { data: { id } }),
};



