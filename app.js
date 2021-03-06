const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/test.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/test.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/test.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/test.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/test.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/test.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/test.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/test.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/test.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/test.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const sectionCenter = document.querySelector('.section-center')
const filterBtns = document.querySelectorAll('.filter-btn')


// load items 
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
})
//  filter items 
filterBtns.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        // using dataset property u can use html and do data-id='all' and get indevidual things 
        // console.log(e.currentTarget.dataset.id);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItem) => {
            // console.log(menuItem.category);
            if(menuItem.category === category) {
                return menuItem
            }
        })
        // console.log(menuCategory);
        if(category === 'all') {
            displayMenuItems(menu)
        }else{
            displayMenuItems(menuCategory)
        }
    })
})






const displayMenuItems = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
      // console.log(item);

      return `<article class="menu-item">
                <img src="${item.img}" class="photo" alt="menu item">
                <div class="item-info">
                    <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`;
    });
    // how to make them all in one instead of multiples , so it looks like actual html the .join("") method makes this work
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}