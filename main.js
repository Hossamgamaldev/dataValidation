var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescInput = document.getElementById('productDescInput');
var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn');
var productsContainer = [];
var currentIndex = 0;
if (localStorage.getItem('myProducts') != null) {
  productsContainer = JSON.parse(localStorage.getItem('myProducts'));
  displayProducts();
}
else {
  productsContainer = [];
}

function addProduct ()
{
  if (validName() == true &&validPrice() == true &&validCategory() == true &&validDesc() == true) {
    var product = {
      Name: productNameInput.value,
      Price: productPriceInput.value,
      categ: productCategoryInput.value,
      desc: productDescInput.value,
    };
    productsContainer.push(product);

    localStorage.setItem("myProducts", JSON.stringify(productsContainer));
    displayProducts();
    clearForm(); 
  } else {
    document.getElementById("alertName").classList.replace("d-none", "d-block");
    document.getElementById("alertPrice").classList.replace("d-none", "d-block");
    document.getElementById("alertCategory").classList.replace("d-none", "d-block");
    document.getElementById("alertDesc").classList.replace("d-none", "d-block");

  }


}

function displayProducts() {
  var container = ``;
  for (var i = 0; i < productsContainer.length; i++) {
    container += `<tr>
    <td>${i}</td>
    <td>${productsContainer[i].Name}</td>
    <td>${productsContainer[i].Price}</td>
    <td>${productsContainer[i].categ}</td>
    <td>${productsContainer[i].desc}</td>
    <td> <button class="btn btn-outline-warning " onclick='updateProduct(${i});'>update</button> </td>
        <td> <button class="btn btn-outline-danger" onclick="deleteProduct(${i});">delete</button> </td> 
    </tr>
    `
  }
  document.getElementById('tableBody').innerHTML = container;
}
function clearForm() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescInput.value = "";
}
function deleteProduct(index) {
  productsContainer.splice(index, 1);
  localStorage.setItem('myProducts', JSON.stringify(productsContainer));

  displayProducts();
}
function updateProduct(index) {
  updateBtn.classList.replace("d-none", "d-inline-block");
  addBtn.classList.add("d-none");
  currentIndex = index;
  productNameInput.value = productsContainer[index].Name;
  productPriceInput.value = productsContainer[index].Price;
  productCategoryInput.value = productsContainer[index].categ;
  productDescInput.value = productsContainer[index].desc;
}
function addUpdatedProduct() {
  updateBtn.classList.replace("d-inline-block", "d-none");
  addBtn.classList.remove("d-none"); 
  productsContainer[currentIndex].Name = productNameInput.value;
  productsContainer[currentIndex].Price = productPriceInput.value;
  productsContainer[currentIndex].categ = productCategoryInput.value;
  productsContainer[currentIndex].desc = productDescInput.value;
  localStorage.setItem('myProducts', JSON.stringify(productsContainer));
  displayProducts();
  clearForm();
}




function validName ()
{
  var theValidFormName = /[a-zA-Z]{3,8}/;
  if (theValidFormName.test(productNameInput.value) == true) {
    console.log("yes");
    return true;
  } else if (productNameInput.value == "") {
    document.getElementById("alertName").classList.replace("d-none", "d-block");
  } else {
    document.getElementById("alertName").classList.replace("d-none", "d-block");
  }
}
function validPrice() {
  var theValidFormPrice = /([1-9][0-9]|(80){,5})/;
  if (theValidFormPrice.test(productPriceInput.value) == true) {
    console.log("yes");
    return true;
  } else if (productPriceInput.value == "") {
    document.getElementById("alertPrice").classList.replace("d-none", "d-block");
  } else {
    document.getElementById("alertPrice").classList.replace("d-none", "d-block");
  }
}
function validCategory() {
  var theValidFormCategory = /[a-zA-Z]{4,10}/;
  if (theValidFormCategory.test(productCategoryInput.value) == true) {
    console.log("yes");
    return true;
  } else if (productCategoryInput.value == "") {
    document
      .getElementById("alertCategory")
      .classList.replace("d-none", "d-block");
  } else {
    document
      .getElementById("alertCategory")
      .classList.replace("d-none", "d-block");
  }
}
function validDesc() {
  var theValidFormName = /[a-zA-Z]{5,50}/;
  if (theValidFormName.test(productDescInput.value) == true) {
    console.log("yes");
    return true;
  } else if (productDescInput.value == "") {
    document.getElementById("alertDesc").classList.replace("d-none", "d-block");
  } else {
    document.getElementById("alertDesc").classList.replace("d-none", "d-block");
  }
}







