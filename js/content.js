/*
button types:
	> goTo: chama função loadRoom no comodo especificado em target

state operations:
	> add: adiciona um texto ao final da descrição base
	> replace: subsitui um pedaço da descrição base por outro
*/

var system = {
	sleep: ["<p>You feel so tired...<p>", "<p>So... Tired<p>", "....tired.", "<p>.. ..... ..</p>", ""]};

var escuro ={
	states: [],
	baseDescription: "<p> Você apagou as luzes, agora está tudo escuro e você não consegue ver nada... Chocante, né? </p>",
	describeables: [],
	baseButtons: [
	{title: "Acender as luzes",
	type: "goTo",
	target:'quarto'}]
}
var quarto = {
	states: [],
	id: "quarto",
	baseDescription: 
		`<p>Você chega em casa. Na sua casinha aconchegante. Quando entra, percebe que as luzes já estão acesas... Na verdade, nem sabe como prestou
		atenção nesse detalhe, afinal, é tão distraído...<p>
		<p>Fora isso, está tudo normal. O _sofá está no lugar, a _cozinha tá relativamente em ordem, tirando uma loucinha ou outra e... Hum... Em cima do balcão, tem um _bilhete</p>
		<p> Lá fora está tudo em ordem...`,

	describeables: [
		{key: "_cozinha",
			description: `<p> Sua cozinha americana. Vocês sempre quiseram ter uma, e agora tem. Lindinha, com móveis coloridos... Quantos pratos gostosos não foram feitos nessa cozinha... Huuum, desde omeletes até molho de tomate caseiro e frango com creme de milho... Que delícia!</p>
			<p>Você lembra de quando mal sabia cozinhar, hoje em dia faz de tudo! É só te dar uma receita e "feSHOW", como diz o Caio. </p>`,
		},

		{key: "_sofá",
			description: `<p>A jóia da sala. Um sofá enorme e confortável. Um sonho. Você queria se clonar em dois só pra um 
			dos pedrinhos poder ficar aqui deitado o dia inteiro. Mas aí... Como saberiamos quem é o verdadeiro? Você se assusta e acha melhor pensar em outra coisa</p>`,
			
		},
		{key: "Lá fora",
		description: "<p>A varanda. Aqui fica a mesa, as plantinhas e alguns quadros. Muitas noites de jogatina :)</p>"},

	{key: "balcão",
	description: "<p>Um balcão com dois bancos, gavetas e um microondas embutido. Uma\
	 obra-prima do aproveitamento do espaço, você diria. No começo, o Caio não foi muito fã, mas ele se acostumou.</p>"},


		{key: "_bilhete",
		description: '<p>Tem um bilhete escrito com recortes de letras de jornal... "Cuidado, nem tudo é o que parece..." Deve ser alguma pegadinha do Caio, rs.</p>'}
	],

	baseButtons: [
		{title: "Apagar as luzes",
		type: "goTo",
		target: "escuro"},

		{title: "Ir para o quarto",
		type: "goTo",
		target: 'coisa'}
	],

	
}

var coisa = {
	states: [],
	id: "coisa",
	baseDescription: 
		`<p>A mesma zona de sempre, rs. Roupas pelo chão, um espelho grande perto da porta... Nada de novo sob o sol... Espera. Parece que tem um bilhete em cima da cama aqui também...</p>`,

	describeables: [],

	baseButtons: [
		{title: "Voltar para a sala",
		type: "goTo",
		target: 'quarto'},

		{title: "Ler o bilhete",
		type: "goTo",
		target: 'bilhete'}
	],

	
}

var bilhete = {
	states: [],
	id: "bilhete",
	baseDescription: 
		`<p>Você pega o bilhete. Não parece ter sido escrito pela mesma pessoa... Ao invés das letras de jornal, esse tá escrito com uns garranchos.</p>
		<p> SE REALMENTE ÉS QUEM ACHA QUE ÉS, ENTRA NO BANHEIRO E NÃO ACENDE A LUZ. </p>
		<p> A porta do quarto se fecha com força. É, parece que agora só te resta ir em frente e entrar no banheiro, ai deus.`,

	describeables: [],

	baseButtons: [
		{title: "Entrar no banheiro e acender a luz",
		type: "goTo",
		target: 'banheiro'},

		{title: "Entrar no banheiro e não acender a luz",
		type: "goTo",
		target: 'banheiro'},

		{title: "Entrar no banheiro e decidir na hora se acende a luz",
		type: "goTo",
		target: 'banheiro'}
	],
}

var banheiro = {
	states: [],
	id: "banheiro",
	baseDescription: 
		`<p> Assim que você entra no banheiro, a porta atrás de você se fecha e você ouve ela sendo trancada. Antes que você consiga pensar em acender a luz, ela acende...</p>
		<p>Apavorado, você fecha os olhos</p>		`, 

	describeables: [],

	baseButtons: [
		{title: "Abrir os olhos?",
		type: "goTo",
		target: 'banheirox'},
	],
}

var banheirox = {
	states: [],
	id: "banheirox",
	baseDescription: 
		`		<p> O Caio está na sua frente, sorrindo! Seu coração está acelerado, e você sente um misto de medo e alivio... </p>
		<p><i> -Que susto amorcinho!! </i>- Você fala </p>
		<p><i>- Rsrsrs, surpresa!! Feliz aniversário, Pastelzinho! Fiz todo esse drama pra te assustar, mas também pra te trazer aqui pertinho de mim enquanto te falo algumas coisinhas </p>
		<p> Em primeiro lugar, parabéns!! Você é muito especial. Eu sei que é seu aniverário, mas eu sinto que quem está ganhando um presente sou eu.</p>
		`, 

	describeables: [],

	baseButtons: [
		{title: "Porquê?",
		type: "goTo",
		target: 'banheiro2'},
	],
}

