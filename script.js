// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}


function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}


// Mobile Menu Toggle
document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("show");
});
document.getElementById("enquiryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let whatsappNumber = "7200338060"; // WhatsApp number
    let text = `Hello, I am ${name}.
Phone: ${phone}
Email: ${email}
Requirement: ${message}`;

    let url = `https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    document.getElementById("successPopup").style.display = "flex";
});
function closePopup() {
    document.getElementById("successPopup").style.display = "none";
}
const links = document.querySelectorAll(".header-right a");
    const currentPage = location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

//contact form

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let location = document.getElementById("location").value.trim();
  let message = document.getElementById("message").value.trim();
  let msg = document.getElementById("formMsg");

  // Validation
  if(name === "" || phone === "" || message === ""){
    msg.style.color = "red";
    msg.innerText = "Please fill all required fields.";
    return;
  }

  if(phone.length < 10){
    msg.style.color = "red";
    msg.innerText = "Enter a valid mobile number.";
    return;
  }

  let whatsappMessage =
`New Appointment Request
Name: ${name}
Phone: ${phone}
Location: ${location}
Requirement: ${message}`;

  let whatsappNumber = "917200338060"; // NO +, NO SPACE

  let isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  let whatsappURL = isMobile
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  window.location.href = whatsappURL; // ✅ more reliable than window.open
});













