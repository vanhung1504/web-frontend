function createElement(tagName, attributes, ...child) {
  const tag = document.createElement(tagName);
  Object.assign(tag, attributes);
  tag.append(...child);

  return tag;
}

// Render danh sach san pham
function createProduct(product) {
  const result = createElement(
    "div",
    { className: "product" },
    createElement(
      "div",
      { className: "thumbnail" },
      createElement("img", { src: product.image, alt: product.title })
    ),
    createElement(
      "div",
      { className: "meta" },
      createElement("h3", { className: "product-title" }, product.title),
      createElement(
        "div",
        { className: "priceRate" },
        createElement("div", { className: "price" }, "$", product.price),
        createElement(
          "div",
          { className: "rate" },
          createElement("i", { className: "fa-solid fa-star" }),
          createElement("i", { className: "fa-solid fa-star" }),
          createElement("i", { className: "fa-solid fa-star" }),
          createElement("i", { className: "fa-solid fa-star" }),
          createElement("i", { className: "fa-solid fa-star" }),
          createElement(
            "span",
            { className: "rate-point" },
            product.rating.rate
          )
        )
      )
    ),
    createElement("div", { className: "category" }, product.category),
    createElement(
      "button",
      {
        className: "add-to-cart",
        onclick: function () {
          addToCart(product);
        },
      },
      "Thêm vào giỏ hàng"
    )
  );

  const startYellow = Math.round(product.rating.rate);
  const starList = result.querySelectorAll(".fa-solid.fa-star");
  for (let i = 0; i < startYellow; ++i) {
    starList[i].classList.add("rate-yellow");
  }

  return result;
}

function createProductList(products) {
  const row = createElement("div", { className: "row f-wrap" });

  products.forEach((product) => {
    const col = createElement("div", { className: "col col-4" });
    const productElement = createProduct(product);
    col.append(productElement);
    row.append(col);
  });

  return row;
}

// Event shopping cart
if (localStorage.getItem("cartList") === null) {
  localStorage.setItem("cartList", JSON.stringify([]));
}

let cartList = JSON.parse(localStorage.getItem("cartList"));

