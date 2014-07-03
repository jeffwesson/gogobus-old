var mongoose = require('mongoose'),
timeParts = [],
  StopTime = mongoose.model('StopTime',
    new mongoose.Schema({
      agency_key: { type: String, index: true },
      trip_id: { type: String, index: true },
      arrival_time: {
        type: String,
        get: function (seconds) {
          //check if seconds are already in HH:MM:SS format
          if (seconds.match(/\d+:\d+:\d+/)[0]) {
            return seconds;
          }

          var hour = Math.floor(seconds / (60 * 60)),
            minute = Math.floor((seconds - hour * (60 * 60)) / 60),
            second = seconds - hour * (60 * 60) - minute * 60;
          return ((hour < 10) ? '' + '0' + hour : hour) + ':' + ((minute < 10) ? '' + '0' + minute : minute) + ':' + ((second < 10) ? '' + '0' + second : second);
        },
        set: function (time) {
          if (time instanceof Date) {
            timeParts = [ time.getHours(), time.getMinutes(), time.getSeconds() ];
          } else {
            timeParts = time.split(':');
            if (timeParts.length !== 3) {
              return null;
            }
          }
          return parseInt(timeParts[0], 10) * 60 * 60 + parseInt(timeParts[1], 10) * 60 + parseInt(timeParts[2], 10);
        }
      },
      departure_time: {
        type: String,
        index: true,
        get: function (seconds) {
          //check if seconds are already in HH:MM:SS format
          if (seconds.match(/\d+:\d+:\d+/)[0]) {
            return seconds;
          }

          var hour = Math.floor(seconds / (60 * 60)),
            minute = Math.floor((seconds - hour * (60 * 60)) / 60),
            second = seconds - hour * (60 * 60) - minute * 60;
          return ((hour < 10) ? '' + '0' + hour : hour) + ':' + ((minute < 10) ? '' + '0' + minute : minute) + ':' + ((second < 10) ? '' + '0' + second : second);
        },
        set: function (time) {
          if (time instanceof Date) {
            timeParts = [ time.getHours(), time.getMinutes(), time.getSeconds() ];
          } else {
            timeParts = time.split(':');
            if (timeParts.length !== 3) {
              return null;
            }
          }
          return parseInt(timeParts[0], 10) * 60 * 60 + parseInt(timeParts[1], 10) * 60 + parseInt(timeParts[2], 10);
        }
      },
      stop_id: { type: String, index: true },
      stop_sequence: { type: Number, index: true },
      stop_headsign: { type: String },
      pickup_type: { type: String },
      drop_off_type: { type: String },
      shape_dist_traveled: { type: String }
    }));
