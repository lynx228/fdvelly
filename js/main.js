const menuButton = document.getElementById("menuButton"); 
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("active");
        });
    }

const navigationLinks = document.querySelectorAll(".navigation a");

    navigationLinks.forEach((link) => { 
        link.addEventListener("click", () => { navigation.classList.remove("active"); 

        }); 
    });

const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { 
        threshold: 0.15 
    });

    sections.forEach((section) => {
        observer.observe(section);
        });

const character = document.querySelector(".hero-character");

window.addEventListener("mousemove", (event) => {
    if (!character) {
        return;
    }

    const x = (window.innerWidth / 2 - event.clientX) / 50;
    const y = (window.innerHeight / 2 - event.clientY) / 50;
    character.style.transform = `translate(${x}px, ${y}px)`;
});

const galleryItems = document.querySelectorAll(".gallery-item");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");

galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
        const image = item.dataset.image;
        const title = item.dataset.title;
        modalImage.src = image;
        modalImage.alt = title;
        modalTitle.textContent = title;
        imageModal.classList.add("active");
        document.body.style.overflow = "hidden";
        });
    });

function closeImageModal() {
    imageModal.classList.remove("active");
    document.body.style.overflow = "";
}

modalClose.addEventListener( "click", closeImageModal );

imageModal.addEventListener( "click", (event) => {
    if (event.target === imageModal) {
        closeImageModal();
    }
});

document.addEventListener( "keydown", (event) => {
    if (event.key === "Escape" && imageModal.classList.contains("active"))
    {
        closeImageModal();
    }
})
