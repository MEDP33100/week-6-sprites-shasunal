const zooContainer = document.querySelector(".container");

class Animal {
    constructor(data){
        this.creature = data.creature;
        this.weight = data.weight;
        this.HighestJump = data.HighestJump;
        this.image = data.image;

        this.element = document.createElement('div');
        this.element.classList.add('animal');
    }

    displayAnimal(){
        const creatureElement = document.createElement('p');
        creatureElement.classList.add('creature');
        creatureElement.innerText = `${this.creature}`;

        const weightElement = document.createElement('p');
        weightElement.classList.add('weight');
        weightElement.innerText = `Weight: ${this.weight}`;

        const jumpElement = document.createElement('p');
        jumpElement.classList.add('HighestJump');
        jumpElement.innerText = `Highest Jump: ${this.HighestJump}`;

        const imageElement = document.createElement('img');
        imageElement.classList.add('image');
        imageElement.src = this.image;
        imageElement.alt = this.creature;

        this.element.append(creatureElement, weightElement, jumpElement, imageElement);
        zooContainer.appendChild(this.element);

    
    }
}

// Fetch JSON 
fetch('animals.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(animalData => {
            const animal = new Animal(animalData);
            animal.displayAnimal();
        });
    })

