const API_UNI = 'http://localhost:8080/university';


export const getRandomUni = () =>
    fetch(`${API_UNI}/getByID`, {
        method: 'POST',
        body: JSON.stringify({
            "id": 1
        }),
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


