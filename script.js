/**
 * Jhelum Cafe & Fine Dine - Shared JS Foundation & CMS Engine
 */

// Default Menu Database derived from restaurant-data.json
const DEFAULT_MENU_DATA = [
  { id: "harissa_pizza", name: "Harissa Special Pizza", category: "Bestsellers", price: 350, veg: false, bestseller: true, description: "Our signature pizza topped with slow-cooked Kashmiri harissa, mozzarella, and a medley of spices that capture the essence of the valley.", outOfStock: false },
  { id: "czoch_burger", name: "Czochwaur Burger", category: "Bestsellers", price: 280, veg: false, bestseller: true, description: "A hearty burger with spiced Kashmiri minced meat patty, caramelized onions, and our house-special czochwaur sauce.", outOfStock: false },
  { id: "butter_chick_best", name: "Butter Chicken", category: "Bestsellers", price: 320, veg: false, bestseller: true, description: "Tender chicken simmered in a rich, creamy tomato-butter gravy with aromatic spices, served with butter naan.", outOfStock: false },
  { id: "lambert_burger_best", name: "Lambert Burger", category: "Bestsellers", price: 300, veg: false, bestseller: true, description: "Our famous double-patty burger loaded with cheese, crispy onion rings, pickled jalapenos, and Lambert's special sauce.", outOfStock: false },
  
  { id: "cheesy_italian", name: "Cheesy Italian Burger", category: "Burgers", price: 260, veg: true, bestseller: false, description: "A golden crispy patty layered with melted Italian cheese, sun-dried tomatoes, basil pesto, and fresh lettuce.", outOfStock: false },
  { id: "paneer_burger", name: "Paneer Burger", category: "Burgers", price: 280, veg: true, bestseller: false, description: "Grilled paneer tikka patty with mint chutney, pickled onions, and crunchy coleslaw in a toasted bun.", outOfStock: false },
  { id: "smoked_chick", name: "Smoked Chicken Burger", category: "Burgers", price: 320, veg: false, bestseller: false, description: "Juicy smoked chicken breast with chipotle mayo, lettuce, tomato, and Swiss cheese.", outOfStock: false },
  { id: "peri_chick", name: "Peri Peri Chicken Burger", category: "Burgers", price: 320, veg: false, bestseller: false, description: "Fiery peri peri marinated chicken fillet with roasted peppers, garlic aioli, and mixed greens.", outOfStock: false },
  { id: "crispy_chick", name: "Crispy Fried Chicken Burger", category: "Burgers", price: 320, veg: false, bestseller: false, description: "Crunchy buttermilk fried chicken with tangy slaw, dill pickle, and honey mustard dressing.", outOfStock: false },
  { id: "czoch_burger_bg", name: "Czochwaur Burger", category: "Burgers", price: 280, veg: false, bestseller: true, description: "A hearty burger with spiced Kashmiri minced meat patty, caramelized onions, and our house-special czochwaur sauce.", outOfStock: false },
  { id: "lambert_burger_bg", name: "Lambert Burger", category: "Burgers", price: 300, veg: false, bestseller: true, description: "Our famous double-patty burger loaded with cheese, crispy onion rings, pickled jalapenos, and Lambert's special sauce.", outOfStock: false },

  { id: "harissa_pizza_pz", name: "Harissa Special Pizza", category: "Pizzas", price: 350, veg: false, bestseller: true, description: "Our signature pizza topped with slow-cooked Kashmiri harissa, mozzarella, and a medley of spices.", outOfStock: false },
  { id: "margherita_pz", name: "Margherita Pizza", category: "Pizzas", price: 250, veg: true, bestseller: false, description: "Classic thin-crust pizza with San Marzano tomato sauce, fresh mozzarella, and fragrant basil leaves.", outOfStock: false },
  { id: "chick_tikka_pz", name: "Chicken Tikka Pizza", category: "Pizzas", price: 320, veg: false, bestseller: false, description: "Smoky tandoori chicken tikka with bell peppers, onions, and mozzarella on a hand-tossed base.", outOfStock: false },
  { id: "paneer_tikka_pz", name: "Paneer Tikka Pizza", category: "Pizzas", price: 290, veg: true, bestseller: false, description: "Chargrilled paneer tikka chunks with capsicum, onion, and a drizzle of mint chutney over melted cheese.", outOfStock: false },
  { id: "bbq_chick_pz", name: "BBQ Chicken Pizza", category: "Pizzas", price: 340, veg: false, bestseller: false, description: "Tender BBQ chicken with caramelized onions, jalapeños, and a smoky barbecue sauce base.", outOfStock: false },

  { id: "mince_chick_wrap", name: "Mince Chicken Wrap", category: "Wraps & Sandwiches", price: 220, veg: false, bestseller: false, description: "Spiced minced chicken rolled in a warm tortilla with fresh veggies, cheese, and garlic mayo.", outOfStock: false },
  { id: "paneer_wrap", name: "Paneer Supreme Wrap", category: "Wraps & Sandwiches", price: 200, veg: true, bestseller: false, description: "Grilled paneer strips with crunchy bell peppers, lettuce, and tangy house dressing in a flour wrap.", outOfStock: false },
  { id: "chick_club_sand", name: "Chicken Club Sandwich", category: "Wraps & Sandwiches", price: 240, veg: false, bestseller: false, description: "Triple-decker sandwich with grilled chicken, crispy bacon, egg, lettuce, and tomato with mayo.", outOfStock: false },
  { id: "veg_club_sand", name: "Veg Club Sandwich", category: "Wraps & Sandwiches", price: 200, veg: true, bestseller: false, description: "Classic triple-layer sandwich with grilled vegetables, cheese, lettuce, and mint chutney.", outOfStock: false },
  { id: "shawarma_roll", name: "Chicken Shawarma Roll", category: "Wraps & Sandwiches", price: 230, veg: false, bestseller: false, description: "Middle Eastern-inspired wrap with seasoned chicken, pickled turnips, tahini sauce, and fresh herbs.", outOfStock: false },

  { id: "butter_chick_mc", name: "Butter Chicken", category: "Main Course", price: 320, veg: false, bestseller: true, description: "Tender chicken pieces in a rich, creamy tomato-butter gravy, finished with kasuri methi and cream.", outOfStock: false },
  { id: "rogan_josh_mc", name: "Rogan Josh", category: "Main Course", price: 350, veg: false, bestseller: false, description: "Authentic Kashmiri lamb curry slow-cooked with aromatic spices, fennel, and dried ginger in a rich red gravy.", outOfStock: false },
  { id: "yakhni_mc", name: "Yakhni", category: "Main Course", price: 330, veg: false, bestseller: false, description: "Traditional Kashmiri yogurt-based lamb curry delicately spiced with cardamom, cloves, and bay leaves.", outOfStock: false },
  { id: "paneer_butter_mc", name: "Paneer Butter Masala", category: "Main Course", price: 270, veg: true, bestseller: false, description: "Soft paneer cubes swimming in a luscious tomato-cashew gravy with butter and aromatic spices.", outOfStock: false },
  { id: "dal_makhani_mc", name: "Dal Makhani", category: "Main Course", price: 220, veg: true, bestseller: false, description: "Slow-simmered black lentils and kidney beans in a creamy, buttery gravy — cooked overnight for depth.", outOfStock: false },
  { id: "chick_biryani_mc", name: "Chicken Biryani", category: "Main Course", price: 300, veg: false, bestseller: false, description: "Fragrant basmati rice layered with spiced chicken, saffron, fried onions, and fresh mint.", outOfStock: false },

  { id: "english_breakfast", name: "English Breakfast", category: "Breakfast", price: 350, veg: false, bestseller: false, description: "Classic full breakfast with eggs, toast, sausages, baked beans, grilled tomato, and hash browns.", outOfStock: false },
  { id: "pancake_stack", name: "Pancake Stack", category: "Breakfast", price: 220, veg: true, bestseller: false, description: "Fluffy buttermilk pancakes stacked high, drizzled with maple syrup and topped with fresh berries.", outOfStock: false },
  { id: "masala_omelette", name: "Masala Omelette", category: "Breakfast", price: 150, veg: false, bestseller: false, description: "Spiced three-egg omelette with onions, tomatoes, green chilies, and coriander, served with toast.", outOfStock: false },
  { id: "french_toast", name: "French Toast", category: "Breakfast", price: 180, veg: true, bestseller: false, description: "Golden brioche slices dipped in cinnamon-vanilla egg batter, served with honey and powdered sugar.", outOfStock: false },

  { id: "orange_mojito", name: "Mint Orange Mojito", category: "Beverages", price: 150, veg: true, bestseller: false, description: "Refreshing blend of fresh mint, orange juice, and soda with a hint of lime.", outOfStock: false },
  { id: "hot_chocolate", name: "Hot Chocolate", category: "Beverages", price: 160, veg: true, bestseller: false, description: "Rich, velvety hot chocolate made with premium cocoa and topped with whipped cream.", outOfStock: false },
  { id: "oreo_shake", name: "Oreo Shake", category: "Beverages", price: 180, veg: true, bestseller: false, description: "Creamy milkshake blended with crushed Oreo cookies, vanilla ice cream, and chocolate.", outOfStock: false },
  { id: "blue_mojito", name: "Blue Shoes Mojito", category: "Beverages", price: 170, veg: true, bestseller: false, description: "A vibrant blue curaçao mocktail with fresh lime, mint, and sparkling soda.", outOfStock: false },
  { id: "kahwa", name: "Kashmiri Kahwa", category: "Beverages", price: 120, veg: true, bestseller: false, description: "Traditional Kashmiri green tea infused with saffron, cinnamon, cardamom, and crushed almonds.", outOfStock: false },
  { id: "lime_soda", name: "Fresh Lime Soda", category: "Beverages", price: 100, veg: true, bestseller: false, description: "Classic refresher with freshly squeezed lime, sugar or salt, and chilled sparkling soda.", outOfStock: false },
  { id: "dry_fruit_shake", name: "Dry Fruit Shake", category: "Beverages", price: 200, veg: true, bestseller: false, description: "Creamy milkshake loaded with almonds, cashews, walnuts, and pistachios.", outOfStock: false },

  { id: "lava_cake", name: "Chocolate Lava Cake", category: "Desserts", price: 220, veg: true, bestseller: false, description: "Rich warm chocolate cake filled with molten lava fudge, served with vanilla scoop.", outOfStock: false },
  { id: "phirni", name: "Phirni", category: "Desserts", price: 120, veg: true, bestseller: false, description: "Traditional Kashmiri ground rice pudding flavored with saffron, cardamom, and silver leaf.", outOfStock: false },
  { id: "brownie_sundae", name: "Brownie Sundae", category: "Desserts", price: 200, veg: true, bestseller: false, description: "Fudgy warm brownie chunks with vanilla ice cream, chocolate fudge, and nuts.", outOfStock: false },
  { id: "gulab_jamun", name: "Gulab Jamun", category: "Desserts", price: 100, veg: true, bestseller: false, description: "Soft warm milk solids dumplings soaked in cardomom flavored sugar syrup.", outOfStock: false }
];

