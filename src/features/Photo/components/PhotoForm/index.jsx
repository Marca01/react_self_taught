import React from "react";
import { FormGroup, Label, Input, Button, Spinner } from "reactstrap";
import Select from "react-select";
import PropTypes from "prop-types";
import { PHOTO_CATEGORY_OPTIONS } from "Constant/Global";
import Images from "Constant/Images";
import { Formik, Form, FastField } from "formik";
import InputField from "custom-field/InputField";
import SelectField from "custom-field/SelectField";
import RandomPhotoField from "custom-field/RandomPhotoField";
import * as Yup from "yup";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};
PhotoForm.defaultProps = {
  onSubmit: null,
};
function PhotoForm(props) {
  const { initialValues, isAddMode } = props;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required"),
    categoryId: Yup.number().required("This field is required").nullable(),
    // photo: Yup.string().required("This field is required"),
    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This field is required."),
      otherwise: Yup.string().notRequired(),
    }),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              // FastField props
              name="title"
              component={InputField}
              // InputField props
              label="Title"
              placeholder="Eg: Wow nature"
            />
            {/* <FormGroup>
              <Label for="titleId">Title</Label>
              <Input
                name="title"
                id="titleId"
                placeholder="Eg: Wow nature ..."
              />
            </FormGroup> */}
            <FastField
              // FastField props
              name="categoryId"
              component={SelectField}
              // InputField props
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            {/* <FormGroup>
              <Label for="categoryId">Category</Label>
              <Select
                id="categoryId"
                name="categoryId"
                placeholder="What's your photo category?"
                options={PHOTO_CATEGORY_OPTIONS}
              /> */}
            {/* <Input
                    id="categoryId"
                    name="categoryId"
                    type="select"
                    placeholder="What's your photo category?"
                    options={PHOTO_CATEGORY_OPTIONS}
                  /> */}
            {/* </FormGroup> */}
            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />
            {/* <FormGroup>
              <Label for="categoryId">Photo</Label>
              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img width="200px" src={Images.COLORFUL_BG} alt="colorfulBg" />
              </div>
            </FormGroup> */}

            <FormGroup>
              <Button type="submit" color={isAddMode ? "primary" : "danger"}>
                {isSubmitting && <Spinner size="sm" marginWidth="8px" />}
                {isAddMode ? "Add to album" : "Update your photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
