console.log("hello");

cardArray = [
    {

    name:"Apple",
    image: "images/apple.jpg"
},
{

    name:"Grapes",
    image: "images/grapes.jpg"
},
{

    name:"strawberry",
    image: "images/strawberry.jpg"
},

{

    name:"Mango",
    image: "images/Mango.jpg"
},

{

    name:"jackfruit",
    image: "images/jackfruit.jpg"
},

]


cardArray.sort(() => 0.5 - Math.random());

function createArray(){

    for(i=0;i< cardArray.length;i++){

        const card = document.createElement("img");
        card.setAttribute("src", "images/blank.png");
        card.setAttribute("id", i);
        card.setAttribute("class", "imageid");
        console.log(cardArray);

        const imageGrid = document.querySelector(".grid");
        imageGrid.appendChild(card);

        // console.log(card, i);
        card.addEventListener("click", flipCard)
    }

}

createArray();


function flipCard() {
    let imageId =this.getAttribute('id');
    console.log("clicked");
    console.log(imageId);
    console.log(cardArray[imageId].name);
    
}