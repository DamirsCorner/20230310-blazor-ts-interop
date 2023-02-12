export async function getCurrentPosition(options) {
    let position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
    console.log(position);
    console.log(JSON.stringify(position));
    let mappedPosition = {
        coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            altitude: position.coords.altitude,
            accuracy: position.coords.accuracy,
            altitudeAccuracy: position.coords.altitudeAccuracy,
            heading: position.coords.heading,
            speed: position.coords.speed
        },
        timestamp: position.timestamp
    };
    console.log(JSON.stringify(mappedPosition));
    return mappedPosition;
}