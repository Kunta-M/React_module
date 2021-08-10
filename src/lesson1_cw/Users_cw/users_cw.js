import './users_cw.css'

export function Users({id,name,username,email}){
    return(
        <div>
            <h3>{id}. {name} {username}</h3>
            <p>{email}</p>

        </div>
    )

}