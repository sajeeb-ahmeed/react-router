import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const { info } = useParams()
    const [friend, setFriend] = useState([]);

    const { name, username, phone, email, address, company, website } = friend;

    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/users/${info}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [info])


    return (
        <div>
            <div className='row'>
                <div className="col-md-12  p-3">
                    <div className='border'>
                        <h1>
                            Name : {name}
                        </h1>
                        <h3>
                            Email : {email}
                        </h3>
                        <h3>
                            Usename: {username}
                        </h3>
                        <h3>
                            Phone : {phone}
                        </h3>
                        <h3>
                            Street : {address?.street ? address?.street : ' No Street Found'}
                        </h3>
                        <h3>
                            city : {address?.city ? address?.city : 'No City Found'}
                        </h3>
                        <h3>
                            Company : {company?.name ? company?.name : ' NO Company name found '}
                        </h3>
                        <h3>
                            Website : {website}
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendDetails;