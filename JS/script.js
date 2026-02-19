const loadAllPetList = () => {
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
    cardContinar.innerHTML="";

    allCord.forEach(card => {
        const div = document.createElement("div");
        div.classList = "card bg-base-100 shadow-sm p-4 border-2";
        div.innerHTML = `
         <figure>
            <img src="${card.image}"/>
        </figure>
        <div class="">
            <h2 class="card-title mb-2">${card.pet_name}</h2>
            <div class="flex items-center"><i class="fa-solid fa-braille"></i><p>Breed: ${card.breed}</p></div>
            <div class="flex items-center"><i class="fa-solid fa-calendar-days"></i><p>Birth: ${card.date_of_birth}</p></div>
            <div class="flex items-center"><i class="fa-solid fa-mercury"></i><p>Gender: ${card.gender}</p></div>
            <div class="flex items-center"><i class="fa-solid fa-dollar-sign"></i><p>Price : ${card.price}$</p></div>
            <div class="card-actions justify-between">
                <button class="px-4 py-1 border-2 rounded-md "><i class="fa-solid fa-thumbs-up"></i></button>
                <button class="px-4 py-1 border-2 rounded-md text-[#0E7A81]">Adopt</button>
                <button class="px-4 py-1 border-2 rounded-md text-[#0E7A81]">Details</button>
            </div>
        </div>
        `
        cardContinar.append(div)
    })

}


loadAllPetList();
loadAllCard();