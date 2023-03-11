import { useState } from "react";

  function EditProfile(props) {
    
    const [editProfile, setEditProfile] = useState({
      displayName: "",
      age: "",
      location: "",
      gender: "",
      interestedIn: "",
      bio: "",
      funFact: "",
      hobbies: [],
      photo: "",
      uid: "",
    });
  
    // handleSubmit
    const handleSubmit = (event) => {
      event.preventDefault();
      props.editProfile(editProfile);
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
  
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editProfile.displayName}
            name="displayName"
            
          />
          <input
            type="text"
            value={editProfile.photo}
            name="photo"
            placeholder="photo URL"
            
          />
          <input
            type="text"
            value={editProfile.age}
            name="age"
            placeholder="age"
            
          />
          <input
            type="text"
            value={editProfile.location}
            name="location"
            placeholder="location"
            
          />
          <input
            type="text"
            value={editProfile.gender}
            name="gender"
            placeholder="gender"
            
          />
          <input
            type="text"
            value={editProfile.interestedIn}
            name="interestedIn"
            placeholder="Looking to meet..."
            
          />
          <input
            type="text"
            value={editProfile.bio}
            name="bio"
            placeholder="A little about me..."
            
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
            
          />
          <input type="submit" value="Edit Profile" />
        </form>
      </div>
    );
  }
  export default EditProfile;