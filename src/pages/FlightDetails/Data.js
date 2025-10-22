const flightDataCollection = {
  flights: [
    {
      flightName: "IndiGo 6E-101",
      stopType: "Non Stop",
      duration: "2h 10m",
      departure: {
        location: "New Delhi (DEL)",
        time: "05:30",
        airport: "Indira Gandhi Int'l (T3)"
      },
      arrival: {
        location: "Mumbai (BOM)",
        time: "07:40",
        airport: "Chhatrapati Shivaji Maharaj Int'l (T2)"
      },
      fares: {
        "Saver Fare": 5450,
        "Flexi Plus": 6800,
        "Super 6E": 8100
      }
    },
    {
      flightName: "Vistara UK-995",
      stopType: "Non Stop",
      duration: "2h 15m",
      departure: {
        location: "New Delhi (DEL)",
        time: "10:00",
        airport: "Indira Gandhi Int'l (T3)"
      },
      arrival: {
        location: "Mumbai (BOM)",
        time: "12:15",
        airport: "Chhatrapati Shivaji Maharaj Int'l (T2)"
      },
      fares: {
        "Saver Fare": 6120,
        "Flexi Plus": 7550,
        "Super 6E": 9200
      }
    },
    {
      flightName: "Air India AI-868",
      stopType: "Non Stop",
      duration: "2h 25m",
      departure: {
        location: "New Delhi (DEL)",
        time: "14:45",
        airport: "Indira Gandhi Int'l (T3)"
      },
      arrival: {
        location: "Mumbai (BOM)",
        time: "17:10",
        airport: "Chhatrapati Shivaji Maharaj Int'l (T2)"
      },
      fares: {
        "Saver Fare": 5890,
        "Flexi Plus": 7200,
        "Super 6E": 8750
      }
    },
    {
      flightName: "Akasa Air QP-204",
      stopType: "Non Stop",
      duration: "2h 20m",
      departure: {
        location: "New Delhi (DEL)",
        time: "18:20",
        airport: "Indira Gandhi Int'l (T2)"
      },
      arrival: {
        location: "Mumbai (BOM)",
        time: "20:40",
        airport: "Chhatrapati Shivaji Maharaj Int'l (T1)"
      },
      fares: {
        "Saver Fare": 5500,
        "Flexi Plus": 6950,
        "Super 6E": 8300
      }
    },
    {
      flightName: "SpiceJet SG-305",
      stopType: "Non Stop",
      duration: "2h 10m",
      departure: {
        location: "New Delhi (DEL)",
        time: "21:30",
        airport: "Indira Gandhi Int'l (T2)"
      },
      arrival: {
        location: "Mumbai (BOM)",
        time: "23:40",
        airport: "Chhatrapati Shivaji Maharaj Int'l (T1)"
      },
      fares: {
        "Saver Fare": 5350,
        "Flexi Plus": 6700,
        "Super 6E": 7990
      }
    },

    // --- 15 Unique/Diverse Entries ---
    {
      flightName: "IndiGo 6E-451",
      stopType: "Non Stop",
      duration: "1h 05m",
      departure: {
        location: "Bengaluru (BLR)",
        time: "07:15",
        airport: "Kempegowda Int'l Airport"
      },
      arrival: {
        location: "Hyderabad (HYD)",
        time: "08:20",
        airport: "Rajiv Gandhi Int'l Airport"
      },
      fares: {
        "Saver Fare": 3890,
        "Flexi Plus": 4990,
        "Super 6E": 6450
      }
    },
    {
      flightName: "Vistara UK-788",
      stopType: "1 Stop (via Delhi)",
      duration: "5h 40m",
      departure: {
        location: "Chennai (MAA)",
        time: "11:30",
        airport: "Chennai Int'l Airport (T4)"
      },
      arrival: {
        location: "Ahmedabad (AMD)",
        time: "17:10",
        airport: "Sardar Vallabhbhai Patel Int'l"
      },
      fares: {
        "Saver Fare": 7100,
        "Flexi Plus": 8500,
        "Super 6E": 10200
      }
    },
    {
      flightName: "Air India AI-409",
      stopType: "Non Stop",
      duration: "3h 15m",
      departure: {
        location: "Kolkata (CCU)",
        time: "16:00",
        airport: "Netaji Subhas Chandra Bose Int'l Airport"
      },
      arrival: {
        location: "Pune (PNQ)",
        time: "19:15",
        airport: "Pune Airport"
      },
      fares: {
        "Saver Fare": 6900,
        "Flexi Plus": 8400,
        "Super 6E": 9890
      }
    },
    {
      flightName: "Akasa Air QP-510",
      stopType: "Non Stop",
      duration: "1h 50m",
      departure: {
        location: "Mumbai (BOM)",
        time: "08:45",
        airport: "Chhatrapati Shivaji Maharaj Int'l (T1)"
      },
      arrival: {
        location: "Goa (GOI)",
        time: "10:35",
        airport: "Dabolim Airport"
      },
      fares: {
        "Saver Fare": 4150,
        "Flexi Plus": 5300,
        "Super 6E": 6700
      }
    },
    {
      flightName: "SpiceJet SG-119",
      stopType: "2 Stops",
      duration: "8h 00m",
      departure: {
        location: "Hyderabad (HYD)",
        time: "06:30",
        airport: "Rajiv Gandhi Int'l Airport"
      },
      arrival: {
        location: "Lucknow (LKO)",
        time: "14:30",
        airport: "Chaudhary Charan Singh Int'l"
      },
      fares: {
        "Saver Fare": 7990,
        "Flexi Plus": 9500,
        "Super 6E": 11500
      }
    },
    {
      flightName: "IndiGo 6E-720",
      stopType: "Non Stop",
      duration: "2h 55m",
      departure: {
        location: "Delhi (DEL)",
        time: "12:10",
        airport: "Indira Gandhi Int'l (T3)"
      },
      arrival: {
        location: "Bengaluru (BLR)",
        time: "15:05",
        airport: "Kempegowda Int'l Airport"
      },
      fares: {
        "Saver Fare": 5950,
        "Flexi Plus": 7350,
        "Super 6E": 8800
      }
    },
    {
      flightName: "Vistara UK-833",
      stopType: "1 Stop",
      duration: "4h 10m",
      departure: {
        location: "Pune (PNQ)",
        time: "19:00",
        airport: "Pune Airport"
      },
      arrival: {
        location: "Chennai (MAA)",
        time: "23:10",
        airport: "Chennai Int'l Airport (T4)"
      },
      fares: {
        "Saver Fare": 6200,
        "Flexi Plus": 7600,
        "Super 6E": 9150
      }
    },
    {
      flightName: "Air India AI-522",
      stopType: "Non Stop",
      duration: "2h 00m",
      departure: {
        location: "Ahmedabad (AMD)",
        time: "14:50",
        airport: "Sardar Vallabhbhai Patel Int'l"
      },
      arrival: {
        location: "Kolkata (CCU)",
        time: "16:50",
        airport: "Netaji Subhas Chandra Bose Int'l Airport"
      },
      fares: {
        "Saver Fare": 6550,
        "Flexi Plus": 8050,
        "Super 6E": 9600
      }
    },
    {
      flightName: "Akasa Air QP-301",
      stopType: "Non Stop",
      duration: "1h 40m",
      departure: {
        location: "Goa (GOI)",
        time: "11:15",
        airport: "Dabolim Airport"
      },
      arrival: {
        location: "Hyderabad (HYD)",
        time: "12:55",
        airport: "Rajiv Gandhi Int'l Airport"
      },
      fares: {
        "Saver Fare": 4300,
        "Flexi Plus": 5550,
        "Super 6E": 7000
      }
    },
    {
      flightName: "SpiceJet SG-890",
      stopType: "Non Stop",
      duration: "2h 45m",
      departure: {
        location: "Lucknow (LKO)",
        time: "09:30",
        airport: "Chaudhary Charan Singh Int'l"
      },
      arrival: {
        location: "Mumbai (BOM)",
        time: "12:15",
        airport: "Chhatrapati Shivaji Maharaj Int'l (T2)"
      },
      fares: {
        "Saver Fare": 5100,
        "Flexi Plus": 6500,
        "Super 6E": 7890
      }
    },
    {
      flightName: "IndiGo 6E-1005",
      stopType: "1 Stop",
      duration: "7h 20m",
      departure: {
        location: "Bengaluru (BLR)",
        time: "05:00",
        airport: "Kempegowda Int'l Airport"
      },
      arrival: {
        location: "Kolkata (CCU)",
        time: "12:20",
        airport: "Netaji Subhas Chandra Bose Int'l Airport"
      },
      fares: {
        "Saver Fare": 7500,
        "Flexi Plus": 9100,
        "Super 6E": 11300
      }
    },
    {
      flightName: "Vistara UK-604",
      stopType: "Non Stop",
      duration: "2h 50m",
      departure: {
        location: "Hyderabad (HYD)",
        time: "17:30",
        airport: "Rajiv Gandhi Int'l Airport"
      },
      arrival: {
        location: "Delhi (DEL)",
        time: "20:20",
        airport: "Indira Gandhi Int'l (T3)"
      },
      fares: {
        "Saver Fare": 5600,
        "Flexi Plus": 7050,
        "Super 6E": 8500
      }
    },
    {
      flightName: "Air India AI-444",
      stopType: "2 Stops",
      duration: "9h 30m",
      departure: {
        location: "Chennai (MAA)",
        time: "08:10",
        airport: "Chennai Int'l Airport (T4)"
      },
      arrival: {
        location: "Lucknow (LKO)",
        time: "17:40",
        airport: "Chaudhary Charan Singh Int'l"
      },
      fares: {
        "Saver Fare": 8100,
        "Flexi Plus": 9800,
        "Super 6E": 12000
      }
    },
    {
      flightName: "Akasa Air QP-450",
      stopType: "Non Stop",
      duration: "1h 15m",
      departure: {
        location: "Ahmedabad (AMD)",
        time: "13:00",
        airport: "Sardar Vallabhbhai Patel Int'l"
      },
      arrival: {
        location: "Pune (PNQ)",
        time: "14:15",
        airport: "Pune Airport"
      },
      fares: {
        "Saver Fare": 3990,
        "Flexi Plus": 5150,
        "Super 6E": 6600
      }
    },
    {
      flightName: "SpiceJet SG-150",
      stopType: "1 Stop",
      duration: "6h 50m",
      departure: {
        location: "Kolkata (CCU)",
        time: "10:40",
        airport: "Netaji Subhas Chandra Bose Int'l Airport"
      },
      arrival: {
        location: "Goa (GOI)",
        time: "17:30",
        airport: "Dabolim Airport"
      },
      fares: {
        "Saver Fare": 7300,
        "Flexi Plus": 8900,
        "Super 6E": 11000
      }
    }
  ]
};

export default flightDataCollection ;