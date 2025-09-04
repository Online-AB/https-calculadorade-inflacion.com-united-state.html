// Country dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.getElementById('countrySelect');
    
    if (countrySelect) {
        countrySelect.addEventListener('change', function() {
            const selectedValue = this.value;
            if (selectedValue && selectedValue !== window.location.pathname.split('/').pop()) {
                window.location.href = selectedValue;
            }
        });
    }
});

// Inflation Calculator Functions
function calculateInflation() {
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const inflationRate = parseFloat(document.getElementById('inflationRate').value);
    const years = parseInt(document.getElementById('years').value);
    
    // Validation
    if (isNaN(initialAmount) || isNaN(inflationRate) || isNaN(years)) {
        alert('Por favor, ingresa todos los valores correctamente.');
        return;
    }
    
    if (initialAmount <= 0 || inflationRate < 0 || years <= 0) {
        alert('Por favor, ingresa valores positivos válidos.');
        return;
    }
    
    // Calculate inflation
    const inflationRateDecimal = inflationRate / 100;
    const futureValue = initialAmount * Math.pow(1 + inflationRateDecimal, years);
    const purchasingPowerLoss = initialAmount - (initialAmount / Math.pow(1 + inflationRateDecimal, years));
    const cumulativeInflation = ((futureValue - initialAmount) / initialAmount) * 100;
    
    // Display results
    displayResults(futureValue, purchasingPowerLoss, cumulativeInflation, initialAmount);
}

function displayResults(futureValue, purchasingPowerLoss, cumulativeInflation, initialAmount) {
    const resultsDiv = document.getElementById('results');
    const futureValueSpan = document.getElementById('futureValue');
    const purchasingPowerLossSpan = document.getElementById('purchasingPowerLoss');
    const cumulativeInflationSpan = document.getElementById('cumulativeInflation');
    
    // Format currency
    const currencySymbol = getCurrentCurrencySymbol();
    
    futureValueSpan.textContent = `${currencySymbol}${futureValue.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    purchasingPowerLossSpan.textContent = `${currencySymbol}${purchasingPowerLoss.toLocaleString('es-AR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    cumulativeInflationSpan.textContent = `${cumulativeInflation.toFixed(2)}%`;
    
    // Show results with animation
    resultsDiv.style.display = 'block';
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getCurrentCurrencySymbol() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch (currentPage) {
        case 'index.html':
        case '':
            return 'ARS $';
        case 'calculadora-ipc-chile.html':
            return 'CLP $';
        case 'colombia.html':
            return 'COP $';
        case 'mexico.html':
            return 'MXN $';
        case 'paraguay.html':
            return '₲';
        case 'peru.html':
            return 'S/';
        case 'uruguay.html':
            return 'UYU $';
        case 'united-state.html':
            return 'USD $';
        default:
            return '$';
    }
}

// Smooth scroll for CTA button
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('a[href^="#"]');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Form validation and user experience improvements
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inflationForm');
    if (form) {
        const inputs = form.querySelectorAll('input[type="number"]');
        
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('error');
                if (this.value < 0) {
                    this.classList.add('error');
                }
            });
            
            // Enter key to calculate
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    calculateInflation();
                }
            });
        });
    }
});

// Responsive menu toggle (for mobile)
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const navMenu = document.querySelector('.nav-menu');
    
    // Add mobile menu toggle if needed
    if (window.innerWidth <= 768) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.style.cssText = 'background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; display: block;';
        
        header.querySelector('.container').appendChild(menuToggle);
        
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.calculator-section, .article-section, .cta-section');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-in');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', animateOnScroll);