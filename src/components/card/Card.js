import './card.scss'

import {datas} from '../data/datas.js'

function AccomodationCard() {
    const categories = datas.reduce(
        (acc, data) =>
        acc.includes(data.category) ? acc : acc.concat(data.category),
        []
    )

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul>
				{datas.map((data) => (
					<li key={data.id}>{data.name}</li>
				))}
			</ul>
        </div>
    )
}

export default AccomodationCard