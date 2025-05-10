document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // In a real application, you would send this data to a server
                alert(`Thank you for your message, ${name}! We will get back to you soon.`);
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Scroll Animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // If element is in viewport
            if (elementPosition < windowHeight - 100) {
                // Add delay if specified
                const delay = element.getAttribute('data-delay');
                if (delay) {
                    setTimeout(() => {
                        element.classList.add('active');
                    }, parseInt(delay));
                } else {
                    element.classList.add('active');
                }
            }
        });
    };

    // Run animation check on load
    animateOnScroll();
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Product Card Hover Animation
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add to Cart Button Animation
    const addToCartButtons = document.querySelectorAll('.btn-small');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            // Get position
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            // Set position
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            // Remove after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Show added to cart message
            const productName = this.closest('.product-info').querySelector('h4').textContent;
            alert(`${productName} added to cart!`);
        });
    });

    // Egg Animation
    const createEggAnimation = () => {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;
        
        for (let i = 0; i < 5; i++) {
            const egg = document.createElement('div');
            egg.classList.add('floating-egg');
            
            // Random position, size and animation duration
            const size = Math.random() * 30 + 20;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;
            
            egg.style.width = `${size}px`;
            egg.style.height = `${Math.floor(size * 1.3)}px`;
            egg.style.left = `${left}%`;
            egg.style.animationDuration = `${animationDuration}s`;
            egg.style.animationDelay = `${delay}s`;
            
            heroSection.appendChild(egg);
        }
    };
    
    // Add egg animation styles
    const addEggStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            .floating-egg {
                position: absolute;
                background-color: rgba(255, 255, 255, 0.7);
                border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
                bottom: -50px;
                animation: floatUp linear infinite;
                z-index: 1;
            }
            
            @keyframes floatUp {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 0.8;
                }
                90% {
                    opacity: 0.8;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    };
    
    // Initialize egg animation
    addEggStyles();
    createEggAnimation();

    // Chicken Animation
    // const createChickenAnimation = () => {
    //     const footer = document.querySelector('footer');
    //     if (!footer) return;
        
    //     const chicken = document.createElement('div');
    //     chicken.classList.add('running-chicken');
        
    //     // Create chicken parts
    //     const body = document.createElement('div');
    //     body.classList.add('chicken-body');
        
    //     const head = document.createElement('div');
    //     head.classList.add('chicken-head');
        
    //     const beak = document.createElement('div');
    //     beak.classList.add('chicken-beak');
        
    //     const comb = document.createElement('div');
    //     comb.classList.add('chicken-comb');
        
    //     const legs = document.createElement('div');
    //     legs.classList.add('chicken-legs');
        
    //     // Assemble chicken
    //     head.appendChild(beak);
    //     head.appendChild(comb);
    //     chicken.appendChild(body);
    //     chicken.appendChild(head);
    //     chicken.appendChild(legs);
        
    //     document.body.appendChild(chicken);
        
    //     // Animate chicken
    //     let position = -100;
    //     const animateChicken = () => {
    //         position += 5;
    //         chicken.style.left = `${position}px`;
            
    //         if (position > window.innerWidth) {
    //             position = -100;
    //         }
            
    //         requestAnimationFrame(animateChicken);
    //     };
        
    //     animateChicken();
    // };
    
    // Add chicken animation styles
    const addChickenStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            .running-chicken {
                position: fixed;
                bottom: 20px;
                left: -100px;
                width: 80px;
                height: 60px;
                z-index: 1000;
            }
            
            .chicken-body {
                position: absolute;
                width: 50px;
                height: 30px;
                background-color: #f5f5dc;
                border-radius: 50%;
                top: 15px;
                left: 15px;
            }
            
            .chicken-head {
                position: absolute;
                width: 25px;
                height: 25px;
                background-color: #f5f5dc;
                border-radius: 50%;
                top: 10px;
                left: 5px;
                animation: bobHead 0.5s infinite alternate;
            }
            
            .chicken-beak {
                position: absolute;
                width: 10px;
                height: 5px;
                background-color: #ff9800;
                top: 15px;
                left: -5px;
                clip-path: polygon(0 50%, 100% 0, 100% 100%);
            }
            
            .chicken-comb {
                position: absolute;
                width: 10px;
                height: 10px;
                background-color: #dc3545;
                top: -5px;
                left: 10px;
                clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            }
            
            .chicken-legs {
                position: absolute;
                width: 30px;
                height: 15px;
                bottom: 0;
                left: 25px;
                animation: runLegs 0.25s infinite alternate;
            }
            
            .chicken-legs::before, .chicken-legs::after {
                content: '';
                position: absolute;
                width: 3px;
                height: 15px;
                background-color: #ff9800;
                bottom: 0;
            }
            
            .chicken-legs::before {
                left: 5px;
            }
            
            .chicken-legs::after {
                right: 5px;
            }
            
            @keyframes bobHead {
                0% {
                    transform: translateY(0);
                }
                100% {
                    transform: translateY(3px);
                }
            }
            
            @keyframes runLegs {
                0% {
                    transform: scaleY(1);
                }
                100% {
                    transform: scaleY(0.8);
                }
            }
        `;
        document.head.appendChild(style);
    };
    
    // Initialize chicken animation
    addChickenStyles();
    createChickenAnimation();
});