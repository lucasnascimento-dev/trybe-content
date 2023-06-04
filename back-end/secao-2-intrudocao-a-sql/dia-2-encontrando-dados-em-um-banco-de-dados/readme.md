para usar o workbench foi preciso rodar o mysql com o docker através do comando:
  docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql:8.0.31