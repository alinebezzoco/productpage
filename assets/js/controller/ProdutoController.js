function ProdutoController($scope) { 
	"use strict";

  var produtos = [];

  var produto1 = {
    id : 1, 
    codigo: "SKUVEST001", 
    nome : "Bata Bordada", 
    imagem: "/img/produtos/vestido01.jpg", 
    preco : 398.00, 
    quantidadeParcela : "5x",
    valorParcela : "30,00",
    quantidade : 1
  };

  var produto2 = {
    id : 2, 
    codigo: "SKUVEST002", 
    nome : "Chapéu de praia com fivela", 
    imagem: "/img/produtos/vestido02.jpg", 
    preco : 398.00, 
    quantidadeParcela : "5x",
    valorParcela : "30,00",
    quantidade: 1
  };

  var produto3 = {
    id : 3, 
    codigo: "SKUVEST003", 
    nome : "Vestido texturizado", 
    imagem : "/img/produtos/vestido03.jpg",
    precoDesconto : "R$ 398.00",
    quantidadeParcela : "5x",
    valorParcela : "30,00",    
    preco : 189.00, 
    quantidade: 1
  };

  var produto4 = {
    id : 4, 
    codigo: "SKUVEST004", 
    nome : "Bata Bordada", 
    imagem: "/img/produtos/vestido04.jpg", 
    preco : 398.00, 
    quantidadeParcela : "5x",
    valorParcela : "30,00",
    quantidade : 1
  };

  var produto5 = {
    id : 5, 
    codigo: "SKUVEST005", 
    nome : "Chapéu de praia com fivela", 
    imagem: "/img/produtos/vestido05.jpg", 
    preco : 398.00, 
    quantidadeParcela : "5x",
    valorParcela : "30,00",
    quantidade: 1
  };

  var produto6 = {
    id : 6, 
    codigo: "SKUVEST006", 
    nome : "Vestido texturizado", 
    imagem : "/img/produtos/vestido06.jpg",
    precoDesconto : "R$ 398.00", 
    quantidadeParcela : "5x",
    valorParcela : "30,00",    
    preco : 189.00, 
    quantidade: 1
  };  

  var produto7 = {
    id : 7, 
    codigo: "SKUVEST007", 
    nome : "Bata Bordada", 
    imagem: "/img/produtos/vestido07.jpg", 
    preco : 398.00, 
    quantidadeParcela : "5x",
    valorParcela : "30,00",
    quantidade : 1
  };

  var produto8 = {
    id : 8, 
    codigo: "SKUVEST008", 
    nome : "Chapéu de praia com fivela", 
    imagem: "/img/produtos/vestido08.jpg", 
    preco : 398.00, 
    quantidadeParcela : "5x",
    valorParcela : "30,00",
    quantidade: 1
  };

  var produto9 = {
    id : 9, 
    codigo: "SKUVEST009", 
    nome : "Vestido texturizado", 
    imagem : "/img/produtos/vestido09.jpg",
    precoDesconto : "R$ 398.00", 
    quantidadeParcela : "5x",
    valorParcela : "30,00",    
    preco : 189.00, 
    quantidade: 1
  };  

  var produto10 = {
    id : 10, 
    codigo: "SKUVEST0010", 
    nome : "Bata Bordada", 
    imagem: "/img/produtos/vestido01.jpg", 
    preco : 398.00, 
    quantidadeParcela : "5x",
    valorParcela : "30,00",
    quantidade : 1
  };

  var produto11 = {
    id : 11, 
    codigo: "SKUVEST0011", 
    nome : "Chapéu de praia com fivela", 
    imagem: "/img/produtos/vestido02.jpg", 
    preco : 398.00, 
    quantidadeParcela : "5x",
    valorParcela : "30,00",
    quantidade: 1
  };

  var produto12 = {
    id : 12, 
    codigo: "SKUVEST0012", 
    nome : "Vestido texturizado", 
    imagem : "/img/produtos/vestido03.jpg",
    precoDesconto : "R$ 398.00", 
    quantidadeParcela : "5x",
    valorParcela : "30,00",    
    preco : 189.00, 
    quantidade: 1
  };    

  produtos.push(produto1);
  produtos.push(produto2);
  produtos.push(produto3);
  produtos.push(produto4);
  produtos.push(produto5);
  produtos.push(produto6);
  produtos.push(produto7);
  produtos.push(produto8);
  produtos.push(produto9);
  produtos.push(produto10);
  produtos.push(produto11);
  produtos.push(produto12);  
  
  // Exibir mais produtos
	$scope.produtos = produtos;

  var pagesShown = 1;
  var pageSize = 9;

  $scope.paginationLimit = function(produtos) {
    return pageSize * pagesShown;
  };

  $scope.hasMoreItemsToShow = function() {
    return pagesShown < ($scope.produtos.length / pageSize);
  };

  $scope.showMoreItems = function() {
    pagesShown = pagesShown + 1;       
  }; 
}
