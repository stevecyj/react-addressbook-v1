import React from 'react'
import { Formik } from 'formik'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
// import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import * as yup from 'yup'
// import { COUNTRIES } from './exports';
import { addContact, editContact, getContacts } from './requests'
import { connect } from 'react-redux'
import { setContacts } from './actionCreator'

const schema = yup.object({
    name: yup.string().required('請填寫中文姓名'),
    ename: yup.string().required('請填寫英文姓名'),
    phone: yup.string().required('請填寫電話'),
    email: yup.string().required('請填寫電子信箱'),
    sex: yup.string().required('請填寫姓別'),
    city: yup.string().required('請填寫居住城市'),
    township: yup.string().required('請填寫鄉鎮市區'),
    postcode: yup.string().required('請填寫郵遞區號'),
    address: yup.string().required('請填寫詳細地址'),
})

function ContactForm({
    edit,
    onSave,
    setContacts,
    contact,
    onCancelAdd,
    onCancelEdit,
}) {
    const handleSubmit = async (evt) => {
        const isValid = await schema.validate(evt)
        if (!isValid) {
            return
        }
        if (!edit) {
            await addContact(evt)
        } else {
            await editContact(evt)
        }
        const response = await getContacts()
        console.log(response)
        setContacts(response.data.data)
        onSave()
    }
    return (
        <div className="form">
            <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={contact || {}}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    isInvalid,
                    errors,
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="name">
                                <Form.Label>姓名</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="中文姓名"
                                    value={values.name || ''}
                                    onChange={handleChange}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="ename">
                                <Form.Label>英文姓名</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ename"
                                    placeholder="英文姓名"
                                    value={values.ename || ''}
                                    onChange={handleChange}
                                    isInvalid={!!errors.ename}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.ename}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="phone">
                                <Form.Label>電話</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    placeholder="電話"
                                    value={values.phone || ''}
                                    onChange={handleChange}
                                    isInvalid={!!errors.phone}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="email">
                                <Form.Label>電子信箱</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="name@example.com"
                                    name="email"
                                    value={values.email || ''}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="sex">
                                <Form.Label>性別</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="sex"
                                    placeholder="性別"
                                    value={values.sex || ''}
                                    onChange={handleChange}
                                    isInvalid={!!errors.sex}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.sex}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="city">
                                <Form.Label>居住城市</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    placeholder="居住城市"
                                    value={values.city || ''}
                                    onChange={handleChange}
                                    isInvalid={!!errors.city}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.city}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="township">
                                <Form.Label>鄉鎮市區</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="township"
                                    placeholder="鄉鎮市區"
                                    value={values.township || ''}
                                    onChange={handleChange}
                                    isInvalid={!!errors.township}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.township}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="postCode">
                                <Form.Label>郵遞區號</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="postcode"
                                    placeholder="郵遞區號"
                                    value={values.postcode || ''}
                                    onChange={handleChange}
                                    isInvalid={!!errors.postcode}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.postcode}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="address">
                                <Form.Label>詳細地址</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    placeholder="詳細地址"
                                    value={values.address || ''}
                                    onChange={handleChange}
                                    isInvalid={!!errors.address}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.address}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="notes">
                                <Form.Label>備註</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="notes"
                                    placeholder="備註"
                                    value={values.notes || ''}
                                    onChange={handleChange}
                                    isInvalid={!!errors.notes}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Button type="submit" style={{ marginRight: '10px' }}>
                            儲存
                        </Button>
                        <Button
                            type="button"
                            onClick={edit ? onCancelEdit : onCancelAdd}
                        >
                            取消
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
    }
}
const mapDispatchToProps = (dispatch) => ({
    setContacts: (contacts) => dispatch(setContacts(contacts)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
