# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro <br>
Deve ser possível listar todas as categorias <br>

**RN**
Não deve ser possível cadastrar um carro com a placa já existente <br>
Não deve ser possível alterar a placa de um carro já existente <br>
O carro deve ser cadastrado com disponibilidade ativa por padrão <br>
Só um usuário admin pode cadastrar um novo carro. <br>

# Listagem de carros

**RF**
Deve ser possível listar os carros disponíveis <br>
Deve ser possível listar os carros disponíveis pela categoria <br>
Deve ser possível listar os carros disponíveis pela marca <br>

**RN**
Não é necessário estar logado no sistema <br>

# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro <br>
Deve ser possível listar todas as especificações <br>
Só um usuário admin pode cadastrar uma nova especificação. <br>

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado <br>
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro <br>

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro <br>
Deve ser possível listar todos os carro <br>

**RNF**
Utilizar o multer para upload de arquivos <br>

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro <br>
O usuário responsável pelo cadastro de imagens deve ser um administrador <br>
 
# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel <br>

**RN**
O aluguel deve ter duração mínima de 24 horas <br>
Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel aberto para o mesmo usuário <br>
Não deve ser possível cadastrar um novo aluguel caso já exista um aluguel aberto para o mesmo carro <br>
