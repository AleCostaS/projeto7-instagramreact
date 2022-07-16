export default function Stories() {
    const users = [['../assets/img/9gag.svg', '9gag'], ['../assets/img/meowed.svg', 'meowed'], ['./assets/img/barked.svg', 'barked'], ['./assets/img/nathanwpylestrangeplanet.svg', 'nathanwpylestrangeplanet'], ['./assets/img/wawawicomics.svg', 'wawawicomics'], ['./assets/img/respondeai.svg', 'respondeai'], ['./assets/img/filomoderna.svg', 'filomoderna'], ['./assets/img/memeriagourmet.svg', 'memeriagourmet']];
    return (
        <div className="stories">
            {users.map(usuarios => {
            return (<div className="story">
                <div className="imagem">
                <img src={usuarios[0]} />
                </div>
                <div className="usuario">
                {usuarios[1]}
                </div>
            </div>)})}

            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
