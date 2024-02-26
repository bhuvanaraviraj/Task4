const resumeData = {
    "personalInformation": {
    "name": "Bhuvana R",
    "email": "bhuvanaraviraj472@gamil.com",
    "phone": 9876432173,
    "degree": "B.E",
    "location": {
      "address": "101, Bangalore",
      "postalCode": 560006,
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India"
    },
    "profiles": [
      {
        "github":"https://github.com/bhuvanaraviraj"
      }
    ]
  },
  "work": [
    {
      "company": "Tata Consultancy Services",
      "position": "System Engineer",
      "startDate": "2022-02-17",
      "endDate": "2024-02-26",
      "summary": "i am the system engineer handling various task and gaining lots of experience",
    },
  ],
  "education": [
    {
      "institution": "KIT- Kalaignarkarunanidhi Institute of Technology",
      "department": "Biomedical Engineering",
      "studyType": "fulltime",
      "batch start year": 2017,
      "batch end year": 2021,
      "gpa": 7.5,
    }
  ],
  "skills": [
    {
      "name": "python,javascript",
      "level": "beginer",
    }
  ],
  "languages": [
    {
      "language": "Kannada,Tamil,English",
    }
  ],
  "interests": [
    {
      "name": "Singing,Baking",
    }
  ],
  };
  
  //  for loop 
  for (let i = 0; i < resumeData.skills.length; i++) {
    console.log(resumeData.skills[i]);
  }
  
  // for...in loop 
  for (let section in resumeData) {
    console.log(section);
    if (resumeData[section] instanceof Array) {
      for (let i = 0; i < resumeData[section].length; i++) {
        console.log(resumeData[section][i]);
      }
    } else if (typeof resumeData[section] === "object") {
      for (let property in resumeData[section]) {
        console.log(`${property}: ${resumeData[section][property]}`);
      }
    }
  }
  
  // for...of loop 
  for (let skill of resumeData.skills) {
    console.log(skill);
  }
  
  // forEach 
  resumeData.skills.forEach(skill => {
    console.log(skill);
  });
  