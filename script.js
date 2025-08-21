// ===== MODERN PORTFOLIO JAVASCRIPT =====

// Portfolio Data
const portfolioData = [
    {
        id: 1,
        title: "Neon Digital Portrait",
        category: "portraits",
        image: "./photos/SaveClip.App_525973114_17925050178097312_1147935490967172034_n.jpg",
        description: "A captivating digital portrait with neon-inspired color schemes and futuristic elements.",
        likes: 247,
        saves: 89
    },
    {
        id: 2,
        title: "Abstract Tech Flow",
        category: "abstract",
        image: "./photos/SaveClip.App_524687279_17891629392291569_2392907753566285349_n.jpg",
        description: "An abstract representation of data flow through digital networks and technological landscapes.",
        likes: 156,
        saves: 67
    },
    {
        id: 3,
        title: "Cyberpunk Character",
        category: "portraits",
        image: "./photos/SaveClip.App_524424505_17891629581291569_7204193818581872382_n.jpg",
        description: "A cyberpunk-inspired character design with holographic elements and neon aesthetics.",
        likes: 324,
        saves: 142
    },
    {
        id: 4,
        title: "Digital Landscape",
        category: "nature",
        image: "./photos/SaveClip.App_521003233_17891700453292519_877759951171763294_n.jpg",
        description: "A surreal digital landscape blending natural forms with technological elements.",
        likes: 198,
        saves: 73
    },
    {
        id: 5,
        title: "Holographic Dreams",
        category: "abstract",
        image: "./photos/SaveClip.App_523946413_17891700384292519_5698979337809646333_n.jpg",
        description: "An abstract exploration of holographic projections and digital consciousness.",
        likes: 289,
        saves: 156
    },
    {
        id: 6,
        title: "Future Vision",
        category: "portraits",
        image: "./photos/SaveClip.App_524423493_17891700465292519_6184063264034292302_n.jpg",
        description: "A futuristic portrait showcasing advanced digital art techniques and sci-fi aesthetics.",
        likes: 412,
        saves: 201
    },
    {
        id: 7,
        title: "Bio-Digital Fusion",
        category: "nature",
        image: "./photos/SaveClip.App_524427476_17891700345292519_8909883975469118969_n.jpg",
        description: "An exploration of the fusion between biological forms and digital enhancement.",
        likes: 176,
        saves: 94
    },
    {
        id: 8,
        title: "Matrix Architecture",
        category: "architecture",
        image: "./photos/SaveClip.App_524718160_17925049998097312_5504156817079472116_n.jpg",
        description: "Architectural design inspired by digital matrices and virtual reality environments.",
        likes: 233,
        saves: 118
    },
    {
        id: 9,
        title: "Spider-Man Tech Suit",
        category: "portraits",
        image: "./photos/spider-man-red-logo-4k-75gk9y4ena7trtqu.jpg",
        description: "A high-tech interpretation of the iconic Spider-Man suit with digital enhancements.",
        likes: 567,
        saves: 289
    },
    {
        id: 10,
        title: "Marvel Digital Universe",
        category: "portraits",
        image: "./photos/spider-man-marvel-superheroes-3840x2160-1127.jpg",
        description: "An epic digital representation of the Marvel universe with advanced visual effects.",
        likes: 743,
        saves: 356
    }
];

// DOM Elements
const portfolioGrid = document.querySelector('#portfolioMasonry');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.querySelector('.modal-title');
const modalCategory = document.querySelector('.modal-category');
const modalDescription = document.querySelector('.modal-description');
const modalClose = document.querySelector('.modal-close');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const loaderWrapper = document.querySelector('.loader-wrapper');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Global Variables
let currentFilter = 'all';
let currentPage = 1;
let itemsPerPage = 8;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeWebsite();
});

function initializeWebsite() {
    setupLoading();
    setupNavigation();
    setupPortfolio();
    setupModal();
    setupScrollAnimations();
    setupSmoothScrolling();
}

// ===== ENHANCED LOADING SCREEN =====
function setupLoading() {
    const progressFill = document.querySelector('.progress-fill');
    const loadingPercentage = document.querySelector('.loading-percentage');
    
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            setTimeout(() => {
                completeLoading();
            }, 800);
        }
        
        updateLoadingProgress(progress, progressFill, loadingPercentage);
    }, 200);
}

function updateLoadingProgress(progress, progressFill, loadingPercentage) {
    const percentage = Math.min(progress, 100);
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }
    if (loadingPercentage) {
        loadingPercentage.textContent = `${Math.round(percentage)}%`;
    }
}

function completeLoading() {
    if (loaderWrapper) {
        loaderWrapper.classList.add('fade-out');
        setTimeout(() => {
            loaderWrapper.style.display = 'none';
            startEntryAnimations();
        }, 500);
    }
}

function startEntryAnimations() {
    // Animate hero elements after loading
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-stats, .hero-actions');
        heroElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 300);
}

// ===== NAVIGATION =====
function setupNavigation() {
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.05)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            }
        }
    });
}

// ===== SMOOTH SCROLLING =====
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

// ===== PORTFOLIO =====
function setupPortfolio() {
    displayPortfolioItems(portfolioData.slice(0, itemsPerPage));
    setupFiltering();
    setupLoadMore();
}

