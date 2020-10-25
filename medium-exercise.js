// function timer() {
//     return new Promise((resolve, reject) => {
//       const randNum = Math.floor(Math.random() * 10000);
//       setTimeout(() => {
//         resolve(randNum)
//       }, randNum)
//     })  
//   }
  
//   const tortoise = timer();
//   const hare = timer();
  
//   console.log('Starting Race!')
//   Promise.all([tortoise, hare])
//     .then(results => {
//       const [tortoiseResult, hareResult] = results;
//       // Display the winner (or determine if it's a tie)
//       if (tortoiseResult > hareResult) {
//         console.log('Tortoise Wins')
//       } else if (hareResult > tortoiseResult) {
//         console.log('Hare Wins')
//       } else if (hareResult === tortoiseResult) {
//         console.log('DRAW')
//       }
//       console.log(`Tortoise: ${tortoiseResult * 0.001} seconds`);
//       console.log(`Hare: ${hareResult * 0.001} seconds`);
//     })


function fetchUrl(url) {
    return fetch(url)
      .then(res => res.json())
  }
  fetch('https://anapioficeandfire.com/api/books/1')
    .then((res) => {
      return res.json()
    })
    .then((bookData) => {
      console.log(bookData)
      // add title
      const title = document.getElementById('title');
      title.textContent = bookData.name;
      // add authors
      const ul = document.getElementById('authors');
      bookData.authors.forEach((author) => {
        const authorLi = document.createElement('li');
        authorLi.textContent = author;
        ul.appendChild(authorLi);
      })
      const charPromises = bookData.povCharacters.map((url) =>{
        return fetchUrl(url)
      })
      Promise.all(charPromises)
        .then(characters => {
          console.log(characters);
          const charList = document.getElementById('characters');
          characters.forEach(char => {
            const li = document.createElement('li');
            li.textContent = char.name;
            charList.appendChild(li)
          })
        })
    })