var res = 
   [ {
        "basics": {
          "name": "Nandhini A",
          "email": "anandhanj124@gmail.com",
          "phone": "01234567890",
          "degree": "B.E(EEE)",
          "location": {
            "address": "No 51, Sundaram, 3rd street, Vyasarpadi",
            "postalCode": "600039",
            "city": "Chennai"
          },
          "profiles": [
            {
              "network": "LinkedIn",
              "username": "Nandhini Anandhan",
              "url": "https://www.linkedin.com/in/nandhini-anandhan-a1517819a/"
            }
          ]
        },
        "work": [
          {
            "company": "Isha Foundation",
            "position": "QA Developer",
            "experiance":"3 Years",
            "summary": "Developer and QA always looking for a opportunity to learn and explore",
          }
        ],
        "education": [
          {
            "institution": "Panimalar Instiute of Technology",
            "degree": "Electrical and Electronics Engineering",
            "batch": "2014-2018",
            "gpa": "6.95"
          }
        ],
        "skills": [
          {
            "name": "Programming Languages",
            "level": "Intermediate",
            "keywords": [
              "('Java', 'C', 'C++', 'HTML,CSS,JS', 'React JS')"
            ]
          }
        ],
        "certicication": [
            {
                "name":"British Council",
                "course":"Advance Level"

            }
        ],
        "languages": [
          {
            "language": "English, Tamil",
            "fluency": "Read, Write, Speak"
          }
        ],
        "interests": [
          {
            "name": "Music",
            "keywords": [
              "Carnatic Music"
            ]
          }
        ]
      }]

//1. For Loop for printing array of Objects as a whole

for(var i=0;i<res.length;i++){
    console.log(res[i]);
}

// For in Loop for printing each key:value pair in the JSON, used for Objects

for(var i=0;i<res.length;i++){
    var obj = res[i];
    for(var key in obj)
    {
        console.log(key,obj[key])
    }
}

// For of Loop for printing all elements in the JSON, used for Arrays

    for(var array of res) {
        console.log(key)
    }

