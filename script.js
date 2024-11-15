
function showTime() {
    const date = new Date();
    document.getElementById('datetime').innerText = date.toLocaleTimeString();
}
setInterval(showTime, 1000);


const shortBio = "Ben, Recep Tayyip Erdoğan Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisi.";
const fullBio = `Ben, Recep Tayyip Erdoğan Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisi Mustafa Güneyli. Üniversite eğitimim sırasında 1 sene hazırlık okudum ve dil becerilerimi geliştirdim.
Akademik kariyerimde çeşitli proje yarışmalarında yer aldım ve TÜBİTAK 2209-A Üniversite Öğrencileri Proje Yarışması kapsamında projem kabul aldı. Bu sayede proje fikirlerimi hayata geçirebilmek için destek almayı başardım.

Mobil uygulama geliştirme alanında aktif olarak çalışıyorum ve ekip arkadaşlarımla birlikte Pharmavent isimli bir mobil proje üzerinde çalışmaktayım. Pharmavent, Teknokent Proje Yarışması'nda 2.lik ödülü kazandı ve ödülümüzü Teknoloji Bakanımız Sn. Mehmet Fatih Kacır'ın elinden alma gururunu yaşadık.

Aynı zamanda mobil geliştirme alanında kendimi daha da ileriye taşımak amacıyla Kotlin eğitimleri alıyorum ve bu alanda uzmanlaşmayı hedefliyorum.`;


let isExpanded = false;

function toggleBio() {
    const bio = document.getElementById('bio');
    const bioButton = document.getElementById('bioButton');

    
    if (isExpanded) {
        bio.innerText = shortBio;
        bioButton.textContent = "Daha Fazla Gör";
    } else {
        bio.innerText = fullBio;
        bioButton.textContent = "Daha Az Gör";
    }

    
    isExpanded = !isExpanded;
}


function filterProjects(category) {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        document.getElementById('formFeedback').innerText = 'Mesaj başarıyla gönderildi!';
    } else {
        document.getElementById('formFeedback').innerText = 'Lütfen tüm alanları doldurun!';
    }
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const nameRegex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/;

    
    if (!name) {
        feedback.innerText = 'Lütfen isminizi girin!';
        feedback.style.color = 'red';
    } else if (!nameRegex.test(name)) {
        feedback.innerText = 'İsim yalnızca harflerden oluşmalıdır!';
        feedback.style.color = 'red';
    } else if (!email) {
        feedback.innerText = 'Lütfen e-posta adresinizi girin!';
        feedback.style.color = 'red';
    } else if (!emailRegex.test(email)) {
        feedback.innerText = 'Geçersiz e-posta formatı!';
        feedback.style.color = 'red';
    } else if (!message) {
        feedback.innerText = 'Lütfen mesajınızı girin!';
        feedback.style.color = 'red';
    } else {
        feedback.innerText = 'Mesaj başarıyla gönderildi!';
        feedback.style.color = 'green';

        
        document.getElementById('contactForm').reset();
    }
});


function openModal(imageSrc, title, description) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalCaption.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
}


function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}