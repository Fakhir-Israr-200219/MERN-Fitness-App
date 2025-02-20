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

const Exercises = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState('');

  const [formData, setFormData] = useState({
    weight: '',
    reps: '',
    sets: ''
  });

  const handleAddClick = (exerciseName) => {
    setSelectedExercise(exerciseName);
    setShowModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create a new object that includes the exercise name along with form data
    const submissionData = {
      exercise: selectedExercise,
      ...formData,
    };

    console.log('Submission Data:', submissionData);

    // Reset the form and close the modal
    setFormData({ weight: '', reps: '', sets: '' });
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <div>
      <AnimatedLine />

      <div className='page-container p-4 m-2 h-[90vh] overflow-scroll flex flex-col justify-between items-center'>

        <div className='row flex justify-center items-center'>
          <div className='card flex flex-col justify-between items-center border-2 border-black rounded-md w-40  pt-2 pb-4 mr-2 ml-2 mt-4'>
            <div className='w-[100%] text-center bg-black font-bold text-white pt-0'>
              <p className='text-sm'>Incline Bench Press</p>
            </div>
            <div className='image w-30 p-2 h-30 min-h-32'>
              <img src={benchpress} alt="" />
            </div>
            <div onClick={() => handleAddClick("Incline Bench Press")} className='cursor-pointer btn font-bold bg-[#ed563b] w-[80%] text-center rounded-xl'>
              Add
            </div>

          </div>
          <div className='card flex flex-col justify-between items-center border-2 border-black rounded-md w-40  pt-2 pb-4 mr-2 ml-2 mt-4'>
            <div className='w-[100%] text-center bg-black font-bold text-white pt-0'>
              <p className='text-sm'>Flate Bench Press</p>
            </div>
            <div className='image w-30 p-2  h-30 min-h-32'>
              <img src={flat_benchpress} alt="" />
            </div>
            <div onClick={() => handleAddClick("Flate Bench Press")} className='cursor-pointer  btn font-bold bg-[#ed563b] w-[80%]  text-center rounded-xl'>
              Add
            </div>
          </div>
        </div>

        <div className='row flex justify-center items-center'>
          <div className='card flex flex-col justify-between items-center border-2 border-black rounded-md w-40  pt-2 pb-4 mr-2 ml-2 mt-4'>
            <div className='w-[100%] text-center bg-black font-bold text-white pt-0'>
              <p className='text-sm'>Decline Bench Press</p>
            </div>
            <div className='image w-30 p-2 h-30 min-h-32'>
              <img src={Decline_Bench_Press} alt="" />
            </div>
            <div onClick={() => handleAddClick("Decline Bench Press")} className='cursor-pointer  btn font-bold bg-[#ed563b] w-[80%]  text-center rounded-xl'>
              Add
            </div>
          </div>
          <div className='card flex flex-col justify-between items-center border-2 border-black rounded-md w-40  pt-2 pb-4 mr-2 ml-2 mt-4'>
            <div className='w-[100%] text-center bg-black font-bold text-white pt-0'>
              <p className='text-sm'>Close Grip Bench Press</p>
            </div>
            <div className='image w-30 p-2  h-30 min-h-32'>
              <img src={Close_Grip_Bench_Press} alt="" />
            </div>
            <div onClick={() => handleAddClick("Close Grip Bench Press")} className='cursor-pointer  btn font-bold bg-[#ed563b] w-[80%]  text-center rounded-xl'>
              Add
            </div>
          </div>
        </div>

        <div className='row flex justify-center items-center'>
          <div className='card flex flex-col justify-between items-center border-2 border-black rounded-md w-40  pt-2 pb-4 mr-2 ml-2 mt-4'>
            <div className='w-[100%] text-center bg-black font-bold text-white pt-0'>
              <p className='text-sm'>Push Up</p>
            </div>
            <div className='image w-30 p-2 h-30 min-h-32'>
              <img src={push_up} alt="" />
            </div>
            <div onClick={() => handleAddClick("Push Up")} className='cursor-pointer  btn font-bold bg-[#ed563b] w-[80%]  text-center rounded-xl'>
              Add
            </div>
          </div>
          <div className='card flex flex-col justify-between items-center border-2 border-black rounded-md w-40  pt-2 pb-4 mr-2 ml-2 mt-4'>
            <div className='w-[100%] text-center bg-black font-bold text-white pt-0'>
              <p className='text-sm'>Incline Push Up</p>
            </div>
            <div className='image w-30 p-2  h-30 min-h-32'>
              <img src={incline_push_up} alt="" />
            </div>
            <div onClick={() => handleAddClick("Incline Push Up")} className='cursor-pointer  btn font-bold bg-[#ed563b] w-[80%]  text-center rounded-xl'>
              Add
            </div>
          </div>
        </div>

        <div className='row flex justify-center items-center'>
          <div className='card flex flex-col justify-between items-center border-2 border-black rounded-md w-40  pt-2 pb-4 mr-2 ml-2 mt-4'>
            <div className='w-[100%] text-center bg-black font-bold text-white pt-0'>
              <p className='text-sm'>Decline Push Up</p>
            </div>
            <div className='image w-30 p-2 h-30 min-h-32'>
              <img src={decline_push_up} alt="" />
            </div>
            <div onClick={() => handleAddClick("Decline Push Up")} className='cursor-pointer  btn font-bold bg-[#ed563b] w-[80%]  text-center rounded-xl'>
              Add
            </div>
          </div>
          <div className='card flex flex-col justify-between items-center border-2 border-black rounded-md w-40  pt-2 pb-4 mr-2 ml-2 mt-4'>
            <div className='w-[100%] text-center bg-black font-bold text-white pt-0'>
              <p className='text-sm'>Diamond Push Up</p>
            </div>
            <div className='image w-30 p-2  h-30 min-h-32'>
              <img src={diamond_push_up} alt="" />
            </div>
            <div onClick={() => handleAddClick("Diamond Push Up")} className='cursor-pointer  btn font-bold bg-[#ed563b] w-[80%]  text-center rounded-xl'>
              Add
            </div>
          </div>
        </div>



        <div className='row flex justify-center items-center'>
          <div className='card flex flex-col justify-between items-center border-2 border-black rounded-md w-40  pt-2 pb-4 mr-2 ml-2 mt-4'>
            <div className='w-[100%] text-center bg-black font-bold text-white pt-0'>
              <p className='text-sm'>Standerd Pull Up</p>
            </div>
            <div className='image w-30 p-2 h-30 min-h-32'>
              <img src={standerd_pull_up} alt="" />
            </div>
            <div onClick={() => handleAddClick("Standerd Pull Up")} className='cursor-pointer  btn font-bold bg-[#ed563b] w-[80%]  text-center rounded-xl'>
              Add
            </div>
          </div>
          <div className='card flex flex-col justify-between items-center border-2 border-black rounded-md w-40  pt-2 pb-4 mr-2 ml-2 mt-4'>
            <div className='w-[100%] text-center bg-black font-bold text-white pt-0'>
              <p className='text-sm'>Narrow Grip Chin Up</p>
            </div>
            <div className='image w-30 p-2  h-30 min-h-32'>
              <img src={narrow_grip_Chin_Up} alt="" />
            </div>
            <div onClick={() => handleAddClick("Narrow Grip Chin Up")} className='cursor-pointer  btn font-bold bg-[#ed563b] w-[80%]  text-center rounded-xl'>
              Add
            </div>
          </div>
        </div>

        <div className='row flex justify-center items-center'>
          <div className='card flex flex-col justify-between items-center border-2 border-black rounded-md w-40  pt-2 pb-4 mr-2 ml-2 mt-4'>
            <div className='w-[100%] text-center bg-black font-bold text-white pt-0'>
              <p className='text-sm'>Shoulder Press</p>
            </div>
            <div className='image w-30 p-2 h-30 min-h-32'>
              <img src={shoulder_press} alt="" />
            </div>
            <div onClick={() => handleAddClick("Shoulder Press")} className='cursor-pointer  btn font-bold bg-[#ed563b] w-[80%]  text-center rounded-xl'>
              Add
            </div>
          </div>
          <div className='card flex flex-col justify-between items-center border-2 border-black rounded-md w-40  pt-2 pb-4 mr-2 ml-2 mt-4'>
            <div className='w-[100%] text-center bg-black font-bold text-white pt-0'>
              <p className='text-sm'>Arnold Press</p>
            </div>
            <div className='image w-30 p-2  h-30 min-h-32'>
              <img src={arnold_press} alt="" />
            </div>
            <div onClick={() => handleAddClick("Arnold Press")} className='cursor-pointer  btn font-bold bg-[#ed563b] w-[80%]  text-center rounded-xl'>
              Add
            </div>
          </div>
        </div>

      </div>


      <div className="p-4">
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#ed563b] text-white px-4 py-2 rounded hover:bg-[#e54427]"
        >
          Open Modal
        </button>

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
      </div>

    </div>
  )
}

export default Exercises