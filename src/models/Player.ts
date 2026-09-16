/* 
A palavra-chave "export" é utilizada para exportar a classe Player, 
permitindo que ela seja importada em outros arquivos do projeto
A palavra-chave "class" é utilizada para definir uma classe em TypeScript
*/

export class Player {
    /* 
    A palavra-chave "public" é utilizada para definir propriedades públicas da classe,
    permitindo que elas sejam acessadas de fora da classe
     */
    public name: string; // O nome do Player (texto)
    public health: number; // A saúde do Player (número)
    public level: number; // O nível do Player (número)

    // CONSTRUTOR DA CLASSE PLAYER
    /* O construtor é um método especial que é chamado quando
    uma nova instância da classe é criada.*/
    constructor(name: string, health: number = 100, level: number = 1) {
        /* A palavra-chave "this" é utilizada para referir-se à instância atual 
        da classe. Ou seja: "Pegue" o atributo 'health' da classe Player e 
        atribua o valor de 'health' = 100 a ele. */
        this.name = name; // Inicializa o nome do Player 
        this.health = health; // Inicializa a saúde do Player
        this.level = level; // Inicializa o nível do Player
    }

    // MÉTODOS DA CLASSE PLAYER
    /* Métodos são funções que pertencem a uma classe e podem ser
    chamadas em instâncias dessa classe. */
    // O método "attack" é utilizado para simular um ataque do Player
    public attack(): string {
        const damage = this.level * 10; // Calcula o dano baseado no nível do Player
        /* A palavra-chave "return" é utilizada para devolver um 
        valor de uma função ou método.*/
        return `O player ${this.name} atacou causando ${damage} de dano!`; // Retorna uma mensagem de ataque
    }

    /* O método "takeDamage" é utilizado para simular o Player recebendo dano,
    reduzindo a saúde do Player. */
    public takeDamage(damage: number): string {
        // Reduz a saúde do Player com base no dano recebido
        this.health -= damage;
        // Verifica se a saúde do player caiu para 0 ou menos 
        if (this.health < 0) {
            this.health = 0; // Garante que a saúde não seja negativa
        }
        return `O player ${this.name} levou ${damage} de dano e agora tem ${this.health} de saúde.`;
    }

    /* O método "heal" é utilizado para simular o Player se curando,
    aumentando a saúde do Player. */
    public heal(): string {
        if (this.health < 100) {
            this.health += 20;
            if (this.health > 100) {
                this.health = 100; // Garante que a saúde não ultrapasse 100
            }
            return `O player ${this.name} se curou e agora tem ${this.health} de saúde.`;
        } else {
            return `O player ${this.name} já está com a vida 100% restaurada.`;
        }
    }

    /* Método de aumentar o nível do player em 1 de cada vez que for chamado e 
    não permitir que o nível ultrapasse 10 aparecendo 
    uma mensagem de aviso caso tente aumentar o nível acima de 10 */
    public levelUp(): string {
        if (this.level < 10) {
            this.level += 1;
            return `O player ${this.name} subiu para o nível ${this.level}.`;
        } else {
            return `O player ${this.name} já atingiu o nível máximo (10).`;
        }
    }
}