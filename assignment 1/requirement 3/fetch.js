import querystring from 'node:querystring';

// API source - https://data.gov.in/resource/all-india-pincode-directory
const call_1 = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=xml&offset=31'

const call_2 = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=xml&offset=51'

const call_3 = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=xml&offset=61'

let recordList = [];
let totalRecords = 0;

const createRequestUrl = (offset) => {
    const parameters = {
        'api-key': '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b',
        format: 'json',
        offset,
        limit: 10,
    
        'filters[divisionname]': 'Nagpur City',
    }
    return call_3 + '?' + querystring.stringify(parameters);
}

const getTotalRecordCount = (data) => {
    return data.total;
}

const processData = (data) => {
    recordList = [
        ...recordList,
        ...data.records,
    ]
}

const fetchData = (requestUrl) => {
    return fetch(requestUrl)
        .then( response => {
            return response.json();
        })
}

const processDataArray = (dataArray) => {
    dataArray.forEach( data => {
        processData(data);
    });
    console.log(`Received records: ${recordList.length}`);
    console.log(recordList);
    const pincodeList = recordList.map(record => {
        return {
            pincode: record.pincode,
            name: record.officename,
        }
    });
    console.log(pincodeList);
};

const fetchAllData = (totalRecordCount) => {
    const promiseArray = [];
    const iterationCount = totalRecordCount / 10;
    console.log(iterationCount);
    for (let index = 0; index < iterationCount; index++) {
        promiseArray.push(fetchData(createRequestUrl(index * 10)));        
    }
    Promise.all(promiseArray) 
        .then(processDataArray);
}
fetchData(createRequestUrl(0))
    .then( data => {
        const totalRecordCount = getTotalRecordCount(data);
        fetchAllData(totalRecordCount);
    });
