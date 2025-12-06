// NGI Golf - Next-Gen Impact Golf Website
// Interactive features and animations

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initNavigation();
    initHeroAnimations();
    initGolferCards();
    initScrollEffects();
    initParallaxEffects();
    initTechCards();
    initLoadingAnimations();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.backdropFilter = 'blur(30px)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
    });
}

// Hero section animations
function initHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');
    const heroStats = document.querySelector('.hero-stats');
    
    // Add glitch effect to title on hover
    if (heroTitle) {
        heroTitle.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease-in-out';
        });
        
        heroTitle.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    }
    
    // Enhanced button interactions
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = (e.offsetX - 10) + 'px';
            ripple.style.top = (e.offsetY - 10) + 'px';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Add typing effect to button text
        const buttonText = ctaButton.querySelector('span');
        const originalText = buttonText.textContent;
        buttonText.textContent = '';
        
        setTimeout(() => {
            typeWriter(buttonText, originalText, 100);
        }, 1200);
    }
}

// Golfer card interactions
function initGolferCards() {
    const golferCards = document.querySelectorAll('.golfer-card');
    
    golferCards.forEach(card => {
        const golferName = card.querySelector('.golfer-name');
        const golferGif = card.querySelector('.golfer-gif, .golfer-image');
        
        // Hover effects for golfer cards
        card.addEventListener('mouseenter', function() {
            // Add holographic effect
            this.style.filter = 'hue-rotate(10deg) saturate(1.2)';
            
            // Animate stats
            const statValues = this.querySelectorAll('.stat-value');
            statValues.forEach((stat, index) => {
                setTimeout(() => {
                    stat.style.animation = 'statPulse 0.5s ease-out';
                }, index * 100);
            });
            
            // Play GIF if available
            if (golferGif && golferGif.tagName === 'IMG' && golferGif.src.includes('.gif')) {
                const currentSrc = golferGif.src;
                golferGif.src = '';
                setTimeout(() => {
                    golferGif.src = currentSrc;
                }, 50);
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.filter = '';
            
            const statValues = this.querySelectorAll('.stat-value');
            statValues.forEach(stat => {
                stat.style.animation = '';
            });
        });
        
        // Click to expand card
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
            
            if (this.classList.contains('expanded')) {
                // Add detailed view
                addDetailedView(this);
            } else {
                // Remove detailed view
                removeDetailedView(this);
            }
        });
    });
}

// Scroll effects and animations
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate tech icons
                if (entry.target.classList.contains('tech-card')) {
                    animateTechIcon(entry.target);
                }
                
                // Animate golfer cards with stagger
                if (entry.target.classList.contains('golfer-card')) {
                    const cards = document.querySelectorAll('.golfer-card');
                    const index = Array.from(cards).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    const animatableElements = document.querySelectorAll('.golfer-card, .tech-card, .section-header');
    animatableElements.forEach(el => {
        observer.observe(el);
    });
}

// Parallax effects
function initParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroGif = document.querySelector('.hero-gif');
        const heroStats = document.querySelector('.hero-stats');
        
        if (heroGif) {
            heroGif.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        if (heroStats) {
            heroStats.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroStats.style.opacity = 1 - (scrolled / 500);
        }
    });
}

// Technology cards enhancements
function initTechCards() {
    const techCards = document.querySelectorAll('.tech-card');
    
    techCards.forEach(card => {
        const icon = card.querySelector('.tech-icon');
        
        card.addEventListener('mouseenter', function() {
            // Rotate and pulse icon
            if (icon) {
                icon.style.animation = 'iconRotate 0.6s ease-out, iconPulse 1s ease-in-out infinite';
            }
            
            // Add particle effect
            createParticleEffect(card);
        });
        
        card.addEventListener('mouseleave', function() {
            if (icon) {
                icon.style.animation = '';
            }
        });
    });
}

