const touche = [...document.querySelectorAll('.btn')] 
 const listkeycode = touche.map(touche => touche.dataset.key)
 console.log(listkeycode)
 const ecran = document.querySelector('.ecran') 
 document.addEventListener('keydown', (e) =>{
     const valeur = e.keyCode.toString()
})
 document.addEventListener('click', (e) =>{
     const valeur = e.target.dataset.key
    if(valeur){
        calculer(valeur)
    }
 })
const calculer = (valeur) => {
   if(listkeycode.includes(valeur)){
        switch(valeur){
            case '8':
                 ecran.textContent = "";
                 break;
               case '13':
                 const calcul = eval(ecran.textContent);
                 ecran.textContent = calcul
                 break;
              default:
                     const indexkeycode = listkeycode.indexOf(valeur)
                    const touch = touche[indexkeycode]
                    ecran.textContent += touch.innerHTML
        }
  }
 }
 window.addEventListener('error', (e) => {
    alert("Erreur")
 })