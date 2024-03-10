import { Container } from 'react-bootstrap';
import Mountain from '../assets/Baldy_bowl_snow.jpg';
import MountainTwo from '../assets/gettyimages-1470667921.jpg';

export const PageBackground = ({ children }) => {
    return (
        <div style={{ backgroundImage: `url(${MountainTwo})`, height: '100vh', backgroundSize: 'cover' }} width={'100%'}>
            {children}
        </div>
    )
}