import Image from 'next/image';
import { Button } from "./Button";

    interface CardProps {
        src: string;
        alt: string;
        heading: string;
        description: string;
        category: string;
    }
    const Cardd: React.FC<CardProps> = ({src, alt, heading, description, category}) => {
    return (
        
            <div className="flex flex-col items-center border rounded-2xl border-gray-800 p-8 hover:ring hover:ring-8 hover:ring-slate-800/[0.8] transition duration-300">
                <Image 
                src={src}
                alt={alt}
                width={600}
                height={600}
                style={{objectFit: 'cover', width: 250, height:250}}
                />
                <div className='flex flex-col text-left py-4 w-full'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='pb-4 mt-3 flex-grow truncate' style={{maxWidth: 'calc(100% - 120px)'}}>{heading}</h1>
                        <button className="p-[7px] relative overflow-hidden rounded-full w-[125px] ml-4">
                            <div className="absolute inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full z-0" />
                            <div className="px-2 py-2 bg-black rounded-full relative group transition duration-200 text-white hover:bg-transparent z-10">
                                {category}
                            </div>
                        </button>
                    </div>
                    <p>{description}</p>
                    <button className='bg-transparent border border-cyan-500 border-[3px] text-white p-2 rounded-full mt-4'>Read More</button>
                </div>
            </div>
    );
};
export default Cardd;