import React from 'react'

const Add = () => {
    return (
        <>
            <h2 className='text-5xl font-bold text-center my-6 text-secondary'>Add Your Task</h2>
            <form>
                <div class="form-control w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto my-4">
                    <label class="label">
                        <span class="label-text font-bold text-primary text-lg">Title</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto" />
                </div>
                <div class="form-control w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto my-4">
                    <label class="label">
                        <span class="label-text text-lg font-bold text-primary">Subject</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto" />
                </div>
                <div class="form-control w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto my-4">
                    <label class="label">
                        <span class="label-text text-lg font-bold text-primary">Details</span>
                    </label>
                    <textarea type="text" placeholder="Type here" class="textarea textarea-bordered w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto" />
                </div>
                <div className='text-center mb-4'>
                    <button className='btn bg-primary border-2 tracking-widest hover:bg-neutral hover:border-primary'>
                        Add Task
                    </button>
                </div>
            </form>
        </>
    )
}

export default Add