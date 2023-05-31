2 - Crie um container para manter um servidor httpd:2.4.54 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.
  RESPOSTA
  docker run --name site-trybe -p 4545:80 -v"$PWD:/usr/local/apache2/htdocs/" httpd:2.4.54