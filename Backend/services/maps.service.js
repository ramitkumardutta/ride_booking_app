const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;

    if (!address) {
        throw new Error('Address is required');
    }

    if (!apiKey) {
        throw new Error('Missing GOOGLE_MAPS_API environment variable');
    }

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK' && Array.isArray(response.data.results) && response.data.results.length > 0) {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            console.log('getAddressCoordinate response:', response.data);
            const msg = `Google Geocode error: ${response.data.status}${response.data.error_message ? ' - ' + response.data.error_message : ''}`;
            throw new Error(msg);
        }
    } catch (error) {
        console.log('getAddressCoordinate error:', error.message || error);
        throw error;
    }
};

module.exports.getDistanceTime = async (origin, destination) => {
    if(!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            
            if(response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
                throw new Error('No route found between the specified origin and destination');
            }

            return response.data.rows[ 0 ].elements[ 0 ];
        } else {
            throw new Error(`Google Distance Matrix error: ${response.data.status}`);
        }
    } catch (error) {
        console.log('getDistanceTime error:', error.message || error);
        throw error;
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if(!input) {
        throw new Error('query is required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if(response.data.status === 'OK'){
            return response.data.predictions;
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch(error) {
        console.error(error);
        throw error;
    }
}