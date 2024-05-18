/* ===================VARIABLES GLOBALES=================== */
let d = document,
  LS = localStorage;

/* ===================REFERENCIAS=================== */
console.group("REFERENCIAS");
console.log("BASED IN ->", "https://www.w3schools.com/w3css/tryw3css_templates_fashion_blog.htm#");
console.log("imagen01 ->", "https://wallhaven.cc/w/nzmolg");
console.log("imagen02 ->", "https://wallhaven.cc/w/6qp96l");
console.log("imagen03 ->", "https://wallhaven.cc/w/8xo2x1");
console.log("imagen04 ->", "https://wallhaven.cc/w/4xklgd");
console.log("imagen05 ->", "https://wallhaven.cc/w/43wmq6");
console.log("imagen06 ->", "https://wallhaven.cc/w/4gjjdd");
console.log("imagen07 ->", "https://wallhaven.cc/w/ey66z8");
console.log("imagen08 ->", "https://wallhaven.cc/w/489d92");
console.log("imagen09 ->", "https://wallhaven.cc/w/47ewev");
console.log("imagen10 ->", "https://wallhaven.cc/w/v99jxm");
console.log("imagen11 ->", "https://wallhaven.cc/w/kwvvdm");
console.log("imagen12 ->", "https://wallhaven.cc/w/dppzyj");
console.log("imagen13 ->", "https://wallhaven.cc/w/vqoqq8");
console.log("imagen14 ->", "https://wallhaven.cc/w/z8ejmv");
console.log("imagen15 ->", "https://wallhaven.cc/w/j8wrgy");
console.log("imagen16 ->", "https://wallhaven.cc/w/vg3215");
console.log("imagen17 ->", "https://wallhaven.cc/w/vqqzk5");
console.log("imagen18 ->", "https://wallhaven.cc/w/nkgr1m");
console.log("imagen19 ->", "https://wallhaven.cc/w/p9y27e");
console.log("imagen20 ->", "https://wallhaven.cc/w/nrzj9w");
console.log("imagen21 ->", "https://wallhaven.cc/w/n6lxd6");
console.log("imagen22 ->", "https://wallhaven.cc/w/kx1dw1");
console.log("imagen23 ->", "https://wallhaven.cc/w/761e23");
console.log("imagen24 ->", "https://wallhaven.cc/w/dg7pjl");
console.log("imagen25 ->", "https://wallhaven.cc/w/eo7p8o");
console.log("imagen26 ->", "https://wallhaven.cc/w/nz9oeo");
console.log("imagen27 ->", "https://wallhaven.cc/w/0wvelx");
console.log("imagen28 ->", "https://wallhaven.cc/w/4lrg1p");
console.log("imagen29 ->", "https://wallhaven.cc/w/ne3y6k");
console.log("imagen30 ->", "https://wallhaven.cc/w/0p1qwj");
console.groupEnd();

/* ===================DELEGACION DE EVENTOS=================== */
d.addEventListener("click", e => {
  if (e.target.matches(".elLike1")) {
    agregarLikeCorriente(".like", ".elLike1", "value1");
  };
  if (e.target.matches(".elLike2")) {
    agregarLikeCorriente(".like2", ".elLike2", "value2");
  };
  if (e.target.matches(".elLike3")) {
    agregarLikeCorriente(".like3", ".elLike3", "value3");
  };
  if (e.target.matches(".fa-arrow-up-container")) {
    window.scrollBy({
      top: -250,
      behavior: 'smooth'
    });
  };
  if (e.target.matches(".fa-arrow-down-container")) {
    window.scrollBy({
      top: 250,
      behavior: 'smooth'
    });
  };
});

d.addEventListener("DOMContentLoaded", e => {
  alCargarAgregarLike(".like", ".elLike1", "value1", "von1");
  alCargarAgregarLike(".like2", ".elLike2", "value2", "von2");
  alCargarAgregarLike(".like3", ".elLike3", "value3", "von3");
});

/* ===================FUNCIONES CASERAS=================== */
function agregarLikeCorriente(class1, class2, newValue) {
  let $containerTextLike = d.querySelector(class1),
    $manito = d.querySelector(class2),
    valorTextLike = Number($containerTextLike.textContent);

  let aplicarLike = () => {
    $manito.classList.remove("fa-regular");
    $manito.classList.add("fa-solid");
    $containerTextLike.textContent = valorTextLike + 1;
    LS.setItem(newValue, $containerTextLike.textContent);
  }

  let quitarLike = () => {
    $manito.classList.remove("fa-solid");
    $manito.classList.add("fa-regular");
    $containerTextLike.textContent = valorTextLike - 1;
    LS.removeItem(newValue);
  }

  if ($manito.classList.contains("fa-regular")) {
    aplicarLike();
  }
  else {
    quitarLike();
  }
}

function alCargarAgregarLike(class1, class2, newValue, valueOriginal) {
  let $containerTextLike = d.querySelector(class1),
    $manito = d.querySelector(class2),
    valorTextLike = Number($containerTextLike.textContent);

  let aplicarLike = () => {
    $manito.classList.remove("fa-regular");
    $manito.classList.add("fa-solid");
    $containerTextLike.textContent = valorTextLike + 1;
  }

  if (LS.getItem(valueOriginal) === null) {
    LS.setItem(valueOriginal, $containerTextLike.textContent);
  }

  if (LS.getItem(newValue)) {
    aplicarLike();
  }
}

/* ===================CAMBIOS A ELEMENTOS=================== */

if (window.matchMedia("(min-width: 1200px)").matches) {
  let $main = d.querySelector(".main-principal"),
    $mainLeft = d.querySelector(".main__left");

  $main.style.height = ($mainLeft.scrollHeight - 10) + "px";
}

if (window.matchMedia("(min-width: 600px)").matches) {
  let $main = d.querySelector(".main-principal"),
    $mainLeft = d.querySelector(".main__left");

  $main.style.height = ($mainLeft.scrollHeight - 10) + "px";
}

if (window.matchMedia("(max-width: 600px)").matches) {
  let $main = d.querySelector(".main-principal"),
    $mainLeft = d.querySelector(".main__left");

  $main.style.height = ($mainLeft.scrollHeight + 1000) + "px";
}


