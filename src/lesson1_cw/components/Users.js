import './Users.css'

export function User({id,name,username,email,phone, street, suite, city, zipcode,lat,lng}){

    return(
        <div className="User">
            <h3>{id}. {name} {username}</h3>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <div className="Address">
                <h5>Address: {street} {suite};
                    city - {city}, {zipcode}
                </h5>
                <div className="Geo">
                    <h5>Geo: lat {lat} / lng {lng}</h5>
                </div>
            </div>
        </div>
    )
}