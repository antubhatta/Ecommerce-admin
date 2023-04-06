import React from "react";
import CustomInput from "../components/CustomInput";

const AddColor = () => {
  return (
    <>
      <div>
        <h3 className="mb-4 title">Add Color</h3>
        <div className="py-3">
          <form action="">
            <CustomInput type="color" label="Enter Color" />
            <button
              className="btn btn-success border-0 rounded-3 my-3"
              type="submit"
            >
              Add Color
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddColor;
