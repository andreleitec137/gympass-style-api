# App

GymPass style app.

## RFs

- [ X ] Deve ser possível se cadastrar;
- [ X ] Deve ser possível se autenticar;
- [ X ] Deve ser possível obter o perfil de um usuário logado;
- [ X ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ X ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ X ] Deve ser possível o usuário buscar academias próximas  (ATÉ 10KM);
- [ X ] Deve ser possível o usuário buscar academias pelo nome;
- [ X ] Deve ser possível o usuário realizar check-in em uma academia;
- [ X ] Deve ser possível validar o checkin de um usuário;
- [ X ] Deve ser possível cadastrar uma academia;

## RNs

- [ X ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ X ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ X ] O usuário não pode fazer check-in se não estiver perto (100m da academia);
- [ X ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs

- [ X ] A senha do usuário precisa estar criptografada;
- [ X ] Os dados da aplicação precisam estar persistidos em um banco PostgresSQL;
- [ ] Todas listas de dados precisam estar paginados com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (Json Web Token);