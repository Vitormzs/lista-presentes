// Simple carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
    }

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(0);
});

document.addEventListener("DOMContentLoaded", function () {
    // Criar o botão caso ele não esteja no HTML
    if (!document.querySelector(".top-button")) {
        const button = document.createElement("button");
        button.classList.add("floating-button", "top-button");
        button.innerHTML = "↑";
        document.body.appendChild(button);
    }

    const topButton = document.querySelector(".top-button");

    if (topButton) {
        // Mostrar o botão ao rolar para baixo
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                topButton.style.display = "block";
            } else {
                topButton.style.display = "none";
            }
        });

        // Adicionar evento de clique para voltar ao topo
        topButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

