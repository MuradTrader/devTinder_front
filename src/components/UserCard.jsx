const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about, skills } = user;
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{`${age}, ${gender}`}</p>}
        <p>{about}</p>
        <p>{skills}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary">Игнор</button>
          <button className="btn btn-secondary">Интересно</button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
