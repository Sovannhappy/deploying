// Here is code blocks for hidden lists for new toolbar hover 
// const newFeature = document.querySelector(".toolbar2 .dropdown");
// const newFeatureList = document.querySelector(".toolbar2 .dropdown .list-hover");

const hoverWord = Array.from(document.querySelectorAll(".toolbar-hover a"));
const dropDownList = [...document.getElementsByClassName("dropdown")]
hoverWord.forEach((a, l) => {
    a.addEventListener('mouseover',() => {
        dropDownList[l].classList.remove('hide');
    })

    dropDownList[l].addEventListener('mouseleave', () => {
        dropDownList[l].classList.add('hide');
    })
})


//  Here is the end of top navigation bar dropdown codes

// Here is the beginning of product common components
document.querySelectorAll(".product").forEach((card) => {
    const cardTitle = card.getAttribute ("data-card-title")
    const cardImg = card.getAttribute ("data-card-imgSrc")
    const cardNote = card.getAttribute("data-card-note")
    const cardProductType = card.getAttribute("data-card-product-type")
    const cardProductColor = card.getAttribute("data-card-product-color")
    const cardProductPrice = card.getAttribute("data-card-product-price")
    
    const productCard = document.createElement("section");

    productCard.classList.add("container", "card-section" ,)
    productCard.innerHTML =`
    <img 
    src ="${cardImg}"/>
    <p class="product-red-heading">${cardTitle}</p>
    <p>${cardNote}</p>
    <p>${cardProductType}</p>
    <p>${cardProductColor}</p>
    <p>${cardProductPrice}</p>`
    card.appendChild(productCard)
});
