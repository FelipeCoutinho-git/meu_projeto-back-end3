# 🚀 Configuração Inicial de Projeto Express com TypeScript

Guia passo a passo para inicialização e execução de um servidor backend simples utilizando **Express**, **TypeScript** e **tsx**.

---

## 📁 Estrutura do Projeto

```text
meu-projeto-backend/
├── node_modules/
├── src/
│   └── app.ts
├── package.json
└── tsconfig.json
```

---

## 🛠️ Passo a Passo de Configuração

### 1. Preparar o ambiente
Execute os comandos abaixo para criar o `package.json`, instalar o TypeScript e inicializar o arquivo de configuração `tsconfig.json`:

```bash
npm init -y
npm i -D typescript @types/node tsx
npx tsc --init
```

### 2. Instalar o Express
Instale o Express e os tipos para suporte ao TypeScript:

```bash
npm install express
npm install -D @types/express
```

### 3. Criar o arquivo do servidor
Crie a pasta `src` e o arquivo `src/app.ts` com o seguinte código:

```typescript
// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express } from "express";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

### 4. Configurar o script de execução
Abra o arquivo `package.json` e altere a seção `"scripts"` para:

```json
"scripts": {
  "dev": "tsx watch src/app.ts"
}
```

---

## 🏃 Executando o Servidor

No terminal, execute:

```bash
npm run dev
```

Se tudo estiver correto, o terminal exibirá:

```text
Servidor rodando em http://localhost:8081
```
