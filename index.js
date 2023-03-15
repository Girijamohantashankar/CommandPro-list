window.onload = () => {
  const form1 = document.querySelector("#addForm");

  let items = document.getElementById("items");
  let iteminput1 = document.getElementById("iteminput1");
  let submit = document.getElementById("submit");

  let editItem = null;

  form1.addEventListener("submit", addItem);
  items.addEventListener("click", removeItem);
};

function addItem(e) {
  e.preventDefault();

  if (submit.value != "Submit") {
    console.log("Hello");

    editItem.target.parentNode.childNodes[0].data =
      document.getElementById("item").value;
    editItem.target.parentNode.childNodes[0].data =
      document.getElementById("item-in").value;

    submit.value = "Submit";
    document.getElementById("item").value = "";
    document.getElementById("item-in").value = "";

    document.getElementById("lblsuccess").innerHTML =
      "Text edited successfully";

    document.getElementById("lblsuccess").style.display = "block";

    setTimeout(function () {
      document.getElementById("lblsuccess").style.display = "none";
    }, 3000);

    return false;
  }

  let newItem = document.getElementById("item").value;
  if (newItem.trim() == "" || newItem.trim() == null) return false;
  else document.getElementById("item").value = "";
  document.getElementById("item-in").value = "";

  let li = document.createElement("li");
  li.className = "list-group-item";

  let deleteButton = document.createElement("button");

  deleteButton.className = "btn-danger btn btn-sm float-right delete";

  deleteButton.appendChild(document.createTextNode("Delete"));

  let editButton = document.createElement("button");

  editButton.className = "btn-success btn btn-sm float-right edit";

  editButton.appendChild(document.createTextNode("Edit"));

  li.appendChild(document.createTextNode(newItem));
  li.appendChild(deleteButton);
  li.appendChild(editButton);

  items.appendChild(li);
}

function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure?")) {
      let li = e.target.parentNode;
      items.removeChild(li);
      document.getElementById("lblsuccess").innerHTML =
        "Text deleted successfully";

      document.getElementById("lblsuccess").style.display = "block";

      setTimeout(function () {
        document.getElementById("lblsuccess").style.display = "none";
      }, 3000);
    }
  }
  if (e.target.classList.contains("edit")) {
    document.getElementById("item").value =
      e.target.parentNode.childNodes[0].data;
    document.getElementById("item-in").value =
      e.target.parentNode.childNodes[0].data;
    submit.value = "EDIT";
    editItem = e;
  }
}

function toggleButton(ref, btnID) {
  document.getElementById(btnID).disabled = false;
}

// ---------------------

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//   ====================delete========

function mydelete() {
  const element = document.getElementById("card");
  element.remove();
}
function mydelete2() {
  const element2 = document.getElementById("card2");
  element2.remove();
}
function mydelete3() {
  const element3 = document.getElementById("card3");
  element3.remove();
}
function mydelete4() {
  const element4 = document.getElementById("card4");
  element4.remove();
}


// =================================================

// $(document).ready(function () {
//   $("#myDIV").hide();
//   $("#hide").attr('disabled', true);
//   $("#hide").click(function () {
//       $("#myDIV").hide();
//       $("#hide").attr('disabled', true);
//       $("#show").attr('disabled', false);

//   });
//   $("#show").click(function () {
//       $("#myDIV").show();
//       $("#hide").attr('disabled', false);
//       $("#show").attr('disabled', true);
//   });
// });