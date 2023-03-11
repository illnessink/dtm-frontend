import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

  function EditProfile(props) {
    const { id } = useParams();
  const profiles = props.profiles;
  const profile = profiles ? profiles.find((p) => p.uid === id) : null;
    
    const [editProfile, setEditProfile] = useState({
      displayName: '',
      age: '',
      location: '',
      gender: '',
      interestedIn: '',
      bio: '',
      funFact: '',
      hobbies: '',
      photo: '',
      uid: id,
    });

    // handleChange
    const handleChange = (event) => {
      setEditProfile((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    };
  
    // handleSubmit
    const handleSubmit = (event) => {
      event.preventDefault();
      props.updateProfile(editProfile, profile.uid);
      setEditProfile({
          displayName: props.user.displayName,
          age: "",
          location: "",
          gender: "",
          interestedIn: "",
          bio: "",
          funFact: "",
          hobbies: [],
          photo: "",
          uid: props.user.uid,
      });
    };
  
    const loaded = () => {
      // setEditProfile({
      //   displayName: profile.displayName,
      //   age: profile.age,
      //   location: profile.location,
      //   gender: profile.gender,
      //   interestedIn: profile.interestedIn,
      //   bio: profile.bio,
      //   funFact: profile.funFact,
      //   hobbies: profile.hobbies,
      //   photo: profile.photo,
      //   uid: id,
      // });

      return (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={editProfile.displayName}
              name="displayName"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editProfile.photo}
              name="photo"
              placeholder="photo URL"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editProfile.age}
              name="age"
              placeholder="age"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editProfile.location}
              name="location"
              placeholder="location"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editProfile.gender}
              name="gender"
              placeholder="gender"
              onChange={handleChange}
            />
            <input
              type="text"
              value={editProfile.interestedIn}
              name="interestedIn"
              placeholder="Looking to meet..."
              onChange={handleChange}
            />
            <input
              type="text"
              value={editProfile.bio}
              name="bio"
              placeholder="A little about me..."
              onChange={handleChange}
            />
            <input
              type="text"
              value={editProfile.funFact}
              name="funFact"
              placeholder="Fun fact about me..."
              
            />
            <input
              type="text"
              value={editProfile.hobbies}
              name="hobbies"
              placeholder="please separate hobbies by a ',' "
              onChange={handleChange}
            />
            <input type="submit" value="Edit Profile" />
          </form>
        </div>
      );
    }

    const loading = () => {
      return <h1>Loading...</h1>
    }

    return (
      <>
      { profile ? loaded() : loading() }
      </>
    )
  }
  export default EditProfile;