export default function User() {
    const user = ['assets/img/catanacomics.svg', 'catanacomics', 'Catana']
    return (
        <div className="usuario">
            <img src={user[0]} />
            <div className="texto">
              <strong>{user[1]}</strong>
              {user[2]}
            </div>
        </div>
    );
}
