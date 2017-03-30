export const addKeywordAction = (keyword) => {
    return {
        type: 'ADD_KEYWORD',
        data: keyword
    }
}

export const filterProducts = keyword => {
    return (dispatch) => {
        let url = `http://hn.algolia.com/api/v1/search?query=${keyword}`
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                dispatch(addKeywordAction())
                this.setState({
                    products: data.hits
                })
            })
    }
}

