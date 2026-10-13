
//Calcolatrice senza controlli
//Questo programma è uno dei primi esercizi usando nodejs focalizzato sulla lettura di dati da riga di comando
//pertanto non ho implementato dei controlli completi ma solo il controllo sull'operando e sulla divisione



function calc(){ //funzione principale

    if (process.argv[3] == "add"){             //process.argv preleva l'operando e in base all'input lo smista in questa condizione
 
        add();
    } else if(process.argv[3] == "min"){
        
        min();
    } else if(process.argv[3] == "mul"){
        
        mul();
    } else if(process.argv[3] == "div"){
        
        div();
    } else{
        console.log("Operazione errata");
    }

}

function add(){ //funzione addizione

    console.log(Number(process.argv[2]) + Number(process.argv[4])) //la funzione Number() trasforma in numero l'input in linea di comando
    
}

function min(){ //funzione sottrazione

    console.log(Number(process.argv[2]) - Number(process.argv[4])) //la funzione Number() trasforma in numero l'input in linea di comando

}

function mul(){ //funzione moltiplicazione

    console.log(Number(process.argv[2]) * Number(process.argv[4])) //la funzione Number() trasforma in numero l'input in linea di comando

}

function div(){ //funzione divisione

    if(Number(process.argv[2]) == 0 && Number(process.argv[4]) == 0){  //controllo sulla divisione
        console.log("Indeteminato")
    } else if(Number(process.argv[4]) == 0){
        console.log("impossibile")
    } else{
        console.log(Number(process.argv[2]) / Number(process.argv[4]))
    }

}

calc(); //chiamata della funzione calcolatrice
