const fs =  require("fs"); //Importamos para trabalhar com os arquivos
const prompt = require("readline-sync"); //Importamos para capturar os dados digitados

var lista_de_usuarios = []; // Criamos uma array
var lista_de_produtos = [];
var lista_de_clientes = [];

// Criamos uma função para ler arquivo convertido em Json
function lerDados(item, file){
    return item = JSON.parse(fs.readFileSync(file));
}

// Nossa variável está recebendo um arquivo convertido em Json
lista_de_usuarios = lerDados(lista_de_usuarios, "usuarios.json");
lista_de_produtos = lerDados(lista_de_produtos, "produtos.json");
lista_de_clientes = lerDados(lista_de_clientes, "clientes.json");

// Criamos uma função para Cadastrar Produtos
function cadProdutos(){
    var idProduto = prompt.question("Id:");
    var nomeProduto = prompt.question("Produto:");
    var categoriaProduto = prompt.question("Categoria:");
    var corProduto = prompt.question("Cor:");

lista_de_produtos.push({ //comando utilizado para adicionar valores dentro da array e no banco de dados Json
    "id": idProduto,
    "produto": nomeProduto,
    "categoria": categoriaProduto,
    "cor": corProduto
},) 
    atualizarProdutos();
}
//Criamos uma função para Excluir Produtos
function delProdutos(){
    var idProduto = prompt.question("Qual ID deseja excluir:");
    for(let index = 0; index < lista_de_produtos.length; index++){
        if(idProduto === lista_de_produtos[index].id){
            lista_de_produtos.splice(index, 1) //splice é utilizado para remover
        }
    }
    atualizarProdutos();
}
//Criamos uma função para Alterar Produtos
function altProd(){
    var idProduto = prompt.question("Qual ID deseja alterar:");
    for(let index = 0; index < lista_de_produtos.length; index++){
        if(idProduto === lista_de_produtos[index].id){
            var nomeProduto = prompt.question("Produto:");
            var categoriaProduto = prompt.question("Categoria:");
            var corProduto = prompt.question("Cor:");
            lista_de_produtos[index].produto = nomeProduto,
            lista_de_produtos[index].categoria = categoriaProduto,
            lista_de_produtos[index].cor = corProduto
            console.log(lista_de_produtos);
        }
    }
    atualizarProdutos();
}
//Criamos uma função para salvar no banco de dados Json
function salvar(file, item){
    fs.writeFileSync(file, JSON.stringify(item));//JSON.stringify é utilizado para converter arquivo json em string
    
}
//criamos uma função para atualizar array(Produtos) e o banco de dados Json
function atualizarProdutos(){
    salvar("produtos.json", lista_de_produtos);
    lerDados(lista_de_produtos, "produtos.json");
}
// Criamos uma função para Cadastrar Clientes
function cadClientes(){
    var idCliente = prompt.question("Id:");
    var nomeCliente = prompt.question("Nome:");
    var cpfCliente = prompt.question("CPF:");
    var celCliente = prompt.question("Cel:");
    var emailCliente = prompt.question("Email:");

lista_de_clientes.push({ //comando utilizado para adicionar valores dentro da array e no banco de dados Json
    "id": idCliente,
    "nome": nomeCliente,
    "cpf": cpfCliente,
    "cel": celCliente,
    "email": emailCliente 
},) 
    atualizarClientes();
}
//Criamos uma função para Excluir Clientes
function delClientes(){
    var idCliente = prompt.question("Qual ID deseja excluir:");
    for(let index = 0; index < lista_de_clientes.length; index++){
        if(idCliente === lista_de_clientes[index].id){
            lista_de_clientes.splice(index, 1) //splice é utilizado para remover
        }
    }
    atualizarClientes();
}
//Criamos uma função para Alterar Clientes
function altClientes(){
    var idCliente = prompt.question("Qual ID deseja alterar:");
    for(let index = 0; index < lista_de_clientes.length; index++){
        if(idCliente === lista_de_clientes[index].id){
            var nomeCliente = prompt.question("Nome:");
            var cpfCliente = prompt.question("CPF:");
            var celCliente = prompt.question("Cel:");
            var emailCliente = prompt.question("Email:");

            lista_de_clientes[index].nome = nomeCliente,
            lista_de_clientes[index].cpf = cpfCliente,
            lista_de_clientes[index].cel = celCliente,
            lista_de_clientes[index].email = emailCliente
            console.log(lista_de_clientes);
        }
    }
    atualizarClientes();
}
//criamos uma função para atualizar array(Clientes) e o banco de dados Json
function atualizarClientes(){
    salvar("clientes.json", lista_de_clientes);
    lerDados(lista_de_clientes, "clientes.json");
}
// Criamos uma função para Cadastrar Usuários
function cadUsuarios(){
    var idUsuario = prompt.question("Id:");
    var loginUsuario = prompt.question("Login:");
    var senhaUsuario = prompt.question("Senha:");

lista_de_usuarios.push({ //comando utilizado para adicionar valores dentro da array e no banco de dados Json
    "id": idUsuario,
    "login": loginUsuario,
    "senha": senhaUsuario

},) 
    atualizarUsuarios();
}
//criamos uma função para atualizar array(Usuários) e o banco de dados Json
function atualizarUsuarios(){
    salvar("usuarios.json", lista_de_usuarios);
    lerDados(lista_de_usuarios, "usuarios.json");
}
// Criamos uma função de login
function login(){ 
    console.log("Área de Login:");
    console.log("Insira seu usuario e senha:");  
}
// Criamos uma função para registrar Vendas
function vendas(){
    var data = prompt.question("Data:");
    var nota = prompt.question("Nota Fiscal:");
    var idCliente = prompt.question("ID do cliente:");
    
    for(let index = 0; index < lista_de_clientes.length; index++){
        if(idCliente === lista_de_clientes[index].id){
            var loop = prompt.question("Para incluir produtos digite S:");
            while(loop === "s"||loop === "S"){
                var idProduto = prompt.question("ID do Produto:");
                var quant = prompt.question("Quantidade:");
                var vlUnit = parseFloat(prompt.question("Valor Unitario:"));
                var vlrTotal = parseFloat(quant * vlUnit);
                for(let index = 0; index < lista_de_produtos.length; index++){
                    if(idProduto === lista_de_produtos[index].id){

                    }
                    var loop = prompt.question("Deseja incluir mais algum produto? S-Sim / N-Nao:"); 
                    break;
                }
                
            }
            console.clear();
            console.log("==============================================");
            console.log("                Lojas Unicsul                 ");
            console.log("==============================================");
            console.log("Nota Fiscal: "+ nota);
            console.log("Data: " + data);
            console.log("Cliente: " + lista_de_clientes[index].nome+ "     CPF: " + lista_de_clientes[index].cpf);
            console.log("Produto: " + lista_de_produtos[index].produto + "                     Cor:"+lista_de_produtos[index].cor   );
            console.log("Quantidade: "+ quant+ "                       Valor unitario: " + vlUnit.toFixed(2));
            console.log("Valor Total: " + vlrTotal.toFixed(2));
            console.log(" ");
            pagto();
        }
    }

}
// Criamos uma função para registrar Devolução de Vendas
function devVendas(){
    var data = prompt.question("Data:");
    var nota = prompt.question("NF de Devolucao:");
    var idCliente = prompt.question("ID do cliente:");
    
    for(let index = 0; index < lista_de_clientes.length; index++){
        if(idCliente === lista_de_clientes[index].id){
            var loop = prompt.question("Para incluir produtos digite S:");
            while(loop === "s"||loop === "S"){
                var idProduto = prompt.question("ID do Produto:");
                var quant = prompt.question("Quantidade:");
                var vlUnit = parseFloat(prompt.question("Valor Unitario:"));
                var vlrTotal = parseFloat(quant * vlUnit);
                for(let index = 0; index < lista_de_produtos.length; index++){
                    if(idProduto === lista_de_produtos[index].id){

                    }
                    var loop = prompt.question("Deseja incluir mais algum produto? S-Sim / N-Nao:"); 
                    break;
                }
                
            }
            console.clear();
            console.log("==============================================");
            console.log("                Lojas Unicsul                 ");
            console.log("==============================================");
            console.log("Nota Fiscal de Devolucao: "+ nota);
            console.log("Data: " + data);
            console.log("Cliente: " + lista_de_clientes[index].nome+ "     CPF: " + lista_de_clientes[index].cpf);
            console.log("Produto: " + lista_de_produtos[index].produto + "                     Cor:"+lista_de_produtos[index].cor   );
            console.log("Quantidade: "+ quant+ "                       Valor unitario: " + vlUnit.toFixed(2));
            console.log("Valor Total: " + vlrTotal.toFixed(2));
            console.log(" ");
            ressarCliente();
        }
    }

}
// Criamos uma função para registrar o pagamento
function pagto(){
    var pagto = prompt.question("Forma de pagamento: 1-Dinheiro|2-Cartao de Debito|3-Cartao de Credito: ");
    if(pagto === "1" || pagto === "2"){
        console.log(" ");
        console.log("Pagamento realizado a vista");
    }
    else if(pagto === "3"){
        var parcela = prompt.question("Qtd Parcelas: ");
        console.log(" ");
        console.log("Pagamento parcelado em " + parcela + "x"+ " no cartao de credito");
    }
    else{
        console.log("Forma de pagamento nao encontrada");
    }
}
// Criamos uma função para registrar o ressarcimento
function ressarCliente(){
    var ressarc = prompt.question("Forma de ressarcimento: 1-Dinheiro|2-Produtos|3-Vale Compra: ");
    if(ressarc === "1" ){
        console.log(" ");
        console.log("ressarcimento realizado em dinheiro");
    }
    else if(ressarc === "2" ){
        console.log(" ");
        console.log("ressarcimento realizado em produtos");
    }
    else if(ressarc === "3" ){
        console.log(" ");
        console.log("ressarcimento realizado em vale compra");
    }
    else{
        console.log("Forma de ressarcimento nao encontrada");
    }
}

