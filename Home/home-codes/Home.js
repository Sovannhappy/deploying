/*----------Here is code blocks hidden lists for new toolbar hover ----------*/ 
const newFeature = document.querySelector(".toolbar2 .dropdown");
const newFeatureList = document.querySelector(".toolbar2 .dropdown .list-hover");

newFeature.addEventListener("mouseover", () => {
    newFeatureList.classList.remove('hide');
})
newFeature.addEventListener("mouseout", () => {
    newFeatureList.classList.add('hide');
})

const men = document.getElementsByClassName("dropdown")[1];
const listMen = document.getElementsByClassName("list-men")[0];
men.addEventListener("mouseover", () => {
    listMen.classList.remove('hide');
})
men.addEventListener("mouseout", () => {
    listMen.classList.add('hide');
})

const women = document.getElementsByClassName("dropdown")[2];
const listWomen = document.getElementsByClassName("list-women")[0];
women.addEventListener("mouseover", () => {
    listWomen.classList.remove('hide');
})
women.addEventListener("mouseout", () => {
    listWomen.classList.add('hide');
})

const kids = document.getElementsByClassName("dropdown")[3];
const listKids = document.getElementsByClassName("list-kids")[0];
kids.addEventListener("mouseover", () => {
    listKids.classList.remove('hide');
})
kids.addEventListener("mouseout", () => {
    listKids.classList.add('hide');
})

const accessories = document.getElementsByClassName("dropdown")[4];
const listAccessories = document.getElementsByClassName("list-accessories")[0];
accessories.addEventListener("mouseover", () => {
    listAccessories.classList.remove('hide');
})
accessories.addEventListener("mouseout", () => {
    listAccessories.classList.add('hide');
})
/*---------- Here is the end of hidden lists for new toolbar hover ----------*/
/*---------- Here is the beginning of common component main product display ----------*/
document.querySelectorAll(".image-container").forEach((product) => {
    const productImgSrc = product.getAttribute ("data-imgSrc")
    const productNote = product.getAttribute("data-special-note")
    const productName = product.getAttribute("data-product-name")
    const productButton = product.getAttribute("data-button")
    
    const overProductLabel = document.createElement("section");

    overProductLabel.classList.add("container", "over-label-section" ,)
    overProductLabel.innerHTML =`
    <img 
    src ="${productImgSrc}"/>
    <div class = "overlay-text">
        <p>${productNote}</p> 
    
    <h4>${productName}</h4>
    <button class="home-img-button">${productButton}</button>
    </div>`
    product.appendChild(overProductLabel)
    const button = overProductLabel.querySelector(".home-img-button");
    button.addEventListener("click", function(){
        window.location.href = "/Features/feature-codes/feature.html";
    })
});
/*----------Here is the end of common component main product display ----------*/ 

