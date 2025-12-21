import React from 'react'

function Createtask() {
  return (
    <div>
        <div className="mt-10">
        <form className="flex gap-10">
          
          {/* Left section */}
          <div className="flex flex-col gap-4 w-1/2">
            
            <div>
              <h3 className="mb-1">Task Title</h3>
              <input
                className="w-full px-3 py-2 text-white rounded outline-none border border-white" 
                placeholder="Make a UI design"
              />
            </div>

            <div>
              <h3 className="mb-1">Date</h3>
              <input
                type="date"
                className="w-full px-3 py-2 text-white rounded outline-none border border-white"
              />
            </div>

            <div>
              <h3 className="mb-1">Assign to</h3>
              <input
               className="w-full px-3 py-2 text-white rounded outline-none border border-white"
                placeholder="Employee name"
              />
            </div>

            <div>
              <h3 className="mb-1">Category</h3>
              <input
               className="w-full px-3 py-2 text-white rounded outline-none border border-white"
                placeholder="Design, Dev, etc"
              />
            </div>
          </div>

          {/* Right section */}
          <div className="flex flex-col w-1/2">
            <h3 className="mb-1">Description</h3>
            <textarea
              className="h-full px-3 py-2 text-black rounded resize-none outline-none border border-white text-white"
              placeholder="Task details..."
            />
          </div>
        </form>

        <button className="mt-6 bg-red-500 px-6 py-2 rounded font-medium hover:bg-red-600">
          Create Task
        </button>
      </div>
    </div>
  )
}

export default Createtask