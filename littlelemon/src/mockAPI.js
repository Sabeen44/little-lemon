const availableTimesByDate = {
    "2025-01-20": ["10:00", "11:00", "12:00"],
    "2025-01-21": ["10:00", "11:00", "01:00"],
    "2025-01-22": ["14:00", "15:00", "16:00"],
    "2025-01-23": ["10:00", "11:00", "01:00"],
    "2025-01-24": ["14:00", "15:00", "16:00"],
    "2025-01-25": ["10:00", "11:00", "01:00"],
    "2025-01-26": ["14:00", "15:00", "16:00"],
    "2025-01-27": ["10:00", "11:00", "01:00"],
    "2025-01-28": ["14:00", "15:00", "16:00"],
    "2025-01-29": ["10:00", "11:00", "01:00"],
    "2025-01-30": ["14:00", "15:00", "16:00"],
    "2025-01-31": ["10:00", "11:00", "01:00"],
    "2025 02-01": ["14:00", "15:00", "16:00"],
    "2025-02-02": ["10:00", "11:00","02:00"],
    "2025-02-03": ["14:00", "15:00", "16:00"],
    "2025-02-04": ["10:00", "11:00", "02:00"],
    "2025-02-05": ["14:00", "15:00", "16:00"],
    "2025-02-06": ["10:00", "11:00", "02:00"],
    "2025-02-07": ["14:00", "15:00", "16:00"],
    "2025-02-08": ["10:00", "11:00", "02:00"],
    "2025-02-09": ["14:00", "15:00", "16:00"],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No times available for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {
    
    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}