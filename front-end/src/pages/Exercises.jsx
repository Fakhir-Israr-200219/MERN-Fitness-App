import React from 'react'
import { useState } from 'react'
import benchpress from '../assets/Exercises/bench_press.webp'
import flat_benchpress from '../assets/Exercises/flat_bench_press.jpg'
import Decline_Bench_Press from '../assets/Exercises/Decline_Bench_Press.jpg'
import Close_Grip_Bench_Press from '../assets/Exercises/Close_Grip_Bench_Press.jpg'
import push_up from '../assets/Exercises/push-up.jpg'
import incline_push_up from '../assets/Exercises/incline_push_up.jpg'
import decline_push_up from '../assets/Exercises/decline_push_up.jpg'
import diamond_push_up from '../assets/Exercises/diamond_push_up.jpg'
import standerd_pull_up from '../assets/Exercises/standerd_pull_up.jpg'
import narrow_grip_Chin_Up from '../assets/Exercises/narrow_grip_Chin-Up.png'
import shoulder_press from '../assets/Exercises/shoulder_press.gif'
import arnold_press from '../assets/Exercises/arnold_press.png'
import AnimatedLine from '../components/AnimatedLine'
import { RiAddFill } from "react-icons/ri";
import { useCreateExerciseMutation } from "../app/api/exercisesSclices";
import { useAddWorkoutMutation, useGetWorkoutsQuery } from "../app/api/workoutSclice";
import { IoClose } from "react-icons/io5";
import { useDeleteWorkoutMutation } from "../app/api/workoutSclice";

const Exercises = () => {
  const { data, error, isLoadingGet, refetch } = useGetWorkoutsQuery({ category: "exercises" });
  const [showModal, setShowModal] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState('');
  const [formData, setFormData] = useState({
    weight: '',
    reps: '',
    sets: '',
  });

  const [createExercise, { isLoading }] = useCreateExerciseMutation();

  const handleAddClick = (exerciseName) => {
    setSelectedExercise(exerciseName);
    setShowModal(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const submissionData = {
      exercise: selectedExercise,
      ...formData,
    };

    try {
      await createExercise(submissionData).unwrap();
      alert('Exercise added successfully!');
      setShowModal(false);
      setFormData({ weight: '', reps: '', sets: '' });
    } catch (error) {
      console.error('Error adding exercise:', error);
      alert(error?.data?.message || 'Something went wrong!');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //// working for the addd exercises
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [addExercieseModel, setAddExercises] = useState(false);
  const [category, setCategory] = useState('exercises');
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
      setAddExercises(false);
      setTitle(""); // Reset category
      setImage(null);
      refetch()
    } catch (error) {
      console.error("Failed to add exercise:", error);
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
          {error && <p>Error loading exercises.</p>}
          {data?.data?.length > 0 ? (
            data.data.map((exercise, index) => (
              <div
                key={index}
                className="card relative flex flex-col justify-between items-center border-2 border-black rounded-md w-40 pt-2 pb-4 m-2 mt-4"
              >
                {/* Close Icon in Top Right - Always Visible */}
                <IoClose
                  className="absolute top-2 right-1 text-gray-600 hover:text-red-500 cursor-pointer text-lg z-10 p-1 bg-white rounded-full"
                  onClick={() => handleRemove(exercise._id)} // Replace with your remove function
                />

                <div className="w-full text-center bg-black font-bold text-white">
                  <p className="text-sm">{exercise.title}</p>
                </div>

                <div className="image w-30 p-2 h-30 min-h-32">
                  <img src={"http://localhost:5000" + exercise.img} alt={exercise.name} />
                </div>

                <div
                  onClick={() => handleAddClick(exercise.title)}
                  className="cursor-pointer btn font-bold bg-[#ed563b] w-[80%] text-center rounded-xl"
                >
                  Add
                </div>
              </div>
            ))
          ) : (
            <p></p>
          )}



          <div className='row flex justify-center items-center' onClick={() => setAddExercises(true)}>
            <div className='card flex flex-col justify-between items-center border-2 border-black rounded-md w-40  pt-2 pb-4 mr-2 ml-2 mt-4'>
              <div className='w-[100%] text-center bg-black font-bold text-white pt-0 mb-3'>
                <p className='text-sm'>Add New Exercises</p>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pointer-events-none">

            <div className="relative bg-white w-80 p-6 rounded-xl shadow pointer-events-auto"  >
              <button
                className="absolute top-3 right-3 text-xl font-bold cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>

              <h2 className="text-lg font-semibold mb-4">Add Exercise Data</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block mb-1 font-medium">How Much Weight</label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}

                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 font-medium">How Many Ribs</label>
                  <input
                    type="text"
                    name="reps"
                    value={formData.reps}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 font-medium">How Many Sets</label>
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
                  className="bg-[#ed563b] text-white px-4 py-2 rounded hover:bg-[#e54427] w-[100%] m-auto cursor-pointer"
                // onClick={() => setShowModal(false)}
                >
                  FIT
                </button>
              </form>
            </div>
          </div>
        )}

        {addExercieseModel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pointer-events-none">
            <div className="relative bg-white w-80 p-6 rounded-xl shadow pointer-events-auto">
              <button
                className="absolute top-3 right-3 text-xl font-bold cursor-pointer"
                onClick={() => setAddExercises(false)}
              >
                ✕
              </button>

              <h2 className="text-lg font-semibold mb-4">Add New Exercise</h2>
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

export default Exercises