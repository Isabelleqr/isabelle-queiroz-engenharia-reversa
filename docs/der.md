# 2. Modelo Entidade-Relacionamento (DER)

```
+---------------------------------+       1:N       +---------------------------------+
|            CLIENTES             |----------------<|            VEICULOS             |
+---------------------------------+                 +---------------------------------+
| PK  id       INTEGER NOT NULL   |                 | PK  id         INTEGER NOT NULL |
|     nome     TEXT NOT NULL      |                 |     placa      TEXT UNIQUE      |
|     cpf      TEXT NOT NULL (C)  |                 |     modelo     TEXT NOT NULL    |
|     telefone TEXT               |                 |     tipo       TEXT NOT NULL    |
|     email    TEXT               |                 |     marca      TEXT             |
+---------------------------------+                 | FK  cliente_id INTEGER NOT NULL |
                                                    +---------------------------------+
                                                                     |
                                                                     | 1:N
                                                                     v
+---------------------------------+                 +---------------------------------+
|            USUARIOS             |                 |          AGENDAMENTOS           |
+---------------------------------+                 +---------------------------------+
| PK  id       INTEGER NOT NULL   |                 | PK  id               INTEGER    |
|     login    TEXT UNIQUE        |                 | FK  veiculo_id       INTEGER    |
|     nome     TEXT NOT NULL      |                 |     data_agendamento TEXT (YYYY)|
|     senha    TEXT (Hash Bcrypt) |                 |     servico          TEXT       |
+---------------------------------+                 +---------------------------------+

*(C) Indica campo armazenado criptografado usando AES-256-GCM.
```