# Scraper de Produtos da Amazon

Este projeto permite buscar listagens de produtos da Amazon com base em uma palavra-chave.

## Como executar

### Backend
1. Instale o [Bun](https://bun.sh/).
2. Clone este repositório.
3. Acesse a pasta `backend` e instale as dependências:
   ```sh
   bun install
   ```
4. Inicie o servidor:
   ```sh
   bun run index.ts
   ```

### Frontend
1. Acesse a pasta `frontend`.
2. Instale o Vite:
   ```sh
   npm create vite@latest frontend --template vanilla
   ```
3. Instale as dependências e inicie o servidor:
   ```sh
   npm install
   npm run dev
   ```

O frontend estará disponível em `http://localhost:5173` e fará chamadas para `http://localhost:3000/api/scrape` para obter os produtos.
*/

 
