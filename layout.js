document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. INJECTION DU HEADER (NAVBAR) ---
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = `
        <nav class="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm" id="navbar">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <!-- Logo -->
                    <a href="index.html" class="flex-shrink-0 flex items-center gap-2">
                        <img src="https://static.wixstatic.com/shapes/99150c_262f50afd9f748c1b2820587168d19f3.svg" alt="Logo Patro Val d'Haine" class="h-14 w-auto">
                    </a>

                    <!-- Desktop Menu -->
                    <div class="hidden lg:flex space-x-5 items-center">
                        <a href="index.html" class="nav-link text-gray-600 hover:text-patro-green font-medium transition">Accueil</a>
                        <a href="contact.html" class="nav-link text-gray-600 hover:text-patro-green font-medium transition">Contact</a>
                        
                        <!-- NOUVEAU LIEN -->
                        <a href="informations.html" class="nav-link text-gray-600 hover:text-patro-green font-medium transition">Infos & agenda</a>
                        
                        <a href="documents.html" class="nav-link text-gray-600 hover:text-patro-green font-medium transition">Documents</a>

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
                    <a href="informations.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-patro-green hover:bg-yellow-50">Infos & agenda</a>
                    <a href="contact.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-patro-green hover:bg-yellow-50">Contact</a>
                    <a href="documents.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-patro-green hover:bg-yellow-50">Documents</a>

                    <a href="inscription.html" class="block w-full text-center mt-4 px-5 py-3 rounded-md font-bold bg-patro-yellow text-patro-green">
                        S'inscrire maintenant
                    </a>
                </div>
            </div>
        </nav>
        `;
    }

    // --- 2. INJECTION DU FOOTER ---
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
        <footer class="bg-gray-900 text-white pt-16 pb-8 mt-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
                    <!-- Colonne 1: Info -->
                    <div>
                        <span class="font-display font-bold text-2xl text-white block mb-4">Patro Val d'Haine</span>
                        <p class="text-gray-400 text-sm mb-4">
                            Association de fait reconnue par la Fédération Wallonie-Bruxelles.
                        </p>
                        <div class="flex flex-col items-center md:items-start space-y-2 text-sm text-gray-500">
                            <span>Rue du Roeulx 23, 7110 Maurage</span>
                            <span>patrovaldhaine@patro.be</span>
                        </div>
                    </div>

                    <!-- Colonne 2: Partenaires -->
                    <div class="flex flex-col items-center md:items-start">
                        <h5 class="font-bold text-gray-200 mb-6 uppercase text-sm tracking-wider">Avec le soutien de :</h5>
                        <div class="grid grid-cols-2 gap-4 items-center">
                            <img src="https://www.federation-wallonie-bruxelles.be/fileadmin/sites/portail/pictures/projet-portail-230OK_03.png" alt="FWB" class="partner-logo h-10 w-auto object-contain bg-white rounded p-1">
                            <img src="https://patro.be/wp-content/uploads/sites/5/2018/11/patro-logo.png" alt="Fédération Patro" class="partner-logo h-10 w-auto object-contain bg-white rounded p-1">
                            <img src="https://ecolelibremaurage.be/wp-content/uploads/2022/04/cropped-Copie-de-Design-sans-nom-3.png" alt="École Libre Maurage" class="partner-logo h-12 w-auto object-contain bg-white rounded p-1">
                            <img src="https://www.one.be/typo3conf/ext/etnic_one/Resources/Public/Icons/one.png" alt="ONE" class="partner-logo h-8 w-auto object-contain bg-white rounded p-1">
                        </div>
                    </div>

                    <!-- Colonne 3: Réseaux Sociaux -->
                    <div class="flex flex-col items-center md:items-end">
                        <h5 class="font-bold text-gray-200 mb-4 uppercase text-sm tracking-wider">Suivez-nous</h5>
                        <div class="flex space-x-4">
                            <a href="https://www.facebook.com/patrovaldhaine" class="bg-gray-800 p-3 rounded-full hover:bg-[#1877F2] hover:text-white transition duration-300">
                                <i data-lucide="facebook" class="w-5 h-5"></i>
                            </a>
                            <a href="https://www.instagram.com/patrovaldhaine/" class="bg-gray-800 p-3 rounded-full hover:bg-[#E4405F] hover:text-white transition duration-300">
                                <i data-lucide="instagram" class="w-5 h-5"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-800 pt-8 text-center">
                    <p class="text-gray-500 text-sm">© 2025 Patro du Val d'Haine – Tous droits réservés</p>
                </div>
            </div>
        </footer>
        `;
    }

    // --- 3. INITIALISATION DES ICONS & MENU MOBILE ---
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // --- 4. GESTION DU CURSEUR ---
    if (window.matchMedia("(pointer: fine)").matches) {
        const cursor = document.getElementById('custom-cursor');
        if(cursor) {
            document.addEventListener('mousemove', (e) => {
                requestAnimationFrame(() => {
                    cursor.style.left = e.clientX + 'px';
                    cursor.style.top = e.clientY + 'px';
                });
            });
            document.addEventListener('mouseout', () => { cursor.style.opacity = '0'; });
            document.addEventListener('mouseover', () => { cursor.style.opacity = '1'; });
        }
    }

    // Effet de scroll sur la navbar
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
});

// --- 5. GESTION DU LOADER ---
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
