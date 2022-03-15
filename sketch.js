var w = window.innerWidth;
var h = window.innerHeight; 
var myCanvas;

const addInput = document.getElementById("to-add");
const searchInput = document.getElementById("to-search");

const clearButton = document.getElementById("to-clear-btn");
const addButton = document.getElementById("to-add-btn");
const searchButton = document.getElementById("to-search-btn");

let clearClick = false;
let addClick = false;
let searchClick = false;

let BST;


function setup() {
  myCanvas = createCanvas(w, h);
  myCanvas.parent("container");
  
  background(250);
  BST = new BinarySearchTree(); 
}

function draw() {  
  UIButtonsClick();  
  UIButtonsActive();
  addNotes();
}


// buttons && inputs
function UIButtonsClick(){
  clearButton.addEventListener("click", function () {
    if(!clearClick){
       clearClick = true;
    }
  })
  
   addButton.addEventListener("click", function () {
    if (!addClick) {
      addClick = true;
    }
  });
  
  searchButton.addEventListener("click", function () {
    if (!searchClick) {
      BST.searchVisited = [];
      searchClick = true;
    }
  });
  
}

function UIButtonsActive(){
    if(clearClick){
    background(250)
    BST.deleteTree();
    BST = new BinarySearchTree();
    clearClick = false;
  }
  
  if (addClick) {
    displayNode();  
    addClick = false;
    addInput.value = "";
  }
  
  if(searchClick){
    BST.search(BST.root, searchInput.value);
    BST.paint();
    searchClick = false;
    searchInput.value = "";
  }
}

function displayNode() {
    BST.addNode(int(addInput.value));
    BST.paint();
}

function addNotes(){
  textAlign(CENTER)
  textSize(32);
  strokeWeight(1);
  text("NOTES", width/2 + width / 5, 100);
  text("NOTES", width/2 + width / 5, 200);
}








