import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../assets/haircut 1.jpeg';
import InputText from './inputText';
import InputTextArea from './inputTextArea';
import Button from './button';
import axios from 'axios';
import InputFile from './inputFile';

const HairCutsList = ({ barberId, admin = true }) => {
      const [haircutsList, setHaircutsList] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const [newHaircut, setNewHaircut] = useState({ name: '', price: '', description: '' });
      const [isAddPopupOpen, setAddPopupOpen] = useState(false);
      const [isEditPopupOpen, setEditPopupOpen] = useState(false);
      const [editHaircut, setEditHaircut] = useState(null);
      const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
      const [haircutToDelete, setHaircutToDelete] = useState(null);
      const [imageUrl, setImageUrl] = useState('');





      const handleImageChange = (file) => {
        
            const formData = new FormData();
            formData.append('file', file);

            axios.post('http://localhost:8080/api/uploads/image', formData)
                  .then(response => {
                        if (response.data.status === 'success') {
                              setImageUrl(response.data.url);
                        } else {
                              console.error('Error uploading avatar:', response.data.message);
                        }
                  })
                  .catch(error => {
                        console.error('Error uploading avatar:', error);
                  });
      };
      useEffect(() => {
            const fetchHaircuts = async () => {
                  try {
                        const response = await axios.get(`http://localhost:8080/api/haircuts/by-barber-id?barberId=${barberId}`);
                        setHaircutsList(response.data.data);
                  } catch (error) {
                        setError(error.message);
                  } finally {
                        setLoading(false);
                  }
            };

            fetchHaircuts();
      }, [barberId]);

      const handleAddHaircut = async () => {
            try {
                  const response = await axios.post(`http://localhost:8080/api/haircuts?barberId=${barberId}`, { name: newHaircut.name, price: newHaircut.price, description: newHaircut.description, imageUrl });
                  setHaircutsList([...haircutsList, response.data.data]);
                  setNewHaircut({ name: '', price: '', description: '' });
                  setAddPopupOpen(false);
                  setImageUrl('');
            } catch (error) {
                  setError(error.message);
            }
      };

      const handleDeleteHaircut = async () => {
            try {
                  await axios.delete(`http://localhost:8080/api/haircuts?id=${haircutToDelete}`);
                  setHaircutsList(haircutsList.filter(haircut => haircut.id !== haircutToDelete));
                  setDeleteDialogOpen(false);
            } catch (error) {
                  setError(error.message);
            }
      };

      const handleEditHaircut = async () => {
            if (!editHaircut) return;
            try {
                  const response = await axios.put(`http://localhost:8080/api/haircuts?id=${editHaircut.id}`, editHaircut);
                  setHaircutsList(haircutsList.map(haircut => (haircut.id === editHaircut.id ? response.data.data : haircut)));
                  setEditHaircut(null);
                  setEditPopupOpen(false);
            } catch (error) {
                  setError(error.message);
            }
      };

      if (loading) {
            return <div>Loading...</div>;
      }

      if (error) {
            return <div>Error: {error}</div>;
      }
      return (
            <div className="rubik justify-center gap-4 p-4 bg-zinc-900 border border-zinc-900 shadow-lg rounded-2xl">
                  <h2 className="text-center text-white jacquard text-3xl">Haircuts</h2>

                  <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                              {haircutsList.length === 0 ? (
                                    <div className='w-full p-4 text-center text-white jacquard text-2xl'>There is no haircuts</div>) : (
                                    haircutsList.map((haircut) => (
                                          <li key={haircut.id} className="py-3 sm:py-4">
                                                <div className="flex items-center space-x-4">
                                                      <div className="flex-shrink-0">
                                                            <img className="size-24 rounded-md" src={haircut.imageUrl || defaultImage} alt={`${haircut.name} image`} />
                                                      </div>
                                                      <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-white truncate dark:text-white">
                                                                  {haircut.name}
                                                            </p>
                                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                  {haircut.description}
                                                            </p>
                                                      </div>
                                                      <div className="inline-flex items-center text-base font-semibold text-white dark:text-white">
                                                            {haircut.price}
                                                      </div>
                                                      {admin && (
                                                            <>
                                                                  <button
                                                                        className="inline-flex items-center text-base font-semibold text-white dark:text-white"
                                                                        onClick={() => {
                                                                              setEditHaircut(haircut);
                                                                              setEditPopupOpen(true);
                                                                              setAddPopupOpen(false);
                                                                              setDeleteDialogOpen(false);
                                                                        }}
                                                                  >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                                        </svg>

                                                                  </button>
                                                                  <button
                                                                        className="inline-flex items-center text-base font-semibold text-rose-500 dark:text-white"
                                                                        onClick={() => {
                                                                              setHaircutToDelete(haircut.id);
                                                                              setDeleteDialogOpen(true);
                                                                              setEditPopupOpen(false);
                                                                              setAddPopupOpen(false);

                                                                        }}
                                                                  >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                                        </svg>


                                                                  </button>
                                                            </>
                                                      )}
                                                </div>
                                          </li>
                                    )))}
                              {admin && !isDeleteDialogOpen && !isEditPopupOpen && !isAddPopupOpen && (
                                    <li className="py-3 sm:py-4">
                                          <div className="flex justify-center space-x-4 w-full">
                                                <button
                                                      className="flex p-4 rounded-md bg-white w-full bg-opacity-30 justify-center items-center text-base font-semibold text-white dark:text-white"
                                                      onClick={() => { setAddPopupOpen(true); setEditPopupOpen(false); setDeleteDialogOpen(false); }}
                                                >
                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                      </svg>


                                                </button>
                                          </div>
                                    </li>
                              )}
                        </ul>
                  </div>

                  {isAddPopupOpen && (
                        <div className="popup">
                              <div className="popup-inner">
                                    <h3 className="text-center text-white jacquard text-2xl">Add New Haircut</h3>
                                    <div className="flex content-center items-center justify-center w-full">
                                          <img className="size-24 rounded-md" src={imageUrl || defaultImage} alt="serv" />
                                    </div>
                                    <InputFile label="Profile Picture" onFileChange={handleImageChange} />
                                    <InputText
                                          error={false}
                                          disable={false}
                                          label="Name"
                                          placeHolder="Name"
                                          onChange={(e) => setNewHaircut({ ...newHaircut, name: e.target.value })}
                                          value={newHaircut.name}
                                    />


                                    <div style={{ height: "20px" }}></div>
                                    <InputTextArea
                                          error={false}
                                          disable={false}
                                          label="Description"
                                          placeHolder="Description"
                                          onChange={(e) => setNewHaircut({ ...newHaircut, description: e.target.value })}
                                          value={newHaircut.description}
                                    />                                <div className='flex mt-4'>
                                          <Button buttonText="Add" type="submit" fullWidth={false} onClick={handleAddHaircut} />
                                          <div style={{ width: "5px" }}></div>
                                          <Button buttonText="Cancel" type="submit" fullWidth={false} onClick={() => setAddPopupOpen(false)} color="bg-white text-black hover:bg-gray-200 focus:ring-gray-200" />
                                    </div>
                              </div>
                        </div>
                  )}

                  {isEditPopupOpen && (
                        <div className="popup">
                              <div className="popup-inner">
                                    <h3 className="text-center text-white jacquard text-2xl">Edit Haircut</h3>
                                    {editHaircut && (
                                          <>
                                                <InputText
                                                      error={false}
                                                      disable={false}
                                                      label="Name"
                                                      placeHolder="Name"
                                                      value={editHaircut.name}
                                                      onChange={(e) => setEditHaircut({ ...editHaircut, name: e.target.value })}
                                                />

                                                <div style={{ height: "20px" }}></div>
                                                <InputTextArea
                                                      error={false}
                                                      disable={false}
                                                      label="Description"
                                                      placeHolder="Description"
                                                      value={editHaircut.description}
                                                      onChange={(e) => setEditHaircut({ ...editHaircut, description: e.target.value })}
                                                />

                                                <div className='flex mt-4'>
                                                      <Button buttonText="Edit" type="submit" fullWidth={false} onClick={handleEditHaircut} />
                                                      <div style={{ width: "5px" }}></div>
                                                      <Button buttonText="Cancel" type="submit" fullWidth={false} onClick={() => setEditPopupOpen(false)} color="bg-white text-black hover:bg-gray-200 focus:ring-gray-200" />
                                                </div>
                                          </>
                                    )}
                              </div>
                        </div>
                  )}

                  {isDeleteDialogOpen && (
                        <div className="dialog">
                              <div className="dialog-inner">
                                    <h3 className="text-center text-white jacquard text-2xl">Are you sure you want to delete this haircut?</h3>
                                    <div className='flex mt-4'>
                                          <Button buttonText="Yes" type="submit" fullWidth={false} onClick={handleDeleteHaircut} />
                                          <div style={{ width: "5px" }}></div>
                                          <Button buttonText="No" type="submit" fullWidth={false} onClick={() => setDeleteDialogOpen(false)} color="bg-white text-black hover:bg-gray-200 focus:ring-gray-200" />
                                    </div>

                              </div>
                        </div>
                  )}
            </div>
      );
};

HairCutsList.propTypes = {
      barberId: PropTypes.string.isRequired,
      admin: PropTypes.bool,
};

export default HairCutsList;
