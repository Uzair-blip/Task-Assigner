localStorage.clear()
const employees = [
    {
      "id": 1,
      "firstName": "Ahmed",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskId": 1,
          "title": "Design Homepage",
          "description": "Create a modern homepage design",
          "date": "2024-10-20",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskId": 2,
          "title": "Implement Login",
          "description": "Create login page with validation",
          "date": "2024-10-18",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskId": 3,
          "title": "Test Registration Flow",
          "description": "Ensure smooth user registration",
          "date": "2024-10-19",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskCounts": {
        "newTasks": 1,
        "completedTasks": 1,
        "activeTasks": 1,
        "failedTasks": 1
      }
    },
    {
      "id": 2,
      "firstName": "Sara",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskId": 1,
          "title": "Create Dashboard",
          "description": "Develop an admin dashboard",
          "date": "2024-10-21",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskId": 2,
          "title": "Fix Login Bug",
          "description": "Resolve session issue in login",
          "date": "2024-10-16",
          "category": "Bug Fixing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskId": 3,
          "title": "Update Profile Page",
          "description": "Add new fields to profile page",
          "date": "2024-10-22",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ],
      "taskCounts": {
        "newTasks": 1,
        "completedTasks": 1,
        "activeTasks": 2,
        "failedTasks": 0
      }
    },
    {
      "id": 3,
      "firstName": "Ali",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskId": 1,
          "title": "SEO Optimization",
          "description": "Improve website SEO score",
          "date": "2024-10-17",
          "category": "Marketing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskId": 2,
          "title": "Deploy Application",
          "description": "Deploy the app to production",
          "date": "2024-10-19",
          "category": "Deployment",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskId": 3,
          "title": "Design Logo",
          "description": "Create a new logo for the app",
          "date": "2024-10-14",
          "category": "Design",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ],
      "taskCounts": {
        "newTasks": 1,
        "completedTasks": 1,
        "activeTasks": 1,
        "failedTasks": 1
      }
    },
    {
      "id": 4,
      "firstName": "Aisha",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskId": 1,
          "title": "Write API Documentation",
          "description": "Document all API endpoints",
          "date": "2024-10-20",
          "category": "Documentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskId": 2,
          "title": "Fix UI Bugs",
          "description": "Resolve layout issues in UI",
          "date": "2024-10-15",
          "category": "Bug Fixing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskId": 3,
          "title": "Setup CI/CD Pipeline",
          "description": "Automate the deployment process",
          "date": "2024-10-18",
          "category": "DevOps",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ],
      "taskCounts": {
        "newTasks": 1,
        "completedTasks": 1,
        "activeTasks": 2,
        "failedTasks": 0
      }
    },
    {
      "id": 5,
      "firstName": "Bilal",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskId": 1,
          "title": "Manage User Roles",
          "description": "Implement role-based access control",
          "date": "2024-10-21",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskId": 2,
          "title": "Prepare Monthly Report",
          "description": "Generate monthly performance report",
          "date": "2024-10-19",
          "category": "Reporting",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskId": 3,
          "title": "Setup Analytics",
          "description": "Integrate Google Analytics",
          "date": "2024-10-22",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ],
      "taskCounts": {
        "newTasks": 1,
        "completedTasks": 1,
        "activeTasks": 2,
        "failedTasks": 0
      }
    }
  ];
  
    
  const admin=[{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }] 
  
  export const setLocalStorage=()=>{
    localStorage.setItem("employees",JSON.stringify(employees)) 
    localStorage.setItem("admin",JSON.stringify(admin)) 

  }
  export const getLocalStorage=()=>{
    const emp=JSON.parse(localStorage.getItem("employees"))
    const admin=JSON.parse(localStorage.getItem("admin"))
    return{admin,emp}


  } 