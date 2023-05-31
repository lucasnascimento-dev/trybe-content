1- A configuração do compose se deu da seguinte forma:

    -Três serviços, um deles usando uma imagem Docker pronta e dois com arquivo Dockerfile;
    
    -Mapeamos as portas de conexão;
    
    -Configuramos a política de reinicialização;
    
    -Criamos uma variável de ambiente;
    
    -Definimos a ordem de subida dos serviços.

2- Depois de organizar ar tarefas acima podemos executar todos os serviços:
    docker-compose up
