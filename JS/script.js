// function load all pet categories start
const loadAllCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then(res => res.json())
        .then(data => displayAllPet(data.categories))
}

const displayAllPet = (categorie) => {
    const allPet = document.getElementById("All-pet");

    categorie.forEach(pet => {

        const button = document.createElement("button");
        button.classList = " bg-[#0E7A8110] flex items-center justify-center btn";
        button.innerHTML = `
    <img class="h-10 w-10" src="${pet.category_icon}">
    <p class="text-xl font-bold">${pet.category}</p>
    `
        button.addEventListener("click", () => {
            petCategory(pet.category);
        });
        allPet.append(button)
    });
}
loadAllCategories();
// function load all pet categories end

// show model section 
const loadPetDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        .then(res => res.json())
        .then(data => displayPetDetalis(data.petData));
};

const displayPetDetalis = (details) => {
    const detalisBox = document.getElementById("details-Continar");

    detalisBox.innerHTML = `
        <div class="space-y-2 border-2 rounded-md mt-4 p-4">
            <img class="h-auto w-full bg-gray-100 p-4 rounded-md" src="${details.image ?? ""}">
            
            <h2 class="text-xl font-bold">${details.pet_name ?? "No Name"}</h2>
            
            <p><b>Breed:</b> ${details.breed ?? "Not Available"}</p>
            <p><b>Birth:</b> ${details.date_of_birth ?? "Not Available"}</p>
            <p><b>Gender:</b> ${details.gender ?? "Not Available"}</p>
            <p><b>Price:</b> ${details.price ? details.price + "$" : "Not Available"}</p>
            <p><b>Vaccinated:</b> ${details.vaccinated_status ?? "Unknown"}</p>
            <p class="text-sm text-gray-500 mt-2">${details.pet_details ?? ""}</p>
        </div>
    `;

    document.getElementById("my_modal_5").showModal();
};




// function load all pet card start
const loadAllCard = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(res => res.json())
        .then(data => displayAllCord(data.pets))
}

const petCategory = (categoryName) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
        .then(res => res.json())
        .then(data => displayAllCord(data.data))
}

const displayAllCord = (allCord) => {
    const cardContinar = document.getElementById("card-continar");
    cardContinar.innerHTML = "";

    if (allCord.length === 0) {
        const messageDiv = document.createElement("div");
        messageDiv.className = "flex flex-col items-center col-span-3 justify-center text-center p-10 bg-gray-100 rounded-lg m-4";
        messageDiv.innerHTML = `
         <img src="assets/error.webp" class="mb-4" alt="No Data" />
            <h2 class="text-xl font-bold mb-2">No Information Available</h2>
            <p class="text-gray-500">It seems there are no pets in this category at the moment.</p>
        `
        cardContinar.appendChild(messageDiv)
        return;
    }

    allCord.forEach(card => {
        const div = document.createElement("div");
        div.classList = "card bg-base-100 shadow-sm p-4 border-2";
        div.innerHTML = `
         <figure>
            <img src="${card.image}"/>
        </figure>
        <div class="">
            <h2 class="card-title mb-2 space-y-2">${card.pet_name}</h2>
            <div class="flex items-center"><i class="fa-solid fa-braille"></i><p>Breed: ${card.breed}</p></div>
            <div class="flex items-center"><i class="fa-solid fa-calendar-days"></i><p>Birth: ${card.date_of_birth}</p></div>
            <div class="flex items-center"><i class="fa-solid fa-mercury"></i><p>Gender: ${card.gender}</p></div>
            <div class="flex items-center"><i class="fa-solid fa-dollar-sign"></i><p>Price : ${card.price}$</p></div>
            <div class="flex justify-between mt-2">
                <button onclick="showImg('${card.image}')" class="px-4 py-1 border-2 rounded-md btn"><i class="fa-solid fa-thumbs-up"></i></button>
                <button class="px-4 py-1 border-2 rounded-md btn text-[#0E7A81]">Adopt</button>
                <button onclick="loadPetDetails('${card.petId}')" class="px-4 py-1 border-2 rounded-md btn text-[#0E7A81]">Details</button>
            </div>
        </div>
        `
        cardContinar.append(div)
    });

};
loadAllCard();
// function load all pet card end



// Function to add the image to the display section when 'like button is clicked
const showImg = (image) => {
    const imageContainer = document.getElementById("display-img");

    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.classList.add("w-auto", "h-auto", "object-cover", "p-2", "rounded-xl");

    imageContainer.appendChild(imgElement);
};

// const sortPrice=()=>{

// }