import { Formik, Form, Field } from "formik";


export default function SearchForm({onSearch}) {
    return (
        <Formik initialValues={{ query: "" }} onSubmit={(values, actions) => {
            onSearch(values.query);
            actions.resetForm();
        }}>
            <Form>
                <Field name="query"></Field>
                <button type="submit">Search</button>
            </Form>
        </Formik>
    );
}