# Desafio Perícia Médica Lucrativa — versões B e C

Projeto para revisão e continuidade pela equipe do Instituto Felipe Hurtado.

- **Versão B:** estrutura original com design refinado, em `/versao-b`.
- **Versão C:** design da página de referência, em `/versao-c`.
- A página inicial (`/`) abre a versão B; o seletor permite alternar entre B e C.
- **A copy atual foi preservada. A última revisão proposta no chat não foi aplicada.**

## Executar localmente

Requisitos: Node.js 22.13 ou superior e npm. A versão de referência está em `.nvmrc`.

```bash
npm ci
npm run dev
```

Abra o endereço informado pelo terminal e acesse `/versao-b` ou `/versao-c`.

```bash
npm run typecheck
npm test
npm run build
npm start
```

`npm start` serve o build usando o runtime local do Cloudflare Workers. O projeto utiliza React, TypeScript, Vinext/Vite, Tailwind e Motion. Não exige credenciais, banco de dados ou variáveis de ambiente para execução local. O build usa o adaptador Cloudflare já utilizado no projeto de origem; a equipe deve configurar seu próprio destino caso decida publicar uma nova implantação.

## Arquivos principais

| Conteúdo | Arquivo |
| --- | --- |
| Página B | `app/versao-b/page.tsx` |
| Página C | `app/versao-c/page.tsx` |
| Estilos | `app/globals.css`, `app/variants.css`, `app/versao-c.css`, `app/copy-revisions.css` |
| Nome do evento e credenciais | `components/design/event-identity.tsx` |
| Depoimentos | `components/design/testimonial-gallery.tsx` |
| Programação da C | `components/design/sticky-program.tsx` |
| Imagens locais | `public/` |
| Navegação entre versões | `components/design/variant-switch.tsx` |

`copy-revisions.css` contém os ajustes anteriores já incorporados às páginas, não a última proposta de revisão.

## Comportamentos preservados

- Os vídeos são incorporados do YouTube e precisam de conexão com a internet. As imagens de capa estão incluídas no projeto.
- Os botões de inscrição apontam para os destinos externos que já existiam em cada versão. B direciona para a seção de checkout da página oficial; C direciona para o checkout direto.
- Os valores, links, datas, credenciais e textos foram copiados do estado atual das páginas. As diferenças entre B e C foram mantidas.
- Os testes incluídos verificam o encaminhamento das UTMs e a preservação do destino oficial da função compartilhada de inscrição.

## Origem e entrega

Extraído do estado `8a8d9037bd64ed1e5edaea5aaaee71644a4d9652` do projeto de origem em 09/09/2026. Foram preservados os arquivos das páginas B e C, os componentes de conteúdo e as imagens. A adaptação de entrega remove a versão A da navegação e das rotas, e desvincula o código da configuração de publicação original do Sites.

O repositório contém código-fonte, recursos locais e licenças dos componentes utilizados. Não inclui a versão A, histórico anterior, credenciais, dependências instaladas nem builds gerados.

Para compartilhar um repositório privado, conceda acesso aos membros da equipe no GitHub. O link do repositório dá acesso ao código; a visualização das páginas depende da execução local ou de uma implantação configurada pela equipe.
