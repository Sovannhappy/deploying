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
const mainProductList = [{
    img: "./Home/home-images/home-desktop-img-1.png",
    remark: "FLY WITH THE <br />JORDAN FAM",
    description: "Join us for three days for exclusive drops, special offers, and more.",
    button: "Shop"
}]
    <section class="main-display">
      <img src="./Home/home-images/home-desktop-img-1.png" />
      <div class="card-body">
        <h3 class="card-title">
          FLY WITH THE <br />
          JORDAN FAM
        </h3>
        <p class="card-text">
          Join us for three days for exclusive drops, special offers, and more.
        </p>
        <a href="feature.html"><button class="btn-main">Shop</button></a>
      </div>
    </section>

    <section class="main-grid-display">
      <main
        class="image-container"
        data-imgSrc="./Home/home-images/home-desktop-img-2.jpeg"
        data-special-note="Mother's Day"
        data-product-name="Gifts That Celebrate Mom"
        data-button="Shop"
      ></main>
      <main
        class="image-container"
        data-imgSrc="./Home/home-images/home-desktop-img-3.jpeg"
        data-special-note="New from Jordan"
        data-product-name="AJ1High OG <br />
          'Green Glow' & More"
        data-button="Shop"
      ></main>
      <main
        class="image-container"
        data-imgSrc="./Home/home-images/home-desktop-img-4.jpeg"
        data-special-note="New from Nike Running"
        data-product-name="Journey Run"
        data-button="Shop"
      ></main>
      <main
        class="image-container"
        data-imgSrc="./Home/home-images/home-desktop-img-5.jpeg"
        data-special-note="Chet Holmgren's Picks"
        data-product-name="On- and Off-Court Essentials"
        data-button="Shop"
      ></main>
    </section>
    <!-- /*----------  The end of main product display. ----------*/ -->
    <section class="new-this-week">
      <h2>NEW THIS WEEK</h2>
      <div class="middle-button">
        <a href="feature.html"><button>Shop Men's New Arrivals</button></a>
        <a href="feature.html"><button>Shop Women's New Arrivals</button></a>
      </div>
    </section>




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

