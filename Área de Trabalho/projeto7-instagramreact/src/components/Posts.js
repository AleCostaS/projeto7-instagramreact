export default function Posts() {
    const users = [['../assets/img/9gag.svg', '9gag'], ['../assets/img/meowed.svg', 'meowed'], ['./assets/img/barked.svg', 'barked'], ['./assets/img/nathanwpylestrangeplanet.svg', 'nathanwpylestrangeplanet'], ['./assets/img/wawawicomics.svg', 'wawawicomics'], ['./assets/img/respondeai.svg', 'respondeai'], ['./assets/img/filomoderna.svg', 'filomoderna'], ['./assets/img/memeriagourmet.svg', 'memeriagourmet']];
    return (
        <div className="posts">
            {users.map(user => {
            return (
            <div className="post">
                <div className="topo">
                    <div className="usuario">
                        <img src={user[0]} />
                        {user[1]}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={user[2]} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    </div>

                    <div class="curtidas">
                    <img src={user[3]} />
                    <div class="texto">
                        Curtido por <strong>{user[4]}</strong> e <strong>outras {user[5]} pessoas</strong>
                    </div>
                    </div>
                </div>
            </div>)})}

        </div>
    );
}