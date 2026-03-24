/*
=======================================================================
  © 2026 Patro du Val d'Haine de Maurage - Tous droits réservés.
  Script de Layout (Navbar & Footer)
  Toute reproduction de ce code, du design ou des textes est interdite.
=======================================================================
*/

document.addEventListener("DOMContentLoaded", function () {
    
    console.log("Patro Layout Loaded - Version 12.1 (Menu Reordered & Parent Space)");

    // Détermination intelligente du chemin de base (Root vs Sous-dossiers)
    let basePath = './';
    if (window.location.pathname.includes('/sections/')) {
        basePath = '../';
    }

    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = `
        <nav class="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm" id="navbar">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <a href="${basePath}index.html" class="flex-shrink-0 flex items-center gap-2">
                        <img src="${basePath}donnees-site/LogoMaurageContour.svg" alt="Logo Patro Val d'Haine" class="h-14 w-auto">
                    </a>

                    <div class="hidden lg:flex space-x-5 items-center">
                        <a href="${basePath}index.html" class="nav-link text-gray-600 hover:text-patro-green font-medium transition">Accueil</a>
                        <a href="${basePath}index.html#infos" class="nav-link text-gray-600 hover:text-patro-green font-medium transition">Agenda</a>
                        <a href="${basePath}contact.html" class="nav-link text-gray-600 hover:text-patro-green font-medium transition">Contact</a>
                        
                        <div class="relative group">
                            <button id="desktop-sections-btn" class="nav-link text-gray-600 group-hover:text-patro-green font-medium transition flex items-center gap-1 focus:outline-none py-2">
                                Sections <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"></i>
                            </button>
                            <div class="absolute left-1/2 -translate-x-1/2 mt-0 pt-2 w-64 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top translate-y-2 group-hover:translate-y-0">
                                <div class="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-lg p-2" role="menu">
                                    <a href="${basePath}sections/poussins.html" class="nav-link-sub block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-patro-green rounded-lg transition border-l-2 border-transparent hover:border-patro-green">
                                        Les Poussins <span class="text-xs font-normal text-gray-400 block">4 - 6 ans</span>
                                    </a>
                                    <a href="${basePath}sections/benjamins.html" class="nav-link-sub block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-yellow-50 hover:text-patro-yellow rounded-lg transition border-l-2 border-transparent hover:border-patro-yellow mt-1">
                                        Les Benjamins <span class="text-xs font-normal text-gray-400 block">6 - 9 ans</span>
                                    </a>
                                    <a href="${basePath}sections/chevaliers-etincelles.html" class="nav-link-sub block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition border-l-2 border-transparent hover:border-orange-500 mt-1">
                                        Les Chevaliers & Étincelles <span class="text-xs font-normal text-gray-400 block">9 - 12 ans</span>
                                    </a>
                                    <a href="${basePath}sections/conq-alp.html" class="nav-link-sub block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition border-l-2 border-transparent hover:border-purple-600 mt-1">
                                        Les Grands <span class="text-xs font-normal text-gray-400 block">12 - 16 ans</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a href="${basePath}documents.html" class="nav-link text-gray-600 hover:text-patro-green font-medium transition">Documents</a>
                        
                        <div class="flex items-center gap-3 pl-3 border-l border-gray-200">
                            <a href="${basePath}inscription.html" class="bg-patro-green text-white px-5 py-2.5 rounded-full font-bold hover:bg-green-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
                                Nous rejoindre
                            </a>
                            <a href="https://parent.patrovaldhaine.be/" target="_blank" class="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-full font-bold hover:bg-gray-200 transition shadow-sm transform hover:-translate-y-0.5 text-sm" title="Espace parent">
                                <i data-lucide="circle-user-round" class="w-4 h-4"></i> Espace parent
                            </a>
                        </div>
                    </div>

                    <div class="lg:hidden flex items-center">
                        <button onclick="toggleMenu()" class="text-gray-600 hover:text-patro-green focus:outline-none">
                            <i data-lucide="menu" class="w-8 h-8"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div id="mobile-menu" class="hidden lg:hidden bg-white border-t overflow-y-auto max-h-[85vh]">
                <div class="px-4 pt-2 pb-6 space-y-2 shadow-inner">
                    <a href="${basePath}index.html" class="nav-link block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-patro-green hover:bg-green-50 transition">Accueil</a>
                    <a href="${basePath}index.html#infos" class="nav-link block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-patro-green hover:bg-green-50 transition">Agenda</a>
                    <a href="${basePath}contact.html" class="nav-link block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-patro-green hover:bg-green-50 transition">Contact</a>
                    
                    <div>
                        <button id="mobile-sections-btn" onclick="document.getElementById('mobile-sections-menu').classList.toggle('hidden'); document.getElementById('mobile-sections-icon').classList.toggle('rotate-180');" class="nav-link w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-patro-green hover:bg-green-50 transition focus:outline-none">
                            Nos Sections
                            <i data-lucide="chevron-down" id="mobile-sections-icon" class="w-5 h-5 transition-transform duration-300"></i>
                        </button>
                        <div id="mobile-sections-menu" class="hidden overflow-hidden transition-all duration-300 bg-gray-50 rounded-b-lg border-l-2 border-patro-green/30 ml-3 mt-1 mb-2 shadow-inner">
                            <a href="${basePath}sections/poussins.html" class="nav-link-sub block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-patro-green hover:bg-green-100 transition">Les Poussins (4-6 ans)</a>
                            <a href="${basePath}sections/benjamins.html" class="nav-link-sub block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-patro-yellow hover:bg-yellow-50 transition">Les Benjamins (6-9 ans)</a>
                            <a href="${basePath}sections/chevaliers-etincelles.html" class="nav-link-sub block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-orange-500 hover:bg-orange-50 transition">Les Chevaliers & Étincelles (9-12 ans)</a>
                            <a href="${basePath}sections/conq-alp.html" class="nav-link-sub block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition">Les Grands (12-16 ans)</a>
                        </div>
                    </div>

                    <a href="${basePath}documents.html" class="nav-link block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-patro-green hover:bg-green-50 transition">Documents</a>
                    
                    <div class="pt-4 mt-2 border-t border-gray-100 space-y-3">
                        <a href="${basePath}inscription.html" class="block w-full text-center px-5 py-4 rounded-xl font-bold bg-patro-yellow text-patro-green shadow-md active:scale-95 transition">
                            S'inscrire maintenant
                        </a>
                        <a href="https://parent.patrovaldhaine.be/" target="_blank" class="flex items-center justify-center gap-2 w-full text-center px-5 py-4 rounded-xl font-bold bg-gray-100 text-gray-700 shadow-sm active:scale-95 transition">
                            <i data-lucide="circle-user-round" class="w-5 h-5"></i> Espace parent
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        `;
        
        highlightActiveLink();
    }

    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
        <footer class="bg-gray-900 text-white pt-16 pb-8 mt-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
                    <div class="flex flex-col items-center md:items-start">
                        <img src="${basePath}donnees-site/LogoMaurageContour.svg" alt="Patro Maurage" class="h-24 w-auto mb-6">
                        
                        <span class="font-display font-bold text-2xl text-white block mb-4">Le Patro Val d'Haine de Maurage</span>
                        <p class="text-gray-400 text-sm mb-4">
                            Mouvement de jeunesse affilié à la Fédération Nationale des Patros.
                        </p>
                        <div class="flex flex-col items-center md:items-start space-y-2 text-sm text-gray-500">
                            <span>Rue du Roeulx 23, 7110 Maurage</span>
                            <span>patrovaldhaine@patro.be</span>
                            <span>0488/08.86.03</span>
                            <span><strong>IBAN :</strong> BE70 7320 7117 6025</span>
                            <span><strong>Identification O.N.E. :</strong> PA55022VALD</span>
                        </div>
                    </div>

                    <div class="flex flex-col items-center md:items-start">
                        <h5 class="font-bold text-gray-200 mb-6 uppercase text-sm tracking-wider">Avec le soutien de :</h5>
                        <div id="sponsors-grid" class="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                            <div class="animate-pulse h-16 w-24 bg-gray-800 rounded"></div>
                            <div class="animate-pulse h-16 w-24 bg-gray-800 rounded"></div>
                        </div>
                    </div>

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
                    <a href="${basePath}legal.html" class="hover:text-white transition">Mentions légales</a>
                    <span class="hidden md:inline">•</span>
                    <a href="${basePath}cookies.html" class="hover:text-white transition">Politique des cookies</a>
                    <span class="hidden md:inline">•</span>
                    <a href="https://parent.patrovaldhaine.be/" class="flex items-center gap-1 text-patro-yellow hover:text-white transition font-medium" title="Espace Parents">
                        <i data-lucide="circle-user-round" class="w-3 h-3"></i> Espace Parents
                    </a>
                    <span class="hidden md:inline">•</span>
                    <a href="https://intranet.patrovaldhaine.be" class="flex items-center gap-1 text-patro-yellow hover:text-white transition font-medium" title="Intranet animateur">
                        <i data-lucide="database" class="w-3 h-3"></i> Intranet animateur
                    </a>
                </div>
            </div>
        </footer>
        `;
        
        loadSponsors(basePath);
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();

    if (window.matchMedia("(pointer: fine)").matches) {
        const cursor = document.getElementById('custom-cursor');
        if(cursor) {
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

    checkCookieConsent(basePath);
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
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    // Éclaire le menu "Sections" si l'utilisateur s'y trouve
    if (currentPath.includes('/sections/')) {
        const desktopBtn = document.getElementById('desktop-sections-btn');
        if (desktopBtn) {
            desktopBtn.classList.remove('text-gray-600', 'font-medium');
            desktopBtn.classList.add('text-patro-green', 'font-bold');
        }
        const mobileBtn = document.getElementById('mobile-sections-btn');
        if (mobileBtn) {
            mobileBtn.classList.remove('text-gray-700', 'font-medium');
            mobileBtn.classList.add('text-patro-green', 'font-bold');
            
            // Ouvre l'accordéon mobile automatiquement
            const mobileMenu = document.getElementById('mobile-sections-menu');
            const mobileIcon = document.getElementById('mobile-sections-icon');
            if(mobileMenu && mobileIcon) {
                mobileMenu.classList.remove('hidden');
                mobileIcon.classList.add('rotate-180');
            }
        }
    }

    const allLinks = document.querySelectorAll('.nav-link, .nav-link-sub');
    allLinks.forEach(link => {
        if (!link.href) return;

        try {
            const urlObj = new URL(link.href, window.location.origin);
            let linkPath = urlObj.pathname;
            let linkHash = urlObj.hash;

            if (linkPath === '/' || linkPath.endsWith('/')) linkPath += 'index.html';
            let normalizedCurrent = currentPath === '/' || currentPath.endsWith('/') ? currentPath + 'index.html' : currentPath;

            let isMatch = false;

            if (normalizedCurrent === linkPath) {
                if (linkHash) {
                    isMatch = (currentHash === linkHash);
                } else {
                    isMatch = (currentHash === "");
                }
            }

            if (isMatch) {
                if (link.classList.contains('nav-link-sub')) {
                    // Application des couleurs délicates pour le sous-menu (SANS gras pour ne pas casser le style)
                    if (link.classList.contains('hover:text-patro-yellow')) { link.classList.add('text-patro-yellow', 'bg-yellow-50', 'border-patro-yellow'); }
                    else if (link.classList.contains('hover:text-orange-500')) { link.classList.add('text-orange-500', 'bg-orange-50', 'border-orange-500'); }
                    else if (link.classList.contains('hover:text-purple-600')) { link.classList.add('text-purple-600', 'bg-purple-50', 'border-purple-600'); }
                    else { link.classList.add('text-patro-green', 'bg-green-50', 'border-patro-green'); }
                    link.classList.remove('text-gray-700', 'text-gray-600');
                } else {
                    // Lien de menu principal classique
                    link.classList.remove('text-gray-600', 'text-gray-700', 'font-medium');
                    link.classList.add('text-patro-green', 'font-bold');
                }
            }
        } catch (e) {
            // Sécurité en cas d'URL invalide
        }
    });
}

async function loadSponsors(basePath) {
    const repoOwner = "staffpatrovdh-pixel";
    const repoName = "staffpatrovdh-pixel.github.io";
    const branch = "main";
    const fileUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branch}/donnees-site/partenaires.txt`;
    
    const container = document.getElementById('sponsors-grid');
    if (!container) return;

    try {
        const cacheBuster = `?t=${Date.now()}`;
        const response = await fetch(fileUrl + cacheBuster);
        
        if (!response.ok) throw new Error('Fichier partenaires.txt introuvable');
        
        const text = await response.text();
        const lines = text.split('\n');
        
        container.innerHTML = '';
        let hasPartners = false;

        lines.forEach(line => {
            if (!line.trim()) return;

            const parts = line.split('|');
            if (parts.length >= 3) {
                hasPartners = true;
                const name = parts[0].trim();
                let logoPath = parts[1].trim();
                const siteUrl = parts[2].trim();

                if (!logoPath.startsWith('http') && !logoPath.startsWith('/')) {
                    // Adapter le chemin des logos des sponsors si on est dans un sous-dossier
                    logoPath = basePath + logoPath;
                }

                const link = document.createElement('a');
                link.href = siteUrl;
                link.target = "_blank";
                link.title = name;
                link.className = "partner-link block transition-transform hover:scale-105";

                const img = document.createElement('img');
                img.src = logoPath;
                img.alt = name;
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

function checkCookieConsent(basePath) {
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
                        <a href="${basePath}cookies.html" class="text-patro-green underline hover:text-patro-yellow">En savoir plus</a>.
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
