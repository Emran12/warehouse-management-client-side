import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/products", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-info fs-1 text-bold">Add Products</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("productName")} placeholder="Enter Item Name" />
        <input
          {...register("img", { required: true })}
          placeholder="photoUrl"
        />
        {errors.photoUrl && <p>photoUrl is required.</p>}
        <input
          {...register("description", { required: true })}
          placeholder="Description"
        />
        <input
          {...register("supplierName", { required: true })}
          placeholder="Supplier Name"
        />
        <input
          {...register("price", { pattern: /\d+/ })}
          placeholder="Ener Price"
        />
        {errors.age && <p>Please enter number for price.</p>}
        <input
          {...register("quantity", { pattern: /\d+/ })}
          placeholder="Enter Quantity"
        />
        {errors.age && <p>Please enter number for quantity.</p>}
        <input type="submit" value={`add item`} />
      </form>
    </div>
  );
};

export default AddItem;
