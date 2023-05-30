1- depois de criado o Dockerfile criamos a imagem com o
  docker build -t my-first-image .
    - O -t da nome a imagem (my-first-image)
    - O "." é o local onde o docker vai procurar um arquivo DockerFile
    - Após bildar a imagem, ao darmos um 'docker images' podemos ver a imagem que acabamos de criar
    - rodando minha imagem em um container para checar o resultado com
      docker run --rm my-first-image 
