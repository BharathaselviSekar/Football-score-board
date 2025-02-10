let teamAEl = document.getElementById("team-A")
let teamBEl = document.getElementById("team-B")
let count_a = 0
let count_b = 0

function increaseOne(){
    count_a += 1
    teamAEl.textContent = count_a
}
function increaseTwo(){
    count_a += 2
    teamAEl.textContent = count_a
}
function increaseThree(){
    count_a += 3
    teamAEl.textContent = count_a
}
function increase1(){
    count_b += 1
    teamBEl.textContent = count_b
}
function increase2(){
    count_b += 2
    teamBEl.textContent = count_b
}
function increase3(){
    count_b += 3
    teamBEl.textContent = count_b
}
