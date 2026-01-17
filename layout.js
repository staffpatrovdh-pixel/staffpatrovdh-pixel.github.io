document.addEventListener("DOMContentLoaded", function () {
    
    // --- VERSION CONTROL ---
    console.log("Patro Layout Loaded - Version 11.2 (Sponsors via TXT file)");

    // --- 1. INJECTION DU HEADER (NAVBAR) ---
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = `
        <nav class="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm" id="navbar">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <a href="index.html" class="flex-shrink-0 flex items-center gap-2">
                        <img src="donnees-site/LogoMaurageContour.svg" alt="Logo Patro Val d'Haine" class="h-14 w-auto">
                    </a>

                    <!-- Desktop Menu -->
                    <div class="hidden lg:flex space-x-5 items-center">
                        <a href="index.html" class="nav-link text-gray-600 hover:text-patro-green font-medium transition">Accueil</a>
                        <a href="index.html#infos" class="nav-link text-gray-600 hover:text-patro-green font-medium transition">Agenda</a>
                        <a href="contact.html" class="nav-link text-gray-600 hover:text-patro-green font-medium transition">Contact</a>
                        <a href="documents.html" class="nav-link text-gray-600 hover:text-patro-green font-medium transition">Documents</a>
                        <a href="informations.html" class="nav-link text-gray-600 hover:text-patro-green font-medium transition">Communications</a>
                        
                        <a href="inscription.html" class="bg-patro-green text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
                            Nous rejoindre
                        </a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="lg:hidden flex items-center">
                        <button onclick="toggleMenu()" class="text-gray-600 hover:text-patro-green focus:outline-none">
                            <i data-lucide="menu" class="w-8 h-8"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu Panel -->
            <div id="mobile-menu" class="hidden lg:hidden bg-white border-t">
                <div class="px-4 pt-2 pb-6 space-y-2 shadow-lg">
                    <a href="index.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-patro-green hover:bg-yellow-50">Accueil</a>
                    <a href="index.html#infos" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-patro-green hover:bg-yellow-50">Agenda</a>
                    <a href="contact.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-patro-green hover:bg-yellow-50">Contact</a>
                    <a href="documents.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-patro-green hover:bg-yellow-50">Documents</a>
                    <a href="informations.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-patro-green hover:bg-yellow-50">Communications</a>
                    
                    <a href="inscription.html" class="block w-full text-center mt-4 px-5 py-3 rounded-md font-bold bg-patro-yellow text-patro-green">
                        S'inscrire maintenant
                    </a>
                </div>
            </div>
        </nav>
        `;
        
        // Active le lien courant
        highlightActiveLink();
    }

    // --- 2. INJECTION DU FOOTER ---
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
        <footer class="bg-gray-900 text-white pt-16 pb-8 mt-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
                    <!-- Colonne 1: Info -->
                    <div class="flex flex-col items-center md:items-start">
                        <img src="donnees-site/LogoMaurageContour.svg" alt="Patro Maurage" class="h-24 w-auto mb-6">
                        
                        <span class="font-display font-bold text-2xl text-white block mb-4">Le Patro Val d'Haine de Maurage</span>
                        <p class="text-gray-400 text-sm mb-4">
                            Mouvement de jeunesse affilié à la Fédération Nationale des Patros.
                        </p>
                        <div class="flex flex-col items-center md:items-start space-y-2 text-sm text-gray-500">
                            <span>Rue du Roeulx 23, 7110 Maurage</span>
                            <span>patrovaldhaine@patro.be</span>
                            <span>0488/08.86.03</span>
                        </div>
                    </div>

                    <!-- Colonne 2: Partenaires (DYNAMIQUE) -->
                    <div class="flex flex-col items-center md:items-start">
                        <h5 class="font-bold text-gray-200 mb-6 uppercase text-sm tracking-wider">Avec le soutien de :</h5>
                        <!-- Modification de la grille pour accepter plus de logos proprement -->
                        <div id="sponsors-grid" class="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                            <div class="animate-pulse h-16 w-24 bg-gray-800 rounded"></div>
                            <div class="animate-pulse h-16 w-24 bg-gray-800 rounded"></div>
                        </div>
                    </div>

                    <!-- Colonne 3: Réseaux Sociaux -->
                    <div class="flex flex-col items-center md:items-end">
                        <h5 class="font-bold text-gray-200 mb-4 uppercase text-sm tracking-wider">Suivez-nous</h5>
                        <div class="flex space-x-4">
                            <a href="https://www.facebook.com/patrovaldhaine" target="_blank" class="bg-gray-800 p-3 rounded-full hover:bg-[#1877F2] hover:text-white transition duration-300">
                                <i data-lucide="facebook" class="w-5 h-5"></i>
                            </a>
                            <a href="https://www.instagram.com/patrovaldhaine/" target="_blank" class="bg-gray-800 p-3 rounded-full hover:bg-[#E4405F] hover:text-white transition duration-300">
                                <i data-lucide="instagram" class="w-5 h-5"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-800 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-center items-center gap-4">
                    <p>© 2026 Patro du Val d'Haine – Tous droits réservés</p>
                    <span class="hidden md:inline">•</span>
                    <a href="legal.html" class="hover:text-white transition">Mentions légales</a>
                    <span class="hidden md:inline">•</span>
                    <a href="cookies.html" class="hover:text-white transition">Politique Cookies</a>
                    <span class="hidden md:inline">•</span>
                    <!-- BOUTON PORTAIL APPS (CORRIGÉ) -->
                    <a href="app.html" class="flex items-center gap-1 text-patro-yellow hover:text-white transition font-medium" title="Portail Apps">
                        <i data-lucide="grid" class="w-3 h-3"></i> Portail Apps
                    </a>
                    <span class="hidden md:inline">•</span>
                </div>
            </div>
        </footer>
        `;
        
        loadSponsors();
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();

    if (window.matchMedia("(pointer: fine)").matches) {
        const cursor = document.getElementById('custom-cursor');
        if(cursor) {
            // Force styles
            cursor.style.position = 'fixed';
            cursor.style.pointerEvents = 'none';
            cursor.style.zIndex = '9999';

            document.addEventListener('mousemove', (e) => {
                requestAnimationFrame(() => {
                    cursor.style.left = e.clientX + 'px';
                    cursor.style.top = e.clientY + 'px';
                    cursor.style.opacity = '1';
                });
            });
            document.addEventListener('mouseout', (e) => { 
                if (e.relatedTarget === null) cursor.style.opacity = '0'; 
            });
        } else {
            // Création de secours si le curseur n'existe pas dans le HTML
            const newCursor = document.createElement('div');
            newCursor.id = 'custom-cursor';
            document.body.appendChild(newCursor);
        }
    }

    window.addEventListener('scroll', function() {
        const nav = document.getElementById('navbar');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
                nav.classList.replace('bg-white/95', 'bg-white');
            } else {
                nav.classList.remove('shadow-md');
                nav.classList.replace('bg-white', 'bg-white/95');
            }
        }
    });

    checkCookieConsent();
});

window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if(loader) {
        loader.classList.add('loader-hidden');
        setTimeout(() => loader.style.display = 'none', 600);
    }
});

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        if (link.getAttribute('href').includes('#')) return;

        if (link.getAttribute('href') === currentPath) {
            link.classList.remove('text-gray-600');
            link.classList.add('text-patro-green', 'font-bold');
        }
    });
}

// --- NOUVELLE FONCTION LOAD SPONSORS (TXT FILE) ---
async function loadSponsors() {
    const repoOwner = "staffpatrovdh-pixel";
    const repoName = "staffpatrovdh-pixel.github.io";
    const branch = "main";
    // Chemin vers le fichier texte
    const fileUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branch}/donnees-site/partenaires.txt`;
    
    const container = document.getElementById('sponsors-grid');
    if (!container) return;

    try {
        const cacheBuster = `?t=${Date.now()}`;
        const response = await fetch(fileUrl + cacheBuster);
        
        if (!response.ok) throw new Error('Fichier partenaires.txt introuvable');
        
        const text = await response.text();
        const lines = text.split('\n');
        
        // Vider le conteneur (enlève les placeholders)
        container.innerHTML = '';
        
        let hasPartners = false;

        lines.forEach(line => {
            // On ignore les lignes vides
            if (!line.trim()) return;

            // Structure : Nom | Logo Path | URL Site
            const parts = line.split('|');
            
            if (parts.length >= 3) {
                hasPartners = true;
                const name = parts[0].trim();
                const logoPath = parts[1].trim();
                const siteUrl = parts[2].trim();

                // Création du lien qui enveloppe l'image
                const link = document.createElement('a');
                link.href = siteUrl;
                link.target = "_blank";
                link.title = name; // Affiche le nom au survol (bulle native)
                link.className = "partner-link block transition-transform hover:scale-105";

                const img = document.createElement('img');
                img.src = logoPath;
                img.alt = name;
                // Classes CSS pour le style (fond blanc, arrondi, taille contrainte)
                img.className = "partner-logo h-16 w-auto max-w-[160px] object-contain bg-white rounded p-2 shadow-sm hover:shadow-md transition-all";
                
                link.appendChild(img);
                container.appendChild(link);
            }
        });

        if (!hasPartners) {
            container.innerHTML = '<p class="text-gray-600 text-xs">Aucun partenaire pour le moment</p>';
        }

    } catch (error) {
        console.error("Erreur chargement partenaires:", error);
        container.innerHTML = '<p class="text-gray-700 text-xs italic opacity-50">Soutiens</p>';
    }
}