//Criamos uma condição, onde serão validadas as informações digitadas pelo usuário
login();
var usuario = prompt.question("Usuario:");
var senha = prompt.question("Senha:");

    for (let i = 0; i < lista_de_usuarios.length; i++) {
        if(usuario === lista_de_usuarios[i].login && senha === lista_de_usuarios[i].senha){
            console.log("==============================================");
            console.log("Bem vindo ao Sistema das Lojas Unicsul")
            console.log("==============================================");
            var menu = prompt.question("Para entrar no menu digite - M: ");
            console.clear(); //Utilizamos para limpar o terminal
            while(menu === "M" || menu === "m"){ //Criamos um loop para ficar percorrendo o menu
            console.log("==============================================");
            console.log("                     Menu                     ");
            console.log("==============================================");
            console.log("Opção 1 - Controle de Estoque");
            console.log("Opção 2 - Controle de Clientes");
            console.log("Opção 3 - Registro de Vendas");
            console.log("Opção 4 - Registro de Devolução de Vendas");
            console.log("Opção 5 - Sair");
            console.log("==============================================");
            console.log("Digite a opção desejada:");
            var opcao = prompt.question("Opcao Desejada:");
            if(opcao === "1"){
                console.clear();
                console.log("==============================================");
                console.log("            Controle de Estoque               ");
                console.log("==============================================");
                console.log("Opção 1 - Cadastrar");
                console.log("Opção 2 - Alterar");
                console.log("Opção 3 - Pesquisar");
                console.log("Opção 4 - Excluir");
                var resposta = prompt.question("Opcao escolhida:");
                switch (resposta) {// O Switch case é a melhor ferramenta para trabalhar com menu
                    case "1":
                        cadProdutos();
                        console.log(lista_de_produtos);
                        console.log("Cadastrado com Sucesso!!!");
                        break;
                    case "2":
                        altProd();
                        console.log("Alterado com Sucesso!!!");
                        break;
                    case "3":
                        console.log(lista_de_produtos);
                        console.log("Pesquisado com Sucesso!!!");
                        break;
                    case "4":
                        delProdutos();
                        console.log(lista_de_produtos);
                        console.log("Excluído com Sucesso!!!");
                        break;
                
                    default:
                        console.log("Dados Incorretos!!!");
                        break;
                }
            }
            else if(opcao === "2"){
                console.log("==============================================");
                console.log("             Controle de Clientes             ");
                console.log("==============================================");
                console.log("Opção 1 - Cadastrar");
                console.log("Opção 2 - Alterar");
                console.log("Opção 3 - Pesquisar");
                console.log("Opção 4 - Excluir");
                var resposta = prompt.question("Opcao escolhida:");
                switch (resposta) {
                    case "1":
                        cadClientes();
                        console.log(lista_de_clientes);
                        console.log("Cadastrado com Sucesso!!!");
                        break;
                    case "2":
                        altClientes();
                        console.log("Alterado com Sucesso!!!");
                        break;
                    case "3":
                        console.log(lista_de_clientes);
                        console.log("Pesquisado com Sucesso!!!");
                        break;
                    case "4":
                        delClientes();
                        console.log(lista_de_clientes);
                        console.log("Excluído com Sucesso!!!");
                        break;
                
                    default:
                        console.log("Dados Incorretos!!!");
                        break;
                }
            }
            else if(opcao === "3"){
                console.log("==============================================");
                console.log("             Registro de Vendas               ");
                console.log("                Lojas Unicsul                 ");
                console.log("==============================================");
                vendas();
                console.log(" ");
                console.log("Venda realizada com sucesso!!!");
            }
            else if(opcao === "4"){
                console.log("==============================================");
                console.log("       Registro de Devolução de Vendas        ");
                console.log("==============================================");
                devVendas();
                console.log(" ");
                console.log("Devolução de venda realizada com sucesso!!!");
            }
            else if(opcao === "5"){
                console.log("==============================================");
                console.log("      Programa finalizado com sucesso!!!"      );
                console.log("==============================================");
                break;
            }
            //Criamos essa ferramenta para acessar o menu sempre quando a ação terminar de ser executada
            console.log("=================================================");
            var menu = prompt.question("Para retornar ao menu digite - M: ");
            console.log("=================================================");
            console.clear();
         }
            break;  
        }
        else{
            //Criamos essa ferramenta, para quando o usuário não estiver cadastrado
            console.log("Login ou senha invalidos.");
            var pergunta = prompt.question("Deseja cadastrar um novo usuario? S - Sim | N - Nao: ");
            if(pergunta === "s" || pergunta === "S"){
                cadUsuarios();
                console.log(lista_de_usuarios);
                console.log("Cadastrado com Sucesso!!!");
            }
        }   
    }