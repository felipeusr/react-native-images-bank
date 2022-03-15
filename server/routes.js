const express = require("express");
const app = express();

var images = [
    {url: "https://www.hypeness.com.br/1/2014/02/NicholasBuerAstrophotography2.jpg"},
    {url: "https://imagens.fotografia-dg.com/imagens-wp/2015/11/Pedra-do-Baú.jpg"},
    {url: "https://media-cdn.tripadvisor.com/media/photo-s/11/b3/40/9a/vista-da-pedra-do-bau.jpg"},
    {url: "https://annphoto.net/wp-content/uploads/2021/04/Dicas-e-truques-para-fotografia-noturna-do-ceu-estrelado.jpgfit750501ssl1-750x470.jpeg"},
    {url: "https://www.eusemfronteiras.com.br/wp-content/uploads/2020/05/44228893_s-810x540.jpg"},
    {url: "https://www.altoastral.com.br/media/_versions/legacy/2016/09/uma-pessoa-com-os-bracos-abertos-e-um-ceu-todo-estrelado-no-fundo-oraculo_widexl.jpg"},
    {url: "https://i.pinimg.com/736x/b1/e7/30/b1e73070b197557b33e735343e922548.jpg"},
    {url: "https://i.pinimg.com/originals/2f/73/86/2f73869d2c0c8438c1753b15410468f1.jpg"},
    {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/NGC7293_%282004%29.jpg/330px-NGC7293_%282004%29.jpg"},
    {url: "https://s2.glbimg.com/EtyG5ud2vThSX5VcECFufujm0rc=/e.glbimg.com/og/ed/f/original/2018/05/28/aglomerado-de-galaxia.jpg"},
    {url: "http://s.glbimg.com/jo/g1/f/original/2010/04/23/hubble-borboleta.jpg"},
    {url: "https://www.mapadomeuceu.com.br/wp-content/uploads/2021/02/Imagens-do-universo-Nasa-Pilares-da-Criacao-Nebulosa-Carina.jpg"},
    {url: "https://faunanews.com.br/wp-content/uploads/2022/02/homem-planeta-pixabay.jpg"},
    {url: "https://itforum.com.br/wp-content/uploads/2020/12/9-conteudos-para-quem-quer-se-familiarizar-com-a-area-de-programacao-e-desenvolvimento.jpg"},
    {url: "https://blog.betrybe.com/wp-content/uploads/2021/11/tela-com-codigos.jpeg"},
    {url: "https://www.cruzeirodosul.edu.br/wp-content/uploads/2020/09/engenharia_mecatronica.jpg"},
    {url: "https://www.agenciabrasilia.df.gov.br/wp-conteudo/uploads/2021/05/28.5.-Robótica.-Foto-Paulo-H-Carvalho-Agência-Bras%C3%ADlia-CAPA.jpg"},
    {url: "https://www.sesirs.org.br/sites/default/files/paragraphs--image/robotica_avancada.jpg"},
    {url: "https://static3.tcdn.com.br/img/img_prod/548342/engenharia_de_manutencao_aeronautica_759_1_20191126180211.jpg"},
    {url: "https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/12/thinkstockphotos-140238091.jpg"},
    {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Space_Shuttle_Challenger_%2818649411714%29.jpg/1200px-Space_Shuttle_Challenger_%2818649411714%29.jpg"},
    {url: "https://m.media-amazon.com/images/I/71goVa6wPvL._AC_SL1200_.jpg"}
];

app.get("/images", (req, res) => {
    res.send(images);
});

app.post("/enviar", (req, res) => {
    console.log(req.body.input);
})

module.exports = app;