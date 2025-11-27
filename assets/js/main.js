document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Form Handling (Stub for now, as per PRD it should use Formspree or similar)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            // If using Formspree, we don't prevent default unless we want to handle via AJAX
            // For now, let's just log it or allow it to submit if action is set
            if (!form.getAttribute('action')) {
                e.preventDefault();
                alert('Thank you! This form is a demo. In production, this would send an email.');
                form.reset();
            }
        });
    });
});
