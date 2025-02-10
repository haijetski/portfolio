// Atualizar ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Lazy loading para thumbnails
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
});

// Formulário de contato
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch('/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            this.reset();
        } else {
            throw new Error('Erro ao enviar mensagem');
        }
    } catch (error) {
        alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
        console.error('Erro:', error);
    }
});

// Animação suave ao scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".expandable");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-btn");

    images.forEach(img => {
        img.addEventListener("click", function () {
            lightbox.style.display = "flex"; // Mostra o lightbox
            lightboxImg.src = this.src; // Define a imagem correta
        });
    });

    // Fecha ao clicar no botão X
    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Fecha ao clicar fora da imagem
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});

