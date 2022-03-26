import fetchData from "./fetchAPI";

async function getUserInfo () {
    const data = await fetchData('v1/me');
    return data;
}

const getUserTopArtists = async (time = 'medium') => {
    const data = await fetchData(`v1/me/top/artists?time_range=${time}_term&limit=50`);
    return data;
}

const getUserTopMusics = async (time = 'medium') => {
    const data = await fetchData(`v1/me/top/tracks?time_range=${time}_term&limit=50`);
    return data;
}

export { getUserInfo, getUserTopArtists, getUserTopMusics };