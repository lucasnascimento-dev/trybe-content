1- bildamos a imagem do Dockerfile com o 
  docker build -t site-hugo .

2-Rodamos a imagem criada mapeando sua porta com o:
  docker run -p 1234:80 -d --name meu-container site-hugo
  - Ao acessar o localhost:1234 podemos ver o site em funcionamento