import logo from '../assets/Berlin-colored.svg'

export default function Nav({ onDownload }){
    return(<>
    <div className='flex justify-between items-center px-14 py-4 bg-blue-900'>
        <div className="Logo">
            <h1 className='text-3xl font-bold text-white '>RESume BuilDER</h1>
        </div>
        <div>
            <button 
                className='font-bold bg-green-500 p-2 rounded-lg text-white w-28 download-btn hover:bg-blue-600 transition-colors duration-200'
                onClick={onDownload}
            >
                Download
            </button>
        </div>
    </div>
    </>);
}