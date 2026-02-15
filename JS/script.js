const loadPetList = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then(res => res.json())
        .then(data => displayAllPet(data.categories))
}

const displayAllPet = (categorie) => {
    const allPet = document.getElementById("All-pet");

    categorie.forEach(pet => {

        const button = document.createElement("button");
        button.classList = "btn bg-[#0E7A8110]";
        button.innerHTML = `
    <img class="h-10 w-10" src="${pet.category_icon}">
    <p class="text-xl font-bold">${pet.category}</p>
    `
        allPet.append(button)
    });
}


const loadAllCard = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(res => res.json())
        .then(data => displayAllCord(data.pets))
}

const displayAllCord = (allCord) => {
    const cardContinar = document.getElementById("card-continar");

    allCord.forEach(card => {
        console.log(card)
        const div = document.createElement("div");
        div.classList = "card bg-base-100 shadow-sm p-4 border-2";
        div.innerHTML = `
         <figure>
            <img src="${card.image}"/>
        </figure>
        <div class="">
            <h2 class="card-title mb-2">${card.pet_name}</h2>
            <div class="flex itmes-center"><i class="fa-solid fa-braille"></i><p>Breed: ${card.breed}</p></div>
            <div class="flex itmes-center"><i class="fa-solid fa-calendar-days"></i><p>Birth: ${card.date_of_birth}</p></div>
            <div class="flex itmes-center"><i class="fa-solid fa-mercury"></i><p>Gender: ${card.gender}</p></div>
            <div class="flex itmes-center"><i class="fa-solid fa-dollar-sign"></i><p>Price : ${card.price}$</p></div>
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


loadPetList();
loadAllCard();