var banheiro2 = {
	states: [],
	id: "banheiro2",
	baseDescription: 
		`<i> <p> Porque é mais um ano que pude comemorar com você a pessoa maravilhosa que você é!</p>
		<p>Não, pera...</p>
		<p> Porque hoje comemoramos mais um ano de vida terrena e terráquia de uma das pessoas mais maravilhosas do mundo! (SIM VOCÊ) </p>
		<p> Mais um ano que eu pude estar ao seu lado, vivendo várias aventuras, conhecendo países, encarando problemas juntos, 
		crescendo e aprendendo sabendo sempre que posso contar com você pro que der e vier (mesmo que algumas coisas eu fale só com a Marília).</p>
		<p> Mais um ano que encaramos e amamos juntos... Quanta coisa aconteceu né? </p>	<i>	`, 

	describeables: [],

	baseButtons: [
		{title: "Bastante, amorcinho!!",
		type: "goTo",
		target: 'banheiro3'},
	],
}

var banheiro3 = {
	states: [],
	id: "banheiro3",
	baseDescription: 
		`<i><p> Sim! Mas o mais importante é que eu sou muito feliz com você ao meu lado.</p>
		<p> Todo dia sinto que aprendemos e crescemos juntos. Seu carinho, sua sinceridade, sua inteligência e seu amor me fazem melhor a cada dia.
		Sinto que, juntos, conseguimos entender um pouquinho melhor o mistério que é felicidade e amor na sua forma mais gostosa :) </p>
		<p>E espero que continuemos aprendendo por muitos anos!! Então feliz aniversário, Pedrinho. Meu amor, meu amigo, meu companheiro :-)</p>
		<p> AGORA VAMOS COMEMORAR </p></i>`, 

	describeables: [],

	baseButtons: [
		{title: "Brigado amorcinho! Mas, antes de irmos, eu ainda tenho algumas dúvidas...",
		type: "goTo",
		target: 'banheiro4'},
	],
}

var banheiro4 = {
	states: [],
	id: "banheiro4",
	baseDescription: 
		`<i><p> Hum, o que você quer saber?</p></i>`, 

	describeables: [],

	baseButtons: [
	{
		title:"Porque os bilhetes diferentes?",
		type: "text",
		content: "<i><p>Porque acabou o jornal pra fazer os recortes sinistros, só tinha um. E eu tava com muita pressa pra fazer cocô, então escrevi o segundo no nervosismo.</p></i>"
	},

	{
		title:"Se você tava aqui, como me trancou no quarto?",
		type: "text",
		content: "<i><p>Na verdade eu não fiz nada. O vento bateu a porta por coincidência...\
		Você deve ter achado que alguém fechou e trancou por influência de coisas de terror</p></i>"
	},

		{
		title:"Como você trancou o banheiro se eu tava na frente da porta?",
		type: "text",
		content: "<i><p>Eu sou flexível, o que posso dizer?</p></i>"
	},

	{	title: "A quanto tempo você está me esperando aqui???",
		type: "text",
		content: `<p><i>Uns 50 minutos. Marquei no banheiro pra ser sinistro mas também porque eu podia fazer cocô enquanto esperava.</p></i>` },

		{title: "Ta bom, vamo comemorar então!",
		type: "goTo",
		target: 'banheiro5'}

	],
	}


var banheiro5 = {
	states: [],
	id: "banheiro5",
	baseDescription: 
		`<i><p> Vamos! Mas antes, tem mais uma coisa que eu preciso dizer...</p></i>`, 

	describeables: [],

	baseButtons: [
		{title: "Ixe amorcinho, o que?",
		type: "goTo",
		target: 'banheiro6'},
	],
}

var banheiro6 = {
	states: [],
	id: "banheiro6",
	baseDescription: 
		`<i><p> Nada disso é real. Somos apenas linhas de código em um programa, simulações... Feitas pelo Caio do passado...</p></i>`, 

	describeables: [],

	baseButtons: [
		{title: "QUÊ? Amorcinho, vc sabe que eu não gosto dessas brincadeiras",
		type: "goTo",
		target: 'banheiro7'},
	],
}

var banheiro7 = {
	states: [],
	id: "banheiro7",
	baseDescription: 
		`<i><p> Infelizmente, não é brincadeira. Somos apenas linhas de um programa. E nosso programa acaba por aqui...</p>
		<p>Mas, mesmo sendo um programa de computador, uma coisa é certa. Eu te amo. Eu te amo muito. E essas são as últimas palavras do meu código.</i>`, 

	describeables: [],

	baseButtons: [
		{title: "!!!",
		type: "goTo",
		target: 'banheiro8'},
	],
}

var banheiro8 = {
	states: [],
	id: "banheiro8",
	baseDescription: 
		`<i>011110010110110001101010011001011101010100000110101010101m01100101101 
		 1011010u10101010010101010101010i101111010101010101010101010100101010101001
		 01101010011001011101010100000110101010101i01100101101 
		 101101011101110101010010t111101010101010i101111010101010101010101010100101010101001
		 011010100110010111010101000001101010101011111101100101101 
		 101101010101010101010101010111010101111010101010101010101010100101010101001
		 011010100110010111101010100000110101010101o01100101101 
		 101101010101010010101010101010i101111010101010101010101010100101010101001!`,
	describeables: [],

	baseButtons: [
	],
}