const DEFAULT_SETTINGS = {
  phone: "9484104295",
  whatsapp: "7780938743",
  promoText: "Get 10% off on your first order directly via WhatsApp! 🍕",
  address: "Budshah Bridge, Maisuma, Lal Chowk, Srinagar, J&K 190001",
  hoursText: "Monday - Sunday: 10:00 AM – 10:00 PM"
};

// Database Initialization
if (!localStorage.getItem('jhelum_menu')) {
  localStorage.setItem('jhelum_menu', JSON.stringify(DEFAULT_MENU_DATA));
}
if (!localStorage.getItem('jhelum_settings')) {
  localStorage.setItem('jhelum_settings', JSON.stringify(DEFAULT_SETTINGS));
}

// Global functions for pages to communicate with DB
window.getJhelumMenu = function() {
  return JSON.parse(localStorage.getItem('jhelum_menu') || '[]');
};

window.saveJhelumMenu = function(menuArray) {
  localStorage.setItem('jhelum_menu', JSON.stringify(menuArray));
  window.dispatchEvent(new Event('jhelum_db_update'));
};

window.getJhelumSettings = function() {
  return JSON.parse(localStorage.getItem('jhelum_settings') || '{}');
};

window.saveJhelumSettings = function(settingsObj) {
  localStorage.setItem('jhelum_settings', JSON.stringify(settingsObj));
  window.dispatchEvent(new Event('jhelum_db_update'));
};

