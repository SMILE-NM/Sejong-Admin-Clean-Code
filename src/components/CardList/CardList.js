import UserCard from '../UserCard/UserCard';

const CardList = () => {
  return (
    <div className="container">
      <div className="card-list" id="card_list">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default CardList;
