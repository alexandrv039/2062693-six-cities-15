import {JSX} from 'react';
import {useAppSelector} from '../../hooks';
import {CitiesNames} from '../../const.ts';
import CityItem from './city-item.tsx';

export default function CityList(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {/* eslint-disable-next-line react/no-array-index-key */}
            {CitiesNames.map((item, id) => <CityItem key={`citi-name-${id}`} cityName={item.name} isActive={item.name === currentCity.name} />)}
          </ul>
        </section>
      </div>
    </>
  );
}
