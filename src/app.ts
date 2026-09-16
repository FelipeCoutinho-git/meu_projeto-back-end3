// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express, { response } from "express";
import type { Express, Request, Response } from "express";

// importa a classe Player do arquivo Player.ts
/* Por que Player.ts deve ser importado com a extensão .js?
Porque o TypeScript, quando compila para JavaScript, 
gera arquivos .js. Portanto, ao importar um módulo TypeScript 
em outro arquivo TypeScript, você deve usar a extensão .js 
para que o Node.js consiga localizar o arquivo corretamente.
*/ 
/* Porque o TypeScript compila o código para JavaScript, e o Node.js só entende arquivos JavaScript. 
Então, mesmo que o arquivo original seja Player.ts, após a compilação ele se torna Player.js, 
e é por isso que precisamos importar com a extensão .js. */
import { Player } from "./models/Player.js"; 

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

/* Middleware para permitir que o servidor aceite 
requisições com corpo em formato JSON */
app.use(express.json());

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

const player = new Player("Jeremias", 100, 1);

// Rota GET para obter informações sobre um jogador específico
/* Quando um usuario acessar a rota /player, o servidor 
irá retornar suas informações em formato JSON */
app.get("/player", (req: Request, res: Response) => {
    res.json({
        message: "Informações do jogador",
        player: player,
    });
});

// Rota POST para atacar o player
/* Quando um usuario acessar a rota /player/attack via POST, o servidor
irá executar o método attack() do jogador e retornar suas informações atualizadas em formato JSON */
app.post("/player/attack", (req: Request, res: Response) => {
    const attackMessage = player.attack();
    res.json({
        message: attackMessage,
    });
});

// Rota POST para causar dano ao player
/* Quando um usuario acessar a rota /player/damage via POST, o servidor
irá executar o método takeDamage() do jogador e retornar suas informações atualizadas em formato JSON */
app.post("/player/damage", (req: Request, res: Response) => {
    //Extrai o valor do dano do corpo da requisição
    const { damage } = req.body;
    //Chamar o método takeDamage() do player e armazenar a mensagem de retorno
    const damageMessage = player.takeDamage(damage);
    res.json({ 
    //Retorna a mensagem de dano, a vida atual e o nível atual do player
    action: damageMessage,
    //Retorna a vida atual do player
    currentHealth: player.health,
    //Retorna o nível atual do player
    currentLevel: player.level,
    });   
});

// Rota POST para curar o player
/* Quando um usuario acessar a rota /player/heal via POST, o servidor
irá executar o método heal() do jogador e retornar suas informações atualizadas em formato JSON */
app.post("/player/heal", (req: Request, res: Response) => {
    const healMessage = player.heal();
    res.json({
        message: healMessage,
        currentHealth: player.health,
        currentLevel: player.level,
    });
});

// Rota Post para level up do player
/* Quando um usuario acessar a rota /player/levelup via POST, o servidor
irá executar o método levelUp() do jogador e retornar suas informações atualizadas em formato JSON */
app.post("/player/levelup", (req: Request, res: Response) => {
    const levelUpMessage = player.levelUp();
    res.json({
        message: levelUpMessage,
        currentHealth: player.health,
        currentLevel: player.level,
    });
});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log("Rotas disponíveis:");
    console.log(`GET http://localhost:${PORT}/player - Obter informações do jogador`);
    console.log(`POST http://localhost:${PORT}/player/attack - Atacar o jogador`);
    console.log(`POST http://localhost:${PORT}/player/damage - Causar dano ao jogador`);
    console.log(`POST http://localhost:${PORT}/player/heal - Curar o jogador`);
    

    });
