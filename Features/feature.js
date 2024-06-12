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
const productContainer = [
    {
        title: "Launching in SNKRS",
        img: "./Features/feature-images/feature-img-1.png",
        note: "Jumpman Jack TR",
        type: "Men's Shoes ",
        color: "1 Color ",
        price: "$ 200" },
    {
        title: "Coming Soon",
        img: "./Features/feature-images/feature-img-2.png",
        note: "Nike Zoom Vomero 5",
        type: "Men's Shoes ",
        color: "1 Color ",
        price: "$ 160 " },
    {
        title: "Just In",
        img: "./Features/feature-images/feature-img-3.png",
        note: "Nike Air Max Ishod",
        type: "Men's Shoes ",
        color: "1 Color ",
        price: "$ 110 " },
    {
        title: "Just In",
        img: "./Features/feature-images/feature-img-4.png",
        note: "Jordan Artist Series by Darien Birks",
        type: "Men's T-Shirt",
        color: "2 Colors",
        price: "$ 50 " },
    {
        title: "Just In",
        img: "./Features/feature-images/feature-img-5.png",
        note: "Nike Killshot 2",
        type: "Women's Shoes",
        color: "2 Colors",
        price: "$ 50 " },
    {
        title: "",
        img: "./Features/feature-images/feature-img-6.png",
        note: "",
        type: "",
        color: "",
        price: "" },
    {
        title: "Launching in SNKRS",
        img: "./Features/feature-images/feature-img-7.png",
        note: "Air Jordan 4 Retro",
        type: "Men's Shoes",
        color: "1 Color",
        price: "$ 215" },
    {
        title:"Coming Soon",
        img: "./Features/feature-images/feature-img-8.png",
        note: "Nike Dunk Low Retro",
        type: "Men's Shoes",
        color: "1 Color",
        price: "$ 115" },
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-9.png",
        note: "Nike G.T. Cut Academy",
        type: "Basketball Shoes",
        color: "1 Color",
        price: "$ 95" },
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-10.png",
        note: "Air Jordan 4 Retro",
        type: "Big Kid's Shoes",
        color: "1 Color",
        price: "$ 150" },
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-11.png",
        note: "Nike Air Max Plus",
        type: "Men's Shoes",
        color: "1 Color",
        price: "$ 180"},
    {
        title:"Coming Soon",
        img: "./Features/feature-images/feature-img-12.png",
        note: "Nike Air Max Dn",
        type: "Shoes",
        color: "5 Colors",
        price: "$ 160"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-13.png",
        note: "Nike ACG Moc",
        type: "Men's Shoes",
        color: "1 Color",
        price: "$ 90"},
    {
        title:"Launching in SNKRS",
        img: "./Features/feature-images/feature-img-14.png",
        note: "Nike Dunk Low Retro",
        type: "Men's Shoes",
        color: "1 Color",
        price: "$ 115"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-15.png",
        note: "Air Jordan 1 Low Method of Make",
        type: "Women's Shoes",
        color: "2 Colors",
        price: "$ 135"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-16.png",
        note: "Jordan Spizike Low",
        type: "Men's Shoes",
        color: "1 Color",
        price: "$ 160"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-17.png",
        note: "Philadelphia Phillies Primetime Club",
        type: "Men's Nike MLB Adjustable Hat",
        color: "1 Color",
        price: "$ 30"},
    {
        title:"Best Seller",
        img: "./Features/feature-images/feature-img-18.png",
        note: "Air Jordan 5 Retro SE",
        type: "Men's Shoes",
        color: "1 Color",
        price: "$ 210"},
    {
        title:"Sustainable Materials",
        img: "./Features/feature-images/feature-img-19.png",
        note: "Nike Dunk Low Next Nature SE",
        type: "Women's Shoes",
        color: "1 Color",
        price: "$ 120"},
    {
        title:"Launching in SNKRS",
        img: "./Features/feature-images/feature-img-20.png",
        note: "Air Jordan 4 Retro",
        type: "Big Kids' Shoes",
        color: "1 Color",
        price: "$ 160"},
    {
        title:"",
        img: "./Features/feature-images/feature-img-21.png",
        note: "Nike Dunk Low LX",
        type: "Women's Shoes",
        color: "2 Colors",
        price: "$ 135"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-22.png",
        note: "Nike Dunk Low",
        type: "Women's Shoes",
        color: "1 Color",
        price: "$ 135"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-23.png",
        note: "Jordan Roam",
        type: "Slides",
        color: "2 Colors",
        price: "$ 60"},
    {
        title:"",
        img: "./Features/feature-images/feature-img-24.png",
        note: "Nike Dunk Low Retro SE",
        type: "Men's Shoes",
        color: "1 Color",
        price: "$ 125"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-25.png",
        note: "Jordan 2/3",
        type: "Men's Shoes",
        color: "1 Color",
        price: "$ 160"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-26.png",
        note: "Nike Dunk Low",
        type: "Big Kid's Shoes",
        color: "1 Color",
        price: "$ 100"},
    {
        title:"Coming Soon",
        img: "./Features/feature-images/feature-img-27.png",
        note: "LeBron XXI",
        type: "Basketball Shoes",
        color: "2 Colors",
        price: "$ 200"},
    {
        title:"",
        img: "./Features/feature-images/feature-img-28.png",
        note: "Nike Dunk Low",
        type: "Big Kid's Shoes",
        color: "2 Colors",
        price: "$ 90"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-29.png",
        note: "Air Jordan 1 Low SE",
        type: "Big Kid's Shoes",
        color: "2 Colors",
        price: "$ 110"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-30.png",
        note: "Jumpman MVP",
        type: "Women's Shoes",
        color: "1 Color",
        price: "$ 165"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-31.png",
        note: "Air Jordan 1 Low SE Craft",
        type: "Men's Shoes",
        color: "1 Color",
        price: "$ 125"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-32.png",
        note: "Air Jordan 1 Low SE",
        type: "Men's Shoes",
        color: "1 Color",
        price: "$ 125"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-33.png",
        note: "Nike Dunk Low Retro",
        type: "Men's Shoes",
        color: "1 Color",
        price: "$ 115"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-34.png",
        note: "Nike Zoom Vomero 5",
        type: "Women's Shoes",
        color: "1 Color",
        price: "$ 160"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-35.png",
        note: "Jordan 6 Rings",
        type: "Women's Shoes",
        color: "1 Color",
        price: "$ 170"},
    {
        title:"Just In",
        img: "./Features/feature-images/feature-img-36.png",
        note: "Air Jordan 1 Low",
        type: "Men's Shoes",
        color: "1 Color",
        price: "$ 115"},
]

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
