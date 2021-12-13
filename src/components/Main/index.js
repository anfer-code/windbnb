import TitlesMain from '../TitlesMain'
import ListItems from '../ListItems'
import Items from '../Items'
import {Context} from '../../App'
// import Prov from '../Prov'
import { useContext } from 'react'
import Charging from '../Charging'

export default function Main() {

    const {listArr} = useContext(Context)
    
    return (
        <main>
            <TitlesMain sites={listArr} />
            <ListItems>
                {   
                    listArr.length > 0 ?
                    listArr.map((el , index) => (
                    <Items
                        key={index} 
                        img={el.photo}
                        city={el.city}
                        host={el.superHost}
                        type={el.type}
                        beds={el.beds}
                        rank={el.rating}
                        title={el.title}
                    />)) :
                    <Charging />
                }
            </ListItems>
        </main>
    );
}