// How web works
// Static & Dynamic


// JSON server
// HTTP Verbs -- GET 
// Status Codes -- 

// Fetch


// Installing the JSON server
// npm install json-server --global


console.log("Its Works")

// Fetch Syntax
// fetch(url, {option})

const baseURL = "http://localhost:3000/characters"

fetch(baseURL)
  .then(res => res.json())
  .then(fetchedData => {
    data = fetchedData // data global
    displayData(data)
  })

function displayData(data) {
    const dataContainer  = document.getElementById("data")
    dataContainer.innerHTML = '';

    data.forEach( item => {
        // Creating div & img
        const itemElement = document.createElement('div')
        const img  = document.createElement('img');

        itemElement.textContent = `ID: ${item.id}, NAME: ${item.name}`
        img.src = item.image
        img.alt = item.name
        img.width = 100;

        dataContainer.appendChild(itemElement)
        itemElement.appendChild(img)
    });
}
// CRUD 
function createOrUpdate(id, name, image) {
  id = Number(id);
  name = name.trim();
  image = image.trim();

  fetch(`${baseURL}/${id}`)
    .then(response => {
      if (response.ok) {
        // ID exists → update
        return fetch(`${baseURL}/${id}`, {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({id, name, image})
        })
        .then(r => {
          if (!r.ok) throw new Error(`PUT failed with status ${r.status}`);
          return r.json();
        });
      } else {
     
        return fetch(baseURL, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({id, name, image})
        }).then(r => r.json());
      }
    })
    .then(item => {
      data = data.filter(d => d.id !== id);  // romove old item
      data.push(item);
      displayData(data);
    })
    .catch(err => console.error(err));
}


// Form Handling
document.getElementById('itemForm').addEventListener("submit", function(e) {
  e.preventDefault();

  const id = document.getElementById("id").value
  const name = document.getElementById("name").value
  const image = document.getElementById("image").value


  createOrUpdate(id, name, image)

  this.reset()
})


// Del