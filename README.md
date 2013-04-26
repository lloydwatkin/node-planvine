# node-planvine

This is a wrapper for version 1 of the Planvine (http;//www.planvine.com API).

# Getting started

Firstly you'll need to get yourself an API key from here: http://planvine.com/developer/clients/manage

# Usage

```
var Planvine = require('node-planvine')

var planvine = new Planvine(API_KEY)
```

## Events

### Request

#### Get a set of events

```
planvine.getEvents(options, function(error, events) {
  if (error) return console.log(error)
  console.log(events)
})
```

#### Get a single event

```
planvine.getEvent(id, function(error, event) {
  if (error) return console.log(error)
  console.log(event)
})
```

### Response

```
{
  end_date: "2012-03-11T00:00:00",
  title: "Free South African Wine Tasting",
  url: "http://planvine.com/event/free-south-african-wine-tasting",
  photo: {
    url: "http://s3.amazonaws.com/com.planvine.v4.image/2dcb61d3-5e00-445c-bc47-9c7c3f1e01c2.jpg"
  },
  venue: {
    lat: 51.51814,
    lng: -0.150895,
    uid: "acf8d1ec-6775-4498-be23-d57eedd686c3",
    short_address: "Caffe Caldesi",
    address: "118 Marylebone Lane, London, United Kingdom"
  },
  start_date: "2012-03-10T12:30:00",
  short_date_string: "Until Sun 11 Mar",
  long_date_string: "12:30, Sat 10 Mar",
  id: 100
}
```

Note: For a set of events results are contained within an array.


