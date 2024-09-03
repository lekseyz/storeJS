export default function StoreListItem({ name, description, price }) {
    return (
        <li>
            <div className='title'>{name}</div>
            <div className='description'>{description}</div>
            <div className='price'>Цена: {price}</div>
        </li>
    );
}