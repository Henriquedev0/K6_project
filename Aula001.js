
//Inicialização
import sleep from 'k6';

//Configuração

export const options = {
    vus: 1,
    duration: '10s',
};


//Execução //codigo de fato

export default function () {
    console.log('testando o k6...');
    sleep(1);
}

//Desmontagem

export function teardown() {

    console.log(data);
}






