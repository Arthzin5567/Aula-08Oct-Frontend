//Interação com o Tux
const tuxImage = document.getElementById('tux-image');
if (tuxImage) {
    tuxImage.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
        
        console.log('🐧 Tux clicked!');
    });
}

//Copy to clipboard
const downloadLinks = document.querySelectorAll('.kernel-tabela a[href*="tar.xz"]');
downloadLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (e.ctrlKey) {
            e.preventDefault();
            navigator.clipboard.writeText(this.href)
                .then(() => {
                    alert('Link copiado!');
                })
                .catch(err => {
                    console.error('Erro ao copiar: ', err);
                });
        }
    });
});