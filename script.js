// ملف script.js أو في وسم <script> أسفل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menuIcon');
  const navbar = document.getElementById('navbar');
  const closeIcon = document.getElementById('closeIcon');

  menuIcon.addEventListener('click', () => {
    navbar.classList.add('active');
  });

  closeIcon.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});
// تأكد أن العناصر محملة قبل تنفيذ السكربت
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menuIcon');
  const navbar = document.getElementById('navbar');
  const closeIcon = document.getElementById('closeIcon');

  menuIcon.addEventListener('click', () => {
    navbar.classList.add('active');
  });

  closeIcon.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// ///////////////////////////////////////////////////////////
var typed = new Typed(".text", {
  strings: ["التصاميم", "التصاميم"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
// ظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظ
// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// افحص لو الدارك مود محفوظ من قبل بالمخزن المحلي LocalStorage
if(localStorage.getItem('darkMode') === 'enabled'){
  body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️'; // أيقونة للشمس لما يكون دارك مود شغال
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if(body.classList.contains('dark-mode')){
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.textContent = '☀️';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    darkModeToggle.textContent = '🌙';
  }
});

// Language Toggle (عربي / إنجليزي)
const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('lang') || 'ar'; // افتراضياً عربي

function setLanguage(lang){
  if(lang === 'ar'){
    document.documentElement.lang = 'ar';
    langToggle.textContent = 'ع';
    // هنا تقدر تضيف تغييرات على النصوص مثلاً
  } else {
    document.documentElement.lang = 'en';
    langToggle.textContent = 'EN';
    // نفس الشيء لتغيير النصوص أو أي حاجة خاصة بالإنجليزي
  }
  localStorage.setItem('lang', lang);
}

setLanguage(currentLang);

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  setLanguage(currentLang);
});

// ظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظ
const clients = [
  { name: "أحمد", gender: "male", rating: 5, review: "خدمة ممتازة وسرعة في التسليم!" },
  { name: "مريم", gender: "female", rating: 4, review: "التصميم كان رائع ومهني جدًا" },
  { name: "كريم", gender: "male", rating: 5, review: "أفكار إبداعية وتنفيذ احترافي" },
  { name: "ياسمين", gender: "female", rating: 5, review: "سعيد جدًا بالنتيجة النهائية!" },
  { name: "عبدالله", gender: "male", rating: 4, review: "الرد سريع والتعامل راقي" },
  { name: "ليلى", gender: "female", rating: 3, review: "اهتمام بالتفاصيل وتنفيذ جيد" },
  { name: "رامي", gender: "male", rating: 5, review: "المصمم محترف جدًا وعنده ذوق" },
  { name: "سارة", gender: "female", rating: 5, review: "الأسعار ممتازة مقابل الجودة" },
  { name: "وليد", gender: "male", rating: 4, review: "كل شيء كان سلس وسهل" },
  { name: "هدى", gender: "female", rating: 5, review: "تجربة ممتازة من البداية للنهاية" }
];

let index = 0;
const testimonialContainer = document.getElementById("testimonial-container");

function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? '★' : '☆';
  }
  return stars;
}

function showTestimonials() {
  testimonialContainer.innerHTML = '';
  const visibleClients = clients.slice(index, index + 3);

  visibleClients.forEach(client => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    // اختيار الأيقونة حسب النوع
    const icon = client.gender === 'male' 
      ? '<i class="fas fa-user-tie icon"></i>' 
      : '<i class="fas fa-user icon"></i>';

    card.innerHTML = `
      <div class="testimonial-icon">${icon}</div>
      <div class="testimonial-name">${client.name}</div>
      <div class="stars">${generateStars(client.rating)}</div>
      <div class="testimonial-text">${client.review}</div>
    `;
    testimonialContainer.appendChild(card);
  });

  index = (index + 3) % clients.length;
}

// أول تحميل
showTestimonials();

// تغيير كل 6 ثواني
setInterval(showTestimonials, 6000);
// /////////////////////////////////////////////////////
function initProductSlider() {
  const slides = document.querySelectorAll(".product-slide");
  if (slides.length === 0) return; // ✅ لو مفيش صور، اخرج بدون ما تعمل حاجة

  let currentSlide = 0;

  function showSlide(index) {
    if (!slides[index]) return; // ✅ حماية إضافية
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide); // ✅ أول صورة تظهر في البداية
  setInterval(nextSlide, 1000);
}

// استدعاء عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", initProductSlider);
// ظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظ

  const track = document.getElementById("slider-track");
  const imgs = track.querySelectorAll("img");

  // نكرر الصور تلقائيًا لتغطية العرض بشكل مستمر
  imgs.forEach(img => {
    const clone = img.cloneNode(true);
    track.appendChild(clone);
  });



  // ظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظ
  
const aboutSection = document.querySelector('.about');
const light = document.getElementById('mouseLight');

let mouseX = 0, mouseY = 0; // موقع الماوس الحالي
let lightX = 0, lightY = 0; // موقع الدائرة الحالي
let velocity = 0.1; // سرعة تتبع الدائرة للماوس
let shakeAmplitude = 5; // قوة الاهتزاز
let shakeDecay = 0.9; // تخفيف الاهتزاز تدريجياً
let shaking = false;

aboutSection.addEventListener('mousemove', (e) => {
  const rect = aboutSection.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
  shaking = true;
});

aboutSection.addEventListener('mouseleave', () => {
  light.style.opacity = '0';
});

aboutSection.addEventListener('mouseenter', () => {
  light.style.opacity = '1';
});

function animate() {
  // تقريب سلس لموضع الماوس
  lightX += (mouseX - lightX) * velocity;
  lightY += (mouseY - lightY) * velocity;

  let offsetX = 0;
  // إذا قربت الدائرة من الماوس وبقت اهتزاز
  if (shaking) {
    offsetX = Math.sin(Date.now() / 50) * shakeAmplitude;
    shakeAmplitude *= shakeDecay; // تخفيف الاهتزاز تدريجياً
    if (shakeAmplitude < 0.5) { 
      shakeAmplitude = 5; 
      shaking = false; 
      offsetX = 0; 
    }
  }

  light.style.transform = `translate(${lightX + offsetX}px, ${lightY}px)`;
  requestAnimationFrame(animate);
}

animate();


  // وظيفة تكرار الصور تلقائيًا لكل سلايدر
  function makeInfiniteSlider(trackSelector) {
    const track = document.querySelector(trackSelector);
    const images = track.querySelectorAll('img');

    // ننسخ مجموعة الصور ونضيفها بعد الأصلية
    const clone = document.createDocumentFragment();
    images.forEach(img => {
      const copy = img.cloneNode(true);
      clone.appendChild(copy);
    });
    track.appendChild(clone);

    // نكرر العملية كل فترة لو السلايدر طويل
    setInterval(() => {
      if (track.scrollWidth - Math.abs(track.getBoundingClientRect().left) < window.innerWidth * 2) {
        const extra = document.createDocumentFragment();
        images.forEach(img => {
          const copy = img.cloneNode(true);
          extra.appendChild(copy);
        });
        track.appendChild(extra);
      }
    }, 30000); // كل 30 ثانية يضيف نسخة جديدة (تقدر تعدل المدة)
  }

  // تطبيق على السلايدرين
  makeInfiniteSlider('.slider-track');
  makeInfiniteSlider('.slider-track1');




  