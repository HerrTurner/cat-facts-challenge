
//regresar random facts por pagina
export const getCatFacts = ( pageParam ) => {
    return fetch(`https://catfact.ninja/facts?page=${pageParam}`)
            .then((res) =>res.json());
}
