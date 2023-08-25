// local reviews data

const reviews = [ 
{
   id:1,
   name: "susan smit",
   jop : "web developer",
   img : "images/images (14).jpg",
   Text:
    "What is a paragraph? Paragraphs are the building blocks of papers."
},
 {
    id: 2,
    name: "anna johnson",
    jop: "web designer",
    img : "images/images (14).jpg",
    Text: 
    "A paragraph is a series of sentences that are organized and coherent"
 },
{
    id: 3,
    name: "hisham rehab",
    jop: "web designer",
    img:"images/images (3).jpg",
    Text: 
    "A paragraph is a series of sentences that are organized and coherentand are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help."
},
{
    id: 4,
    name: "anna johnson",
    jop: "web designer",
    img:"images/images (3).jpg",
    Text: 
    "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help."
},

];
// select items

const img = document.getElementById("person img");
const author =document.getElementById("author");
const jop = document.getElementById("jop");
const  info = document.getElementById("info");

const  prevBtn = document.querySelector(".prev-btn");
const  nextBtn = document.querySelector(".next-btn");
const  randomBtn = document.querySelector(".random-btn");


// set starting item
let currentItem =0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
showPerson(currentItem);
});

// show parson based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    jop.textContent = item.jop;
    info.textContent = item.Text;
}

// show next person
nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})
prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// show random person
randomBtn.addEventListener("click" , function(){
    currentItem = Math.floor(Math.random()* reviews.length);
    showPerson(currentItem);
})
