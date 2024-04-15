window.addEventListener('load', function () {

  const description = [
    {
      image: '../DNK/IMAGES/cardImage1.jpg',
      title1: '20% Off On Tank Tops',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.'

    },
    {
      image: '../DNK/IMAGES/cardImage2.jpg',
      title2: 'Latest Eyewear For You',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.'

    },
    {
      image: '../DNK/IMAGES/cardImage3.jpg',
      title3: 'Let s Lorem Suit Up!',
      content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.'

    }
  ]
  let cardRow = document.createElement('div')
  cardRow.className = 'row';

  // console.log(card)
  for (let i = 0; i <= description.length; i++) {
    let cards = document.getElementById('card');



    let cardcol = document.createElement('div')
    cardcol.className = 'col-sm-4';

    let cardName = document.createElement('div');
    //console.log(cards)
    cardName.className = 'card shadow cursor-pointer mr-5 mb-5';

    let cardImage = document.createElement('img')
    cardImage.src = description[i].image;
    cardImage.className = 'card-img img-height'

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body'

    let cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title'
    cardTitle.innerText = description[i].title1;

    let cardDesc = document.createElement('p');
    cardDesc.className = 'card-text'
    cardDesc.innerText = description[i].content;

    let cardButton = document.createElement('a')
    cardButton.className = 'btn btn-lg m-2 rounded-0 border-2 py-2 btn-shop';
    cardButton.innerText = 'SHOP NOW'


    cards.appendChild(cardRow);
    cardRow.appendChild(cardcol);
    cardcol.appendChild(cardName);

    // cards.appendChild(cardName);
    cardName.appendChild(cardImage);
    cardName.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDesc);
    cardBody.appendChild(cardButton);
  }
  cards.innerHTML += cardName;

});


const products = [
  {
    product_ID: 'P1',
    product_image: 'product1.jpg',
    product_title: 'DNK Yellow Shoes',
    product_offer: 'sale',
    product_type: 'Men',
    product_price: '120'


  },
  {
    product_ID: 'P2',
    product_image: 'product2.jpg',
    product_title: 'DNK Blue Shoes',
    product_type: 'Men',
    product_price: '200'


  },
  {
    product_ID: 'P3',
    product_image: 'product3.jpg',
    product_title: 'Dark Brown Jeans',
    product_type: 'Men',
    product_price: '150'


  },
  {
    product_ID: 'P4',
    product_image: 'product4.jpg',
    product_title: 'Blue Denim Jeans',
    product_type: 'Women',
    product_price: '150'


  },
  {
    product_ID: 'P5',
    product_image: 'product5.jpg',
    product_title: 'Basic Grey Jeans',
    product_type: 'Women',
    product_price: '150'


  },
  {
    product_ID: 'P6',
    product_image: 'product6.jpg',
    product_offer: 'sale',
    product_title: 'Blue Denim Shorts',
    product_type: 'Women',
    product_price: '150'


  },
  {
    product_ID: 'P7',
    product_image: 'product7.jpg',
    product_title: 'Anchor Bracelet',
    product_type: 'Accessories',
    product_price: '150'


  },
  {
    product_ID: 'P8',
    product_image: 'product8.jpg',
    product_title: 'Boho Bangle Bracelet',
    product_type: 'Accessories',
    product_price: '150'


  },
  {
    product_ID: 'P9',
    product_image: 'product9.jpg',
    product_title: 'Light Brown Purse',
    product_type: 'Accessories',
    product_price: '150'


  },
  {
    product_ID: 'P10',
    product_image: 'product10.jpg',
    product_title: 'Bright Red Bag',
    product_type: 'Accessories',
    product_price: '100'

  }
];
let card_container = document.getElementById('products');
let card_row = document.createElement('div')
card_row.className = 'row row-cols-1 row-cols-md-5 g-4'

