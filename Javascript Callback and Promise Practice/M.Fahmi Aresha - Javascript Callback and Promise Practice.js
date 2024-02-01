// fetchUserData with callback
function fetchUserDataWitchCallback(username, callback) {
    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
    .then(response => {
    if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    return response.json();
    })
    .then(data => {
        callback(null, data);
    })
    .catch(error => {
        callback(error, null);
    });
}
  
fetchUserDataWitchCallback('fahmiaresha', function(error, data) {
if (error) {
    console.error(`Error: ${error.message}`);
} else {
    console.log('Data from GitHub API:', data);
}
});

// fetchUserData with promise
function fetchUserDataWithPromise(username) {
    const apiUrl = `https://api.github.com/users/${username}`;
  
    return new Promise((resolve, reject) => {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  // Example usage
  fetchUserDataWithPromise('fahmiaresha')
    .then(data => {
      console.log('Data from GitHub API 2:', data);
    })
    .catch(error => {
      console.error(`Error: ${error.message}`);
    });


// loadimage with callback  
function loadImageWithCallback(imageUrl, successCallback, errorCallback) {
    const imgElement = new Image();
    
    imgElement.onload = function() {
        // Gambar berhasil dimuat
        successCallback(imgElement);
    };
    
    imgElement.onerror = function() {
        // Gagal memuat gambar
        errorCallback(new Error('Failed to load the image.'));
    };
    
    // Set atribut src dengan URL gambar
    imgElement.src = imageUrl;
}
    
    // Contoh penggunaan
    loadImageWithCallback(
    'https://images.unsplash.com/photo-1683009427041-d810728a7cb6?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    function(successImg) {
        console.log('Gambar berhasil dimuat:', successImg);
    },
    function(error) {
        console.error('Error:', error.message);
    }
    );

// load email with promise
function loadImage(imageUrl) {
    return new Promise((resolve, reject) => {
      const imgElement = new Image();
  
      imgElement.onload = function() {
        // Gambar berhasil dimuat
        resolve(imgElement);
      };
  
      imgElement.onerror = function() {
        // Gagal memuat gambar
        reject(new Error('Failed to load the image.'));
      };
  
      // Set atribut src dengan URL gambar
      imgElement.src = imageUrl;
    });
  }
  
  // Contoh penggunaan
  loadImage('https://images.unsplash.com/photo-1683009427041-d810728a7cb6?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    .then(successImg => {
      console.log('Gambar berhasil dimuat :', successImg);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  

    function fetchPosts() {
        return new Promise((resolve, reject) => {
          fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
              if (!response.ok) {
                throw new Error(`Failed to fetch posts. Status: ${response.status}`);
              }
              return response.json();
            })
            .then(posts => {
              resolve(posts);
            })
            .catch(error => {
              reject(error);
            });
        });
      }
      
      function fetchComments() {
        return new Promise((resolve, reject) => {
          fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
              if (!response.ok) {
                throw new Error(`Failed to fetch comments. Status: ${response.status}`);
              }
              return response.json();
            })
            .then(comments => {
              resolve(comments);
            })
            .catch(error => {
              reject(error);
            });
        });
      }
      
      // Chaining Promise untuk mengambil data posts, kemudian comments
      fetchPosts()
        .then(posts => {
          console.log('Jumlah Posts:', posts.length);
          return fetchComments(); // Return Promise untuk chaining
        })
        .then(comments => {
          console.log('Jumlah Comments:', comments.length);
        })
        .catch(error => {
          console.error('Error:', error.message);
        });
      