# Recuperaao de senha

<!-- Requisitos Funcionais -->
**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

<!-- Requisitos Não Funcionais -->
**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev
- Utilizar Amazon SES para envios em produção
- O envio de e-mails deve acontecer em segundo plano (Background job)


<!-- Rergras de Negócio -->
**RN**

- O link por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao rastrear sua senha;


# Atualização de perfil

**RF**

- O usuário deve poder atualizar seu nmome, email e senha

**RN**

- O usuário não pode alterar seu email para um e-mail já utilizado
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha

# Painel de Prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas em MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;


**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar

# Agendamento de Serviços

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponivel de um prestador
- Usuário deve poder listar horários disponiveis em um dia especifico de um prestador
- O usuário deve poder realizar um novo agendamento com um prestador

**RNF**

- A listagem de prestadores devem ser armazenados em cache;


**RN**

- Cada agendamento deve durar 1hr exatamente;
- Os agendamentos devem estar disponiveis entre 8 às 18h (Primeiro ás 8h, último às 17h);
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

