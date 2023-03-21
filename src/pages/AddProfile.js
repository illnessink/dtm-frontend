import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddProfile(props) {
  const navigate = useNavigate();
  const [newProfile, setNewProfile] = useState({
    displayName: props.user.displayName,
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

  // handleChange for form
  const handleChange = (event) => {
    setNewProfile((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createProfile(newProfile);
    setNewProfile({
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
    navigate(`/quiz`)
  };

  // function handleRemoveImg(imgObj){

  // }

  const loaded = () => {
    function handleOpenWidget(){

      const myWidget = window.cloudinary.createUploadWidget(
        {
        cloudName: 'dwr8ggqzr',
        uploadPreset: 'carlhuv9',
      },
       (error, result) => {
          if (!error && result && result.event === "success") {
            // setImages((prev)=>[...prev,{url:result.info.url, public_id: result.info.public_id}])
            setNewProfile((formData) =>({...formData, photo: result.info.secure_url}));
          }
        }
      );
      myWidget.open();
    }

    return (
      <div className="container">
        <button id="upload-widget" className='cloudinary-button' onClick={()=>handleOpenWidget()}>
            Upload Picture
          </button>
         <Form onSubmit={handleSubmit}>


          <div className='images-preview-container'>
          <div className='image-preview'>
            <img src={newProfile.photo} alt={props.user.displayName}/>
            {/* {imageToRemove !=image.public_id && <i className="fa fa-times close-icon" onClick={()=> handleRemoveImg()}></i>} */}
            </div>

        </div>

        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={newProfile.displayName}
            name="displayName"
            placeholder="name"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age:</Form.Label>
          <Form.Control
            type="text"
            value={newProfile.age}
            name="age"
            placeholder="age"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Location:</Form.Label>
          <Form.Control
          type="text"
          value={newProfile.location}
          name="location"
          placeholder="location"
          onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gender:</Form.Label>
          <Form.Control 
            type="text"
            value={newProfile.gender}
            name="gender"
            placeholder="gender"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Looking to meet...</Form.Label>
          <Form.Control 
          type="text"
          value={newProfile.interestedIn}
          name="interestedIn"
          placeholder="Looking to meet..."
          onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>A little bit about me...</Form.Label>
          <Form.Control 
          type="text"
          value={newProfile.bio}
          name="bio"
          placeholder="A little about me..."
          onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Fun Fact about Me...</Form.Label>
          <Form.Control 
          type="text"
          value={newProfile.funFact}
          name="funFact"
          placeholder="Fun fact about me..."
          onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Hobbies...</Form.Label>
          <Form.Control 
            type="text"
            value={newProfile.hobbies}
            name="hobbies"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Profile
        </Button>
        </Form>

      </div>
    );
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <>
    { props.user ? loaded() : loading() }
    </>
  )

}

export default AddProfile;
