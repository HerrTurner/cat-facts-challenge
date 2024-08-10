//generar numero de personas por cantidad de random facts por pagina
const getUserInfo = (size) => {
    return fetch(`https://randomuser.me/api/?results=${size}`)
    .then((res) =>res.json());
}

export default getUserInfo;