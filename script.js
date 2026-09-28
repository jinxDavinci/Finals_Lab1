var showBtn = document.getElementById("showBtn");
var resultCard = document.getElementById("resultCard");
var infoList = document.getElementById("infoList");

function addRow(label, value, isEmail) {
  var row = document.createElement("div");
  row.className = "info-row";

  var labelText = document.createElement("div");
  labelText.className = "info-label";
  labelText.textContent = label;

  var valueText = document.createElement("div");
  valueText.className = "info-value";

  if (value === "") {
    valueText.textContent = "Not provided";
    valueText.classList.add("empty");
  } else if (isEmail === true) {
    var link = document.createElement("a");
    link.setAttribute("href", "mailto:" + value);
    link.textContent = value;
    valueText.appendChild(link);
  } else {
    valueText.textContent = value;
  }

  row.appendChild(labelText);
  row.appendChild(valueText);
  infoList.appendChild(row);
}

function showInfo() {
  var fullName = document.getElementById("fullName").value.trim();
  var email = document.getElementById("email").value.trim();
  var age = document.getElementById("age").value;
  var phone = document.getElementById("phone").value.trim();
  var birthday = document.getElementById("birthday").value;
  var address = document.getElementById("address").value.trim();
  var course = document.getElementById("course").value;
  var about = document.getElementById("about").value.trim();

  var genderInput = document.querySelector('input[name="gender"]:checked');
  var gender = "";
  if (genderInput !== null) {
    gender = genderInput.value;
  }

  var colorOption = document.querySelector("#favColor option:checked");
  var colorName = colorOption.textContent;
  var colorHex = colorOption.value;

  var hobbyBoxes = document.querySelectorAll(".hobby:checked");
  var hobbies = "";
  for (var i = 0; i < hobbyBoxes.length; i++) {
    if (i > 0) {
      hobbies = hobbies + ", ";
    }
    hobbies = hobbies + hobbyBoxes[i].value;
  }

  var oldRows = document.getElementsByClassName("info-row");
  while (oldRows.length > 0) {
    oldRows[0].remove();
  }

  if (fullName === "") {
    document.getElementById("resultTitle").textContent = "Your Information";
  } else {
    document.getElementById("resultTitle").textContent = fullName + "'s Information";
  }

  addRow("Full Name", fullName);
  addRow("Email Address", email, true);
  addRow("Age", age);
  addRow("Phone Number", phone);
  addRow("Birthday", birthday);
  addRow("Address", address);
  addRow("Gender", gender);
  addRow("Course", course);
  addRow("Favorite Color", colorName);
  addRow("Hobbies", hobbies);
  addRow("About Me", about);

  resultCard.style.borderTop = "6px solid " + colorHex;
  resultCard.classList.add("has-info");
}

showBtn.addEventListener("click", showInfo);
