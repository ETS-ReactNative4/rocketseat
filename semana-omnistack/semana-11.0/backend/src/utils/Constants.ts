const constants = {
    CONFIG: {
        PORT: 3333
    },
    HTTP:{
        STATUS: {
            OK: 200,
            BAD_REQUEST: 400,
            UNAUTHORIZED: 401,
            INTERNAL_SERVER_ERROR: 500
        }
    },
    PAGINATION: {
        DEFAULT: 1,
        LIMIT: 5,
        OFFSET: 0
    }
}

export default constants;