import React from 'react'

const Deletebox = () => {
  return (
    <div className='w-[443px] h-[249px] bg-[]' style={{
        background: "linear-gradient(90deg, #484E53 100%, #2F3338 100%)",
    }}>
        <div className='text-xl font-bold text-white'>
            Are you sure ?
        </div>
        <div>
            Your selected email will be deleted.
        </div>
        <div>
            <button>
                Cancel
            </button>
            <button>
                Delete
            </button>
        </div>
    </div>
  )
}

export default Deletebox