function checkCookieConsent() {
    if (!localStorage.getItem('patroCookieConsent')) {
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.className = 'fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 md:p-6 z-50 transform transition-transform duration-500 translate-y-full flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-100';
        banner.innerHTML = `
            <div class="flex items-start gap-3 max-w-3xl">
                <div class="p-2 bg-patro-yellow/20 rounded-full text-patro-dark hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cookie"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>
                </div>
                <div>
                    <h4 class="font-bold text-gray-800 mb-1">🍪 On utilise des cookies</h4>
                    <p class="text-sm text-gray-600">
                        Nous utilisons des cookies essentiels pour le bon fonctionnement du site (cartes, calendrier). 
                        En continuant, vous acceptez leur utilisation.
                        <a href="cookies.html" class="text-patro-green underline hover:text-patro-yellow">En savoir plus</a>.
                    </p>
                </div>
            </div>
            <div class="flex gap-3 w-full md:w-auto">
                <button onclick="acceptCookies()" class="flex-1 md:flex-none px-6 py-2.5 bg-patro-green text-white font-bold rounded-lg hover:bg-green-700 transition shadow-sm text-sm">
                    J'accepte
                </button>
                <button onclick="refuseCookies()" class="flex-1 md:flex-none px-6 py-2.5 bg-gray-100 text-gray-600 font-bold rounded-lg hover:bg-gray-200 transition text-sm">
                    Refuser
                </button>
            </div>
        `;
        document.body.appendChild(banner);
        
        setTimeout(() => {
            banner.classList.remove('translate-y-full');
        }, 1000);
    }
}

function acceptCookies() {
    localStorage.setItem('patroCookieConsent', 'accepted');
    closeCookieBanner();
}

function refuseCookies() {
    localStorage.setItem('patroCookieConsent', 'refused');
    closeCookieBanner();
}

function closeCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if(banner) {
        banner.classList.add('translate-y-full');
        setTimeout(() => banner.remove(), 500);
    }
}
