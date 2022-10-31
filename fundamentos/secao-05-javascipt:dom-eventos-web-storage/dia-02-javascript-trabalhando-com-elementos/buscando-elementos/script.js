        // Acesse o elemento elementoOndeVoceEsta. 
        const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

        // Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. 
        const pai = elementoOndeVoceEsta.parentElement;
        pai.style.color = 'red';

        /* 
        Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se 
        lembra dos vídeos da aula anterior, como fazer isso?
        */ 
       const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
       primeiroFilhoDoFilho.innerText = 'adicionando texto ao primeiro filho do filho';

       // Acesse o primeiroFilho a partir de pai. 
       const primeiroFilho = pai.firstElementChild;
       console.log(primeiroFilho)

       // Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta. 
       const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
       console.log(primeiroFilho2)

       // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta. 
       const textoAtencao = elementoOndeVoceEsta.nextSibling;
       console.log(textoAtencao)

       // Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta. 
       const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
       console.log(terceiroFilho)