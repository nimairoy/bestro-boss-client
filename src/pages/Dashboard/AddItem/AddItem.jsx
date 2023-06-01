import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_KEY;

const AddItem = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if(imageResponse.success){
                    const imgURL = imageResponse.data.display_url;
                    const {name, price, category, image} = data;
                    const newItem = {name, price: parseFloat(price), category, image}
                    newItem.image = imgURL
                    console.log( newItem)
                }
            })
    };

    return (
        <div className='w-4/5 pb-24'>
            <SectionTitle subHeading="What's New?" heading='Add an New Item'></SectionTitle>
            <div className="bg-gray-100 p-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Recipe Name" className="input rounded-none  w-full" />
                        {errors.name?.type === 'required' && <p className='text-red-400' role="alert">Recipe name is required</p>}
                    </div>

                    <div className="grid grid-cols-2 mt-6 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <select {...register("category", { required: true })} className='py-3 px-2 w-full max-w-xs'>
                                <option value="pizza">Pizza</option>
                                <option value="salad">Salad</option>
                                <option value="soup">Soup</option>
                                <option value="drink">Drink</option>
                                <option value="dessert">Dessert</option>
                            </select>
                            {errors.category?.type === 'required' && <p className='text-red-400' role="alert">Category is required</p>}

                        </div>

                        <div className="form-control w-full ">
                            <label className="label ml-5">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="text" {...register("price", { required: true })} placeholder="Price" className="input ml-auto rounded-none w-full max-w-xs" />
                            {errors.price?.type === 'required' && <p className='text-red-400' role="alert">Price is required</p>}
                        </div>
                    </div>

                    <div className="form-control mt-6 w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Detail*</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea w-full rounded-none" rows='5' placeholder="Recipe Detail"></textarea>
                        {errors.recipe?.type === 'required' && <p className='text-red-400' role="alert">Recipe Details is required</p>}
                    </div>
                    <div className="form-control mt-6 w-full ">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                        {errors.image?.type === 'required' && <p className='text-red-400' role="alert">Recipe Picture is required</p>}
                    </div>
                    <input className='mt-6 btn btn-warning' type="submit" value='Add Item' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;