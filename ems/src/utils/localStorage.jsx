const employees = [{
    "employees": [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Prepare Monthly Report",
            "description": "Compile and submit the monthly performance report.",
            "date": "2025-05-10",
            "category": "Reporting",
            "active": true,
            "newTask": false,
            "completed": false,
            "fail": false
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Client Follow-Up",
            "description": "Call clients for feedback on recent orders.",
            "date": "2025-05-08",
            "category": "Support",
            "active": false,
            "newTask": false,
            "completed": true,
            "fail": false
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Software Testing",
            "description": "Run unit tests for the new module.",
            "date": "2025-05-11",
            "category": "Development",
            "active": true,
            "newTask": true,
            "completed": false,
            "fail": false
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Inventory Check",
            "description": "Audit storage and update stock levels.",
            "date": "2025-05-07",
            "category": "Logistics",
            "active": false,
            "newTask": false,
            "completed": true,
            "fail": false
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Customer Feedback Survey",
            "description": "Launch and analyze the monthly feedback survey.",
            "date": "2025-05-09",
            "category": "Customer Service",
            "active": true,
            "newTask": true,
            "completed": false,
            "fail": false
          },
        ]
      }
    ]
  }];
  
  const admin = [{
    "admin": {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  }];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
} 

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return{employees, admin}
}
