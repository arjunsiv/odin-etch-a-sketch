const generateRandomColor = ()=>{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
const generateGrid = (size)=>{
    let columns = [];
    let rows = [];
    const container = document.querySelector(".container");
    container.style.display = "flex";
    container.style.flexDirection = "column"
    container.style.height = "80vh";
    container.style.width = "80vh";

    for(let i = 0; i<size; i++){
        const row = document.createElement("div");
        row.style.display = "flex"
        row.classList.add("square")
        container.appendChild(row);
        rows.push(row);
        for(let j= 0; j<size; j++){
            const column = document.createElement("div");
            row.appendChild(column);
            columns.push(column);
            column.classList.add("square");
            
            column.addEventListener("mouseover",(e)=>{
                e.target.style.backgroundColor = "#"+ generateRandomColor();
            })
        }
    }
}
let gridSize = 16
generateGrid(gridSize);

const handleOnclick = ()=>{
    gridSize = prompt('Enter number between 1 and 100');
    if(gridSize <1 || gridSize > 100){
        alert("Enter a value between 1 and 100");
        return;
    }
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    generateGrid(gridSize);
}

