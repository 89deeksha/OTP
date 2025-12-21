const employee = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        id: 1,
        title: "Create login page",
        description: "Build UI and validation for user login functionality",
        category: "Frontend",
        taskDate: "2025-01-10",
        active: true,
        newtask: true,
        failed: false,
        completed: false
      },
      {
        id: 2,
        title: "Fix signup API bug",
        description: "Resolve 500 error occurring during user signup",
        category: "Backend",
        taskDate: "2025-01-11",
        active: false,
        newtask: false,
        failed: true,
        completed: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        id: 3,
        title: "Design dashboard UI",
        description: "Create responsive dashboard layout using Tailwind",
        category: "UI/UX",
        taskDate: "2025-01-12",
        active: true,
        newtask: false,
        failed: false,
        completed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        id: 4,
        title: "Integrate payment gateway",
        description: "Implement Razorpay payment integration",
        category: "Backend",
        taskDate: "2025-01-13",
        active: false,
        newtask: false,
        failed: false,
        completed: true
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        id: 5,
        title: "Write unit tests",
        description: "Add Jest unit tests for auth module",
        category: "Testing",
        taskDate: "2025-01-14",
        active: true,
        newtask: true,
        failed: false,
        completed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        id: 6,
        title: "Optimize database queries",
        description: "Improve MongoDB query performance using indexing",
        category: "Database",
        taskDate: "2025-01-15",
        active: false,
        newtask: false,
        failed: true,
        completed: false
      }
    ]
  },

  
]
const admin=[
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
    role: "admin",
    tasks: [
      {
        id: 7,
        title: "Deploy to staging",
        description: "Deploy latest build to staging environment",
        category: "DevOps",
        taskDate: "2025-01-16",
        active: false,
        newtask: false,
        failed: false,
        completed: true
      },
      {
        id: 8,
        title: "Prepare documentation",
        description: "Create project setup and API documentation",
        category: "Documentation",
        taskDate: "2025-01-17",
        active: true,
        newtask: true,
        failed: false,
        completed: false
      }
    ]
  }
]

export const setInLocalstorage=()=>{
localStorage.setItem('employee',JSON.stringify(employee))
localStorage.setItem('Admin',JSON.stringify(admin))
}


export const getInLocalstorage=()=>{
  const employee=JSON.parse(localStorage.getItem('employee',))
  const Admin=JSON.parse(localStorage.getItem('Admin'))
  console.log(employee,Admin)
    
}