function displayPortfolioItems(items, append = false) {
    if (!portfolioGrid) return;
    
    if (!append) {
        portfolioGrid.innerHTML = '';
    }
    
    items.forEach((item, index) => {
        const portfolioItem = createPortfolioItem(item, index);
        portfolioGrid.appendChild(portfolioItem);
    });
    
    // Animate items in
    setTimeout(() => {
        const allItems = document.querySelectorAll('.pinterest-card');
        const startIndex = append ? allItems.length - items.length : 0;
        
        for (let i = startIndex; i < allItems.length; i++) {
            const item = allItems[i];
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, (i - startIndex) * 100);
        }
    }, 100);
}

function createPortfolioItem(item, index) {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = 'pinterest-card';
    portfolioItem.dataset.category = item.category;
    
    // Random height for Pinterest effect
    const heights = [250, 300, 350, 400, 320, 280, 380];
    const randomHeight = heights[Math.floor(Math.random() * heights.length)];
    
    portfolioItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy" style="height: ${randomHeight}px;">
        <div class="pinterest-overlay">
            <div class="pinterest-actions">
                <button class="pinterest-save-btn" onclick="event.stopPropagation(); savePin(${item.id})">Save</button>
                <div class="pinterest-menu">
                    <i class="fas fa-ellipsis-h" style="color: white; cursor: pointer;"></i>
                </div>
            </div>
            <div class="pinterest-info">
                <h3 class="pinterest-title">${item.title}</h3>
                <div class="pinterest-meta">
                    <i class="fas fa-tag"></i>
                    <span>${item.category}</span>
                </div>
                <div class="pinterest-stats">
                    <div class="pinterest-stat">
                        <i class="fas fa-heart"></i>
                        <span>${item.likes || 0}</span>
                    </div>
                    <div class="pinterest-stat">
                        <i class="fas fa-bookmark"></i>
                        <span>${item.saves || 0}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add click event for modal
    portfolioItem.addEventListener('click', () => {
        openModal(item);
    });
    
    return portfolioItem;
}

function setupFiltering() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.dataset.filter;
            currentFilter = filterValue;
            currentPage = 1;
            
            // Filter items
            const filteredData = filterValue === 'all' 
                ? portfolioData 
                : portfolioData.filter(item => item.category === filterValue);
            
            displayPortfolioItems(filteredData.slice(0, itemsPerPage));
            updateLoadMoreButton(filteredData);
        });
    });
}

function setupLoadMore() {
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            const filteredData = currentFilter === 'all' 
                ? portfolioData 
                : portfolioData.filter(item => item.category === currentFilter);
            
            const startIndex = currentPage * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const newItems = filteredData.slice(startIndex, endIndex);
            
            if (newItems.length > 0) {
                displayPortfolioItems(newItems, true); // true means append
                currentPage++;
                updateLoadMoreButton(filteredData);
            }
        });
    }
}

function updateLoadMoreButton(filteredData) {
    if (loadMoreBtn) {
        const totalLoaded = currentPage * itemsPerPage;
        if (totalLoaded >= filteredData.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

function savePin(itemId) {
    // Pinterest-style save functionality
    console.log('Saving pin:', itemId);
    // You can add actual save functionality here
}

// ===== MODAL =====
function setupModal() {
    // Close modal events
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function openModal(item) {
    if (!modal) return;
    
    // Update modal content
    if (modalImage) modalImage.src = item.image;
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalCategory) {
        modalCategory.textContent = item.category;
        modalCategory.style.background = getCategoryGradient(item.category);
    }
    if (modalDescription) modalDescription.textContent = item.description;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Trigger smooth animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    if (!modal) return;
    
    // Remove show class to trigger exit animation
    modal.classList.remove('show');
    
    // Hide modal after animation completes
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

function getCategoryGradient(category) {
    const gradients = {
        portraits: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        nature: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        abstract: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        architecture: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    };
    return gradients[category] || gradients.portraits;
}

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimations() {
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
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
    
    // Observe individual elements
    const animatedElements = document.querySelectorAll('.stat-item, .skill-item, .contact-item, .artist-card');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
}

// ===== PARALLAX EFFECTS =====
function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero && scrolled < hero.offsetHeight) {
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        }
    });
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== PERFORMANCE OPTIMIZATION =====
const optimizedScroll = debounce(() => {
    setupParallax();
}, 16);

window.addEventListener('scroll', optimizedScroll);

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.warn('An error occurred:', e.error);
});

// ===== FINAL INITIALIZATION =====
// Ensure all images are loaded properly
function handleImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            console.warn('Image failed to load:', this.src);
            // Try loading from root directory as fallback
            if (this.src.includes('./photos/')) {
                this.src = this.src.replace('./photos/', './');
            } else {
                // Final fallback to placeholder
                this.src = 'https://via.placeholder.com/600x400/667eea/ffffff?text=Portfolio+Image';
            }
            this.style.opacity = '1';
        });
    });
}

// Initialize image loading
document.addEventListener('DOMContentLoaded', handleImageLoading);

// Initialize parallax effects
window.addEventListener('load', () => {
    setupParallax();
}); 