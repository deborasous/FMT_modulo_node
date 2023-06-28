# PostgreSQL

### Função de agregação...

### Função de AVG.

tira uma média

### Função de MAX

Mostra o maior valor

### Função de MIN

Mostra o menor valor

### Order by

classifica na ordem crescente ou decrescente

### DDL - comando DROP

Para deletar multiplas tabelas, deve ser excluido primeiro as que possuem chave estrangeiras

```
DROP TABLE nome_da_tabela;

DROP INDEX nome_do_indice;

DROP FUNCTION nome_da_funcao(argumentos);

ALTER TABLE nome_da_tabela DROP COLUMN nome_da_coluna;

//caso tenha uma foreing key
ALTER TABLE nome_da_tabela DROP COLUMN nome_da_coluna CASCADE;

//alterar elementos que estejam como null
ALTER TABLE nome_da_tabela ALTER COLUMN nome_da_coluna DROP NOT NULL;
ALTER TABLE nome_da_tabela DROP CONSTRAINT nome_da_chave_estrangeira;

```

### Documentação

https://www.postgresql.org/docs/14/ddl-alter.html

### CLÁUSULA HAVING

É usada para filtrar os dados de uma consulta SQL apos aplicação de função agregação, como SUM, COUNT, AVG ...

HAVING é usado em conjunto com a cláusula GROUP BY
para filtrar grupos especificos de dados.

```
SELECT Produto, SUM(Quantidade) AS TotalVendas
FROM Vendas GROUP BY Produto
HAVING SUM(Quantidade) > 100;
```

### CLÁUSULA WHERE

É usado para filtrar linhas individuais antes da aplicação de função de agregação. É usada em conjunto com a cláusula SELECT para restringir quais linhas devem ser selecionadas da tabela.