function Products() {
  products.forEach((item, key) => {

    let card_col = document.createElement('div')
    card_col.className = 'col'
    let card_main = document.createElement('div');
    card_main.className = 'card border-0 bg-light ';

    if (item?.product_offer) {
      card_main.innerHTML = `            
            <img src="../DNK/IMAGES/${item.product_image}" class="position-relative cursor-pointer"/>
            <p class="position-absolute rounded-pill bg-white shadow p-1 my-3 mx-3 top-left">sale!  </p>
            <a id="ggg" class="position-absolute rounded-circle bg-white shadow p-1 top-right my-2" onclick="addCart(${key})" data-toggle="tooltip" data-placement="left" title="Hooray!"><i class="fa fa-shopping-bag" style="font-size:20px;color:black"></i></a>
              `
    } else {
      card_main.innerHTML = `
            
            <img src="../DNK/IMAGES/${item.product_image}" class="position-relative cursor-pointer"/>           
            <a id="ggg" class="position-absolute rounded-circle bg-white shadow p-1 top-right my-2" onclick="addCart(${key})" data-toggle="tooltip" data-placement="left" title="Hooray!"><i class="fa fa-shopping-bag" style="font-size:20px;color:black"></i></a>
              
            `
    }
    let card_body = document.createElement('div')
    card_body.className = 'card-body';
    card_body.innerHTML = `
            
            <h5 class="card-title" id="card-title-1">${item.product_title}</h5>
            <p class="card-text">${item.product_type}</p>
            <p class="card-text">$ ${item.product_price}.00</p>
            <p class="card-text">
              <i class="fa fa-star-o" aria-hidden="true"></i>
              <i class="fa fa-star-o" aria-hidden="true"></i>
              <i class="fa fa-star-o" aria-hidden="true"></i>
              <i class="fa fa-star-o" aria-hidden="true"></i>
              <i class="fa fa-star-o" aria-hidden="true"></i>
            </p>
            `
    card_container.appendChild(card_row)
    card_row.appendChild(card_col)
    card_col.appendChild(card_main)
    card_main.appendChild(card_body)
  });
}

Products();



let checkoutList = [];
let cartTotal = 0;
let Count = document.getElementById('item-count');
let cartAmount = document.getElementById('cart-total');
let offcanvasCartItem = document.getElementById('offcanvasCartList');
let canvasRow = document.createElement('div');
canvasRow.className = 'd-flex lex-row bd-highlight mb-3';
offcanvasCartItem.append(canvasRow)

function addCart(Id) {
  console.log(products[Id])
  if (checkoutList[Id] == null) {
    checkoutList[Id] = products[Id];
    checkoutList[Id].quantity = 1;
  }
  else {
    checkoutList[Id].quantity += 1;
  }

  // });
  reloadCart();

}


function reloadCart() {
  let Itemcount = 0;
  let totalPrice = 0
  checkoutList.forEach((item, key) => {
    Itemcount += item.quantity;
    totalPrice += parseInt(item.product_price * item.quantity);

    canvasRow.innerHTML = `
    
  <div class="p-2 bd-highlight"> <img src="../DNK/IMAGES/${item.product_image}" class="cartImage cursor-pointer"/> </div>
  <div class="p-2 bd-highlight">
  <p>${item.product_title}</p>
  <p>$ ${item.product_price}.00</p>
  </div>
  <div class="p-3 bd-highlight">
  <button>-</button>
  <span>${item.quantity}</span>
  <button>+</button>
  </div>
    `

  });
  Count.innerHTML = Itemcount;
  cartAmount.innerHTML = totalPrice;
}



function category() {

  const filterItems = [...new Set(products.map(item => item.product_type))]
  //  console.log(filterItems)

  let category_items = document.getElementById('categories');

  for (let i = 0; i < filterItems.length; i++) {
    let count = 0;
    products.forEach((item, key) => {
      if (item.product_type == filterItems[i]) {
        count += 1;
      }

    });
    let row = document.createElement('div')
    let col1 = document.createElement('div')
    let col2 = document.createElement('div')
    category_items.appendChild(row)
    row.appendChild(col1)
    row.appendChild(col2)
    row.className = 'd-flex flex-row bd-highlight mb-2 justify-content-between'
    col2.className = 'px-5'
    col1.innerHTML = `${filterItems[i]}`;
    col2.innerHTML = `${count}`;



    //  console.log(`Number of times ${filterItems[i]} repeates is: ${count}`)
  }

}
category();

function displayBestSellers()
{
  for(let i=0;i<=5;i++)
  {

  }
}