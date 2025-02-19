function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}


// Show Menu with Flip Animation
function showMenu() {
    let menuOverlay = document.getElementById("menuOverlay");
    menuOverlay.style.display = "flex";
    setTimeout(() => {
        menuOverlay.classList.add("show");
    }, 100);
}

// Close Menu
function closeMenu() {
    let menuOverlay = document.getElementById("menuOverlay");
    menuOverlay.classList.remove("show");
    setTimeout(() => {
        menuOverlay.style.display = "none";
    }, 300);
}
document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    let dish = document.getElementById("dish").value;
    let quantity = document.getElementById("quantity").value;
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;

    let message = `Order Details:%0AName: ${name}%0AMobile: ${mobile}%0ADish: ${dish}%0AQuantity: ${quantity}%0AAddress: ${address}`;
    
 let whatsappURL = `intent://send/?phone=918853066278&text=${message}#Intent;scheme=whatsapp;package=com.whatsapp;end;`;

window.location.href = whatsappURL;
});
