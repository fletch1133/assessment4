const complimentBtn = document.getElementById("complimentButton")
const boughtBtn = document.querySelector("#bought-list")
const soldBtn = docuemnt.querySelector("#sold-list")

const form = document.querySelector('form')
const input = document.querySelector('input')

const baseURL = 'https://localhost:4000/api/furniture'

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
}

const createFurniture = (arr) => {
    boughtList.innerHTML = ""
    soldList.innerHTML = ""

    arr.forEach((placeObj, index) => {
        let { bought, sold } = boughtObj
        let listItem = document.createElement('li')
        if(visited){
            listItem.innerHTML =`
            <span>${place}</span>
            <button onclick="changeFurniture(${index})">Sold</button>
            <button onclick="deleteFurniture(${index})">Delete</button>
            `
        boughtList.appendChild(listItem)
        } else {
            listItem.innerHTML = `
            <span>${furniture}</span>
            <button onclick="changeFurniture(${index})">Sold</button>
            <button onclick="deleteFurniture(${index})">Delete</button>
            `
            soldList.appendChild(listItem)
        }

    })
}
const addFurniture = (evt) => {
    evt.preventDefault()

    let bodyObj = {
        bought: input.value,
        sold: false
    }

    axios.put(baseURL, bodyObj)
    .then(response => {
        createFurnitures(response.data)
    })
    .catch(err => console.log(err))
}

complimentBtn.addEventListener('click', getCompliment)

complimentBtn.addEventListener('click', getCompliment)
form.addEventListener('click', addFurniture)
getAllFurniture()