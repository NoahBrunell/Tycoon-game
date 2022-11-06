let score = 0
let multiplier = 1.0
let multiplierCost = 10
let people = 0
let peopleCost = 5

const target = document.getElementById("targetspan")
const megis = document.getElementById("megis")
const multiplierTarget = document.getElementById("multiplierspan")
const multiplierCostTarget = document.getElementById("multipliercost")
const peopleTarget = document.getElementById("peoplespan")

function buyMultiplier() {
    if (score >= multiplierCost) {
        multiplier = multiplier + 0.1
        console.log(multiplier)
        score = score - multiplierCost
        target.textContent = Math.trunc(score)
        multiplierTarget.textContent = multiplier.toFixed(1)
        if (multiplierCost >= 10000) {
            multiplierCost = multiplierCost + 1000
        } else {
            if (multiplierCost >= 1000) {
                multiplierCost = multiplierCost + 200
            } else {
                if (multiplierCost < 500) {
                    multiplierCost = multiplierCost + 10
                } else {
                    multiplierCost = multiplierCost + 50
                }
            }
        }

        multiplierCostTarget.textContent = multiplierCost
    } else {
        alert("You need more megis!")
    }
}

function countMegis() {
    score = score + multiplier
    target.textContent = Math.trunc(score)
}