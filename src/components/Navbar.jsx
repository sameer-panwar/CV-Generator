import logo from '../assets/Berlin-colored.svg'

export default function Nav(){
    return(<>
    <div className='flex justify-between items-center mx-14 my-4'>
        <div className="Logo">
            <img src={logo} alt="Logo" width={200} height={200}/>
        </div>
        <div><button className='font-bold bg-blue-500 p-2 rounded-lg text-white w-28'>Download</button></div>
    </div>
    </>);
}