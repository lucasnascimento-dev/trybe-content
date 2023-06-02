1- preparando o ambiente
  docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:8.0.31

2- Após subir o container com o mysql abrir o script do sakila, executar e atualizar