const loadPetList = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then(res => res.json())
        .then(data => displayAllPet(data.categories))
}

const displayAllPet = (categorie) =>{
    const allPet = document.getElementById("All-pet");

    categorie.forEach(pet => {
        console.log(pet)

    const button = document.createElement("button");
    button.classList = "btn bg-[#0E7A8110]";
    button.innerHTML = `
    <img class="h-10 w-10" src="${pet.category_icon}">
    <p class="text-xl font-bold">${pet.category}</p>
    ` 
      allPet.append(button)
    });

  
}


loadPetList();