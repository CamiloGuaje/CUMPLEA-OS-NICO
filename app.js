// Safari Birthday Invitation Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the invitation
    initSafariInvitation();
});

function initSafariInvitation() {
    // Add click interactions to animals
    addAnimalInteractions();
    
    // Add balloon pop effects
    addBalloonInteractions();
    
    // Add print functionality
    addPrintFunctionality();
    
    // Add entrance animations
    addEntranceAnimations();
    
    // Add jungle sounds simulation (visual feedback)
    addJungleSoundEffects();
}

function addAnimalInteractions() {
    const animals = document.querySelectorAll('.animal');
    
    animals.forEach(animal => {
        animal.style.cursor = 'pointer';
        animal.addEventListener('click', function() {
            // Add a fun bounce animation when clicked
            this.style.transform = 'scale(1.3)';
            this.style.transition = 'transform 0.3s ease';
            
            // Add sound effect simulation (visual feedback)
            createSoundEffect(this);
            
            // Reset after animation
            setTimeout(() => {
                this.style.transform = '';
                this.style.transition = '';
            }, 300);
        });
    });
}

function addBalloonInteractions() {
    const balloons = document.querySelectorAll('.balloon');
    
    balloons.forEach(balloon => {
        balloon.style.cursor = 'pointer';
        balloon.addEventListener('click', function() {
            // Create balloon pop effect
            this.style.transform = 'scale(1.5)';
            this.style.opacity = '0.3';
            this.style.transition = 'all 0.4s ease';
            
            // Show balloon pop text
            showBalloonPopText(this);
            
            // Reset balloon after effect
            setTimeout(() => {
                this.style.transform = '';
                this.style.opacity = '';
                this.style.transition = '';
            }, 800);
        });
    });
}

function addPrintFunctionality() {
    // Add print button
    const printButton = document.createElement('button');
    printButton.innerHTML = '🖨️ Imprimir Invitación';
    printButton.className = 'print-button btn btn--primary';
    printButton.style.cssText = `
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        background: var(--color-primary) !important;
        color: var(--color-btn-primary-text) !important;
        padding: 12px 20px !important;
        border-radius: var(--radius-base) !important;
        cursor: pointer !important;
        font-weight: var(--font-weight-medium) !important;
        box-shadow: var(--shadow-md) !important;
        opacity: 0 !important;
        transform: translateY(20px) !important;
        transition: all 0.3s ease !important;
        z-index: 1000 !important;
        border: none !important;
        font-size: var(--font-size-sm) !important;
        display: inline-flex !important;
        align-items: center !important;
        gap: var(--space-6) !important;
    `;
    
    document.body.appendChild(printButton);
    
    // Show print button on card hover with better targeting
    const invitationContainer = document.querySelector('.invitation-container');
    const card = document.querySelector('.invitation-card');
    
    function showPrintButton() {
        printButton.style.opacity = '1';
        printButton.style.transform = 'translateY(0)';
    }
    
    function hidePrintButton() {
        printButton.style.opacity = '0';
        printButton.style.transform = 'translateY(20px)';
    }
    
    // Add multiple event listeners for better coverage
    [invitationContainer, card].forEach(element => {
        if (element) {
            element.addEventListener('mouseenter', showPrintButton);
            element.addEventListener('mouseleave', hidePrintButton);
        }
    });
    
    // Also show on card content hover
    const cardContent = document.querySelector('.card-content');
    if (cardContent) {
        cardContent.addEventListener('mouseenter', showPrintButton);
        cardContent.addEventListener('mouseleave', hidePrintButton);
    }
    
    // Print functionality
    printButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.print();
    });
    
    // Show print button briefly on load to indicate it exists
    setTimeout(() => {
        showPrintButton();
        setTimeout(hidePrintButton, 2000);
    }, 3000);
}

function addEntranceAnimations() {
    // Add staggered entrance animations to main sections
    const sections = [
        '.header',
        '.safari-balloons',
        '.photo-section',
        '.event-details',
        '.message-section',
        '.confirmation-section'
    ];
    
    sections.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200 + 300);
        }
    });
}

function addJungleSoundEffects() {
    // Add visual sound effects when jungle decorations are clicked
    const leaves = document.querySelectorAll('.leaf');
    const tree = document.querySelector('.tree');
    const footprints = document.querySelectorAll('.footprint');
    
    [...leaves, tree, ...footprints].forEach(element => {
        if (element) {
            element.style.cursor = 'pointer';
            element.addEventListener('click', function() {
                createRustleEffect(this);
            });
        }
    });
}

