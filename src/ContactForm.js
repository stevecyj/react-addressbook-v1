import React from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { COUNTRIES } from './exports';
import { addContact, editContact, getContacts } from './requests';

function ContactForm({ edit, onSave, setContacts, contact, onCancelAdd, onCancelEdit }) {
    const handleSubmit = async evt => {
        if (!edit) {
            await addContact(evt);
        } else {
            await editContact(evt);
        }
        const response = await getContacts();
        setContacts(response.data);
        onSave();
    };
    return (
        <div className="form">
            <Formik onSubmit={handleSubmit} initialValues={contact || {}}>
                {({ handleSubmit, handleChange, handleBlur, values, touched, isInvalid, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="firstName">
                                <Form.Label>姓名</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={values.firstName || ''}
                                    onChange={handleChange}
                                    isInvalid={touched.firstName && errors.firstName}
                                />
                                <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="lastName">
                                <Form.Label>英文姓名</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={values.lastName || ''}
                                    onChange={handleChange}
                                    isInvalid={touched.firstName && errors.lastName}
                                />
                                <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>電話</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>電子信箱</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>性別</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>居住城市</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>鄉鎮市區</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>郵遞區號</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>詳細地址</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>備註</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="12" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Address"
                                        aria-describedby="inputGroupPrepend"
                                        name="address"
                                        value={values.address || ''}
                                        onChange={handleChange}
                                        isInvalid={touched.address && errors.address}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="12" controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    value={values.city || ''}
                                    onChange={handleChange}
                                    isInvalid={touched.city && errors.city}
                                />
                                <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="region">
                                <Form.Label>Region</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Region"
                                    name="region"
                                    value={values.region || ''}
                                    onChange={handleChange}
                                    isInvalid={touched.region && errors.region}
                                />
                                <Form.Control.Feedback type="invalid">{errors.region}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="country">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    as="select"
                                    placeholder="Country"
                                    name="country"
                                    onChange={handleChange}
                                    value={values.country || ''}
                                    isInvalid={touched.region && errors.country}
                                >
                                    {COUNTRIES.map(c => (
                                        <option key={c} value={c}>
                                            {c}
                                        </option>
                                    ))}
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">{errors.country}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="postalCode">
                                <Form.Label>Postal Code</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Postal Code"
                                    name="postalCode"
                                    value={values.postalCode || ''}
                                    onChange={handleChange}
                                    isInvalid={touched.postalCode && errors.postalCode}
                                />
                                <Form.Control.Feedback type="invalid">{errors.postalCode}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Phone"
                                    name="phone"
                                    value={values.phone || ''}
                                    onChange={handleChange}
                                    isInvalid={touched.phone && errors.phone}
                                />
                                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    value={values.email || ''}
                                    onChange={handleChange}
                                    isInvalid={touched.email && errors.email}
                                />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Age"
                                    name="age"
                                    value={values.age || ''}
                                    onChange={handleChange}
                                    isInvalid={touched.age && errors.age}
                                />
                                <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit" style={{ marginRight: '10px' }}>
                            Save
                        </Button>
                        <Button type="button" onClick={edit ? onCancelEdit : onCancelAdd}>
                            Cancel
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ContactForm;
