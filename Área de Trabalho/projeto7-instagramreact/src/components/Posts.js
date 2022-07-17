export default function Posts() {
    const users = [['../assets/img/meowed.svg', 'meowed', 'assets/img/gato-telefone.svg', 'assets/img/respondeai.svg', 'respondeai', '101.523'], ['../assets/img/barked.svg', 'barked', 'assets/img/dog.svg', 'assets/img/adorable_animals.svg', 'adorable_animals', '99.159']];
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

                <div className="conteudo">
                    <img src={user[2]} />
                </div>

                <div className="fundo">
                    <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    </div>

                    <div className="curtidas">
                    <img src={user[3]} />
                    <div className="texto">
                        Curtido por <strong>{user[4]}</strong> e <strong>outras {user[5]} pessoas</strong>
                    </div>
                    </div>
                </div>
            </div>)})}

        </div>
    );
}