# Engenharia Reversa - Oficina Mecânica AutoCerta

Projeto de documentação técnica e análise de engenharia reversa do sistema web da oficina AutoCerta.

## 🛠️ Tecnologias Utilizadas
- **Back-end:** Node.js (v22.13+), Express, Express-Session, Bcryptjs
- **Banco de Dados:** SQLite (com suporte nativo via `node:sqlite`)
- **Front-end:** HTML5, CSS3 e JavaScript Vanilla
- **Segurança:** Criptografia AES-256-GCM para CPF e Hashing Bcrypt para senhas

## 📂 Estrutura do Repositório
- `docs/`: Documentação técnica (Requisitos, DER, Mapa da API, Front-end, Testes e Segurança).
- `sistema_comentado/`: Cópia do código-fonte com comentários explicativos (o porquê das regras).

## 🚀 Como Executar
1. Acesse a pasta `sistema_comentado/`
2. Instale as dependências: `npm install`
3. Inicie a aplicação: `npm start`
4. Acesse no navegador: `http://localhost:3000`