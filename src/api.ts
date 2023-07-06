


export const api = {

    InserirUsuarios: async (nome: string, sobrenome: string, email: string, confemail: string,telum: string,teldois: string,login: string,senha: string) => {
        let response = await fetch("http://localhost:3010/usuarios/",
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        nome: nome,
                        sobrenome: sobrenome,
                        email: email,
                        confemail: confemail,
                        telum: telum,
                        teldois: teldois,
                        login: login,
                        senha: senha,
                    }),
                headers: {
                    'Content-type': ' application/json'
                }
            }
        );
        let json = await response.json();
        console.log(json);

        return json;
    },

    InserirFuncionarios: async () => {

    },

    InserirPatrimonios: async () => {

    },

    AlterarPatrimonio: async () => {

    },

    CarregarUsuarioUnico: async (param: string) => {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/" + param);
        let json = await response.json();
        return json;
    },

    CarregarTodosUsuarios: async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/")
        let json = await response.json();
        return json;
    },

}