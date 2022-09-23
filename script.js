function ShowQ1() {
    let nota12 = +document.getElementById("nota1").value;
    let nota22 = +document.getElementById("nota2").value;
    let nota32 = +document.getElementById("nota3").value;
    let notaf = ((nota12 + nota22 + nota32) / 3);
    if (notaf >= 6){
       alert("aprovado, sua nota foi: " + notaf);
    } else {
       alert("reprovado, sua nota foi: " + notaf);
    }   
   }
   
   function ShowQ2() {
       let IDADE1 = +document.getElementById("idade").value;
       if (IDADE1 >=5 && IDADE1 < 8){
           alert("sua categoria é: infantil A");
       } else if ( IDADE1 >=8 && IDADE1 < 11){
           alert("sua categoria é: infantil B");
       } else  if (IDADE1 >=11 && IDADE1 < 14){
           alert("sua categoria é: juvenil A");
       } else if (IDADE1 >= 14 && IDADE1 < 18){
           alert("sua categoria é: juvenil B");
       } else if (IDADE1 > 18){
           alert("sua categoria é: adulto");
       } else alert("você é muito novo para participar");
   }
   
   function ShowQ3(){
       let valor12 = +document.getElementById("valor1").value;
       let valor22 = +document.getElementById("valor2").value;
       let valor32 = +document.getElementById("valor3").value;
       let valormaior = Math.max(valor12 , valor22 , valor32);
       alert("entre os valore: " +" "+ valor12+"," + valor22+"," + valor32 + " O maior valor é: " + valormaior);
   }
   
   function ShowQ4(){
       let numerov = +document.getElementById("numero1").value;
       if (numerov % 2 == 0 && numerov > 0) {
           alert("o numero é par e positivo");
       } else if(numerov % 2 ==0 && numerov < 0){
           alert("o numero é par e negativo");
       } else if(numerov % 2 != 0 && numerov > 0){
           alert("o numero é impar e positivo");
       } else if(numerov % 2 != 0 && numerov < 0){
           alert("o numero é impar e negativo");
       }
   }
   
   function ShowQ5(){
       var i = 0;
       let soma = 0;
       while (i <= 100) {
           soma += i;
           i += 2 ;
       } alert("A soma de todos os numeros pares de 0 a 100 é : " + soma);
       
   }
   
   function ShowQ6(){
       let i = 2;
       let numero = [];
       numero[0] = 0;
       numero[1] = 1;
       document.write(numero[0]);
       document.write(numero[1]);
       while ( i <= 100){
           numero[i] = numero[i -1]  + numero[i -2];
           document.write(numero[i]);
           i++;
       }
   }
   
   function ShowQ7(){
       let fatorial = +document.getElementById("fatorial1").value;
       let fatorial4 = fatorial
       let f = (fatorial);
       while(fatorial > 1){
           f = f * (fatorial - 1);
           fatorial--;
       }
       alert("o fatorial do numero "+ fatorial4 + " é: " + f);
   }
   
   
   function ShowQ81(){
       var i = 0;
       let soma = 0;
       do {
           soma += i;
           i += 2 ;
       } while (i <= 100);
       alert("A soma de todos os numeros pares de 0 a 100 é : " + soma);
   }
   
   
   function ShowQ82(){
           let i = 2;
           let numero = [];
           numero[0] = 0;
           numero[1] = 1;
           document.write(numero[0]);
           document.write(numero[1]);
           do {
               numero[i] = numero[i -1]  + numero[i -2];
               document.write(numero[i]);
               i++;
           } while (i <= 100);
   }
   
   
   
   function primeNumber(num) {
       for (let divisor = 2; divisor < num; divisor++) 
           if (num % divisor == 0) return false;
       return true;
   }
   function ShowQ9(){
       let determinadoNumero = 150;
       let result = "";
       for (let i = 2; i < determinadoNumero; i++) {
           if (primeNumber(i)) 
               result += i + ", ";
       }
   
       alert(result);
   }
   
   function ShowQ10(){
       let numero = +document.getElementById("get").value;
       let soma = 0;
       for(let i = 1; i <= numero; i++){
           let k = 1/(2*i);
           soma += k;
       }alert(soma);
   }
   
   function ShowQ11(){
       let valor12 = +document.getElementById("valor18").value;
       let valor22 = +document.getElementById("valor28").value;
       let valor32 = +document.getElementById("valor38").value;
       let valormaior = Math.max(valor12 , valor22 , valor32);
       alert(" O maior valor é: " + valormaior);
   }
   
   function ShowQ12(){
       let numero = 1;
       while (numero <= 10){
           let numero1 = numero * 1;
           let numero2 = numero * 2;
           let numero3 = numero * 3;
           let numero4 = numero * 4;
           let numero5 = numero * 5;
           let numero6 = numero * 6;
           let numero7 = numero * 7;
           let numero8 = numero * 8;
           let numero9 = numero * 9;
           let numero10 = numero * 10;
           alert(numero1 + " " + numero2 + " " + numero3 + " " + numero4 + " " + numero5 + " " + numero6
            + " " + numero7 + " " + numero8 + " " + numero9 + " " + numero10)
            numero++;
       }
       /*
       let j = 0
       let result =""
       while (numero <= 10){
           for(let i =1 ; i<=10; i++){
               for(let numero = 1; numero <=10; numero++)
               j = i * numero
               result += j + ", "
           }alert(result)
            */
   }
   
   function ShowQ13(){
       let numerov = +document.getElementById("numeron").value;
       let j = 1;
       let soma = 0;
       while( numerov >= j){
           soma += 1 / j;
           j++;
       } alert(soma)
   }
   
   function ShowQ14(){
       let r = 1;
       let n = 0;
       let soma = 0;
       while(n <= 1000){
           let f = 4/r;
           if(n % 2 == 0){
               soma += f;
           } else {soma -= f}
           r+=2; 
           n++;
       }alert(soma)
   
   } 
   
   function ShowQ15() {
       let nomep = document.getElementById("nome").value;
       nomel = nomep.toUpperCase();
       nomeo = nomep.split(' ');
       let k = '';
       for (let i = 0; i <= nomeo.length - 1; i++) {
           if (nomeo[i].length > 2) {
               k += nomeo[i].charAt(0);
           }
       }
       alert("Iniciais: " + k);
   }
   
   function ShowQ16(nome) {
       nome = document.getElementById("nome2").value;
       nome = nome.toUpperCase()
       let nome_reverso = '';
       for (let letra =  nome.length - 1; letra >= 0; letra--) {
           nome_reverso += nome[letra];
       }
       alert(nome_reverso);
   }
   
   
   
   function ShowQ17() {
       data = document.getElementById("data3").value;
       let mes_extenso = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
       data = data.split('/');
       let dia = data[0];
       let mes = parseInt(data[1]);
       let ano = data[2];
       alert(`Voce nasceu no dia ${dia} de ${mes_extenso[mes - 1]} de ${ano}`);
   }
   
   
   function ShowQ18() {
       frase = document.getElementById("frase3").value;
       frase = frase.toLowerCase()
       let count_espacos = 0;
       let count_vogais_a = 0;
       let count_vogais_e = 0;
       let count_vogais_i = 0;
       let count_vogais_o = 0;
       let count_vogais_u = 0;
       for (let letra of frase) {
           switch (letra) {
               case ' ':
                   count_espacos++;
                   break;
               case 'a':
                   count_vogais_a++;
                   break;
               case 'e': 
                   count_vogais_e++;
                   break;
               case 'i':
                   count_vogais_i++;
                   break;
               case 'o':
                   count_vogais_o++;
                   break;
               case 'u':
                   count_vogais_u++;
                   break;
               }
       }
       alert('A quantidade de espaços: ' + count_espacos + '\n' + "Qtd de 'a': " + count_vogais_a + '\n' + "Qtd de 'e': " + count_vogais_e + '\n' + "Qtd de 'i': " + count_vogais_i + '\n' + "Qtd de 'o': " + count_vogais_o + '\n' + "Qtd de 'u': " + count_vogais_u);
   }
   
   function ShowQ19() {
       s1 = document.getElementById("frase4").value;
       let count = 0
       let string1 = s1.split(' ');
       let string = '';
       for (palavra of string1) {
           string += palavra;
       }
       string = string.toLowerCase();
       let j = string.length - 1
       for (let i = 0; i < j; i++, j--) {
           if (string[i] != string[j]) {
               alert(`A frase '${s1}' não é um palíndromo!`);
           }else {count++}
       }
       if(count == string.length){
       alert(`A frase '${s1}' é um palíndromo!`);
       }
   }
   
   function ShowQ20() {
       s = document.getElementById("frase5").value;
       let s1 = s.split(' ');
       let s_sem_espaco = '';
       for (palavra of s1) {
           s_sem_espaco += palavra;
       }
       let frase_criptografada = '';
       let nova_letra;
       for (let letra of s_sem_espaco) {
           nova_letra = letra.charCodeAt();
           nova_letra += 3;
           nova_letra = String.fromCharCode(nova_letra);
           frase_criptografada += nova_letra;
       }
       alert('A frase criptografada é: ' + frase_criptografada);
   }
   
   function ShowQ21(s1, s2) {
       s1 = document.getElementById("s13r").value;
       s2 = document.getElementById("s23").value;
       alert(s1 === s2);
   }
   
   function ShowQ22() {
       decimal = document.getElementById("decimal").value;
       let num = decimal;
       let binario = (num % 2).toString();
       while (num > 1) {
           num = parseInt(num / 2);
           binario =  (num % 2) + (binario);
       }
       alert(binario);
   }
   
   function ShowQ23() {
       binario = document.getElementById("binario").value;
       binario = binario.toString()
       let reverso = binario.split('').reverse();
       let decimal = 0;
       for (let x = 0; x < reverso.length; x++) {
         if (reverso[x] === '1') {
           decimal += x ** 2;
         }
       }
       alert(decimal);
   }
   
   function ShowQ24() {
       n = document.getElementById("nsd").value;
       let mes_extenso = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
       alert(n + ' - ' + mes_extenso[n-1])
   }
   
   function ShowQ25(n1, n2, o) {
       o = +document.getElementById("nsdfr").value;
       n2 = +document.getElementById("nsdfg").value;
       n1 = +document.getElementById("nsdfd").value;
       switch (o) {
           case 0: 
               alert(n1 - n2);
               break
           case 1:
               alert(n1 + n2);
               break
           case 2:
               alert(n1 / n2);
               break
           case 3:
               alert(n1 * n2);
               break
       }
   }
   
   function ShowQ26() {
       c = document.getElementById("pref").value;
       gen = c.toUpperCase();
       if (gen === 'M') {
           alert('Masculino');
       }
       if (gen === 'F') {
           alert('Feminino');
       }
       if (gen === 'X') {
           alert('Genero Indeterminado');
       }
   }