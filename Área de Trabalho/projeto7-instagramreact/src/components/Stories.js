export default function Stories() {
    const nomes = [['./assets/img/9gag.svg', '9gag'], ['./assets/img/meowed.svg', 'meowed'], ['./assets/img/barked.svg', 'barked'], ['./assets/img/nathanwpylestrangeplanet.svg', 'nathanwpylestrangeplanet']];
    return (
        <div className="stories">
            {nomes.map(nome => {
            return (<div class="story">
                <div class="imagem">
                <img src={nome[0]} />
                </div>
                <div class="usuario">
                {nome[1]}
                </div>
            </div>)})}

            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
