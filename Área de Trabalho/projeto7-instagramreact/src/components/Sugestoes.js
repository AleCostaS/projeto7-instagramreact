export default function Sugestoes() {
    const sugestoes = [['./assets/img/bad.vibes.memes.svg', 'bad.vibes.memes'], ['../assets/img/chibirdart.svg', 'chibirdart'], ['./assets/img/razoesparaacreditar.svg', 'razoesparaacreditar'], ['./assets/img/adorable_animals.svg', 'adorable_animals'], ['./assets/img/smallcutecats.svg', 'smallcutecats'], ['./assets/img/respondeai.svg', 'respondeai'], ['./assets/img/filomoderna.svg', 'filomoderna'], ['./assets/img/memeriagourmet.svg', 'memeriagourmet']];
    return (
        <div className="sugestoes">
            <div className="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {sugestoes.map(usuarios => {
                return (
                    <div className="sugestao">
                    <div className="usuario">
                      <img src={usuarios[0]} />
                      <div className="texto">
                        <div className="nome">{usuarios[1]}</div>
                        <div className="razao">Segue você</div>
                      </div>
                    </div>
      
                    <div className="seguir">Seguir</div>
                  </div>
            )})}
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}