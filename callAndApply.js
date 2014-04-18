var produto = {
	codigo: 10,
	descricao: 'Minha descrição',
	emEstoque: true,
	preco: 5,
	detalhes: {}
};


function teste(){
	console.log(produto);
	console.log();
	produto.descricao = "Nova descrição";
	console.log(produto);
	console.log();
	delete produto.emEstoque;
	console.log(produto);
	console.log();
	produto.novaProp = "nova propriedade";
	console.log(produto);
	console.log();
}

function toString(){
	for(x in this)
		console.log(x);
}

function sum(n,m){
	console.log((this.preco+n)*m);
}

toString(produto);  // this global
console.log();	
toString.call(produto);	// this do produto usando call
console.log();
sum.apply(produto,[2,3]);  // this do proroduto, passando parametros em array com apply
console.log();
sum.call(produto, 2, 3); // this do produto, passando parametros

//teste();

