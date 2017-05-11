# Conversor de Moedas


Esse projeto foi desenvolvido em Ruby on Rails através do curso do BootCamp - [OneBitCode](http://onebitcode.com). Este [app](http://conversaomoeda.herokuapp.com/) converte o valor de uma moeda para outra moeda. Ex: 10 reais custa X euros. Para a conversão de moedas foi utilizada a [Fixer API](http://fixer.io/).

![App Conversão de moeda][logo]

[logo]: https://raw.githubusercontent.com/lailson/Conversao_moedas_app/master/public/site.png "APP"


## Tecnologias Utilizadas

- Ruby 2.3
- Rails 5.0.1
- Postgres 9.5
- [Fixer API](http://fixer.io/)

## Iniciando

#### Acesse o site - Demo

[http://conversaomoeda.herokuapp.com/](http://conversaomoeda.herokuapp.com/)

#### Localmente

###### Usando Docker

```
git clone git@github.com:lailson/Conversao_moedas_app.git

docker-compose build

docker-compose up
```

###### Localhost

```
git clone git@github.com:lailson/Conversao_moedas_app.git

bundle install

rails s
```

### Testando

#### Usando Docker

```
docker-compose run --rm website rspec
```

#### Localhost


```
rspec

```

## TODO
˜˜Criar botão para alternar entre moeda de destino e origem.˜˜
˜˜Remover botão CONVERTER e apresentar resultado automaticamente˜˜
Incluir BitCoin
Incluir alteração de valor da moeda.
Inlcuir gráfico de alteração de moedas.
Resolver problema de conversão para mesma moeda.
Testes.

## Wireframe
[Versão1](https://wireframepro.mockflow.com/view/D1811d0a7d9175679f76ac7f2841467ba)


## Contribuindo
1. Faça o Fork do projeto.
2. Crie uma nova branch (`git checkout -b minha-nova-branch`).
3. Commit suas alterações (`git commit -am 'Adicionar nova  feature'`).
4. Push a nova branch (`git push origin minha-nova-feature`).
5. Crie um novo Pull Request.
