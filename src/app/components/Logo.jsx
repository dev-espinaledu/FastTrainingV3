import LogoImg from '../assets/img/DESIGNED BY FREEPIK.png';
import LogoName from '../assets/img/Fast Training.png';

function Logo() {
    return (
        <figure className="flex w-auto items-center h-12">
            <img className='h-full' src={LogoImg} alt="logo" />
            <img className='h-full' src={LogoName} ></img>
        </figure>
    )
}

export default Logo;