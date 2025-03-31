let catNames = [
    "Whiskers", "Mittens", "Shadow", "Smokey", "Tiger", "Tigger", "Boots", "Felix", "Garfield", "Sylvester",
    "Mochi", "Marshmallow", "Snickers", "Jellybean", "Pudding", "Sprinkles", "Cupcake", "Nibbles", "Pickles", "Biscuit",
    "Luna", "Cleo", "Bella", "Sophie", "Oliver", "Leo", "Sebastian", "Athena", "Duchess", "Salem",
    "Willow", "Maple", "Ivy", "Daisy", "Clover", "Storm", "River", "Pebbles", "Midnight", "Ember",
    "Cinnamon", "Oreo", "Cookie", "Peanut", "Waffles", "Honey", "Butterscotch", "Cocoa", "Chai", "Mango",
    "Meowster", "Catrick Swayze", "Purrlock Holmes", "Chairman Meow", "Catniss Everdeen", "Paws", "Tofu", "Noodle", "Cheeto", "Tuna",
    "Thor", "Loki", "Zeus", "Hades", "Hermes", "Freya", "Odin", "Merlin", "Gandalf", "Azrael",
    "Simba", "Nala", "Scar", "Mufasa", "Tom", "Cheshire", "Figaro", "Bagheera", "Puss", "Crookshanks",
    "Sora", "Hoshi", "Kiko", "Yuki", "Momo", "Taro", "Suki", "Kuro", "Tama", "Neko",
    "Bandit", "Ace", "Maverick", "Jinx", "Viper", "Onyx", "Rebel", "Fang", "Diesel", "Blade"
  ];

  let sexes = ["male","male","female","female","Forklift Certified"]

  let catBreeds = ["Orange","Bengal","Black","Maine coon","Tabby","Tuxedo"]

  let deniedCats = []
  let acceptedCats = []

// chatgpt is great for generating names

let catName = ""
let catSex = ""
let catImage = ""
let catBreed = ""


function getDetails() {
    catName = catNames[Math.ceil(Math.random() * catNames.length -1)]
    document.querySelector("#cat-name").innerText = catName

    let maxAge = 20
    catSex = sexes[Math.ceil(Math.random() * sexes.length -1)]
    catBreed = catBreeds[Math.ceil(Math.random() * catBreeds.length) -1]
    catAge = Math.ceil(Math.random() * maxAge) 

    document.querySelector("#cat-sex").innerText = `Gender: ${catSex}`
    document.querySelector("#cat-age").innerText = `Age: ${catAge} years old`
    document.querySelector("#cat-breed").innerText = `Breed/color: ${catBreed}`
    getImage(catBreed)

    console.log("woop")
}

function getImage (tag) { 
    catImage = `https://cataas.com/cat/${tag}?type=small`
    document.querySelector("#image").src = catImage
}


getDetails()

let acceptButton = document.querySelector("#accept-button")
    acceptButton.addEventListener("click", acceptCat)

let denyButton = document.querySelector("#dislike")
    denyButton.addEventListener("click", denyCat)

function acceptCat() {
    acceptedCats.push(catName)
    getDetails()
}

function denyCat() {
    deniedCats.push(catName)
    getDetails()
}
