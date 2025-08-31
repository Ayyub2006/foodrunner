document.querySelectorAll('.directions-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const destinationLat = this.getAttribute('data-lat');
        const destinationLng = this.getAttribute('data-lng');

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;
                    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}&travelmode=driving`;
                    window.open(mapsUrl, '_blank');
                },
                function() {
                    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}&travelmode=driving`;
                    window.open(mapsUrl, '_blank');
                }
            );
        } else {
            const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}&travelmode=driving`;
            window.open(mapsUrl, '_blank');
        }
    });
});
