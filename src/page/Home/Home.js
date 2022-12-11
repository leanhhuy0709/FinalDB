
import FoodList from '../../component/FoodList/FoodList';

function Home({foods, filter, combos}) {
    return (<>
        <FoodList foods = {foods} filter = {filter} combos = {combos}/>
    </>
    );
}

export default Home;
