import * as axios from "axios"

const instance = axios.create({
    baseURL: `https://boiling-refuge-66454.herokuapp.com/images`,
})

const getImagesAPI = {
    getAllImages: () => {
        return instance.get()
            .then(response => response.data);
    },
    getBigImage: (id) => {
        return instance.get('/'+id)
            .then(response => response.data);
    }
}

export default getImagesAPI;