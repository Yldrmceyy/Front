//1: Fetch API ile GET İsteği

//Bir API'den kullanıcı verilerini çeken bir fonksiyon yazın.
//Verileri çekmek için Fetch API kullanın.
//Verileri başarılı bir şekilde aldığınızda konsola yazdırın.

const getUserData = function (userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};
getUserData(1);


const getAllUsers = function () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };
  
  getAllUsers();



//2: Fetch API ile POST İsteği

//Bir API'ye yeni bir kullanıcı verisi gönderen bir fonksiyon yazın.
//Veriyi göndermek için Fetch API kullanın.
//Gönderim başarılı olduğunda sunucunun döndürdüğü yanıtı konsola yazdırın.

const postUserData = function (userData) {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };
  
  // Örnek kullanım: Yeni bir kullanıcı verisi gönderme
  const newUser = {
    name: 'Ceylan Yıldırım',
    username: 'yldrmceyy',
    email: 'cey@example.com'
  };
  
  postUserData(newUser);
  