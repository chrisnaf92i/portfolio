'use client';
import { Button, Form, Label, TextInput } from '@/components/shared/Form';
import { SecondaryTitle } from '@/components/shared/Text';
import Colors from '@/utils/colors';
import { error } from 'console';
import { Columns } from 'lucide-react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit((data) => {
        fetch('/api/contact', {
            body: JSON.stringify(data),
            method: 'POST',
        })
            .then(() => alert('Message envoyé'))
            .catch((error) => console.error(error));
    });

    return (
        <main>
            <FormContainer>
                <legend>
                    <SecondaryTitle> Me contacter </SecondaryTitle>
                </legend>

                <Form onSubmit={onSubmit}>
                    <Label style={{ gridColumn: 'span 6' }}>
                        Prénom
                        <TextInput {...register('firstName')} type="text" />
                    </Label>
                    <Label style={{ gridColumn: 'span 6' }}>
                        Nom
                        <TextInput {...register('lastName')} type="text" />
                    </Label>
                    <Label style={{ gridColumn: 'span 8' }}>
                        Email
                        <TextInput {...register('email')} type="email" />
                    </Label>
                    <Label style={{ gridColumn: 'span 4' }}>
                        Phone
                        <TextInput {...register('phone')} type="tel" />
                    </Label>
                    <Label style={{ gridColumn: 'span 12' }}>
                        Messages
                        <TextArea {...register(`message`)} />
                    </Label>
                    <Button
                        isCta
                        type="submit"
                        style={{ gridColumn: 'span 9' }}
                    >
                        Envoyé le messages
                    </Button>
                </Form>
            </FormContainer>
        </main>
    );
}

const FormContainer = styled.fieldset`
    width: 100%;
    margin: 16px auto;

    box-sizing: border-box;
    @media (min-width: 635px) {
        width: 60%;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 8px;
    margin: 8px;
    border: 2px solid ${Colors.main};
    resize: none;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 0;
    height: 200px;
`;
