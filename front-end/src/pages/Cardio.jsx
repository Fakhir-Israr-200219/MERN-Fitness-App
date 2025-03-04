import React from 'react'
import { useState } from 'react'
import benchpress from '../assets/Cardio/brisk_walk_running.gif'
import flat_benchpress from '../assets/Cardio/Briskly-Walking.gif'
import Decline_Bench_Press from '../assets/Cardio/burpees.gif'
import Close_Grip_Bench_Press from '../assets/Cardio/elliptical-muscles.gif'
import push_up from '../assets/Cardio/HIGH_KNEE_SKIP.gif'
import incline_push_up from '../assets/Cardio/interval_running.jpeg'
import decline_push_up from '../assets/Cardio/jumping jack.png'
import diamond_push_up from '../assets/Cardio/Steady_state_rowing.jpg'
import standerd_pull_up from '../assets/Cardio/Steady_state_rowing.jpg'
import narrow_grip_Chin_Up from '../assets/Cardio/steady_state_running.webp'
import AnimatedLine from '../components/AnimatedLine'
import { RiAddFill } from "react-icons/ri";
import { useAddCardioMutation } from "../app/api/cardioSclice";
import { useAddWorkoutMutation, useGetWorkoutsQuery, useDeleteWorkoutMutation } from "../app/api/workoutSclice";
import { IoClose } from "react-icons/io5";

