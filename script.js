
var apikey = "AIzaSyAjPF-5eo4gd1AiY8PL7p058Y9O3wjfIgs";

function search() { //Called when Search Button is pressed
    var query = document.getElementById("query").value;
    var output = document.getElementById("output");
    
    // URL for Google Books API
    var url = 'https://www.googleapis.com/books/v1/volumes?q=' + encodeURIComponent(query) + '&key=' + apikey;
  
    // Clear previous results
    output.innerHTML = '';
  
    // Fetch data from Google Books API
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.items) {
          // Display each book title and authors
          data.items.forEach(book => {
            var title = book.volumeInfo.title;
            var authors = book.volumeInfo.authors.join(', ');
            output.innerHTML += '<hr><p><strong class="book-name">' + title + '</strong></p>';
            output.innerHTML += '<br><strong class="book-author">' + 'By ' + authors + '</strong>';
          });
        } else {
          // No results found
          output.innerHTML = 'No books found for "' + query + '".';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        output.innerHTML = 'Failed to fetch books.';
      });
  }
  