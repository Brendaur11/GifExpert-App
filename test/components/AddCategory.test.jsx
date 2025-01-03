import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en AddCategory', () => {
    test('debe de cambiar el valor en la caja de texto', () => {

        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input,{target: {value: 'Messi'}});
        
        expect(input.value).toBe('Messi');
        // screen.debug();
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Messi';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        // screen.debug();
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled(); //espera que la categoría sea llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1); //espera que la categoría sea llamada solo una vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); //evalua con el valor de la caja de texto (input)        
    });


    test('no debe de llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn(); // Simula la función

        render(<AddCategory onNewCategory={onNewCategory}/>); // Renderiza el componente

        const form = screen.getByRole('form') // Obtiene el formulario

        fireEvent.submit(form); // Simula el envío sin escribir texto

        expect(onNewCategory).not.toHaveBeenCalled(); // Verifica que no se llame
    });

});