document.addEventListener('DOMContentLoaded', (event) => {
  const cartButtons = document.querySelectorAll('.btn');
  const sepetListesi = document.getElementById('sepet-listesi');

  cartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Ürün bilgilerini al
      const box = button.closest('.box');
      const urunAdi = box.querySelector('h3').textContent;
      const urunFiyati = box.querySelector('.price').textContent.trim().split('₺')[0] + '₺';
      const urunResmi = box.querySelector('img').src;

      // Ürünü sepete ekle
      const listItem = document.createElement('li');
      
      const img = document.createElement('img');
      img.src = urunResmi;
      listItem.appendChild(img);

      const text = document.createElement('span');
      text.textContent = `${urunAdi} - ${urunFiyati}`;
      listItem.appendChild(text);
      
      // Silme düğmesini oluştur
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Sil';
      deleteButton.style.marginLeft = '10px';
      
      // Silme düğmesine tıklama olayı ekle
      deleteButton.addEventListener('click', function() {
        sepetListesi.removeChild(listItem);
      });
      
      // Sepet öğesine silme düğmesini ekle
      listItem.appendChild(deleteButton);
      sepetListesi.appendChild(listItem);

      // Uyarı mesajı göster
      alert(`Ürün sepete eklendi: ${urunAdi} - ${urunFiyati}`);
    });
  });
});
