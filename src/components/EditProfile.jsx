import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [about, setAbout] = useState(user.about);
  const [skills, setSkills] = useState(user.skills);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          photoUrl,
          about,
          skills,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.user));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err?.response?.data);
    }
  };

  return (
    <div className="flex gap-10">
      <div className="card bg-base-300 text-neutral-content w-96">
        <h1 className=" mx-auto mt-6 text-2xl font-bold">
          Редактирования профиля
        </h1>
        <div className="card-body items-center text-center mt-4">
          <label className="input input-bordered flex items-center gap-2 w-72 mb-3">
            <input
              type="text"
              className="grow"
              placeholder="Имя"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-72 mb-3">
            <input
              type="text"
              className="grow"
              placeholder="Фамилия"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-72 mb-3">
            <input
              type="number"
              className="grow"
              placeholder="Возраст"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-72 mb-3">
            <input
              type="text"
              className="grow"
              placeholder="Пол"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-72 mb-3">
            <input
              type="text"
              className="grow"
              placeholder="Ссылка на фото"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-72 mb-3">
            <input
              type="text"
              className="grow"
              placeholder="О себе"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-72 mb-3">
            <input
              type="text"
              className="grow"
              placeholder="Навыки"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </label>

          <div className="card-actions justify-end">
            {error && (
              <div className="badge badge-error gap-2 text-stone-300 mt-3 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-4 w-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                {error}
              </div>
            )}
            <button
              className="btn btn-primary mx-auto mt-6 w-52"
              onClick={saveProfile}
            >
              Применить
            </button>
          </div>
        </div>
      </div>
      <UserCard
        user={{ firstName, lastName, age, gender, photoUrl, about, skills }}
      />
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Профиль успешно сохранен!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