window.resetJhelumDatabase = function() {
  localStorage.setItem('jhelum_menu', JSON.stringify(DEFAULT_MENU_DATA));
  localStorage.setItem('jhelum_settings', JSON.stringify(DEFAULT_SETTINGS));
  window.dispatchEvent(new Event('jhelum_db_update'));
};

// Main DOM Content Loading
document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // NAVBAR SCROLL & HAMBURGER TOGGLE
  // ==========================================
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Add scrolled class on scroll
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // Toggle mobile overlay menu
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu when links are clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ==========================================
  // DYNAMIC SETTINGS INJECTION (PROMO BANNER & LINKS)
  // ==========================================
  function updateDOMFromSettings() {
    const settings = window.getJhelumSettings();
    const promoEl = document.getElementById('alertPromoText');
    if (promoEl && settings.promoText) {
      promoEl.textContent = settings.promoText;
    }
  }
  updateDOMFromSettings();
  window.addEventListener('jhelum_db_update', updateDOMFromSettings);

  // ==========================================
  // SCROLL-TRIGGERED FADE-IN (INTERSECTION OBSERVER)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ==========================================
  // ANIMATED NUMBER COUNTER (COUNTUP)
  // ==========================================
  const counterElements = document.querySelectorAll('.countup-number');

  function triggerCountUp(el) {
    const target = parseInt(el.getAttribute('data-target') || '0', 10);
    const duration = 2000;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * target);
      
      el.textContent = currentValue.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = target.toLocaleString() + (el.getAttribute('data-suffix') || '');
      }
    }
    requestAnimationFrame(updateCounter);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        triggerCountUp(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  counterElements.forEach(el => counterObserver.observe(el));

  // ==========================================
  // SMOOTH ANCHOR LINK SCROLLING
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navOffset = navbar ? navbar.offsetHeight : 72;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navOffset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
