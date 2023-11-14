const API_UNI = 'http://localhost:8080/university';


export const getRandomUni = (id) =>
    fetch(`${API_UNI}/getByID`, {
        method: 'POST',
        body: JSON.stringify(id),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => {
        if (res.ok) {
            return res.json();
        }

        else throw res;

    });


