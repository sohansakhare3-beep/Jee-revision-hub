// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Subject Cards Toggle
document.querySelectorAll('.subject-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('i');
        
        content.classList.toggle('active');
        icon.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});

// Expand Notes
document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.note-card');
        const points = card.querySelector('.key-points');
        
        if (btn.innerHTML.includes('Expand')) {
            points.style.height = 'auto';
            btn.innerHTML = 'Collapse <i class="fas fa-minus"></i>';
        } else {
            points.style.height = '120px';
            btn.innerHTML = 'Expand <i class="fas fa-plus"></i>';
        }
    });
});

// Quiz Functionality
document.querySelector('.quiz-submit').addEventListener('click', () => {
    const answer = document.querySelector('input[name="q1"]:checked');
    if (answer && answer.value === 'a') {
        alert('🎉 Correct! Score: 1/1\nSI unit of force is Newton');
    } else {
        alert('❌ Wrong! Score: 0/1\nCorrect Answer: Newton');
    }
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Animate on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.weightage-card, .subject-card, .note-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});