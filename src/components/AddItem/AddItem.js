import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://hidden-escarpment-52790.herokuapp.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/manageproducts");
      });
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-info fs-1 text-bold">Add Products</h1>
      <form
        className="d-flex flex-column w-50 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("productName", { required: true })}
          placeholder="Enter Item Name"
        />
        <input
          {...register("img", { required: true })}
          placeholder="PhotoUrl"
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
          placeholder="Enter Price"
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
