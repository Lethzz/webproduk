// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah pengiriman form default

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formMessage').textContent = 'Pesan Anda berhasil dikirim!';
        document.getElementById('formMessage').classList.add('text-success');
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formMessage').textContent = 'Mohon lengkapi semua bidang!';
        document.getElementById('formMessage').classList.add('text-danger');
    }
});
