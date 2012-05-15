dojo.provide('client.components.Device');

mulberry.component('Device', {
  componentTemplate : dojo.cache('client.components', 'Device/Device.haml'),

  init : function() {
    this.connect(this.deviceButton, 'click', '_showDeviceInfo');
  },

  _showDeviceInfo : function() {
    this.deviceInfo.innerHTML = 'Version: ' + mulberry.app.PhoneGap.device.version;
  }
});
