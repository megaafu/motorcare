import { Cars } from '@/data/cars';
import CategroyItem from './CategroyItem';

interface CategoryProps {
    filter:string
}

const CategoriesList:React.FC<CategoryProps> = ({filter}) => {
    return (
        
        <div className="grid grid-cols-4 gap-2">
        {Cars.cars.filter(car=>car.category===filter ).slice(0,4).map((car, index) => (
            
            <CategroyItem car={car} index={index}/>
            
        ))}
        </div>

    )
}

export default CategoriesList