// Loading animations
function initLoadingAnimations() {
    // Add CSS for new animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glitch {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes statPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); color: var(--primary-green); }
            100% { transform: scale(1); }
        }
        
        @keyframes iconRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        @keyframes iconPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        .animate-in {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .golfer-card.expanded {
            transform: scale(1.05);
            z-index: 10;
        }
        
        .golfer-card.expanded::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, 
                rgba(0, 229, 255, 0.1) 0%, 
                rgba(0, 255, 136, 0.1) 50%, 
                rgba(255, 0, 64, 0.1) 100%);
            pointer-events: none;
            animation: shimmer 2s ease-in-out infinite;
        }
        
        @keyframes shimmer {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }
        
        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--primary-blue);
            border-radius: 50%;
            pointer-events: none;
            animation: particleFloat 2s ease-out forwards;
        }
    `;
    document.head.appendChild(style);
}

// Utility functions
function typeWriter(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function animateTechIcon(card) {
    const icon = card.querySelector('.tech-icon');
    if (icon) {
        setTimeout(() => {
            icon.style.animation = 'iconPulse 2s ease-in-out';
        }, 300);
    }
}

function createParticleEffect(element) {
    const colors = ['var(--primary-blue)', 'var(--primary-green)', 'var(--primary-red)'];
    const particleCount = 6;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.background = colors[i % colors.length];
        particle.style.left = '50%';
        particle.style.top = '50%';
        
        const angle = (i / particleCount) * Math.PI * 2;
        const distance = 60 + Math.random() * 40;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        particle.style.setProperty('--x', x + 'px');
        particle.style.setProperty('--y', y + 'px');
        
        element.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
}

function addDetailedView(card) {
    const golfer = card.getAttribute('data-golfer');
    const details = getGolferDetails(golfer);
    
    if (details) {
        const detailPanel = document.createElement('div');
        detailPanel.className = 'detail-panel';
        detailPanel.innerHTML = `
            <div class="detail-content">
                <h4>Performance Analysis</h4>
                <div class="detail-stats">
                    ${details.analysis.map(stat => `
                        <div class="detail-stat">
                            <span class="detail-label">${stat.label}</span>
                            <span class="detail-value">${stat.value}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        card.appendChild(detailPanel);
    }
}

function removeDetailedView(card) {
    const detailPanel = card.querySelector('.detail-panel');
    if (detailPanel) {
        detailPanel.remove();
    }
}

function getGolferDetails(golfer) {
    const details = {
        rory: {
            analysis: [
                { label: 'Swing Speed', value: '124.3 mph' },
                { label: 'Attack Angle', value: '-1.8°' },
                { label: 'Dynamic Loft', value: '16.2°' },
                { label: 'Face Angle', value: '+2.1°' }
            ]
        },
        tiger: {
            analysis: [
                { label: 'Swing Speed', value: '118.7 mph' },
                { label: 'Attack Angle', value: '-2.4°' },
                { label: 'Dynamic Loft', value: '17.8°' },
                { label: 'Face Angle', value: '+1.9°' }
            ]
        },
        scottie: {
            analysis: [
                { label: 'Swing Speed', value: '121.9 mph' },
                { label: 'Attack Angle', value: '-2.1°' },
                { label: 'Dynamic Loft', value: '16.9°' },
                { label: 'Face Angle', value: '+1.5°' }
            ]
        },
        minwoo: {
            analysis: [
                { label: 'Swing Speed', value: '119.2 mph' },
                { label: 'Attack Angle', value: '-1.9°' },
                { label: 'Dynamic Loft', value: '17.3°' },
                { label: 'Face Angle', value: '+2.4°' }
            ]
        }
    };
    
    return details[golfer];
}

// Performance optimization
function optimizeImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
}

// Initialize performance optimizations
optimizeImages();

// Add resize handler for responsive adjustments
window.addEventListener('resize', function() {
    // Recalculate parallax effects
    const heroGif = document.querySelector('.hero-gif');
    if (heroGif) {
        heroGif.style.transform = '';
    }
});