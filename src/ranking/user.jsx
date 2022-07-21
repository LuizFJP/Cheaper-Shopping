import users from '../utils/users'

function UserRanking() {
return (
    <div className="ranking-container">
    { users.map((user, index) => (
    <div key={index} className="ranking-user">
           <img className="photo-user-ranking" src={user.src} alt={user.name} />
           <p># {index}</p>
           <div>
               <p>{user.name}</p>
               <p>{user.status}</p>
           </div>
           <p>{user.score}</p>
    </div>
    )   
    )}
    </div>
)
}

export default UserRanking;
