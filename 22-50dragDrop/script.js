const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')


fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties){
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart(){
    console.log("drag Start")
    this.className += ' hold'
    setTimeout(() => {this.className = 'invisible', 0})
}
function dragEnd(){
    console.log("drag End")
    this.className = 'fill'
}
function dragOver(event){
    console.log("drag Over")
    event.preventDefault()
}
function dragEnter(event){
    console.log("drag Enter")
    event.preventDefault()
    this.className += ' hovered'
}
function dragLeave(){
    console.log("drag Leave")
    this.className = ' empty'
}
function dragDrop(){
    console.log("drag Drop")
    this.className = 'empty'
    this.append(fill)
}