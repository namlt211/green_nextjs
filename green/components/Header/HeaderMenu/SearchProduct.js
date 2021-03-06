import { useForm } from "react-hook-form";
import styled from "styled-components";

const FormSearch = styled.form`
  align-items: center !important;
  overflow: hidden;
  position: relative;
  height: 40px;
  width: 100%;
  border-radius: 50rem;
  display: flex;
  outline: none;
  border: none;
  background-color: #eee;
`;
const InputSearch = styled.input`
  border: none;
  outline: none;
  padding-left: 20px;
  width: 100%;
  font-size: 15px;
  background-color: #eee;
  &:input:focus {
    border:none
    outline: none;
  }
`;

const SearchProduct = () => {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <FormSearch onSubmit={handleSubmit(onSubmit)}>
      <InputSearch
        placeholder="Tìm kiếm sản phẩm ..."
        {...register("keySearch")}
      />
      <i className="fa-solid fa-magnifying-glass form_input_search"></i>
    </FormSearch>
  );
};

export default SearchProduct;
