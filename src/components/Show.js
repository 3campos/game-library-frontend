import React, { useEffect } from 'react'

function Show() {
    return (
    <div>Showtime!</div>
  )
}

export default Show

/*

    
    render(){

        return (
            <div className='flex flex-col relative'>
                <div id="tile" className='border-black border-2 rounded-md bg-white p-2 h-44 w-44 overflow-hidden'>

                <div className='flex justify-between items-start'>
                    <div className='flex flex-col'>
                         <p className='font-bold'>{this.props.name}</p>
                         <p className='italic text-sm'>{this.props.muscles}</p>
                    </div>
                   
                    <div className='flex items-center justify-center'> 
                        {this.getMuscleIcon()}
                    </div>
                </div>

                <div className='my-4'></div>
                <p className='truncate text-sm'>{this.props.description}</p>
                <Link to ={`/showcustom?id=${this.props.id}`}>
                    <p className='pr-4 underline text-[#616161] text-sm absolute bottom-2'>
                        View More
                    </p>
                </Link>
                </div>
            </div>
        )
    }

}

export default CustomExerciseTile

*/
