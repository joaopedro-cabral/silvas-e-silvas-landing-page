# Página de produtos elétricos

- Rota: `/produtos-eletricos` (também aceita barra final).
- Conteúdo: `pages/ElectricalProducts.tsx` e `pages/electrical.css`.
- HTML com título e descrição próprios: `produtos-eletricos/index.html`.
- Navegação compartilhada: `components/Header.tsx` e `components/Footer.tsx`.
- WhatsApp: número definido em `COMPANY_INFO` no arquivo `constants.ts`.

## Execução e publicação

`npm run dev -- --host 127.0.0.1 --port 3001`

`npm run build` gera a home em `dist/index.html` e a nova página em `dist/produtos-eletricos/index.html`, com os mesmos assets compartilhados. Publicar a pasta `dist` completa no domínio atual. A hospedagem deve servir `index.html` em diretórios, inclusive para `/produtos-eletricos` e `/produtos-eletricos/`. Não é necessário outro domínio, backend ou banco de dados.

## Oferta adotada

A proposta final do cliente usa retirada em até **30 minutos**, que prevalece sobre a menção inicial de 10 minutos. Entrega em até **2 horas** para pedidos realizados até as **14h**. Os textos orientam a confirmar o pedido, estoque, endereço e frete no WhatsApp. Os bairros foram reproduzidos conforme o briefing.

A indicação de revendedor oficial foi fornecida no briefing. O destaque visual de qualidade é editorial; não reproduz um selo de certificação.

## Referências e imagens

Organização do portfólio inspirada em https://www.sil.com.br/pt/produtos.aspx, consultado em 18/11/2026. Textos comerciais e composição visual próprios da Silvas e Silvas.

Imagens da fabricante, armazenadas localmente em `public/img/eletrica`:

- `sil-cabo-hero.jpg`: https://www.sil.com.br/media/109378/Header_cabo_flex_750V.jpg
- `sil-cabos-flexiveis.jpg`: https://www.sil.com.br/media/108764/Thumb_cabos_flexiveis_750.jpg
- `sil-rolo.jpg`: https://www.sil.com.br/media/75821/embalagem-cabo_flexil-750v_rolo.jpg
- `sil-carreteis.jpg`: https://www.sil.com.br/media/75816/embalagem_carreteis_coloridos.jpg

O logo SIL já fazia parte do projeto. `disjuntores.svg` é uma ilustração própria, sem associação dos disjuntores à marca SIL. As imagens dos produtos são ilustrativas e o estoque é confirmado durante o atendimento.
