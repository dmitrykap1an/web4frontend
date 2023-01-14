
const defaultConfig = {
    validateStatus: function (status) {
        return status < 500;
    },
}

export default defaultConfig