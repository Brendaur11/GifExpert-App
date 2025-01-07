import { useState } from 'react';
import { render, renderHook } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en GifExpertApp', () => {
    
    const categories = ['The Simpsons'];

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<GifExpertApp categories={categories}/>);

        expect(container).toMatchSnapshot();
    })


    test('debe de retornar a su estado inicial', () => {

        const {result} = renderHook( () => useState([]) );
        const [categories] = result.current;

        expect(categories.length).toBe(0);
    });
});