const Cardio = () => {
  const { data, workoutError, isLoadingGet, refetch } = useGetWorkoutsQuery({ category: "cardio" });
  const [showModal, setShowModal] = useState(false);
  const [cardioName, setCardiName] = useState('')
  const [addCardioModal, setAddCardioModal] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState('');


  const [formData, setFormData] = useState({
    duration: "",
    sets: "",
  });

  const [addCardio, { isLoading, error }] = useAddCardioMutation(); // Mutation hook

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddClick = (cardioname) => {
    setShowModal(true)
    setSelectedExercise(cardioname)
    console.log(selectedExercise)//this will sucesfuly add the name
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        exercise: selectedExercise, // Add cardio name
      };

      await addCardio(dataToSend).unwrap(); // Send data to API
      setShowModal(false); // Close modal on success
      setFormData({ duration: "", sets: "" }); // Reset form
      setSelectedExercise(""); // Reset selected exercise
    } catch (err) {
      console.error("Failed to add cardio:", err);
    }
  };
  //   working for add new cardio 
  const [title, setTitle] = useState("");
  const [addCardioModel, setAddCardio] = useState(false);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('cardio');
  const [addWorkout, { isLoadingcardio }] = useAddWorkoutMutation();
  const handleFormSubmitExercises = async (e) => {
    e.preventDefault();

    if (!title || !category || !image) {
      alert("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category); // Append category
    formData.append("img", image);

    try {
      await addWorkout(formData).unwrap(); // Call API to add workout
      alert("Exercise added successfully!");
      setAddCardio(false);
      setTitle(""); // Reset category
      setImage(null);
      refetch()
    } catch (error) {
      console.log(error)
      alert("Error adding exercise.");
    }
  };
  const exercises = [
    { name: "Incline Bench Press", img: benchpress },
    { name: "Flat Bench Press", img: flat_benchpress },
    { name: "Decline Bench Press", img: Decline_Bench_Press },
    { name: "Close Grip Bench Press", img: Close_Grip_Bench_Press },
    { name: "Push Up", img: push_up },
    { name: "Incline Push Up", img: incline_push_up },
    { name: "Decline Push Up", img: decline_push_up },
    { name: "Diamond Push Up", img: diamond_push_up },
    { name: "Standard Pull Up", img: standerd_pull_up },
    { name: "Narrow Grip Chin Up", img: narrow_grip_Chin_Up },
  ];
  const [deleteWorkout] = useDeleteWorkoutMutation();

  const handleRemove = async (id) => {
    try {
      await deleteWorkout(id).unwrap(); // Call the API & remove workout
      refetch()
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };
  return (
    <div>
      <AnimatedLine />
      <div className='page-container p-4 m-2 h-[90vh] overflow-scroll flex flex-col justify-between items-center md:ml-20'>

        <div className="flex flex-wrap justify-center">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className="card flex flex-col justify-between items-center border-2 border-black rounded-md w-40 pt-2 pb-4 m-2 mt-4"
            >
              <div className="w-full text-center bg-black font-bold text-white">
                <p className="text-sm">{exercise.name}</p>
              </div>
              <div className="image w-30 p-2 h-30 min-h-32">
                <img src={exercise.img} alt={exercise.name} />
              </div>
              <div
                onClick={() => handleAddClick(exercise.name)}
                className="cursor-pointer btn font-bold bg-[#ed563b] w-[80%] text-center rounded-xl"
              >
                Add
              </div>
            </div>
          ))}

          {/*this data is come from databse*/}
          {isLoadingGet && <p>Loading...</p>}
          {workoutError && <p>Error loading exercises.</p>}
          {data?.data?.length > 0 ? (
            data.data.map((exercise, index) => (
              <div
                key={index}
                className="card relative flex flex-col justify-between items-center border-2 border-black rounded-md w-40 pt-2 pb-4 m-2 mt-4"
              >
                {/* Close Icon in Top Right - Always Visible */}
                <IoClose
                  className="absolute top-1 right-1 text-gray-600 hover:text-red-500 cursor-pointer text-lg z-10 p-1 bg-white rounded-full"
                  onClick={() => handleRemove(exercise._id)} // Replace with your remove function
                />

                <div className="w-full text-center bg-black font-bold text-white">
                  <p className="text-sm">{exercise.name}</p>
                </div>

                <div className="image w-30 p-2 h-30 min-h-32">
                  <img src={"http://localhost:5000" + exercise.img} alt={exercise.name} />
                </div>

                <div
                  onClick={() => handleAddClick(exercise.name)}
                  className="cursor-pointer btn font-bold bg-[#ed563b] w-[80%] text-center rounded-xl"
                >
                  Add
                </div>
              </div>
            ))
          ) : (
            <p></p>
          )}
          <div className='row flex justify-center items-center' onClick={() => setAddCardio(true)}>
            <div className='card flex flex-col justify-between items-center border-2 border-black rounded-md w-40  pt-2 pb-4 mr-2 ml-2 mt-4'>
              <div className='w-[100%] text-center bg-black font-bold text-white pt-0 mb-3'>
                <p className='text-sm'>Add New Cardio</p>
              </div>
              <div className='image w-30 h-30 min-h-32 text-7xl text-center flex justify-around items-center border-2 border-[#ed563b] rounded-full'>
                <RiAddFill />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="p-4">
        {/* <button
          onClick={() => setShowModal(true)}
          className="bg-[#ed563b] text-white px-4 py-2 rounded hover:bg-[#e54427]"
        >
          Open Modal
        </button> */}

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white w-80 p-6 rounded-xl shadow">
              <button
                className="absolute top-3 right-3 text-xl font-bold"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>

              <h2 className="text-lg font-semibold mb-4">Add Cardio</h2>

              {error && <p className="text-red-500">Error: {error.data?.message || "Something went wrong"}</p>}

              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block mb-1 font-medium">DURATION</label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 font-medium">Sets</label>
                  <input
                    type="text"
                    name="sets"
                    value={formData.sets}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#ed563b] text-white px-4 py-2 rounded hover:bg-[#e54427] w-[100%] cursor-pointer"
                >
                  {isLoading ? "Submitting..." : "FIT"}
                </button>
              </form>
            </div>
          </div>
        )}

        {addCardioModel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pointer-events-none">
            <div className="relative bg-white w-80 p-6 rounded-xl shadow pointer-events-auto">
              <button
                className="absolute top-3 right-3 text-xl font-bold cursor-pointer"
                onClick={() => setAddCardio(false)}
              >
                ✕
              </button>

              <h2 className="text-lg font-semibold mb-4">Add New Cardio Workout</h2>
              <form onSubmit={handleFormSubmitExercises} encType="multipart/form-data">
                <div className="mb-4">
                  <label className="block mb-1 font-medium">Title Of Exercise</label>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 font-medium">Image Of Exercise</label>
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#ed563b] text-white px-4 py-2 rounded hover:bg-[#e54427] w-[100%] m-auto cursor-pointer"
                  disabled={isLoading}
                >
                  {isLoading ? "Adding..." : "ADD NEW EXERCISES"}
                </button>
              </form>
            </div>
          </div>
        )}


      </div>

    </div>
  )
}

export default Cardio