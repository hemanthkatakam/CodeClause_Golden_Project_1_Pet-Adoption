// Sample data for available pets
const pets = [
    {
        name: "Fluffy",
        breed: "Golden Retriever",
        description: "Fluffy is a friendly and playful Golden Retriever looking for a loving home.",
        image: "https://res.cloudinary.com/db1v2vkbf/image/upload/v1690534911/5302d2b4e2834a3df5f81d832881c478_whxuoz.jpg"
    },
    {
        name: "Tommy",
        breed: "pug",
        description: "Tommy is a friendly and playful Pug looking for a loving home.",
        image: "https://res.cloudinary.com/db1v2vkbf/image/upload/v1690535216/Pug-dog_kxwxto.jpg"
    },
    {
        name: "Rocky",
        breed: "Huskey",
        description: "The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family. ",
        image: "https://res.cloudinary.com/db1v2vkbf/image/upload/v1690535570/Siberian-Husky-dog_hfjrwj.jpg"
    },
    {
        name: "Goldie",
        breed: "Goldfish",
        description: "The Goldfish is a freshwater fish in the family Cyprinidae of order Cypriniformes.",
        image: "https://res.cloudinary.com/db1v2vkbf/image/upload/v1690536196/1200px-Orange_Oranda_rbhnwy.jpg"
    },
    {
        name: " Charlie",
        breed: "amazon parrots",
        description: "Parrots, also known as psittacines, are birds of the order Psittaciformes and are found mostly in tropical and subtropical regions",
        image: "https://res.cloudinary.com/db1v2vkbf/image/upload/v1690536861/Scarlet-macaw_bk5nm4.jpg"
    },
    {
        name: "Whiskers",
        breed: "Siamese Cat",
        description: "Whiskers is a graceful and affectionate Siamese cat seeking a forever home.",
        image: "https://res.cloudinary.com/db1v2vkbf/image/upload/v1690534990/blog-159_600x_hueg4u.jpg"
    },
    {
        name: "dolly",
        breed: "Rex rabbitt",
        description: "The term rex rabbit refers informally to one of at least nine breeds of domestic rabbit.",
        image: "https://res.cloudinary.com/db1v2vkbf/image/upload/v1690537043/rabbit-475261_0_hnkin6.jpg"
    },
    
    // Add more pet objects as needed
];

// Function to generate pet cards and display them on the page
function displayPets() {
    const mainElement = document.querySelector("main");

    pets.forEach(pet => {
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");

        const petImage = document.createElement("img");
        petImage.src = pet.image;
        petCard.appendChild(petImage);

        const petName = document.createElement("div");
        petName.classList.add("pet-name");
        petName.textContent = pet.name;
        petCard.appendChild(petName);

        const petBreed = document.createElement("div");
        petBreed.classList.add("pet-breed");
        petBreed.textContent = pet.breed;
        petCard.appendChild(petBreed);

        const petDescription = document.createElement("div");
        petDescription.classList.add("pet-description");
        petDescription.textContent = pet.description;
        petCard.appendChild(petDescription);

        const adoptButton = document.createElement("button");
        adoptButton.classList.add("pet-button");
        adoptButton.textContent = "Adopt";
        adoptButton.addEventListener("click", () => {
            alert(`Congratulations! You have adopted ${pet.name}!`);
        });
        petCard.appendChild(adoptButton);

        mainElement.appendChild(petCard);
    });
}

// Call the function to display the pets when the page loads
document.addEventListener("DOMContentLoaded", displayPets);
