import React, { memo } from 'react'; // add `memo` з React
import s from './NewSeason.module.scss';
import WATCH from '../../assets/img/NewSeason/Watch.png';
import Preloader from '../../components/Preloader/Preloader';
import DataProducts from '../../utils/data/DataProducts';

const NewSeason = () => {
	return (
		<section className={s.season}>
			<div className={s.season__left}>
				<h2 className={s.season__left_title}>SEASON 2022/23</h2>
				<div className={s.season__left_cards}>
					{/*An optimized DataProducts component using React.memo*/}
					<DataProductsMemo url="/products">
						{(products) => {
							if (!products) {
								return <Preloader />;
							} else {
								return products.slice(0, 3).map((product) => (
									<div className={s.card} key={product.id}>
										<div className={s.card__img}>
											<img src={WATCH} alt={product.title} />
										</div>
										<div className={s.card__text}>
											<p className={s.card__text_title}>{product.title}</p>
											<p>{product.price}</p>
										</div>
									</div>
								));
							}
						}}
					</DataProductsMemo>
				</div>
			</div>
			<div className={s.season__right}>
				<div className={s.season__right_img}></div>
			</div>
		</section>
	);
};

const DataProductsMemo = memo(DataProducts);

export default NewSeason;
