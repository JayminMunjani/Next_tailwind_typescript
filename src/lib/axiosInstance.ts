import mainAxios from "axios";

const axios = mainAxios.create({
    baseURL: "https://65891f7e324d417152587670.mockapi.io/api",
});

// axios.defaults.headers.common["Authorization"] = "Bearer " + "some toke here";

export default axios;