function addToCart(product) {
  let isExist = false;

  cartList.forEach(function (cart) {
    if (cart.id === product.id) {
      isExist = true;
      cart.quantity += 1;
    }
  });

  if (!isExist) {
    cartList.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  const btnCart = document.querySelector(".btn-cart");
  btnCart.classList.add("shake");

  setTimeout(function () {
    btnCart.classList.remove("shake");
  }, 400);

  localStorage.setItem("cartList", JSON.stringify(cartList));
  showQuantity();
}

function showQuantity() {
  const totalCart = cartList.reduce(function (total, cart) {
    return total + cart.quantity;
  }, 0);

  const cartQuantityEle = document.querySelector(".cart-quantity");

  if (totalCart === 0) {
    cartQuantityEle.classList.add("d-none");
  } else {
    cartQuantityEle.classList.remove("d-none");
    cartQuantityEle.textContent = totalCart;
  }
}

function toggleShowCart(isShow) {
  const modal = document.querySelector(".modal");

  if (isShow) {
    document.body.style.overflow = "hidden";
    modal.classList.remove("d-none");
    createCartList(cartList);
  } else {
    document.body.style.overflow = "auto";
    modal.classList.add("d-none");
    showQuantity();
  }
}

function createCart(cart) {
  let result = createElement(
    "div",
    { className: "cart-item" },
    createElement(
      "div",
      { className: "cart-img" },
      createElement("img", { src: cart.image, alt: cart.title })
    ),
    createElement(
      "div",
      { className: "cart-meta" },
      createElement("h3", { className: "cart-item-name" }, cart.title),
      createElement("p", { className: "cart-item-price" }, `$${cart.price}`),
      createElement(
        "button",
        {
          className: "cart-item-delete",
          onclick: function () {
            popupEvent(
              deleteCartItem,
              "Bạn chắc chắn muốn xóa sản phẩm này chứ?",
              cartList.indexOf(cart)
            );
          },
        },
        "Xóa"
      )
    ),
    createElement(
      "div",
      {
        className: "cart-actions",
      },
      createElement(
        "div",
        {
          className: "cart-increase",
          onclick: function (e) {
            const index = cartList.indexOf(cart);
            cartList[index].quantity += 1;
            localStorage.setItem("cartList", JSON.stringify(cartList));
            createCartList(cartList);
          },
        },
        createElement("i", { className: "fa-solid fa-angle-up" })
      ),
      createElement("div", { className: "item-quantity" }, cart.quantity),
      createElement(
        "div",
        {
          className: "cart-decrease",
          onclick: function (e) {
            const index = cartList.indexOf(cart);

            if (cartList[index].quantity === 1) {
              popupEvent(
                deleteCartItem,
                "Bạn chắc chắn muốn xóa sản phẩm này chứ?",
                cartList.indexOf(cart)
              );
            } else {
              cartList[index].quantity -= 1;
            }
            localStorage.setItem("cartList", JSON.stringify(cartList));
            createCartList(cartList);
          },
        },
        createElement("i", { className: "fa-solid fa-angle-down" })
      )
    )
  );

  return result;
}

function createCartList(cartList) {
  const cartListEle = document.querySelector(".cart-list");
  const totalBox = document.querySelector(".total-box");
  const totalPrice = document.querySelector(".total-price");
  const clearCart = document.querySelector(".clear-cart");

  let total = 0;
  if (cartList.length === 0) {
    cartListEle.innerHTML = `<h3 class="cart-empty">Giỏ hàng của bạn hiện đang rỗng!</h3>`;
    totalBox.classList.add("d-none");
    clearCart.classList.add("d-none");
  } else {
    cartListEle.innerHTML = ``;
    cartList.forEach(function (cart) {
      total += cart.quantity * cart.price;
      cartListEle.append(createCart(cart));
    });
    totalBox.classList.remove("d-none");
    clearCart.classList.remove("d-none");
    totalPrice.textContent = "$" + Number(total.toFixed(10));
  }
}

function clearAllCart(isClear) {
  if (isClear) {
    cartList.length = 0;
    localStorage.setItem("cartList", JSON.stringify(cartList));
    createCartList(cartList);
  }
}

function deleteCartItem(isDelete, index) {
  if (isDelete) {
    cartList.splice(index, 1);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    createCartList(cartList);
  }
}

// Popup
function popupEvent(funct, title = "Are you sure?", any) {
  const popup = document.querySelector(".cd-popup");
  popup.querySelector(".cd-popup-title").textContent = title;
  popup.classList.add("is-visible");
  let count = 0;
  // Truong hop click chuot
  function mouseClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (
      e.target.contains(popup) ||
      e.target.classList.contains("cd-popup-close") ||
      e.target.textContent === "No"
    ) {
      callbackFunction(false);
    } else if (e.target.textContent === "Yes") {
      callbackFunction(true);
    }
  }

  // Truong hop thoat popup bang phim esc
  function keyboardPress(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.code === "Escape") {
      callbackFunction(false);
    } else if (e.code === "Enter" || e.code === "NumpadEnter") {
      callbackFunction(true);
    }
  }

  popup.addEventListener("click", mouseClick);
  document.addEventListener("keyup", keyboardPress);

  function callbackFunction(value) {
    count++;
    if (count >= 1) {
      popup.removeEventListener("click", mouseClick);
      document.removeEventListener("keyup", keyboardPress);
      popup.classList.remove("is-visible");
      funct(value, any);
    }
  }
}

// When load page
const app = document.querySelector("#app");
async function firstLoadPage() {
  app.classList.add("d-none");
  await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      const products = data;
      const container = document.querySelector("#app .container");
      container.append(createProductList(products));
    });
  showQuantity();
  app.classList.remove("d-none");
}
firstLoadPage();
