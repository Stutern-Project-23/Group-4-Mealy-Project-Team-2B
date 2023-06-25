import { useState, useEffect } from 'react';
import rest from '../utilities/rest';

export default function UseFindUser() {
	const [user, setUser] = useState(null);
	const [isLoading, setLoading] = useState(true);

useEffect(() => {
  async function findUser() {
    await rest().get('/user')
		.then(res => {
			setUser(res.data.currentUser);
			setLoading(false);
    }).catch(err => {
      setLoading(false);
    });
  }
  findUser();
}, []);

return {
	user,
	isLoading
  }
}