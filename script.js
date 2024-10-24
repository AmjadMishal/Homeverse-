"use strict";

const main = document.querySelector(".main");
const faq = document.querySelectorAll(".faq");
const faqsection = document.querySelector(".faqsection");
const buysection = document.querySelector(".buysection");
const footerlabel = document.querySelector(".footerheading");
const findhome = document.querySelector(".findhome");
const explore = document.querySelector(".exploreOverlay");
const contact = document.querySelector(".contact");
const scontact = document.querySelectorAll(".snavcont");
const sprop = document.querySelector(".snavprop");
// Sidebar JS:
function showSidebar() {
  const sidebar = document.querySelector(".sidbarWrraper");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidbarWrraper");
  sidebar.style.display = "none";
}

//Navbar JS:
const navLinks = document.querySelectorAll(".navItems");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    let current = document.querySelector(".active");
    current.classList.remove("active");
    navLinks[i].classList.add("active");
    if (
      main.classList.contains("hidepart") &&
      !faqsection.classList.contains("hidepart")
    ) {
      main.classList.remove("hidepart");
      faqsection.classList.add("hidepart");
      footerlabel.classList.remove("hidepart");
    }
    if (
      main.classList.contains("hidepart") &&
      !buysection.classList.contains("hidepart")
    ) {
      main.classList.remove("hidepart");
      buysection.classList.add("hidepart");
      footerlabel.classList.remove("hidepart");
    }
    if (
      main.classList.contains("hidepart") &&
      !contact.classList.contains("hidepart")
    ) {
      main.classList.remove("hidepart");
      contact.classList.add("hidepart");
      footerlabel.classList.remove("hidepart");
    }
    if (i === 4) {
      open();
    }
    if (i == 5) {
      opentcontact();
    }
  });
}
const opentcontact = function () {
  contact.classList.remove("hidepart");
  buysection.classList.add("hidepart");
  faqsection.classList.add("hidepart");
  main.classList.add("hidepart");
  footerlabel.classList.add("hidepart");
};
const open = function openprop() {
  buysection.classList.remove("hidepart");
  faqsection.classList.add("hidepart");
  main.classList.add("hidepart");
  footerlabel.classList.add("hidepart");
  contact.classList.add("hidepart");
  for (let i = 0; i < 4; i++) {
    navLinks[i].classList.remove("active");
  }
  navLinks[4].classList.add("active");
};
findhome.addEventListener("click", open);
explore.addEventListener("click", open);
for (let i = 0; i < scontact.length; i++) {
  scontact[i].addEventListener("click", opentcontact);
}

sprop.addEventListener("click", open);
// Sign Up and Log In JS:
const toogleUser = document.querySelectorAll(".log");
const form = document.querySelectorAll(".form");
const logOverlay = document.getElementById("logOverlay");
const user = document.querySelector(".userlogin");
for (let i = 0; i < toogleUser.length; i++) {
  toogleUser[i].addEventListener("click", function () {
    form[0].classList.toggle("displayme");
    form[1].classList.toggle("displayme");
  });
}

logOverlay.addEventListener("click", function (e) {
  if (e.target === logOverlay) {
    logOverlay.style.display = "none";
  }
});

user.addEventListener("click", () => {
  logOverlay.style.display = "flex";
});

function submitbutton() {
  const userData = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    confirm: document.getElementById("confirm").value,
  };
  console.log(userData);
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (
    !userData.username ||
    !userData.email ||
    !userData.password ||
    !userData.confirm
  ) {
    alert("Plaese fill all required fields.");
  }
  if (userData.password !== userData.confirm) {
    alert("password does not match.");
  }
  if (
    userData.username &&
    userData.email &&
    userData.password &&
    userData.confirm === userData.password
  ) {
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration Successful");
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm").value = "";
    logOverlay.style.display = "none";
  }
}

function login() {
  const loginEmail = document.getElementById("lemail").value;
  const loginPassword = document.getElementById("lpassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  let foundUser = null;

  users.forEach((user) => {
    if (user.email === loginEmail && user.password === loginPassword) {
      foundUser = user;
    }
  });

  if (foundUser) {
    alert(`Login successful!`);
    document.getElementById("lemail").value = "";
    document.getElementById("lpassword").value = "";
  } else {
    alert("Login failed: Incorrect email or password.");
  }
}

// Faq section js:
for (let i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    if (!main.classList.add("hidepart")) {
      main.classList.add("hidepart");
    }
    if (!buysection.classList.contains("hidepart")) {
      buysection.classList.add("hidepart");
    }
    // buysection.classList.add("hidepart");
    faqsection.classList.remove("hidepart");
    footerlabel.classList.add("hidepart");
    contact.classList.add("hidepart");
  });
}

function clickh(ansid) {
  const a = document.getElementById(ansid);
  if (a.style.display === "none" || a.style.display === "") {
    a.style.display = "block";
  } else {
    a.style.display = "none";
  }
}

// Buy section JS:
function clicked() {
  var a = document.getElementById("hide");
  if (a.style.display === "none" || a.style.display === "") {
    a.style.display = "block";
    showmore.innerHTML = "Show Less->";
  } else {
    a.style.display = "none";
    showmore.innerText = "Show More->";
  }
}
function click() {
  var a = document.getElementById("hide");
  if (a.style.display === "none" || a.style.display === "") {
    a.style.display = "block";
    showmore.innerHTML = "Show Less->";
  } else {
    a.style.display = "none";
    showmore.innerText = "Show More->";
  }
}
function showml(buyid, showmore) {
  var show = document.getElementById(buyid);
  var btntxt = document.getElementById(showmore);

  if (show.style.display === "none" || show.style.display === "") {
    show.style.display = "block";
    btntxt.innerHTML = `Show Less <i class="fa-solid fa-arrow-right"></i>`;
  } else {
    show.style.display = "none";
    btntxt.innerHTML = `Show More <i class="fa-solid fa-arrow-right"></i>`;
  }
}

var h = document.querySelectorAll("#heart");
for (let i = 0; i < h.length; i++) {
  h[i].addEventListener("click", function () {
    h[i].classList.toggle("fa-solid");
  });
}

var x = document.querySelectorAll(".buycart");
var a = document.getElementById("addtocart");
var count = 1;
for (let i = 0; i < x.length; i++) {
  x[i].addEventListener("click", function () {
    if (count <= 5) {
      a.innerHTML = count;
      count++;
    } else {
      alert("Maximum limit reached");
    }
  });
}

// Contact Us JS:
function validateForm() {
  var name = document.getElementById("name1").value;
  var email = document.getElementById("email1").value;
  var message = document.getElementById("message1").value;

  if (name == "" || email == "" || message == "") {
    alert("All fields are required!");
    return false;
  } else {
    alert("Message sent successfully!");
    document.getElementById("contactForm").reset();
    return true;
  }
}
