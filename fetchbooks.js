// URL do ficheiro JSON no seu repositório GitHub
const jsonUrl = "https://raw.githubusercontent.com/joao1977-prog/Narrador/main/books.json";

// Função para carregar os dados do JSON
tasync function fetchBooks() {
  try {
    const response = await fetch(jsonUrl);
    if (!response.ok) {
      throw new Error("Erro ao carregar os dados dos livros");
    }
    const data = await response.json();
    return data.results; // Retorna a lista de livros
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Função para pesquisar livros por título ou autor
async function searchBooks(query) {
  const books = await fetchBooks();
  return books.filter(book => 
    book.title.toLowerCase().includes(query.toLowerCase()) ||
    book.authors.some(author => author.name.toLowerCase().includes(query.toLowerCase()))
  );
}

// Exemplo de uso:
searchBooks("Frankenstein").then(results => console.log(results));