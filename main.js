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

  let sexes = ["male", "female", "Forklift Certified"]

// chatgpt is great for generating names

let catName = ""
let catSex = ""
let catImage = ""
let catBreeds = ["Orange","Bengal","Blackcat","Maine Coon","Tabby","Tuxedo"]
let catBreed = ""



function getDetails() {
    catName = catNames[Math.ceil(Math.random() * catNames.length)]
    document.querySelector("#cat-name").innerText = catName

    let maxAge = 20
    catSex = sexes[Math.ceil(Math.random() * sexes.length -1)]
    catBreed = catBreeds[Math.ceil(Math.random() * catBreeds.length) -1]
    catAge = Math.ceil(Math.random() * maxAge) 

    document.querySelector("#cat-sex").innerText = `Gender: ${catSex}`
    document.querySelector("#cat-age").innerText = `Age: ${catAge}`
    document.querySelector("#cat-breed").innerText = `Breed: ${catBreed}`
}

getDetails()

function getImage (tag) {
    catImage = `https://cataas.com/cat/${tag}`
    document.querySelector("#image").src = catImage
}