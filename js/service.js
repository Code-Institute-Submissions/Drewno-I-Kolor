app.service('MapService', function(){
    this.init = function() {
        var options = {
            center: new google.maps.LatLng(49.9685, 20.4303),
            zoom: 14,
            disableDefaultUI: true    
        }
        this.map = new google.maps.Map(
            document.getElementById("map"), options
        );

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(49.9685, 20.4303),
            map: this.map
        });
    }
});