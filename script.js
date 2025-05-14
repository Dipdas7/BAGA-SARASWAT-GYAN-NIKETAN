 // Toggle mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Page content switching
    const pageTitle = document.getElementById('pagetoggal');
    const allMenuLinks = document.querySelectorAll('nav a, #mobile-menu a');

    function showContent(contentId) {
      // Hide all content sections
      document.querySelectorAll('.page-content').forEach(content => {
        content.classList.add('hidden');
      });

      // Show selected content
      const activeContent = document.getElementById(contentId);
      if (activeContent) {
        activeContent.classList.remove('hidden');
      }
    }

    allMenuLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const linkText = this.textContent.trim().toLowerCase();

        // Update page title
        pageTitle.textContent = this.textContent.trim() + ' Page';

        // Show corresponding content
        switch (linkText.toLowerCase()) {
          case 'home':
            showContent('home-content');
            break;
          case 'about us':
            showContent('about-us');
            break;
          case 'secretary message':
            showContent('secretary-content');
            break;
          case 'governing body':
            showContent('governing-content');
            break;
          case 'organisation profile':
            showContent('profile-content');
            break;
          case 'what we do':
            showContent('what-content');
            break;
          case 'future plan':
            showContent('future-content');
            break;
          case 'gallery':
            showContent('gallery-content');
            break;
          case 'join us':
            showContent('join-content');
            break;
          case 'our approach':
            showContent('approach-content');
            break;
          case 'contact us':
            showContent('contact-content');
            break;
          case 'donate':
            showContent('donate-content');
            break;
          default:
            showContent('home-content'); // fallback
        }

        function showContent(contentId) {
          const sections = document.querySelectorAll('.page-section');
          sections.forEach(section => {
            section.classList.add('hidden');
          });
          const activeSection = document.getElementById(contentId);
          if (activeSection) {
            activeSection.classList.remove('hidden');
          }
        }


        // Hide mobile menu after selection
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      });
    });

    // Initialize with home content
    showContent('home-content');
    let currentIndex = 0;
    const slider = document.getElementById('slider');
    const totalSlides = slider.children.length;

    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

    // Optional: Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);
