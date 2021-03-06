import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://guarded-springs-98889.herokuapp.com/services', data)
            // axios.post('http://localhost:5000/services', data)
            .then((res) => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }
            })
            .catch((err) => {
                console.log(err)
            })
    };

    return (
        <div className="add-service">
            <h2>Please Add A service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea {...register("description")} placeholder="description " />
                <input type="number" {...register("price",)} placeholder="price" />
                <input {...register("img")} placeholder="image URL" />
                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quas magnam nesciunt odio deserunt ad aperiam id vero cupiditate optio!</p> */}
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;