function createSoundEffect(element) {
    // Create visual sound effect
    const soundEffect = document.createElement('div');
    soundEffect.innerHTML = '♪';
    soundEffect.style.cssText = `
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        color: var(--color-primary);
        font-size: 1.5rem;
        opacity: 1;
        transition: all 1s ease;
        pointer-events: none;
        z-index: 10;
    `;
    
    element.style.position = 'relative';
    element.appendChild(soundEffect);
    
    // Animate the sound effect
    setTimeout(() => {
        soundEffect.style.transform = 'translateX(-50%) translateY(-30px)';
        soundEffect.style.opacity = '0';
    }, 50);
    
    // Remove after animation
    setTimeout(() => {
        if (soundEffect.parentNode) {
            soundEffect.parentNode.removeChild(soundEffect);
        }
    }, 1000);
}

function showBalloonPopText(balloon) {
    const messages = [
        '¡Pop! 🎈',
        '¡Fiesta! 🎉',
        '¡Safari! 🦁'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const popText = document.createElement('div');
    popText.innerHTML = randomMessage;
    popText.style.cssText = `
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        color: var(--color-error);
        font-size: 1.2rem;
        font-weight: var(--font-weight-bold);
        opacity: 1;
        transition: all 1s ease;
        pointer-events: none;
        z-index: 10;
    `;
    
    balloon.style.position = 'relative';
    balloon.appendChild(popText);
    
    setTimeout(() => {
        popText.style.transform = 'translateX(-50%) translateY(-40px)';
        popText.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        if (popText.parentNode) {
            popText.parentNode.removeChild(popText);
        }
    }, 1000);
}

function createRustleEffect(element) {
    // Create leaf rustle effect
    const rustleEffect = document.createElement('div');
    rustleEffect.innerHTML = '🍃';
    rustleEffect.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        color: var(--color-success);
        font-size: 1rem;
        opacity: 1;
        transition: all 2s ease;
        pointer-events: none;
        z-index: 10;
    `;
    
    element.style.position = 'relative';
    element.appendChild(rustleEffect);
    
    // Animate falling leaf
    setTimeout(() => {
        rustleEffect.style.transform = 'translateY(50px) rotate(180deg)';
        rustleEffect.style.opacity = '0';
    }, 50);
    
    setTimeout(() => {
        if (rustleEffect.parentNode) {
            rustleEffect.parentNode.removeChild(rustleEffect);
        }
    }, 2000);
}

// Add keyboard shortcuts for fun interactions
document.addEventListener('keydown', function(event) {
    // Press 'S' for Safari roar effect
    if (event.key.toLowerCase() === 's') {
        playRoarEffect();
    }
    
    // Press 'P' to print
    if (event.key.toLowerCase() === 'p' && event.ctrlKey) {
        event.preventDefault();
        window.print();
    }
});

function playRoarEffect() {
    const lion = document.querySelector('.animal.lion');
    if (lion) {
        lion.style.transform = 'scale(2) rotate(10deg)';
        lion.style.transition = 'transform 0.5s ease';
        
        // Create roar text
        const roarText = document.createElement('div');
        roarText.innerHTML = '¡ROAAAAR! 🦁';
        roarText.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: var(--color-warning);
            font-size: 3rem;
            font-weight: var(--font-weight-bold);
            opacity: 1;
            transition: all 1s ease;
            pointer-events: none;
            z-index: 1000;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        `;
        
        document.body.appendChild(roarText);
        
        setTimeout(() => {
            roarText.style.transform = 'translate(-50%, -50%) scale(1.5)';
            roarText.style.opacity = '0';
            lion.style.transform = '';
            lion.style.transition = '';
        }, 500);
        
        setTimeout(() => {
            if (roarText.parentNode) {
                roarText.parentNode.removeChild(roarText);
            }
        }, 1500);
    }
}

// Add touch support for mobile devices
function addTouchSupport() {
    const touchElements = document.querySelectorAll('.animal, .balloon, .leaf, .tree, .footprint');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function(event) {
            event.preventDefault();
            this.click();
        });
    });
}

// Initialize touch support
addTouchSupport();