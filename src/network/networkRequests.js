export const plainGetRequest = (url, headers) => {
    return submitGetRequest(url, headers);
};

export const submitGetRequest = (url, headers, send_token = false) => {
    if (!url) {
        throw new Error('Cannot submit GET request. URL is null or undefined.');
    }
    const myHeaders = headers ? new Headers(headers) : {};

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'GET',
            headers: myHeaders
        })
            .then(response => {
                if (!response.ok) {
                    reject({
                        error: new Error(`Error response. (${response.status}) ${response.statusText}`),
                        statusCode: response.status,
                        statusText: response.statusText
                    });
                } else {
                    const json = response.json();
                    if (json.then) {
                        json.then(resolve).catch(reject);
                    } else {
                        return resolve(json);
                    }
                }
            })
            .catch(reject);
    });
};

export const getComparisonById = async id => {
    const resourceURL = `https://www.orkg.org/orkg/api/resources/${id}/`;
    const resourceMetaData = await plainGetRequest(resourceURL);

    const statementsURL = `https://www.orkg.org/orkg/api/statements/subject/${id}/`;
    const statementsData = await plainGetRequest(statementsURL);

    // get the comparison data
    const hasURL = `https://www.orkg.org/orkg/simcomp/visualization/?resourceId=${id}`;
    const hashResult = await plainGetRequest(hasURL);
    const hashIdRequest = hashResult.data.url;

    const comparisonDataURL = `https://www.orkg.org/orkg/simcomp/compare/${hashIdRequest}`;
    const comparisonData = await plainGetRequest(comparisonDataURL);

    return {
        resourceMetaData,
        statementsData,
        comparisonData
    };
};

export const getPaperById = async id => {
    const resourceURL = `https://www.orkg.org/orkg/api/resources/${id}/`;
    const resourceMetaData = await plainGetRequest(resourceURL);

    const statementsURL = `https://www.orkg.org/orkg/api/statements/subject/${id}/`;
    const statementsData = await plainGetRequest(statementsURL);
    return {
        resourceMetaData,
        statementsData
    };
};
