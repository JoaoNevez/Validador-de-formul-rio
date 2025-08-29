# ✅ Validador de Formulário

Um simples validador de formulário em **HTML + CSS + TypeScript**.  
O sistema valida:

- 📧 **E-mail** no formato válido (`usuario@dominio.com`)  
- 🔑 **Senha** com:
  - mínimo de **8 caracteres**
  - pelo menos **1 número**
  - pelo menos **1 símbolo**

---

## 🚀 Como usar

1. Compile o TypeScript para JavaScript:
   ```bash
   tsc index.ts
Isso gera o arquivo index.js.

Abra o arquivo index.html no navegador.

Preencha o formulário:

O campo de e-mail precisa estar em formato válido.

A senha precisa atender todos os requisitos.

O botão Enviar só será habilitado quando os campos estiverem válidos.

📂 Estrutura do projeto
pgsql
Copiar código
validador-form-web/
├── index.html   # Estrutura do formulário
├── style.css    # Estilos do formulário
├── index.ts     # Lógica de validação em TypeScript
✨ Funcionalidades
Mensagens de erro exibidas abaixo dos campos.

Checklist dinâmico mostrando se os requisitos da senha foram atendidos.

Botão de envio habilitado somente quando todos os campos forem válidos.

Mensagem de sucesso ao validar corretamente.

🔧 Tecnologias usadas
HTML5

CSS3

TypeScript

