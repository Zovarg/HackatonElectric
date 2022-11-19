import React, {useEffect, useState} from 'react';
import {YMaps, Map, Placemark, GeolocationControl} from "react-yandex-maps";
import cl from './Maper.module.css'
import {useFetching} from "../../hooks/useFetching";
import api from "../../services/api";
import photo from '../../images/photo-map.png'
import Menu from "../../component/UI/Menu/Menu";
const Maper = () => {


    const krasnodarCords = [45.0360, 38.9746]
    const mapData = {
        center: krasnodarCords,
        zoom: 12,
        controls: []

    };
    const [posts, setPosts] = useState([
        {cords:{lat:'45.119758',lon:'38.923327'}},
        {cords:{lat:'45.107360',lon:'38.956286'}},
        {cords:{lat:'45.077784',lon:'39.014930'}},
        {cords:{lat:'45.036353',lon:'38.973897'}},
        {cords:{lat:'45.039914',lon:'38.973716'}},
        {cords:{lat:'45.014808',lon:'38.958305'}},
        {cords:{lat:'45.014686',lon:'38.969807'}},
        {cords:{lat:'45.021382',lon:'38.964313'}},
        {cords:{lat:'45.017973',lon:'38.981050'}},
        {cords:{lat:'45.018904',lon:'38.938786'}},
        {cords:{lat:'45.017111',lon:'39.040112'}},
        {cords:{lat:'45.012647',lon:'39.052423'}},
        {cords:{lat:'45.017907',lon:'38.928793'}},
        {cords:{lat:'45.028115',lon:'38.907572'}},
        {cords:{lat:'45.077528',lon:'39.014364'}},
        {cords:{lat:'45.026382',lon:'39.033611'}},
        {cords:{lat:'45.035798',lon:'39.050902'}},

    ]);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const { data: loginData } = await api.auth.getResidential();
        setPosts([...posts, ...loginData])
    })

    let [load, setLoad]=useState(null)


    useEffect(() => {
        fetchPosts()
    }, [])
    let residentialComplexes = posts

    return (
        <div className={cl.map_background}>
            <Menu/>
            <YMaps>
                <Map className={cl.map_background} defaultState={mapData}>
                    <GeolocationControl options={{
                        float: 'left'
                    }} />
                    {residentialComplexes.map(el => <Placemark key={el.cords.lat} geometry={[el.cords.lat, el.cords.lon]} properties={{balloonContent: `<div class='${cl.map_container}'><strong>Подробнее</strong><img class='${cl.map_image}' src='${photo}'/> </div>`}} modules= {
                        ['geoObject.addon.balloon', 'geoObject.addon.hint']
                    }/>)}
                </Map>
            </YMaps>

        </div>

    );
};

export default Maper;