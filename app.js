var app = new Vue({
  el: '#app',
  data: {
    years: [1932, 1949, 1981, 2019, 1973],
    yearLimit: 4,
    routes: Object.keys(Data),
    times: [
      {
        id: "A.M. Peak",
        name: "Morning commute"
      },
      {
        id: "Base",
        name: "Mid-day"
      },
      {
        id: "P.M. Peak",
        name: "Evening commute"
      },
      {
        id: "Night",
        name: "Night-time"
      }
    ],
    selectedRoute: 'Average',
    selectedTime: "A.M. Peak"
  },
  computed: {
    timeOptions: function(){
      return this.times.map(function(time){
        return {
          value: time.id,
          title: time.name
        }
      })
    },
    note: function(){
      if(!this.selectedRoute || !this.selectedTime){ return; }

      var note;
      Data[this.selectedRoute].forEach(function(row){
        if(row.Note){
          if(row.Note.length > 0){
            note = row.Note;
          }
        }
      });

      return note;
    },
    headways: function(){
      if(!this.selectedRoute || !this.selectedTime){ return; }

      var result = [];
      var time = this.selectedTime;
      var years = this.years;
      var limit = this.yearLimit;
      var selectedRoute = this.selectedRoute;

      years.forEach(function(year){
        Data[selectedRoute].forEach(function(row){
          if(row["Year"] == year && result.length < limit){
            result.push({
              year: row.Year,
              min: (Math.round(row[time + " Min"] * 2) / 2).toString(),
              max: (Math.round(row[time + " Max"] * 2) /2).toString()
            });
          }
        });
      });

      result.sort(function(a,b){
        return a.year - b.year;
      })

      return result;
    },
    iframe: function(){
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }
  },
  methods: {
    updateRoute: function(newRoute){
      this.selectedRoute = newRoute;
    }, updateTime: function(newTime){
      this.selectedTime = newTime;
    }
  }
});
