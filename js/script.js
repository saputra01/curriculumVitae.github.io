var tombolOclose = document.querySelector("main input");
var sectionMenu = document.querySelector("section.sidemenu");

tombolOclose.addEventListener('click',()=>{
   sectionMenu.classList.toggle("sidemenu");
   var menuNone = sectionMenu.className;
   if(menuNone === ''){
      sectionMenu.style.display = 'none';
   } else {
      sectionMenu.style.display = 'block';
   }
});

// alert("Hallo, terima kasih sudah berkunjung ke Curriculum Vitae saya\nSebelumnya saya mohon maaf karena Webisite ini masih dalam pengembangan dan masih bersifat statis! Jika ada yang ditanyakan mohon hubungin email saya");