var config = {
type: Phaser.AUTO,
width: 800,
height: 600,

scene: {
preload: preload,
create: create,
update: update
}
};

var game = new Phaser.Game(config);

//mostrando para o pc a localização da imagem
function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('peixe', 'assets/baiacu.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('concha', 'assets/concha.png');
    this.load.image('tartaruga', 'assets/tartaruga.png');
    this.load.image('tubarao', 'assets/tubarao.png');
    


}
//adicionando a imagem, especificando as dimensões
function create() {
    this.add.image(400,300, 'mar');
    this.add.image(400,525, 'logo').setScale(0.6);
    this.add.image(100,500, 'concha').setScale(0.7);
    this.add.image(170,490, 'tartaruga').setScale(0.5);
    
    //utilizando a mesma imagem, mas com dimensões e localizações diferentes
    this.add.image(630,378, 'tubarao').setScale(0.5);
    this.add.image(680,385, 'tubarao').setScale(0.3);
    this.add.image(710,392, 'tubarao').setScale(0.2);
    
   

    //guardar o peixe numa variável
    peixinho = this.add.image(400, 300, 'peixe');

    //transformando a variável
    peixinho.setFlip(true, false);


}
//atualizando a variável peixinho
function update() {

    //adicionando controles no peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}