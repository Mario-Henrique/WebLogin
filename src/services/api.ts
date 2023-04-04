import { getAPIClient } from './axios';

export const api = getAPIClient();

//usamos essa api para chamadas através do browser por não termos o contexto da requisição.
//e getAPIClient para o servidor passando o contexto.