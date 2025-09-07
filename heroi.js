// Códigos únicos para as direções
var DIRECAO_ESQUERDA = 1;
var DIRECAO_DIREITA = 2;
var DIRECAO_CIMA = 3;
var DIRECAO_BAIXO = 4;
// Código para diagonais 
var CIMA_ESQUERDA = 5;
var CIMA_DIREITA = 6;
var BAIXO_ESQUERDA = 7;
var BAIXO_DIREITA = 8;



function Heroi(context, teclado, animacao) {
   this.context = context;
   this.teclado = teclado;
   this.animacao = animacao;
   this.x = 0;
   this.y = 0;
   this.direcao = DIRECAO_DIREITA;
   this.velocidade = 5;
}
Heroi.prototype = {
   atualizar: function() {
      if (this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) {
         this.direcao = DIRECAO_ESQUERDA;
         this.x -= this.velocidade;
      }
      else if (this.teclado.pressionada(SETA_DIREITA) && this.x < this.context.canvas.width - 20) {
         this.direcao = DIRECAO_DIREITA;
         this.x += this.velocidade;
      }
      if (this.teclado.pressionada(SETA_CIMA) && this.y > 0) {
         this.direcao = DIRECAO_CIMA
         this.y -= this.velocidade;
      }
      else if (this.teclado.pressionada(SETA_BAIXO) && this.y < this.context.canvas.height - 20){
         this.direcao = DIRECAO_BAIXO;
         this.y += this.velocidade;
      }
      if (this.teclado.pressionada(SETA_CIMA) && this.teclado.pressionada(SETA_ESQUERDA) && this.x && this.y){
         this.direcao = CIMA_ESQUERDA;
         this.x -= this.velocidade;
         this.y -= this.velocidade;
      }
      else if (this.teclado.pressionada(SETA_BAIXO) && this.teclado.pressionada(SETA_DIREITA) && this.x && this.y){
         this.direcao = BAIXO_DIREITA;
         this.x += this.velocidade;
         this.y += this.velocidade;
      }
      if (this.teclado.pressionada(SETA_CIMA) && this.teclado.pressionada(SETA_DIREITA) && this.x && this.y){
         this.direcao = CIMA_DIREITA;
         this.x += this.velocidade;
         this.y -= this.velocidade;
      }
      else if (this.teclado.pressionada(SETA_BAIXO) && this.teclado.pressionada(SETA_ESQUERDA) && this.x && this.y){
         this.direcao = BAIXO_ESQUERDA;
         this.x -= this.velocidade;
         this.y += this.velocidade;
      }


   },
   desenhar: function() {
      this.context.fillRect(this.x, this.y, 20, 50);
   },
   atirar: function() {
      var tiro = new Bola(this.context);
      tiro.x = this.x + 10;
      tiro.y = this.y + 10;
      tiro.raio = 5;
      tiro.cor = 'red';

      // Lendo a direção atual
      if (this.direcao == DIRECAO_ESQUERDA){
         tiro.velocidadeX = -10;
      }
      else if (this.direcao == DIRECAO_DIREITA){
         tiro.velocidadeX = 10;
      }
      if (this.direcao == DIRECAO_CIMA){
         tiro.velocidadeY = -10;
      }
      else if (this.direcao == DIRECAO_BAIXO){
         tiro.velocidadeY = 10;
      }
      if (this.direcao == CIMA_ESQUERDA){
         tiro.velocidadeX = -10;
         tiro.velocidadeY = -10;
      }
      else if (this.direcao == BAIXO_DIREITA){
         tiro.velocidadeX = 10;
         tiro.velocidadeY = 10;
      }
      if (this.direcao == CIMA_DIREITA){
         tiro.velocidadeX = 10;
         tiro.velocidadeY = -10;
      }
      else if (this.direcao == BAIXO_ESQUERDA){
         tiro.velocidadeX = -10;
         tiro.velocidadeY = 10;

      }

      this.animacao.novoSprite(tiro);
   }
}
