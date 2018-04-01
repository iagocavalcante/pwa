# Introdução aos PWA's

Um Progressive Web App (PWA) é uma aplicação que usa recursos modernos da Web para fornecer uma experiência de aplicativo nativo aos usuários. Esses aplicativos atendem a determinados requisitos, são implantados em servidores, acessíveis por meio de URLs e indexados por mecanismos de pesquisa.

Segundo o google os PWA's são:
experiências de usuários que têm o alcance da Web e são:

* Confiáveis - Carregue instantaneamente e nunca mostre o downasaur, mesmo em condições de rede incertas.

* Rápido - responda rapidamente às interações do usuário com animações suaves e sem rolagem.

* Envolvendo - Sinta-se como um aplicativo natural no dispositivo, com uma experiência de usuário imersiva.

Esse novo nível de qualidade permite que os Progressive Web Apps ganhem um lugar na tela inicial do usuário.

Seguindo uma definição teórica do que seriam as PWA's

> Os Progressive Web Apps são um conjunto de técnicas para desenvolver aplicações web, adicionando progressivamente funcionalidades que antes só eram possíveis em apps nativos.

## Requisitos obrigatórios para você ter um PWA

* Progressivo - Trabalho para todos os usuários, independentemente da escolha do navegador, porque eles são criados com aprimoramento progressivo como um princípio central.

* Responsivo - Adaptável a qualquer tipo de tela, desktop, celular, tablet e etc.

* Conectividade independente - Aprimorado com os [Services Workers](https://developers.google.com/web/fundamentals/primers/service-workers/) para trabalhar offline ou em redes de baixa qualidade.

* App-like - Ter um comportamento igual ao de uma aplicação nativa, tanto na navegação quanto na interação.

* Atualizado - não é necessário baixar atualizações do aplicativo, o browser simplesmente irá detectar e atualizar automaticamente, caso necessário.

* Seguro - veiculado via HTTPS para evitar espionagem e garantir que o conteúdo não tenha sido adulterado.

* Detectável - São identificáveis como “aplicativos” graças aos manifestos do W3C e ao service workers registration, permitindo que os mecanismos de pesquisa os encontrem.

* Reengajável - Facilite o reengajamento por meio de recursos como notificações por push.

* Instalável - permite que os usuários “mantenham” os aplicativos que consideram mais úteis em sua tela inicial sem o incômodo de uma loja de aplicativos.

* Linkable - Compartilhe facilmente via URL e não requeira instalação complexa.

Podemos deduzir então que, se antes somente os aplicativos nativos tinham: push notifications, funcionamento offline, geolocalização e ícone na home screen, agora podemos usar tudo isso em uma aplicação 100% web.