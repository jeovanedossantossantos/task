# Configurações 

### Instalando o @fortawesome

        yarn add react-native-svg @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-native-fontawesome

### Add more styles or Pro icons

        yarn add @fortawesome/free-brands-svg-icons

        yarn add @fortawesome/free-regular-svg-icons


<a href="https://www.npmjs.com/package/@fortawesome/react-native-fontawesome#get-started">@fortawesome/react-native-fontawesome
</a>

### Obs: caso aconteça o seguinte erro:

        Erro while updating property fill of a view managed by: RNSVGPath

Instale o seguinte pacote:

        yarn add react-native-svg@9.13.3

Motivo: A partir de 17 de fevereiro de 2020, a instalação da versão 9.13.3 do react-native-svg resolverá seu problema.

Aparentemente, usar a CLI de instalação do expo instalará a versão mais recente deste pacote, mas isso causará um erro ao iniciar o projeto (você verá que especificou qual versão do pacote é suportada pelo expo).

<a href="https://stackoverflow.com/questions/59830102/error-while-updating-property-fill-of-a-view-managed-by-rnsvgreact">Fonte - stackoverflow</a>

