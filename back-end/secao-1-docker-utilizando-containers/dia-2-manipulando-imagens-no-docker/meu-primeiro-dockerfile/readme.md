1- Depois de criado o Dockerfile criamos a imagem com o
  docker build -t my-first-image .
    - O -t da nome a imagem (my-first-image)
    - O "." é o local onde o docker vai procurar um arquivo DockerFile
    - Após bildar a imagem, ao darmos um 'docker images' podemos ver a imagem que acabamos de criar
    - rodando minha imagem em um container para checar o resultado com
      docker run --rm my-first-image 

2- Criando um servidor web com docker
  - Inicialmente criamos um index.html básico;
  - construimos o Dockerfile do apache copiando o index.html para a pasta de leitura indicada na documentação e executamos o foreground com o CMD;
  - daí bildamos o servidor
    docker build -t my-web-server .
  - Depois da imagem pronta executar ela em um container indicando a porta local
    docker run -d -p1234:80 --name my-container my-web-server
  - Ao acessar a porta 1234 do localhost o arquivo html será carregado