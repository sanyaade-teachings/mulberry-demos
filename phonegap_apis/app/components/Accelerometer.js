dojo.provide('client.components.Accelerometer');

mulberry.component('Accelerometer', {
  componentTemplate : dojo.cache('client.components', 'Accelerometer/Accelerometer.haml'),

  init : function() {
    this.connect(this.accelButton, 'click', '_getAccel');
  },

  _getAccel : function() {
    var cb = dojo.hitch(this, '_showAccel'),
        watch;

    if (this.device.os === 'ios') {
      watch = mulberry.app.PhoneGap.accelerometer.watchAcceleration(function(res) {
        mulberry.app.PhoneGap.accelerometer.getCurrentAcceleration().then(cb);
        mulberry.app.PhoneGap.accelerometer.clearWatch(watch);
      }, function() {}, { frequency: 100 });
    } else {
      mulberry.app.PhoneGap.accelerometer.getCurrentAcceleration().then(cb);
    }
  },

  _showAccel : function(accel) {
    var str = '';

    dojo.forIn(accel, function(k, v) {
      str += '<li>' + k + ': ' + v + '</li>';
    });

    this.accel.innerHTML = str;
    dojo.publish('/content/update'); // update the scroller dimensions
  }
});
