import "./Profile.css";

import { upload } from "../../utils/config";

// components
import Message from "../../components/Message";
import { Link } from 'react-router-dom';
import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs";

// hooks
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// redux 
import { getUserDetails } from "../../slices/userSlice";

const Profile = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const { user, loading } = useSelector((state) => state.user);
    const { user: userAuth } = useSelector((state) => state.auth);

    // photo upload
    const newPhotoForm = useRef();
    const editPhotoForm = useRef();

    // load user data 
    useEffect(() => {
        dispatch(getUserDetails(id));
    }, [dispatch, id]);

    const submitHandle = (e) => {
        e.preventDefault()
    }

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div id="profile">
            <div id="profile_header">
                {user.profileImage && (
                    <img src={`${upload}/users/${user.profileImage}`} alt={user.name} />
                )}
                <div className="profile_description">
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                </div>
            </div>
            {id === userAuth._id && (
                <>
                    <div className="new_photo" ref={newPhotoForm}>
                        <h3>Compartilhe algum momento seu:</h3>
                        <form onSubmit={submitHandle}>
                            <label>
                                <span>Título para foto:</span>
                                <input type="text" placeholder="Digite um título" />
                            </label>
                            <label>
                                <span>Imagem:</span>
                                <input type="file" />
                            </label>
                            <input type="submit" value="Compartilhar" />
                        </form>
                    </div>
                </>
            )}
        </div>
    )
}

export default Profile
